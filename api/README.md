# API

## Как запустить

1. `cd api`
2. `composer install`
3. Создать `.env` на основе `.env.example`

## Как настроить SMTP

Файл `api/.env`:

```bash
SMTP_USER=no-reply@pay-guru.io
SMTP_PASS=APP_PASSWORD
MAIL_TO=hello@pay-guru.io
MAIL_FROM=PayGuru
```

`SMTP_PASS` должен быть Google App Password для Gmail-аккаунта, который используется для SMTP-отправки.

Если на сервере заданы системные переменные окружения, они тоже будут прочитаны. Если рядом с `send.php` есть файл `.env`, он также загружается.

## Пример проверки

```bash
curl -X POST https://site.com/api/send.php \
  -d "name=Test" \
  -d "contact=test@mail.com" \
  -d "comment=Hello"
```
