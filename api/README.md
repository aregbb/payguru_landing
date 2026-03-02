# API

## Как запустить

1. `cd api`
2. `composer install`
3. Создать `.env` на основе `.env.example`

## Как настроить SMTP

Файл `api/.env`:

```bash
MAIL_HOST=smtp.gmail.com
MAIL_PORT=587
MAIL_USERNAME=no-reply@pay-guru.io
MAIL_PASSWORD=APP_PASSWORD
MAIL_ENCRYPTION=tls
MAIL_FROM_ADDRESS=no-reply@pay-guru.io
MAIL_FROM_NAME=PayGuru
MAIL_TO=hello@pay-guru.io
```

Поддерживается любой SMTP-сервер. Для Gmail обычно используются:

```bash
MAIL_HOST=smtp.gmail.com
MAIL_PORT=587
MAIL_ENCRYPTION=tls
```

Для Gmail `MAIL_PASSWORD` должен быть Google App Password.

Если на сервере заданы системные переменные окружения, они тоже будут прочитаны. Если рядом с `send.php` есть файл `.env`, он также загружается.

## Пример проверки

```bash
curl -X POST https://site.com/api/send.php \
  -d "name=Test" \
  -d "contact=test@mail.com" \
  -d "comment=Hello"
```
