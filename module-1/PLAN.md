1. Введение
- Java !== JavaScript
- Компилятор/интерпритатор/исходный код
- React-native/ionic/Johnny-Five/Espruino/Node.js/Vue/Angular/React
- Ресурсы для изучения: 
https://learn.javascript.ru/ 
https://www.freecodecamp.org/

2. Подключение скрипта
 - Перед закрытием body
 - Порядок важен
 
3. Chrome DevTools
 - Network
 - Console
 
4. Синтаксис
 - Комментарии ctrl + shift + / или сtrl + /
 - Инстукция(statement)
 - Конец инстукции ; (не обязательно, но рекомендуется)
 - Имя переменной - индентификатор
 - Значение перменной - literal value
 - / = +  операторы
 - Выражение
 - Интерфейс (кофе машинка, автомат с игрушками)
 - Свойство (рост, вес, цвет глаз)
 - Метод (вызов действия: сесть, встать, лечь)
 - use strict (строгий режим. рекомендуется)
 
5. Переменные 
 - 1 символ: A-Z, a-z, _ или $
 - Другие символы: добавляются цифры
 - Чувствительность к регистру
 - Cases: camelCase, kebab-case, snake_case, PascalCase
 - Нейминг
 - Ключевые слова
 
6. Объявление переменных
 - var, const, let
 - ошибка при объявлении без ключевых слов
 - использовать const по умолчанию
 - constants: UPPER_SNAKE_CASE
 - undeclared и undefined
 - Объявление через запятую
 
7. Примитивы
 - Number (целые/c плавающей точкой), String, Boolean (вопрос), null, undefined, Symbol
 - typeof

8. Взаимодействие с пользователем.
- немного про window
- Вывод данных: console.log/alert
- Получение: prompt/confirm
- Prompt возвращает всегда string

9. Математические операторы
- (* / + - % ** )
- короткая запись
- больше/меньше/равно/строгий вариант (при нестрогом неравенстве - приведение типов)

10. Числа
 - Number()
 - NaN
 - Number.parseInt/parseFloat
 - Number.isNaN
 - 0.1 + 0.2 !== 0.3
 - Math.ceil/floor/round/min/max/pow/random
 
11. Строки
- Индексированный набор символов
- Обращение через []
- Начало с 0
- Значение строки нельзя заменить
- Конкатенация строк (последовательсть)
- length/toLowerCase/toUpperCase/indexOf/includes
- Шаблонные строки и интерполяция 

12. Булева (двоичная) логика
 - Последовательность выполнения (сверху вниз)
 - Ветвления
 - Truthy and Falsy values (null, undefined, NaN, '', 0, false)
 - || && !
 - Порядок вычисления операндов

13. Ветвления
 - if
 - if..else
 - if..else if
 - тернарный оператор
 - switch