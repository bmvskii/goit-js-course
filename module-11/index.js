// const foo = (param1, param2) => console.log("Hello world!", param1, param2);

// const id = setTimeout(foo, 0, "AAA", "BBB");
// const id2 = setTimeout(foo, 3000, "AAA", "BBB");

// let counter = 1;

// console.log("1111111");

// const intervalId = setInterval(() => {
//     console.log(counter++);
//     if (counter === 10) {
//         clearInterval(intervalId);
//     }
// }, 1000);

// console.log("222222");

// console.log(timeoutID);
// console.log(timeoutID2);

// // clearTimeout(timeoutID2);
// // clearTimeout(timeoutID);

// console.log("333333");

const now = new Date();
console.log(now);

const date = new Date('7 March, 2020 15:00');
console.log(date);

const date3 = new Date(2020, 7, 15, 14, 35, 40);

console.log(date3);
console.log(date3.getTime());

const date4 = new Date(date3.getTime());
console.log(date4);

console.log(new Date(Date.now()));

date4.setDate(10);
date4.setHours(30);
date4.setMilliseconds(20);
date4.setMonth(30);
date4.setSeconds(50);

console.log(date4.getDate());
console.log(date4.getDay());
console.log(date4.getHours());
console.log(date4.getMilliseconds());
console.log(date4.getMonth());
console.log(date4.getSeconds());

const options = { 
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric' 
};

console.log(new Date().toLocaleString('uk-UK', options));