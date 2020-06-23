'use strict';

// Массивы

// const array2 = [1500, "2", true, "string"];

// console.log(array2.length);

// console.log(array2[0]);
// console.log(array2[4]);

// array2[0] = 'GoIT';

// console.log(array2[0]);
// console.log(array2[3]);

// console.log(array2);
// array2.length = 0;
// console.log(array2);

// for (const/let variable of iterable) {
    // statement
// }

// const numbers = [-100, 5, 150, 30, 40, 850];

// let maxNumber = numbers[0];
// let minNumber = numbers[0];

// for (const number of numbers) {
//     // 1. number = -100
//     // minNumber = -100
//     // maxNumber = 0

//     // 2. number = 5
//     // maxNumber = 5
//     // minNumber = -100

//     // 6. number = 850
//     // maxNumber = 850
//     // minNumber = -100

//     if (number > maxNumber) {
//         maxNumber = number;
//     }

//     if (number < minNumber) {
//         minNumber = number;
//     }
// }

// console.log("MAX:", maxNumber);
// console.log("MIN:", minNumber);

// const matrix = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9]
// ];

// for (const array of matrix) {
//     console.log("ARRAY:", array);
//     let counter = 1;

//     for (const elem of array) {
//         console.log(`ELEM-${counter++}:`, elem);
//     }
// }

// let a = 5;
// let b = a;

// a = 10;

// console.log(a);
// console.log(b);

// 0, 1, 2, 3, 4, ...
// lenght = 3
// const array1 = ["Mongo", "JavaScript", "NodeJS"];

// MONGO, JAVASCRIPT, NODEJS
// const array2 = array1.splice();

// mongo, javascript, nodejs
// const array3 = array2.splice();

// console.log(array1);
// console.log(array2);
// console.log(array3);

// array2.length = 2;

// console.log(array1);
// console.log(array2);
// console.log(array3);

// array3.length = 1;

// console.log(array1);
// console.log(array2);
// console.log(array3);

// Методы массивов
const array = [];

// LIFO/FIFO

// STACK - pop/push
// QUEUE - shift/unshift

// LAST IN FIRST OUT / FIRST IN FIRST OUT
// ПОСЛЕДНИЙ ЗАШЕЛ - ПЕРВЫЙ ВЫШЕЛ / ПЕРВЫЙ ЗАШЕЛ - ПЕРВЫЙ ВЫШЕЛ

// Добавление элементов в массив
// push/unshift

// for (let i = 0; i < 100; i++) {
//     const randomNumber = Math.round(Math.random() * 100);
//     array.unshift(randomNumber);
//     // array[i] = random;
//     console.log(array[i]);
// }


// pop / shift

// const array2 = [30, 2, 3, 20];

// console.log(array2.pop());
// console.log(array2);

// console.log(array2.shift());
// console.log(array2);

// slice

// const array1 = [1, 2, 3, 4, 5, 6, 7, 8, 5, 2, 3, 4, 5, 6];

// slice(start = 0, end = -1)

// console.log(array1.slice());
// console.log(array1.slice(0, array1.length / 2));
// console.log(array1.slice(array1.length / 2));
// console.log(array1.slice(-3));

// const array2 = [false, undefined, 3, 'string', 5, 6, 7];

// console.log(array2.reverse());
// console.log(array2.includes('sa'));
// console.log(array2.indexOf('sa'));

// const array3 = [true, 'GoIT'];

// console.log(array2.concat(array3.reverse()));
// console.log(array2);
// console.log(array3);

const str = 'GoIT Academy Kharkiv';
// str.split(' ')
console.log(str.split(' ')[0].split('').reverse().join('*').concat(' Academy Kharkiv'));