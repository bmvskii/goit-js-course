1. Callbacks
- HOF, callback description
- абстрагирование - сокрытие деталей реализации
- колбеки - стрелочные функции при передаче
- filtration example

2. Call stack and execution context (стек-вызовов и контекст исполнения)
 - JS - однопоточный (1 единица времени = 1 операция)
 - Stack (LIFO - Last In First Out) 
 - execution context -  внутренняя конструкция языка для отслеживания выполнения функции, содержит метаинформацию о ее вызове.
 - global/function execution context (GEC/FEC)
 - GEC - только 1
 - 2 фазы движка для работы с execution context - создание/исполнение
 - фаза создания - 1. Activation/variable object 2. Scope chain creation 3. this determination
 - execution context stack (call stack)
 - stack frame - кадр/запись стека (метаинформации: название функции, аргументы и номер строки)
 - Maximum call stack size exceeded

3. Lexical environment (лексическое окружение)
 - Environment record - внутренняя, закрытая от прямого доступа структура движка для хранения в памяти таблицы
 - [[Environment]] - internal property/slot
 - Создается новое lexical env в функциях, блочных конструкциях и try..catch конструкциях
 - module/global/functional environment
 - динамическая и статическая область видимости

4. Closures (Замыкания)
- the function defined in the closure ‘remembers’ the environment in which it was created.
- связь между функцией и ее цепочкой областей видимости
- thanks lexical environment for that 
- классический пример с счетчиком
- пример с secret password
- область видимости - лексическая (статическая)

- Состояние вычисления (code evaluation state)
- Функция (function)
- Область (realm)
- Лексическое окружение
- Таблица переменных (variable environment)

Доп. чтиво:
https://medium.com/@sshambir/%D0%BE%D1%81%D0%B2%D0%B0%D0%B8%D0%B2%D0%B0%D0%B5%D0%BC-%D0%B7%D0%B0%D0%BC%D1%8B%D0%BA%D0%B0%D0%BD%D0%B8%D1%8F-%D0%B2-javascript-5b83267ef7d1


5. Context (this)
- понятие контекст
- значение опеределяется во время вызова функции, а не создания
- в глобальной области видимости - strict = undefined, non-strict = window
- в методе объекта - объект
- в функциях обратного вызова (callbacks) - window
- в стрелочных функциях - лучшая оптимизация за счет ограничения , привязка к контексту при создании, 
- стрелки не могут быть перебиндены, первым аргументом должен идти null
- call, bind, apply

доп. инфо:
- при вызове new
- в цепочке прототипов
- в инлайновом обработчике событий
- в обработке событий - this первый элемент , на который нажали

https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/this
https://www.freecodecamp.org/news/a-guide-to-this-in-javascript-e3b9daef4df1/
https://flaviocopes.com/javascript-this/