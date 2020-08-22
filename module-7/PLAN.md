1. Объектная модель документа
- JavaScript: BOM, DOM, EcmaScript
- BOM (Browser Object Model) - множество готовых объектов, с помощью которых разработчик может взаимодествовать с браузером и элементами веб-страницы
Объекты: 
  - navigator
  - history
  - screen
  - document
  - location

ПРИМЕЧАНИЕ 1: при работе с текущим окно, "window." можно пропустить и обращаться к объектам BOM напрямую
ПРИМЕЧАНИЕ 2: Объектная модель браузера не стандартизована в спецификации, и поэтому её реализация может отличаться в разных браузерах.

- DOM (Document Object Model) - это древовидная объектная модель документа, которую браузер создаёт в памяти компьютера на основании HTML-кода, полученного им от сервера
- Межплатформенный
- 2 Роли DOM:
  - объектное представление HTML документа
  - интерфейс, соединяющий страницу с языком программирования
- Изменения производятся через DOM API
- Типы узлов
  - теги - элемент-узел (element node)
  - текст - текстовый элемент (text node)
- из HTML в DOM через HTML Parser
- Live DOM-viewer: https://software.hixie.ch/utilities/js/live-dom-viewer/

ИСКЛЮЧЕНИЯ:
- пробелы до head игнорируются
- любое содержимое после body не создаёт узла, браузер переносит его в конец body.

2. Навигация по DOM
- ссылка на объект
- Иерархическое отношение:
  - ancestor (предок)
  - descendant (потомок)
  - parent (родитель)
  - child (ребенок)
  - sibling (сосед)
  - root (корень)

- Свойства:
 - parentNode - родительский элемент
 - children/childNodes - псевдомассив с дочерними элементами внутри элемента
 - firstChild/firstElementChild - первый дочерний узел внутри элемента
 - lastChild/lastElementChild - последний дочерний узел внутри элемента
 - previousSibling/previousSiblingElement - "левый" сосед
 - nextSibling/nextSiblingElement - "правый" сосед

- Методы поиска элементов по CSS-селектору в DOM
 - querySelector - поиск элемента. вернет elem / null
 - querySelectorAll - поиск всех элемент подходящих под селектор. вернет [elems] / [] 

3. DOM-свойства и аттрибуты
- Свойства.
  - hidden, checked, value, name, src, etc.
  - textContent - текстовое содержимое элемента. при записе - всегда текст
  - HTMLElement.style 
    - возвращает CSSStyleDeclaration
    - camelCase
  - Element.classList
    - contains
    - add
    - remove
    - toggle
    - replace

- Аттрибуты.
  Методы: 
  - hasAttribute
  - getAttribute
  - setAttribute
  - removeAttribute
  - attributes

  Дата-атрибуты:
  - В CSS
  - через dataset

4. Создание и удаление узлов

 - Cоздание через createElement
  - При создании Элемент создается в памяти , но в DOM его еще нет

 - Добавление
  - appendChild(elem) - добавить в конец
  - insertBefore(elem, nextSibling) - добавить перед
    - если nextSibling - null, сработает , как appendChild
    - один элемент не может быть в двух местах
  - append - добавить в начало
  - prepend - добавить в конец
  - before/after - вставить до/после элемента
  - replaceWith - заменить элемент

- Удаление
 - parent.removeChild(elem)
 - elem.remove() - РЕКОМЕНДУЕТСЯ

- Клонирование
  - elem.cloneNode(true/false) - true/false (глубокое/поверхностное копирование)

- innerHTML vs createElement

- insertAdjacentHTML(position, html)
  'beforebegin'
  'afterbegin'
  'beforeend'
  'afterend'

- insertAdjacentElement, insertAdjacentText

Оптимизация работы с DOM
- Repaint (visibility, outline, opacity, background-color) - проверяет видимость узлов
- Reflow (padding, width, height, position) - более дорогая операция , чем Repaint
- Страница не может ничего выполнять , если выполняется reflow/repaint

5. События
 - события - сигналы браузера, что что-то произошло, обрабатываются независимо, асинхронно
 - комплексные события: keyup, click
 - событийно-ориентированные программирование
 - события формы: submit, focus
 - повесить событие можно 3 способами
  - через html
  - свойство объекта - только 1 событие
    - не использовать setAttribute для назначения обработчиков (аттрибуты - строки)
  - addEventListener/removeEventListener
    - удалять можно только, если колбек не анонимная функция
    - event, handler, options (once, capture, passive)
 - this в обработчике ссылается на элемент, на котором 'висит' событие
 - Объект события:
  - type
  - target
  - currentTarget
 - event.preventDefault()
 - события клавиатуры: keydown, keyup, keypress
 - KeyboardEvent.key/.code
 - focus/blur
  - document.activeElement
 - Событие change 
   - input:text / textarea - после потери фокуса
 - Для обработки input/textarea - используем событие input
 - события документа: DOMContentLoaded, load, beforeunload, unload
  - script tag - выполняется до того, как строиться DOM (кроме async, defer)
 
6. Процесс построения веб-страницы
- Если встречает script - выполняет
- Если script грузится - DOM построение блокируется
- Сначала CSS -> CSSOM -> JS -> HTML
- CSS блокирует рендеринг
-  Flash of Unstyled Content (FOUC)
- async - асинхронная загрузка скриптов, может начать выполнение до построения DOM, после загрузки и перед событием load
- defer - не блокирует построение DOM, после DOMContentLoaded
