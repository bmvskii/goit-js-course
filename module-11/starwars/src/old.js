import './sass/styles.scss';

import axios from 'axios';
import throttle from 'lodash/throttle';

// console.log("1"); // 1

// setTimeout(() => {
//     console.log("2");
// }, 1000); // уходит на 1 секунду

// console.log("3"); // 3

// const promise = new Promise((resolve, reject) => {
//     setInterval(() => {
//         if (value === 0) {
//             resolve("Hello world!");
//         }
//         // reject("Some error");
//     }, 5000);
// });

// promise
//     .then((res) => {
//         console.log(res);
//         return res + ' Kitty';
//     })
//     .then((res) => {
//         console.log(res);
//     })
//     .catch(e => {
//         debugger;
//     })

const peopleList = document.querySelector('.people');
const loadMoreButton = document.querySelector('.load-more');

let page = 1;
let hasNoData = false;

const createPerson = ({ name, gender, height, personIndex }) => {
    const personPhotoUrl = `https://starwars-visualguide.com/assets/img/characters/${personIndex + 1}.jpg`

    return `
        <li class='person'>
            <img class="person__photo" src="${personPhotoUrl}" alt="">
            <h2 class="person__name">${name}</h2>
            <span class="person__gender">${gender}</span>
            <span class="person__height">${height}</span>
        </li>
    `;
}

const getPeople = () => {
    if (!hasNoData) {
        axios
            .get(`https://swapi.dev/api/people?page=${page}`)
            .then(res => {
                const { data: { results: people } } = res;
                people.forEach((person, index) => {
                    const { name, gender, height } = person;
                    const personIndex = (page - 1) * 10 + index;

                    peopleList.innerHTML += createPerson({ personIndex, name, gender, height });
                });

                page++;
            })
            .catch(err => {
                hasNoData = true;
            })
    }
}

const onScrollHandler = () => {
    const windowRelativeBottom = document.documentElement.getBoundingClientRect().bottom;

    if (windowRelativeBottom < document.documentElement.clientHeight + 20) {
        getPeople();
    }
}

getPeople();
window.addEventListener('scroll', throttle(onScrollHandler, 300));

// https://starwars-visualguide.com/assets/img/characters/1.jpg

// Architecture Web App

//     Frontend -> Vue, React, Angular

//     Backend -> Node, C#, Java + SQL, NoSQL, Mongo

//     Пользователь заходит на сайт -> Запрос на бэкенд -> Бэкенд генерировал страницу -> Отдавал ее

//     REST Api

//     GET /todos/:id -> JSON
//     POST /todos/:id -> JSON
//     PUT /todos/:id -> JSON
//     DELETE /todos/:id -> JSON

//     GET - получить
//     POST - добавить
//     PUT - обновить
//     DELETE - удалить


