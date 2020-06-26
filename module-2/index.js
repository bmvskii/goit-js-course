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
// const array = [];

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

// const str = 'GoIT Academy Kharkiv';
// str.split(' ')
// console.log(str.split(' ')[0].split('').reverse().join('*').concat(' Academy Kharkiv'));

// Удаление

// const array = [1, 4, 5, 10, 14];
// const deletedArray = array.splice(2, 2);

// console.log(deletedArray);
// console.log(array);

// Вставка

// const resultArray = array.splice(1, 0, "string", "string2");

// console.log(resultArray);
// console.log(array);

// Замена

// const resultArray1 = array.splice(1, 1, "true", "false");
// console.log(array);

// array.splice(3);
// console.log(array);

// Область видимости

// const var1 = 'string';

// console.log(var1);

// var var1 = 'string';

// if (true) {
//     var var1 = 10;
//     console.log(var1);
// }

// for (let i = 0; i < 10; i++) {

// }

// console.log(var1);


// hoisting
// var var1 = undefined;

// console.log(var2);
// let var2 = 'string';

// if (true) {
//     var var2 = 10;
//     console.log(var2);
// }

// console.log(var2);

// function test(){
//     let foo = 33;

//     // ...

//     if(foo) {
//         let foo = (foo + 55); 
//     }
// }


// test();
//

// var a = 1;
// var b = 2;

// if (a === 1) {
//     var a = 11; // the scope is global
//     let b = 22; // the scope is inside the if-block

//     console.log(a);  // 11
//     console.log(b);  // 22
// }

// console.log(a); // 11
// console.log(b); // 2

// Syntax error

// let x = 1;
//
// {
//     var x = 2; // SyntaxError for re-declaration
// }

// const generateRandomNumber = function(from = 0, to = 100) {
    // return Math.round(Math.random() * (to - from) + from);
    // console.log("NUMBER IS GENERATED");
// }

// const hello = function(age, name = 'user') {
    // console.log("Hello,", name);
    // return;
// }

// console.log(hello());

// console.log(generateRandomNumber());
// console.log(generateRandomNumber(10, 20));
// console.log(generateRandomNumber(1, 3));
// console.log(generateRandomNumber(4, 7));

// const getSum = function() {
//     let total = 0;    
//     const array = [...arguments];
//     // const array = Array.from(arguments);

//     for (const arg of array) {
//         total += arg;
//     }

//     return total;
// }

// console.log(getSum(10, 2, 3, 4, 5, 6, 7));
// console.log(getSum(1, 2, 3, 4));

// const isPasswordValid = function(password) {
//     if (password.length === 0) {
//         console.log("Пароль пустой.");
//         return;
//     }

//     if (password.length < 8) {
//         console.log("Недостаточная длина строки.");
//         return;
//     }

//     return "Пароль валидный.";
// }

// 1 условие - сработало 
// 2 условие - сработало 
// 3 - пароль валидный
// console.log(isPasswordValid(""));

// 1 условие - не сработало 
// 2 условие - сработало 
// 3 - пароль валидный
// console.log(isPasswordValid("asdas"));

// console.log(isPasswordValid("asdsadasdasdas"));

// function helloWorld() {
//     console.log("Hello world");
// }

const sum1 = function(a, b, c) {
    return a + b + c;
} 

const sum2 = (a, b, c) => a + b + c;

const sum3 = function(a, b, c) {
    if (a === b) {
        ///
    }

    return a + b + c;
} 

const sum4 = (a, b, c) => {
    if (a === b) {
        ///
    }

    return a + b + c;
};

const sum = (...args) => {
    let total = 0;

    for (const arg of args) {
        total += arg;
    }

    return total;
};