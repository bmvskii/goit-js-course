document.addEventListener('DOMContentLoaded', () => {
    // const liElements = document.querySelectorAll('li:nth-child(2n)');    
    // const tel = document.querySelector('.form__input[name="tel"]');

    // console.log(tel);
    // console.log(liElements);

    // option с аттрибутом selected
    // const elem1 = document.querySelector('#select > [selected]');
    
    // input с аттрибутом checked
    // const elem2 = document.querySelector('.form__input--checkbox[checked]');

    // input с id 'tel_input'
    // const elem3 = document.querySelector('#tel_input'); 

    // выбрать все options, исключая selected
    // const elems = document.querySelectorAll('.select__option:not([selected])');

    // console.log(elem1);

    // console.log(elem2);
    // console.log(elem3);
    // console.log(elems);

    // const parent = elem1.parentElement;

    // console.log("PARENT:", parent);

    // console.log("NEXT ELEM SIBLING:", elem1.nextElementSibling);
    // console.log("PREV ELEM SIBLING:", elem1.previousElementSibling);

    // console.log("NEXT SIBLING:", elem1.nextSibling);
    // console.log("PREV SIBLING:", elem1.previousSibling);

    // console.log("PARENT ELEMENT CHILDREN:", parent.children);
    // console.log("PARENT CHILDREN:", parent.childNodes);

    // console.log()

    const image = document.querySelector('img');
    
    image.src = 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1489&q=80';
    image.alt = 'Ноутбук';

    image.height = 200;
    image.width = 500;

    const headingRef = document.querySelector('h1');
    headingRef.textContent = '<span> <bold>Text 1 </bold></span>';
    
    // 'background-color'
    // headingRef.style.color = 'red';

    // headingRef.classList.add('title--styled');
    // headingRef.classList.remove('title--styled');    
    
    // console.log(headingRef.classList.contains('title--styled'));

    // if (headingRef.classList.contains('hidden')) {
    //     headingRef.classList.remove('hidden');
    //     headingRef.classList.add('visible');
    // } else {
    //     headingRef.classList.remove('visible');
    //     headingRef.classList.add('hidden');
    // }
    // headingRef.classList.toggle('title--styled');
    // headingRef.classList.toggle('title--styled');
    // headingRef.classList.replace('title--styled', 'some-class');

    // const elem = document.querySelector('input');  
    // elem.value = '123123123';

    // elem.setAttribute('type', 'checkbox');
    // elem.setAttribute('checked', true);

    // elem.removeAttribute('checked');

    // console.log(elem.getAttribute('type'));
    // elem.className = ' some-new class';
    // console.log(elem.className);
});

