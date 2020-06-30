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

const students = [];

for (let i = 1; i < 20; i++) {
    students[i] = {
        id: 1,
        name: `USER-${i}`,
        sayHello: function() {
            console.log(`Hello, ${this.name}`);
        }
    };
}

delete students[1].name;
delete students[5].name;

for (let i = 1; i < 20; i++) {
    students[i].sayHello();
}
