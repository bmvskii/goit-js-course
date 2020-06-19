"use strict";

// var let const
// A-Z a-z _ $
// 0-19

// camelCase
// const isTodayAGoodDay =

// kebab-case
// .navigation-list-item

// PascalCase
// const IsTodayAGoodDay

// snake_case
// const is_today_a_good_day
//
// const USER = 12;
// const uSeR = 10;
//
// const number1 = 1;
// const number2 = 2;
// const sum = number1 + number2;

// const EARTH_RADIUS = 12312, SUN_RADIUS = 1000;
// let variable1, variable2, variable3;

// let variable2;

// undeclared undefined
// let sadasd; // undefined
// const sum = 1 + sadasd;


// Number, String, Boolean, null, undefined, Symbol

// const amountOfProducts = 10;
// const newAmountOfProducts = 10.12312;

// const string1 = 'asdasdsa';
// const string2 = "abba";

// const isTodayAGoodDay = true;
// const isHot = false;

// const variable = null;
// let qwerty;

// const productName = 'Product';
// true/false
// строка/null

// if (productName !== null) {
    // Делаем действие
// }


// ctrl + shift + / - многострочные комментарии
// ctrl + / - однострочные

// alert(hello);
// const str = 'Hello world!';
// const nmb = 10;
// const bool = true;
// const undf = undefined;
// const variable = null;

// console.log(typeof nmb);
// console.log(typeof str);
// console.log(typeof bool);
// console.log(typeof undf);
// console.log(typeof variable);

// const isTodayAGoodDay = confirm("Сегодня хороший день?");
// console.log(isTodayAGoodDay);

// const result = prompt("Сколько будет 5 + 2");
// console.log(result);
// console.log(typeof result);

const sum = 5 + 10;
const var2 = 10 / 2;
const var3 = 15 * 5;
// const pasdasd = 20 - 5;
const var4 = 20 % 2;
const var5 = 2 ** 4;

const number1 = 5;
const number2 = 10;

const isHigher = number1 > number2;
const isLower = number1 < number2;

const var1 = '';
// const var2 = 0;

// >= - больше или равно
// <= - меньше или равно

// != - не равно
// !== - строго не равно

// ==
// ===

// if (var1 === var2) {
// }
//
// console.log(var5);
// let i = 0;

// Number

// const integer = 12;
// const float = 12.12312;

// const numb = Number(true);
// console.log(numb);

// const blockFontSize = '12px;';
// const absolutePositioned = '51.5px';

// const parsedInt = Number.parseInt(blockFontSize);
// const parsedFloat = Number.parseFloat(absolutePositioned);

// console.log(parsedInt);
// console.log(parsedFloat);
// NaN - Not A Number

// const number10 = 5 * 'asdasdas';
// console.log(number10);
// console.log(Number.isNaN(number10));

// 0.100000000000000000004
// 0.200000000000000000001
// 0.300000000000000000002
// const result = ((0.1 * 10) + (0.2 * 10)) / 10 === (0.3 * 10) / 10;
// console.log(result);

// console.log(Math.floor(1.7));
// console.log(Math.ceil(1.2));
// console.log(Math.round(1.7));

// console.log(Math.min(10, 5, -100, 100));
// console.log(Math.max(10, 5, -100, 100));

// const from = 50;
// const to = 60;
// console.log(Math.round(Math.random() * (to - from) + from));

// String
// const str1 = 'asdasd';
// const str2 = "Javascript";

// let str3 = 'Javascript';

// str3[2] = 'B';
// console.log(str3);

// const expression1 = false + 'true';
// const expression2 = 10 + 30 + '15';

// console.log(expression1);
// console.log(expression2);

// console.log("Строка".length);

// const uppercasedString = parseInt(prompt("Введите число:"));
// console.log(typeof uppercasedString);

// console.log(uppercasedString);
// console.log(lowercasedString);

// const enteredPhrase = prompt("Введите фразу:").toLowerCase();
// console.log(enteredPhrase.indexOf("hello"));

// const firstLetter = str2[0];

// console.log(firstLetter);

// Boolean

// Falsy values
// const var1 = Boolean('');
// const var2 = Boolean(null);
// const var3 = Boolean(undefined);
// const var4 = Boolean(0);
// const var5 = Boolean(false);
// const var6 = Boolean(NaN);

// || - или
// && - и
// ! - Не

// const hasUserIphone = false;
// const hasUserFree$ = true;
// const hasJob = false;

