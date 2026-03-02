# API

## Как запустить

1. `cd api`
2. `composer install`

## Как настроить SMTP

На сервере задайте переменные окружения:

```bash
SMTP_USER=no-reply@pay-guru.io
SMTP_PASS=APP_PASSWORD
MAIL_TO=hello@pay-guru.io
MAIL_FROM=PayGuru
```

`SMTP_PASS` должен быть Google App Password для Gmail-аккаунта, который используется для SMTP-отправки.

## Пример проверки

```bash
curl -X POST https://site.com/api/send.php \
  -d "name=Test" \
  -d "email=test@mail.com" \
  -d "message=Hello"
```
