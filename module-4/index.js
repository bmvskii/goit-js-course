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

const x = 10;

const bar = function() {
  // Local
    // env: {  }
    // parent: { Baz }
  // const x = 5;
  console.log(x);
};

const baz = function() {
  // Local
    // env: { bar }
    // parent: { Foo }
  console.log('baz');
  bar();
};

const foo = function() {
  // Local
    // env: { baz }
    // parent: { Global }
  console.log(x);
  console.log('foo');
  baz();
};

// Global
  // env: { x = 10, foo: function }
  // parent: { null }
foo();