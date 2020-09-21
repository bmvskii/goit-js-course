// const array = [
//     { value: 10 }, 
//     { value: 20 },
//     { value: 30 },
// ];

// let total = 0;

// for (const elem of array) {
//     total += elem.value;
// }

// const total = array.reduce((acc, elem, index, array) => {
//     return acc + elem.value;
// }, 0);

// console.log(total);

// const object = {
//     array: [1,2,3,4],
//     var1: 'string',
//     var2: false,
// }

// const stringifiedObject = JSON.stringify(object);
// console.log(JSON.parse(stringifiedObject));

// const object1 = {
//     var1: false,
//     object2: {
//         array: [1, 2, 3, 4,],
//         var3: true,
//     }
// }

// const object2 = {
//     var1: false,
//     num: 10,
//     object2: {
//         array: [1, 2, 3, 4, 5],
//         var3: true,
//     }
// }

// const object3 = JSON.parse(JSON.stringify(object2));
// object3.object2.array.push(30);
// console.log(object3);

// if (JSON.stringify(object1) === JSON.stringify(object2)) {
//     console.log("EQUAL");
// } else {
//     console.log("NOT EQUAL");
// }
