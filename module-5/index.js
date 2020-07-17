// Процедурное программирование

// const sayHello = (message) => {
//     console.log(message);
// } 

// const generateMessage = () => {
//     // 
// }

// sayHello(generateMessage())

// const object = {
//     name: "User",
//     age: 20,
//     getUserInfo() {
//         console.log("Имя:", this.name);
//         console.log("Возраст:", this.age);
//     }
// };

// object.getUserInfo();

// // базовый класс автомобиль
// // - объем двигателя
// // - состояние машины
// // - марка

// // грузовой автомобиль
// // наследуем базовый класс автомобиль
// // - объем кузова
// // - прицеп

// // легковой автомобиль
// // наследуем базовый класс автомобиль
// // - количество дверей

// // легковой автомобиль
// // - 10
// // - 5 из 10
// // - Reno
// // - 4

// // полиморфизм

// // базовый класс Фигура
// // - цвет
// // - размер
// // - нарисуй

// // триугольник
// // наследуем класс Фигура
// // - тип
// // - нарисуй

// // квадрат

// // наследуем класс Фигура
// // - площадь
// // - нарисуй

// // круг
// // наследуем класс Фигура
// // - радиус
// // - диаметр
// // - нарисуй


// // МАССИВ ФИГУР
// // БЕЗ ПОЛИМОРФИЗМА

// // если класс == КРУГ
// // вызови метод НАРИСУЙ КРУГ

// // если класс == КВАДРАТ
// // вызови метод НАРИСУЙ КВАДРАТ

// // если класс == ТРЕУГОЛЬНИК
// // вызови метод НАРИСУЙ ТРЕУГОЛЬНИК

// // С ПОЛИМОРФИЗМОМ

// // вызов метода нарисуй

// // АБСТРАКЦИЯ

// // Есть животные: тигры, львы, коровы, кошки
// // Выделяем общие свойства и методы

// // Класс Животное
// // - метод ПОКУШАТЬ
// // - количество ног
// // - тип еды


// // function Animal() {

// // }

// // описываем класс Car, который принимает color, model, price
// const Car = function(c, m, p) { 

//     // записываем свойства в наш класс и присваиваем значения
//     // которые передали в конструкторе
//     this.color = c;
//     this.model = m;
//     this.price = p;

//     // описываю метод, который вернет цвет машины
//     this.getColor = function() {
//         return this.color;
//     }

//     this.getPrice = function() {
//         return this.price;
//     }

//     this.getModel = function() {
//         return this.model;
//     }

//     this.getInfo = function() {
//         console.log("ЦВЕТ:", this.color);
//         console.log("ЦЕНА:", this.price);
//         console.log("МОДЕЛЬ:", this.model);
//     }

//     this.compare = function(car) {
//         if (car.getPrice === undefined) {
//             return;
//         }

//         if (this.getPrice() > car.getPrice()) {
//             console.log(`${this.getModel()} дороже ${car.getModel()}`);
//         } else {
//             console.log(`${car.getModel()} дороже ${this.getModel()}`);
//         }
//     }

//     this.setPrice = function(newPrice) {
//         if (newPrice < 0) {

//         }

//         this.price = newPrice;
//     }
// }

// const CarService = function() {
   
//     this.compare = function(car1, car2) {

//     }

//     this.clean = function(car) {

//     }

//     this.changeColor = function(car) {

//     }

//     this.repair = function(car) {

//     }
// }

// const car1 = new Car("blue", "Audi", 20000);
// const car2 = new Car("yellow", "BMW", 50000);
// const car3 = new Car("white", "Range Rover", 1000000); 

// const carService = new CarService();

// console.log(car1.getPrice());

// car1.setPrice(70000);

// console.log(car1.getPrice());

// carService.compare(car1, car2);

// // car1.price = '20000';
// // car2.price = '100000';
// // car3.price = '300000';

// // car1.getInfo();
// // car2.getInfo();

// const compareCarPrices = (car1, car2) => {
//     console.log("Цена 1:", car1.getPrice());
//     console.log("Цена 2:", car2.getPrice());

//     if (car1.getPrice() > car2.getPrice()) {
//         console.log(`${car1.getModel()} дороже ${car2.getModel()}`);
//     } else {
//         console.log(`${car2.getModel()} дороже ${car1.getModel()}`);
//     }
// }

// compareCarPrices(car1, car2);
// compareCarPrices(car2, car3);

// car1.compare(car2);
// car2.compare(car3);

// const object1 = {
//     name: "User",
//     age: "20",
// };

// object1.skills = "JavaScript";

// object1.getInfo = function() {
//     console.log(this.skills);
// }

// object1.getInfo();

// const LightweightCar = function () {

// }

// console.log(Object.create(Object.prototype));


// let y = [];

// // console.log(Array.prototype === y.__proto__);

// function SomeClass () {
//     this.a = 'kek';
// };

// SomeClass.prototype.hello = function () {
//     console.log("Привет");
// }

// const obj1 = new SomeClass();
// const obj2 = new SomeClass();

// console.log(obj1);
// obj1.hello();

