1. Асинхронный JavaScript
    - отличия от асинхронного кода
    - синхронный код vs async singlethread vs async multithread
    - setTimeout, setInterval
        - 1 param - callback
        - 2 param - delay
        - 3..N param - extra args
        - возвращает ID timeout-а
        - clear function
        - this в таймерах

    - Реальная частота срабатывания
    - Задержка от 1 мс до 4мс (старые браузеры до 15мс)

2. Класс Date
    - new Date
    - Datestring -> Date.parse()
    - 7 args (year, month, date, hours, minutes, seconds, ms) - first 3 required
    - Unix время
    - Число в конструктор - переведет в разницу от начала эпохи
    - Date.now() - timestamp diff from Unix epoch start to nowadays
    - Date methods
    - Date.tolocaleString(locale, opts) - локализация

3. Promise API
    - Promise.all, race, allSettled
    - then, catch, finally
    - then or throw
    - resolve(arg) vs resolve([arg1, arg2])

4. Event Loop (цикл событий)
    - https://habr.com/ru/post/461401/

Practice plan:

- revision

- API
- fetch API
- client-server architecture

- star wars app