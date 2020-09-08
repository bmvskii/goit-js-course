import CardTemplate from './templates/card.hbs';

const cardsWrapper = document.querySelector('.cards-wrapper');
const cardContent = [
    { 
        // url: 'https://picsum.photos/900/800',
        hasMoney: false,
     title: 'Title 1', paragraph: 'Some text', 
    person: [
        "Alan", "Delon", "123", "456"
    ]},
    { 
        // url: 'https://picsum.photos/800/700',
        hasMoney: true,
     title: 'Title 2', paragraph: 'Some text', person: [
        "Alan", "Delon", "123"
    ]},
    { 
        // url: 'https://picsum.photos/500/500',
        hasMoney: false,
     title: 'Title 3', paragraph: 'Some text', person: [
        "Alan", "Delon", "123"
    ]},
    { 
        // url: 'https://picsum.photos/400/400',
        hasMoney: true,
     title: 'Title 4', paragraph: 'Some text', person: [
        "Alan", "Delon", "123"
    ]},
    { 
        // url: 'https://picsum.photos/700/700',
        hasMoney: false,
     title: 'Title 5', paragraph: 'Some text', person: [
        "Alan", "Delon", "123"
    ]}
];

for (const content of cardContent) {
    const html = CardTemplate(content)
    cardsWrapper.innerHTML += html;
}
