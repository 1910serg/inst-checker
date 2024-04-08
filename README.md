# inst-checker

# Архитектура

## Слой
\__ src/
    |__ app/        # Иниц. логика приложения (энтрипоинт прим: "провайдер, роутеры, глобальные стили, конфигурация, роутеры")
    |__ processes/  # (Опц.) Прцоессы приложения, протекающие через несколько страниц (прим: "многоэтапная регистрация")
    |__ pages/      # Страницы приложения
    |__ blocks/     # Самостоятельные и полноценные блоки для страниц
    |__ features/   # (Опц.) Обрабатываемые польз. сценарии (прим: "подписка на пользователя, лайк, дизлайк, шейр, смена языка...")
    |__ entities/   # (Опц.) Бизнес-сущности, которыми оперирует предметная область (прим: "товар, заказ, корзина, комментарий...")
    |__ shared/     # Переиспользуемые модули, без привязки к бизнес-логике (максимально переиспользуемые модули)

## Сегменты
1) UI - наши компоненты
2) model - бизнес логика (взаимодействие со стейтом, селекторы, экшены и тд. ...)
3) lib - это все хелперы (какие-то вспомогательные функции, которые могут использоваться внутри модуля, прим: "хуки, getFullName...")
4) config - конфигурация для модуля (используется редко)
5) api - запросы для серверс
6) consts - константы
7) styles - стили и картинки

<!-- Внедрить реакт-роутер -->
<!-- Внедрить тс -->
<!-- Внедрить обновлённый реакт -->
<!-- Внедрить редакс тулкит -->