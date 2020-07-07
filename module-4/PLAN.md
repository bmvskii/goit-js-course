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

4. Closures (Замыкания)

5. Context (this)
- в глобальной области видимости
- в методе объекта
- в функциях обратного вызова (callbacks)
- в стрелочных функциях
- call, bind, apply