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
// console.log(summator("123", 123123, true, "sadas", 12, false, [], 100000));

