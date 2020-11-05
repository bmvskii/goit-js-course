- CRUD

Create - POST
Read - GET
Update - PUT/PATCH
Delete - DELETE

- Понятие авторизации/регистрации/аутентификации/валидация/идентификация

- Авторизация с помощью токенов

HTTP Авторизация

1. Authorization: Basic uasADFZFvxdf123asDAFAfxvxcz

2. https://api.com/someurl?api_key=ВАШ_КЛЮЧ
   Header:
        X-Api-Key: ВАШ_КЛЮЧ

3. JWT-token
    Authorization: Bearer uasADFZFvxdf123asDAFAfxvxcz.uasADFZFvxdf123asDAFAfxvxcz.uasADFZFvxdf123asDAFAfxvxcz

    Basic
    Api Key
    Token
    OAuth 2.0

- JWT токены
- Библиотека axios
- Async-await
- Postman

// TODO

<!-- Async-await case -->

- Интернет-магазин
    - JS:
        - Добавить pnotify
        - Добавить обработку входа в систему
        - Выход из системы
        - Обработка токенов
        - Добавить loader для запросов
        - Изменение статус бара

    - Верстка:
        - Добавить отображение роли (Admin/User)
        - Сделать верстку категории
        - Сделать верстку карточки с товаром
        - Подумать за переключение между ними и рендерингом
        - Подклюlчить pnotify
        - Подключить loader
        <!-- - Для админа добавление/удаление/редактирование карточки/категорий -->

    - Backend:
        - Авторизация:
            - Регистрация
            - Авторизация
            - Выход

        - Добавить Auth Guards везде

        - Категории:
            - Получение всех категорий
            - Добавление новых категорий
            - Удаление категории

        - Продукты:    
            - Добавление продуктов в корзину
            - Удаление продуктов из корзины
            - Покупка продуктов