// Higher Order Function
// функция высшего порядка

// Callback
// функция обратного вызова

// const N = 10;

// for (let i = 0; i < N; i++) {
//   console.log(i);
// }

// const repeatLog = (n) => {
//   for (let i = 0; i < n; i++) {
//     console.log(i);
//   }
// }

// repeatLog(10);
// repeatLog(5);

// const fruits = [
//   { 
//     name: "apples",
//     amount: 10,
//     isFresh: true,
//   },
//   { 
//     name: "bananas",
//     amount: 30,
//     isFresh: false,
//   },
//   { 
//     name: "pineapples",
//     amount: 5,
//     isFresh: true,
//   }
// ];

// const filter = (array, callback) => {
//   const filteredArray = [];

//   for (const element of array) {
//     const callbackResult = callback(element);
//     if (callbackResult) {
//       filteredArray.push(element);
//     }
//   }

//   return filteredArray;
// };

// const isFruitFresh = (fruit) => {
//   return fruit.isFresh;
// };

// const isEnoughtAmount = (fruit) => {
//   const MIN_FRUITS_AMOUNT = 7;
//   return fruit.amount > MIN_FRUITS_AMOUNT;
// };

// const freshFruits = filter(fruits, isFruitFresh);
// const enoughtAmountFruits = filter(fruits, isEnoughtAmount);

// console.log("FRESH FRUITS:", freshFruits);
// console.log("ENOUGHT AMOUNT FRUITS:", enoughtAmountFruits);

// const showUppercased = (value) => console.log(value.toUpperCase());

// const showLowercased = (value) => console.log(value.toLowerCase());

// const showInDifferentCase = (value) => {
//   let result = '';

//   for (let i = 0; i < value.length; i++) {
//     // тернарный оператор: 
//     // (если выполниться условие) ? (то делаем это) : (в противном случае делаем это)

//     result += i % 2 === 0 ? value[i].toLowerCase() : value[i].toUpperCase();
//   }

//   console.log(result);
// };

// const log = (array, logFunction) => {
//   for (const element of array) {
//     logFunction(element);
//   }
// };

// const strings = ["String1", "STring2", "StRinG3"];

// log(strings, showLowercased);
// log(strings, showUppercased);
// log(strings, showInDifferentCase);


// const foo1 = () => console.log("Foo1");

// const foo2 = () => console.log("Foo2");

// const foo3 = () => { 
//   foo2(); 
//   console.log("Foo3");
//   foo1();
// };

// const foo4 = () => foo3();

// foo4();

// 1. foo4 вызов
// 2. foo3 вызов
// 3. foo2 вызов
// 4. "Foo2" + return
// 5. "Foo3"
// 6. foo1 вызов
// 7. "Foo1" + return
// 8. return из foo3
// 9. return из foo4
// 10. продолжает выполнение программы

// const x = 10;

// const bar = function() {
//   // Local
//     // env: {  }
//     // parent: { Baz }
//   // const x = 5;
//   console.log(x);
// };

// const baz = function() {
//   // Local
//     // env: { bar }
//     // parent: { Foo }
//   console.log('baz');
//   bar();
// };

// const foo = function() {
//   // Local
//     // env: { baz }
//     // parent: { Global }
//   console.log(x);
//   console.log('foo');
//   baz();
// };

// Global
//   env: { x = 10, foo: function }
//   parent: { null }

// const x = 0;

// function foo() {
//   Function
//     env: { x = 1 }
//     parent: { Global }

//   function foo1() {
//     Function
//       parent: { foo }

//     console.log(x);
//   }

//   foo1();

//   console.log(x);
// }

// foo();


// function createCounter() {
//   let counter = 0;

//   return function() {
//     return counter++;
//   }
// }

// const counter1 = createCounter();
// const counter2 = createCounter();

// console.log(counter1());
// console.log(counter1());

// console.log(counter2());

// const guessPassword = () => {
//   let secretPassword = 'ADMIN123';
  
//   return function() {
//     return {
//       check(password) {
//         return password === secretPassword;
//       },
//       updatePassword(newPassword) {
//         secretPassword = newPassword;
//       }
//     }
//   }
// }

// const game = guessPassword();

// console.log(game().check("1234"));

// game().updatePassword("password");

// console.log(game().check("password"));

// const createUser = function(name, birthday) {
//   let hasBirthdayMessageBeenShown = false;

//   return function(message, date) {

//     if (!hasBirthdayMessageBeenShown && date === birthday) {
//       console.log(`Поздравляем с днем рождения, ${name}`);
//       hasBirthdayMessageBeenShown = true;
//     }

//     console.log(`${name}: ${message}`);
//   }
// }

// const messageWithUser1 = createUser("Username", "01/01/2020");

// messageWithUser1("Привет, мир!", "01/01/2020");
// messageWithUser1("Как дела?", "01/01/2020");

// function foo() {
//   'use strict';
//   console.log(this);
// }

// foo();
// console.log(this);

// const object = {
//   a: 1,
//   b: 2,
//   foo() {
//     console.log(this);
//   },
//   object1: {
//     a: 3,
//     b: 4,
//     foo() {
//       console.log(this);
//     }
//   },
//   foo1: function() {
//     console.log(this);
//   },
//   foo2: () => {
//     console.log(this);
//   }
// }

// object.foo();
// object.foo1();
// object.object1.foo();
// object.foo2();

// function showName(message, number) {
//   console.log("NAME:", this.name);
//   console.log(message);
//   console.log(number);
// }

// var name = "Global";

// const fabric1 = {
//   people: 10,
//   name: "Fabric1",
// };

// const fabric2 = {
//   people: 20,
//   name: "Fabric2",
// };

// const fabric3 = {
//   people: 30,
//   name: "Fabric3",
// };

// showName();

// showName.call(fabric3, "Message 3", 10);
// showName.call(fabric2, "Message 2", 20);
// showName.call(fabric1, "Message 1", 30);

// showName.apply(fabric3, ["Message 4", 40]);
// showName.apply(fabric2, ["Message 5", 50]);
// showName.apply(fabric1, ["Message 6", 60]);

// const showFabric3Name = showName.bind(fabric3);

// showFabric3Name("Message", 100);
// showFabric3Name("Message1", 200);

const showText = function(showAction) {
  showAction();
}

const object = {
  fullname: "Username",
  city: "Kharkiv",
  message: "123",
  showUserInfo: function() {
    console.log(`${this.fullname} from ${this.city}`);
  }
}

showText(object.showUserInfo.bind(object));

var message = "456";
const helloWorld = () => {
  console.log(this.message);
}

helloWorld.call(null);
helloWorld.call(object);