// const Hero = function(name, xp) {
//     this.name = name;
//     this.xp = xp;
//   };
  
//   /*
//    * Теперь у нас есть конструктор базового класса героя,
//    * добавим в prototype какой-то метод.
//    */
//   Hero.prototype.gainXp = function(amount) {
//     console.log(`${this.name} gained ${amount} experience points`);
//     this.xp += amount;
//   };

// const Warrior = function(name, xp, weapon) {
//     /*
//      * Во время выполнения функции Warrior вызываем функцию Hero
//      * в контексте объекта создающегося в Warrior, а так же передаем
//      * аргументы для инициализации полей this.name и this.xp
//      *
//      * this это будущий экземпляр Warrior
//      */
//     Hero.call(this, name, xp);
  
//     // Тут добавляем новое свойство - оружие
//     this.weapon = weapon;
//   };
  
//   // Сразу добавим метод для атаки в prototype воина
//   Warrior.prototype.attack = function() {
//     console.log(`${this.name} attacks with ${this.weapon}`);
//   };
  
//   Warrior.prototype = Object.create(Hero.prototype);

//   const poly = new Warrior('Poly', 200, 'sword');

//   console.log(poly);

// class Car {
//     constructor() {
//         this.variable = 'Hello';
//     }
// }

// class BMW extends Car {
//     constructor() {
//         this.variable = "Bye";
//     }
// }

// const bmw = new BMW();
// console.log(bmw.variable);

let array = [];

// null <- Object.prototype <- Array.prototype
// console.log(array);

// let animal = {
//     name: "Pirate"
// };

// let dog = {
//     breed: "None",
// }

// dog.__proto__ = animal;

// // null <- Object.prototype <- Animal.prototype <- Dog.prototype

// console.log(dog.breed);
// console.log(dog.name);

// const object1 = {
//     key1: "1",
//     key2: "2",
// };

// const object2 = Object.create(object1);

// object2.key3 = '3';
// object2.key4 = '4';

// for (const key in object2) {
//     if (!object2.hasOwnProperty(key)) {
//         continue;
//     }
//     console.log(key);
// }

// const keys = Object.keys(object2);

// for (const key of keys) {
//     console.log(key);
// }

// function Animal(type) {
//     this.type = type;
// }

// { 
    // type: type,
    // __proto__: {
//      constructor: Animal,
        // __proto__: Object
    // }
//  }

// Animal.prototype.showType = function() {
//     console.log(this.type);
// }

// { 
    // type: type,
    // __proto__: {
    // showType: function()
//     constructor: Animal,
        // __proto__: Object
    // }
//  }

// function Tiger(type, age) {
//     Animal.call(this, type);
//     this.age = age;
// }

// { 
    // age: age,
    // __proto__: {
//      constructor: Tiger,
        // __proto__: Object
    // }
//  }

// Tiger.prototype = Object.create(Animal.prototype);
// Tiger.prototype.constructor = Tiger;

// function Wolf(type, color) {
//     Animal.call(this, type); // new Animal(type);
//     this.color = color;
// }

// { 
    // color: color,
    // __proto__: {
//      constructor: Wolf,
        // __proto__: Object
    // }
//  }

// Wolf.prototype = Object.create(Animal.prototype);
// { 
    // color: color,
    // __proto__: {
        // __proto__: Object
    // }
//  }

// Wolf.prototype.constructor = Wolf;
// { 
    // color: color,
    // __proto__: {
        // constructor: Wolf,
        // __proto__: Object
    // }
//  }

// const animal = new Tiger("tiger", 20);
// const animal2 = new Wolf("wolf", "black");

// animal.showType();
// animal2.showType();

// console.log(animal.age);
// console.log(animal2.color);

// const object = {
//     a: 1,
//     b: 2,
//     toString() {
//         return this.a + this.b;
//     }
// };

// console.log(object.toString());
// console.log("String" + object);

// class Animal {

//     constructor(name, color) {
//         this._name = name;
//         this._color = color;
//     }

//     getName() {
//         return this._name;
//     }

//     getColor() {
//         return this._color;
//     }

//     get name() {
//         return this._name;
//     }

//     set name(newName) {
//         this._name = newName;
//     }

// }

// const animal = new Animal("Richard", "black");
// console.log(animal.name);

// animal.name = "Poppy";
// console.log(animal.name);

// class Utilities {

//     constructor(age) {
//         this.age = age;
//     }

//     static formatString(string) {
//         return string.toUpperCase() + this.age;
//     }

//     static rules = ["A1", "B2", "C3"];
// }

// // const utilities = new Utilities(123);

// console.log(Utilities.formatString("asdasdasASdas"));
// console.log(Utilities.rules);

class Animal {
    type = '123';
    #privateVar = 10;

    constructor(type) {
        this.type = type;
    }

    show() {
        console.log(this.type);
    }
}

class Tiger extends Animal {
    constructor(name, type) {
        super(type);
        this.name = name;
    }

    show() {
        super.show();
        console.log(this.name);
    }
}

const tiger = new Tiger("Ricardo", "black");

tiger.show();
console.log(tiger.#privateVar);