// const couldUserBuySomethingInAppStore = hasUserIphone && hasUserFree$ && hasJob;
// const canUserBuySomething = hasJob || hasUserFree$;

// console.log(couldUserBuySomethingInAppStore);

// console.log(!!0);
// console.log(!!'');
// console.log(!!null);
// console.log(12312 + +'15');

// Ветвления

// const subscribtion = prompt("какая подписка?");

// if (!subscribtion) {
//     console.log("Подписка отстуствует.");
// }  else if (subscribtion.toLowerCase() === 'premium') {
//     console.log("1");
// } else if (subscribtion.toLowerCase() === 'standart') {
//     console.log("2");
// } else if (subscribtion.toLowerCase() === 'free') {
//     console.log("3");
// } else {
//     console.log("Неправильный ввод.");
// }


// const userWord = prompt('Введите слово');
// let phrase;

// if (userWord === 'hello') {
    // phrase = '1';
    // console.log();
    // вызов функция
// } else {
    // phrase = '2';
// } 

// Тернарный оператор

// const result = если условие true ? то выполнить действие : в противном случае;
// const isTodayAGoodDay = userWord === 'hello' ? phrase === '1' ? console.log("ABC") : '2'

// Switch
// switch (subscribtion) {
//     case 'premium': {
//         console.log("1");
//         break;
//     }
//     case 'standart': {
//         console.log("2");
//         break;
//     }
//     case 'free': {
//         console.log("3");
//         break;
//     }
//     default:
//         console.log("Без подписки.");
// }


// const password = prompt("Enter password");
// if (password === "admin") {
//   alert("Welcome admin");
// } else if (password === "user") {
//   alert("Welcome user");
// } else if (password === "batman") {
//   alert("Welcome batman");
// } else {
//   alert("Wrong password");
// }

// switch (password) {
//   case "admin":
//     alert("Welcome admin");
//     break;
//   case "user":
//     alert("Welcome user");
//     break;
//   case "batman":
//     alert("Welcome batman");
//     break;
//   default:
//     alert("Wrong password");
//     break;
// }

// const isDark = false;
// let theme;

// if (isDark) {
//   theme = "dark";
// } else {
//   theme = "light";
// }

// let theme = isDark ? "dark" : "light";
// let theme = isDark === true ? "dark" : isDark === null ? "light" : "blue";

// 1) перевірка на роботу
// 2) лічильник
// 3) тіло циклу
// 4) зміна лічильника

// let count = 0;
// while (count < 10) {
//   console.log(count);
//   count++;
// }

// let count = 0;
// do {
//   console.log(count);
//   count++;
// } while (count < 10);

// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }

// for (let i = 1; i <= 10; i++) {
//   //   if (i % 2 === 1) {
//   //     continue;
//   //   }
//   if (i === 5) {
//     break;
//   }
//   console.log(i);
// }

// const number = Number.parseInt(prompt('Введите число:'));

// 1 - инициализация счетчика

// 2 - выполняется ли условие
// 3 - выполнение тела цикла
// 4 - инкремент

// for (let i = 0; i < 10; i++) {
    //тело цикла
    // console.log("index:", i);
// }

// console.log("Финальный результат:", i);

// while (true) { 
//     if (i === 1000) {
//         break;
//     } else {
//         i++;
//     }
// }

// i = i + 1;
// i += 1;
// i++;

// i--;
// i -= 1;
// i = i - 1;


let number = 1;
let numb = 2;

// 2 + 2
const sm1 = numb++ + ++number;

console.log("NUMB1:", numb);
console.log("NUMB2:", number);

console.log(sm1);

// if (typeof number !== 'undefined') {

// } else if (typeof number === 'string') {

// } else if (typeof number === 'null') {

// }

// NaN 


// switch (typeof number) {
//     case 'number': {
//         // выполним 1 действие
//         break;
//     }
//     case 'string': {
//         // 
//         break;
//     }
//     case 'undefined': {
//         break;
//     }
// }


// let isValid = true;
// let hasError = true;

// do {
//     const password = prompt('Введите пароль:');
//     if (password.length === 0) {
//         console.log("Пароль пустой");
//         isValid = false;
//     }
//     if (password.length < 8) {
//         console.log("Длина не соответствует.");
//         isValid = false;
//     }
//     if (isValid) {
//         hasError = false;
//         break;
//     }
// } while (!isValid);

// if (!hasError) {

// }


// asdasda




// console.log("Пароль валидный!");