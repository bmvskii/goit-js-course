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
5. События
6. Процесс построения веб-страницы