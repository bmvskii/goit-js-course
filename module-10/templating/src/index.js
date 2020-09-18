import CardTemplate from './templates/card.hbs';

const cardsWrapper = document.querySelector('.cards-wrapper');
const cardContent = [
    { 
        url: 'https://picsum.photos/900/800',
        hasMoney: false,
        title: 'Title 1', text: 'Some text', 
        person: [
        "Alan", "Delon", "123", "456"
        ]},
    { 
        // url: 'https://picsum.photos/800/700',
        hasMoney: true,
     title: 'Title 2', text: 'Some text', person: [
        "Alan", "Delon", "123"
    ]},
    { 
        // url: 'https://picsum.photos/500/500',
        hasMoney: false,
     title: 'Title 3', text: 'Some text', person: [
        "Alan", "Delon", "123"
    ]},
    { 
        // url: 'https://picsum.photos/400/400',
        hasMoney: true,
        title: 'Title 4', text: 'Some text', person: [
        "Alan", "Delon", "123"
    ]},
    { 
        // url: 'https://picsum.photos/700/700',
        hasMoney: false,
     title: 'Title 5', text: 'Some text', person: [
        "Alan", "Delon", "123"
    ]}
];

for (const content of cardContent) {
    const html = CardTemplate(content);
    console.log("TEMPLATE:", html);

    cardsWrapper.innerHTML += html;
}
