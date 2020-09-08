document.addEventListener("DOMContentLoaded", () => {
    const source = document.getElementById('card-template').innerHTML.trim();
    const wrapper = document.querySelector('.cards-wrapper');
    
    const template = Handlebars.compile(source);

    const cardContent = [
        { url: 'https://picsum.photos/900/800', title: 'Title 1', paragraph: 'Some text'},
        { url: 'https://picsum.photos/800/700', title: 'Title 2', paragraph: 'Some text'},
        { url: 'https://picsum.photos/500/500', title: 'Title 3', paragraph: 'Some text'},
        { url: 'https://picsum.photos/400/400', title: 'Title 4', paragraph: 'Some text'},
        { url: 'https://picsum.photos/700/700', title: 'Title 5', paragraph: 'Some text'}
    ];

    for (const content of cardContent) {
        const html = template(content);
        wrapper.innerHTML += html;
    }
});