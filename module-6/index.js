// Задача: написать функцию, которая
// принимает на вход строку (к примеру "Some string")
// и на выходе будет возвращать строку, где
// буквы на четных позициях будут большие, а на нечетных маленькие

// Вход: "Some string"
// Выход: "sOmE StRiNg"

// 1. Объявить функцию с пустым телом
// 2. Объявить аргумент для строки
// 3. Создать переменную, в которой 
// будет модифицированная строка
// 4. Перебрать строку в цикле
// 5. Сделать проверку на четность индекса

// Алгоритм:
// Ukraine = string

// 7 итераций
// есть пустая строка с результатом

// 1 итерация
// буква U должна стать большой и добавится к результирующей строке

// 2 итерация
// Буква k должна стать маленькой и добавиться
// к строке 'U'

// 3 итерация
// Буква r должна стать большой и добавиться
// к строке 'Uk'

// const transformString = (string) => {
//     console.log(string);
//     let resultString = '';
//     // let index = 0;

//     // while (index < string.length) {
//     //     if (index % 2 === 0) {
//     //         resultString += string[index].toUpperCase();
//     //     } else {
//     //         resultString += string[index].toLowerCase();
//     //     }

//     //     index++;
//     // }


//     for (let i = 0; i < string.length; i++) {
//         if (i % 2 === 0) {
//             resultString += string[i].toUpperCase();
//         } else {
//             resultString += string[i].toLowerCase();
//         }
//         console.log(resultString);
//     }

//     return resultString;
// }

// console.log(transformString("Some string")); // sOmE StRiNg
// console.log(transformString("Ukraine")); // uKrAiNe

// const summator = (...args) => {
//     let total = 0;

//     for (const arg of args) {
//         if (typeof arg === 'number') {
//             total += arg;
//         }
//     }

//     return total;
// };


// const sum = summator(123, 2133, 435);

// console.log(summator("123", 123123, true, "sadas", 12312, 54));

// const numbers = [1,2,3,4,5];

// const increaseNumbers = (array) => {
//     const result = [];

//     for (let i = 0; i < array.length; i++) {
//         result.push(array[i] * 2);
//     }
    
//     return result;
// }

// const newArray = increaseNumbers(numbers);

// console.log(numbers);

// Array.prototype.method((elem, index, array) => {
    
// });

// const numbers = [1, 2, 3, 20, 4, -10, 5, 6, 7];

// const log = (elem) => console.log("ELEM:", elem);

// numbers.forEach(log);

// console.log(numbers.map((number) => number * 2));

// console.log(numbers.filter((elem) => elem % 2 === 0));
// console.log(numbers.filter((elem) => {
//     if (elem % 2 !== 0) {
//         return true;
//     } 
//     return false;
// }));

// console.log(numbers.find((elem) => elem > 4 && elem % 2 === 0));

// console.log(numbers.every((elem) => elem > 0));
// console.log(numbers.some((elem) => elem < 0));

// console.log(numbers.sort((a, b) => b - a));

// const strings = ["AAAA", "DDDD", "aaaa", "CCCC", "BBBB"];

// console.log(strings.sort((str1, str2) => {
//     const cmp1 = str1.toLowerCase();
//     const cmp2 = str2.toLowerCase();

//     if (cmp1 > cmp2) {
//         return 1;
//     } else if (cmp1 < cmp2) {
//         return -1;
//     }

//     return 0;
// }));

// const array = [
//     { value: 1, string: "DDDD" },
//     { value: 10, string: "BBBB" },
//     { value: 1, string: "AAAA" },
//     { value: 5, string: "AAAA" },
//     { value: 5, string: "ZZZZ" },
//     { value: 5, string: "WWWW" },
// ];

// console.log(array.sort((obj1, obj2) => {
//     if (obj1.value < obj2.value) {
//         return 1;
//     } else if (obj1.value > obj2.value) {
//         return -1;
//     } else {
//         if (obj1.string < obj2.string) {
//             return 1;
//         } else if (obj1.string > obj2.string) {
//             return -1;
//         }

//         return 0;
//     }
// }));

const numbers = [1, 5, 10, -1, 40];

console.log(numbers.reduce((acc, elem, index, array) => {
    if (index === array.length - 1) {
        return (acc + elem) / array.length;
    }

    return acc + elem;
}, 0));

console.log(numbers.reduce((acc, el, i, arr) => i === arr.length - 1 ? (acc + el) / arr.length : acc + el, 0));