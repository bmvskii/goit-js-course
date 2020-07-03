// const goItCourse = {
//     courseName: "Frontend",
//     numberOfPeople: 15,
//     topics: ["Arrays", "Functions", "Numbers"],
//     getInfo: () => {
//         console.log("Hello dear Student");
//     },
//     officeAvaible: false,
// };

// const obj = {
//     "key1": "value1",
//     "key2": "value2",
// }

// obj.key1;
// obj["key2"];

// console.log(goItCourse["courseName"]);
// console.log(goItCourse["numberOfPeople"]);

// console.log(goItCourse.officeAvaible);
// goItCourse.getInfo();

// goItCourse.isFirstLesson = "";
// goItCourse["maxmark"] = function() {};

// const getUniqueID = () => {
//     return `USER${Math.round(Math.random() * 1000000)}`;
// }

// const object = {};
// const key = `name-${getUniqueID()}`;

// object[key] = "Sergey";

// console.log(object);

// const getRandomNumber = (from, to) => {
//     return Math.round(Math.random() * (to - from) + from);
// };

// const student = {
//     fullname: "Vasya Pupkin",
//     id: 1,
// }

// const getRandomStudent = () => {
//     const availableNames = ["Petya", "Vasya", "Andrey"];
//     const availableSenames = ["Sidorov", "Petrov", "Andreev"];

//     const fIndex = getRandomNumber(0, availableSenames.length - 1);
//     const sIndex = getRandomNumber(0, availableSenames.length - 1);

//     const fname = availableNames[fIndex];
//     const sname = availableSenames[sIndex];

//     const id = getRandomNumber(1, 100000);
//     const fullname = `${fname} ${sname}`;

//     return {
//         fullname,
//         id,
//         getInfo: function () {
//             console.log("СТУДЕНТ:", this.fullname);
//             console.log("ID:", this.id);
//         }
//     };
// };

// const students = [];

// for (let i = 0; i < 20; i++) {
//     students.push(getRandomStudent());
// }

// for (let i = 0; i < 20; i++) {
//     students[i].getInfo();
// }

// const students = [];

// for (let i = 1; i < 20; i++) {
//     students[i] = {
//         id: 1,
//         name: `USER-${i}`,
//         sayHello: function() {
//             console.log(`Hello, ${this.name}`);
//         }
//     };
// }

// delete students[1].name;
// delete students[5].name;

// for (let i = 1; i < 20; i++) {
//     students[i].sayHello();
// }

// const object = {
//   key1: 10,
//   key2: "string",
//   key3: true,
//   someNewKey: "string2",
// };

// for (const key in object) {
//   console.log(key);
//   console.log(object[key]);
// }

// const keys = Object.keys(object);
// const values = Object.values(object);
// const entries = Object.entries(object);

// console.log(keys);
// console.log(values);
// console.log(entries);

// const goods = {
//   apples: 10,
//   tomatos: 15,
//   potatoes: 20,
//   bananas: 30,
// };

// let total = 0;
// const prices = Object.values(goods);

// for (const price of prices) {
//   total += price;
// }
// console.log(total);

// const entries = Object.entries(goods);
// for (const entry of entries) {
//   const key = entry[0];
//   const value = entry[1];

//   console.log(key);
//   console.log(value);
// }

// const array1 = [1, 2, 3, 4];
// const array2 = [-1, 0, ...array1];
// const array3 = [...array1, 4, 5, 6, ...array2, 9];

// console.log(array2);
// console.log(array3);

// const object1 = {
//   a: 1,
//   b: 2,
// };

// const object2 = { ...object1 };
// const object3 = Object.assign({}, object1, object2);
// const object4 = {
//   ...object1,
//   ...object2
// };

// console.log(object3);
// console.log(object2);

// const array = [1, 12312, 43534, 1234, -100, 43543];

// const min = Math.min(...array);
// const max = Math.max(...array);

// console.log(min);
// console.log(max);

// const getSum = function(a, b, c, d) {
//   console.log(a);
//   console.log(b);
//   console.log(c);
//   console.log(d);
//   console.log(params);
// };

// getSum(1, 2, 3, 4);

// const someLongObjectName = {
//   name: "Name",
//   age: 12,
//   isSmoking: false,
//   key1: [],
//   key2: {},
// };

// const someLongObjectName1 = {
//   name: "Uhu",
//   age: 14,
//   isSmoking: false,
//   key1: [],
//   key2: {
//     someLongKey: "String",
//   },
// };

// const someLongObjectName2 = {};

// const name = someLongObjectName.name;
// const age = someLongObjectName.age;
// const isSmoking = someLongObjectName.isSmoking;
// const someKey = someLongObjectName.key2.someLongKey;

// const {
//   name ,
//   age,
//   isSmoking,
//   key2: { someLongKey },
// } = someLongObjectName1;

// const { name = 'Name', age = 18, isSmoking = false } = someLongObjectName2;

// const birthdayText = `Дорогой, ${name}! Тебе уже ${age} лет. `;
// const birthdayText2 = `Дорогой, ${name}! Тебе уже ${age} лет. `;

// console.log(birthdayText);
// console.log(birthdayText2);

// const array = [1, 2, 3, 4, 5, 6, 7, 8];
// const [num1,,,num4, ...numbers] = array;

// console.log(num1);
// console.log(num4);
// console.log(...numbers);

// let a = 1;
// let b = 2;

// правая часть - создаем массив [a, b]
// левая часть - b = a, a = b

// [b, a] = [a, b];

// console.log(a);
// console.log(b);

const house = {
  key1: "String",
  room1: {
    chair: true,
    bookcase: {
      shelf: 4,
    },
  },
};

const house1 = {
  ...house,
  room1: {
    ...house.room1,
    bookcase: {
      ...house.room1.bookcase,
    },
  },
};

const house2 = JSON.parse(JSON.stringify(house));

house1.room1.bookcase.shelf = 10;
house1.key1 = "AHAHAH";

house2.room1.bookcase.shelf = 7;
house2.key1 = "asdasd";

console.log("HOUSE1:", house.room1.bookcase.shelf);
console.log("HOUSE2:", house1.room1.bookcase.shelf);
console.log("HOUSE2:", house2.room1.bookcase.shelf);

console.log("HOUSE1:", house.key1);
console.log("HOUSE2:", house1.key1);
console.log("HOUSE2:", house2.key1);
