1. Плагины и библиотеки
    - Библиотека
    - Фреймворк
    - Инструмент

2. Шаблонизация
    - Шаблонизация (templating) — метод связывания данных и разметки
    - Шаблон
        - Handlebars
        - Pug
        - Twig
    - Методы хранения
    - Expressions, Block-Helpers, Partials, Built-in helpers
    - {{#if boolean}} {{else}} {{/if}} 
    - object.prop === object/prop
    - #each, @index, this
    - helpers
    - partials

    Partial templates
    Custom block helper

3. JSON (JavaScript Object Notation)
    - Введение
    - Поддерживает такие типы данных: 
        string, number, object, array, boolean, null
    - Все ключи должны быть в " " 
    
    - JSON.parse
    - JSON.strignify

4. Хранение информации на клиенте
    - Основная проблема: сброс состояния приложения
    - Хранение инфы на стороне пользователя или в браузере
    
    Cookies: 
     - как работает
     - вид: ключ=значение;
     - cookie law (GDPR)
     - сторонние куки
     - ограничения:
        - добавляются к каждому запросу на сервер
        - хранение до 4кб 
        - используются для отслеживания поведения людей -> отключаются
        - сложно отслеживать поведения в разных вкладках

    WebStorage API
        
        1. localStorage/sessionStorage
            - Хранение только строк
            - В localStorage/sessionStorage не хранят методы объектов или функции, только данные.

        - Преимущества локального хранилища
            1. Предлагает более простой и интуитивный интерфейс хранения данных.
            2. Более безопасно для хранения данных на клиенте.
            3. Позволяет хранить больше данных (все 3 пункта — в сравнении с куки).

        - Недостатки локального хранилища
            1. Позволяет хранить только строки

        2. IndexedDB
            - Предназначена для работы Offline, для работы с Service Workers
            - Поддерживает transactions
            - Поддерживает индексы