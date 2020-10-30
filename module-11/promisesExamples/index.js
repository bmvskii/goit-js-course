// ПРИМЕР создания промиса и передачи нескольких значений/параметров
// в resolved/rejected

// const promise = new Promise((resolve, rejected) => {
//     setTimeout(() => {
//         const someRandomNumber = Math.random() * 100;
//         const title = someRandomNumber > 50 ? "Hello world" : "Planet";

        // resolve({ title, someRandomNumber });
        // rejected("Some error");
//     }, 1000);
// });

// Создадим функцию, которая будет  создавать промисы
// посмотрим , как работать с Promise.all, Promise.race, Promise.allSettled

// const createPromise = (text, ms) => {
//     return new Promise((resolved, rejected) => {
//         setTimeout(() => {
//             if (text.length < 8) {
//                 rejected(Error("Length error"));
//             } else {
//                 resolved(text);
//             }
//         }, ms);
//     });
// }; 

// const promisesData = [
//     { ms: 1000, text: "Some text" },
//     { ms: 2000, text: "Short asdasdas" },
//     { ms: 3000, text: "Some Long text" },
//     { ms: 1500, text: "text" }  
// ];

// const promises = promisesData.map(({ ms, text }) => createPromise(text, ms));

// let isLoaded = true;

// Promise.allSettled(promises)
//     .then(res => {
//         return res.filter(value => value.status === 'fulfilled')
//     })
//     .then(promises => {
//         return promises.map(item => item.value)
//     })
//     .then((result) => {
//         result.forEach(value => {
//             console.log("ITEM:", value);
//         })
//     })
//     .catch(e => console.log(e))

console.log("1");

setTimeout(() => {
    console.log("2");
}, 0);

setTimeout(() => {
    console.log("3");
}, 0);

setTimeout(() => {
    console.log("4");
}, 0);

Promise.resolve().then(() => console.log("5"));
Promise.resolve().then(() => console.log("6"));

console.log("7");

// const showSuccess = ({ title, someRandomNumber }) => console.log(str1 + ' ' + str2);

// promise
//     .then(showSuccess)
//     .catch(err => {
//         console.log(err);
//     })