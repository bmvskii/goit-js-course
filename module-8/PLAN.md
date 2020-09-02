1. Event propagation
    - Распространение событий (event propagation)
        - стартует с window
        - 3 фазы:
            - capture phase (погружение)
            - target phase
            - bubbling phase (высплытие)
    - Event bubbling (всплытие)
        - почти все всплывают, события focus/blue не всплывают        
        - event.stopPropagation
        - event.stopImmediatePropagation
        - ЛУЧШЕ СТАРАТЬСЯ ОБХОДИТЬСЯ БЕЗ stop(Immediate)Propagation и  
    - Event delegation
        - Упрощает инициализацию и экономит память
        - Меньше кода
        - Гибкость к изменениям

2. Throttle / debounce 
    - chatty events
    - throttle - 1 раз в N ms
    - debounce - вызов -> delay в N ms -> вызов

3. IntersectionObserver Api
    - 