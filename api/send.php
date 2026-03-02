<?php

declare(strict_types=1);

use PHPMailer\PHPMailer\Exception;
use PHPMailer\PHPMailer\PHPMailer;
use Dotenv\Dotenv;

require __DIR__ . '/vendor/autoload.php';

if (is_file(__DIR__ . '/.env')) {
    Dotenv::createImmutable(__DIR__)->safeLoad();
}

header('Content-Type: application/json; charset=utf-8');

const MAX_REQUEST_SIZE = 10240;

function respond(int $statusCode, array $payload): void
{
    http_response_code($statusCode);
    echo json_encode($payload, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
    exit;
}

function get_server_value(string $key): string
{
    $value = $_SERVER[$key] ?? '';

    return is_string($value) ? $value : '';
}

function env_value(string $key, string $default = ''): string
{
    $value = $_ENV[$key] ?? $_SERVER[$key] ?? getenv($key);

    if ($value === false || $value === null) {
        return $default;
    }

    return is_string($value) ? $value : $default;
}

function get_length(string $value): int
{
    return function_exists('mb_strlen') ? mb_strlen($value) : strlen($value);
}

if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') {
    respond(405, ['ok' => false]);
}

$contentLength = (int) ($_SERVER['CONTENT_LENGTH'] ?? 0);
if ($contentLength > MAX_REQUEST_SIZE) {
    respond(413, ['ok' => false]);
}

$rawBody = file_get_contents('php://input');
if ($rawBody === false) {
    $rawBody = '';
}

if ($rawBody !== '' && strlen($rawBody) > MAX_REQUEST_SIZE) {
    respond(413, ['ok' => false]);
}

$contentType = strtolower(trim(explode(';', $_SERVER['CONTENT_TYPE'] ?? '')[0]));
$data = [];

if ($contentType === 'application/json') {
    $decoded = json_decode($rawBody, true);
    if (!is_array($decoded)) {
        respond(400, ['ok' => false]);
    }

    $data = $decoded;
} else {
    $data = $_POST;

    if (!is_array($data) || $data === []) {
        parse_str($rawBody, $parsedBody);
        if (is_array($parsedBody)) {
            $data = $parsedBody;
        }
    }
}

$name = trim((string) ($data['name'] ?? ''));
$contact = trim((string) ($data['contact'] ?? ($data['email'] ?? '')));
$message = trim((string) ($data['comment'] ?? ($data['message'] ?? '')));
$company = trim((string) ($data['website'] ?? ($data['company'] ?? '')));

if ($company !== '') {
    respond(200, ['ok' => true]);
}

if (get_length($name) < 2 || get_length($name) > 100) {
    respond(422, ['ok' => false]);
}

if ($contact === '') {
    respond(422, ['ok' => false]);
}

if (get_length($message) < 1 || get_length($message) > 2000) {
    respond(422, ['ok' => false]);
}

$isEmailContact = (bool) filter_var($contact, FILTER_VALIDATE_EMAIL);
$isTelegramContact = (bool) preg_match('/^@[a-zA-Z0-9_]{5,32}$/', $contact);

if (!$isEmailContact && !$isTelegramContact) {
    respond(422, ['ok' => false]);
}

$mailHost = env_value('MAIL_HOST', 'smtp.gmail.com');
$mailPort = (int) env_value('MAIL_PORT', '587');
$mailUsername = env_value('MAIL_USERNAME', env_value('SMTP_USER', 'no-reply@pay-guru.io'));
$mailPassword = env_value('MAIL_PASSWORD', env_value('SMTP_PASS', ''));
$mailEncryption = strtolower(trim(env_value('MAIL_ENCRYPTION', 'tls')));
$mailFromAddress = env_value('MAIL_FROM_ADDRESS', $mailUsername);
$mailFromName = env_value('MAIL_FROM_NAME', env_value('MAIL_FROM', 'PayGuru'));
$mailTo = env_value('MAIL_TO', 'hello@pay-guru.io');

if ($mailPassword === '' || $mailUsername === '' || $mailFromAddress === '' || $mailHost === '') {
    respond(500, ['ok' => false, 'error' => 'smtp_not_configured']);
}

$ip = get_server_value('REMOTE_ADDR');
$userAgent = get_server_value('HTTP_USER_AGENT');

$body = implode("\n", [
    "Имя: {$name}",
    "Контакт: {$contact}",
    '',
    'Комментарий:',
    $message,
    '',
    "IP: {$ip}",
    "UA: {$userAgent}",
]);

try {
    $mail = new PHPMailer(true);
    $mail->isSMTP();
    $mail->Host = $mailHost;
    $mail->Port = $mailPort;
    $mail->SMTPAuth = true;
    if ($mailEncryption === 'ssl') {
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
    } elseif ($mailEncryption === 'tls' || $mailEncryption === 'starttls') {
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    } else {
        $mail->SMTPSecure = false;
        $mail->SMTPAutoTLS = false;
    }
    $mail->Username = $mailUsername;
    $mail->Password = $mailPassword;
    $mail->CharSet = 'UTF-8';

    $mail->setFrom($mailFromAddress, $mailFromName);
    $mail->addAddress($mailTo);
    if ($isEmailContact) {
        $mail->addReplyTo($contact, $name);
    }

    $mail->Subject = 'Заявка с лендинга PayGuru';
    $mail->Body = $body;

    $mail->send();
} catch (Exception $exception) {
    respond(500, ['ok' => false, 'error' => 'send_failed']);
}

respond(200, ['ok' => true]);
