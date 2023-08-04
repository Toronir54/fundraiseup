# Тестовое задание

Для запуска тестов потребуется:

1. node версии 16 или выше
2. Перейти в папку с тестами cd ..\test
3. Выполнить команду npm ci
4. Настроить окружение в файле codceptjs.conf.js (опционально)
5. Запуск тестов командами:
  - npx codeceptjs run --reporter mochawesome (все тесты с отчетом).
  - npx codeceptjs run --grep "@test_1" --steps (запуск теста по тэгу с отображение шагов в терминале).
  - npx codeceptjs run-workers --suites 2 (запуск всех тестов в 2 параллели)

Отчет падает в папку /output
