// Процедурное программирование

// const sayHello = (message) => {
//     console.log(message);
// } 

// const generateMessage = () => {
//     // 
// }

// sayHello(generateMessage())

const object = {
    name: "User",
    age: 20,
    getUserInfo() {
        console.log("Имя:", this.name);
        console.log("Возраст:", this.age);
    }
};

object.getUserInfo();

// базовый класс автомобиль
// - объем двигателя
// - состояние машины
// - марка

// грузовой автомобиль
// наследуем базовый класс автомобиль
// - объем кузова
// - прицеп

// легковой автомобиль
// наследуем базовый класс автомобиль
// - количество дверей

// легковой автомобиль
// - 10
// - 5 из 10
// - Reno
// - 4

// полиморфизм

// базовый класс Фигура
// - цвет
// - размер
// - нарисуй

// триугольник
// наследуем класс Фигура
// - тип
// - нарисуй

// квадрат

// наследуем класс Фигура
// - площадь
// - нарисуй

// круг
// наследуем класс Фигура
// - радиус
// - диаметр
// - нарисуй


// МАССИВ ФИГУР
// БЕЗ ПОЛИМОРФИЗМА

// если класс == КРУГ
// вызови метод НАРИСУЙ КРУГ

// если класс == КВАДРАТ
// вызови метод НАРИСУЙ КВАДРАТ

// если класс == ТРЕУГОЛЬНИК
// вызови метод НАРИСУЙ ТРЕУГОЛЬНИК

// С ПОЛИМОРФИЗМОМ

// вызов метода нарисуй

// АБСТРАКЦИЯ

// Есть животные: тигры, львы, коровы, кошки
// Выделяем общие свойства и методы

// Класс Животное
// - метод ПОКУШАТЬ
// - количество ног
// - тип еды


// function Animal() {

// }

// описываем класс Car, который принимает color, model, price
const Car = function(c, m, p) { 

    // записываем свойства в наш класс и присваиваем значения
    // которые передали в конструкторе
    this.color = c;
    this.model = m;
    this.price = p;

    // описываю метод, который вернет цвет машины
    this.getColor = function() {
        return this.color;
    }

    this.getPrice = function() {
        return this.price;
    }

    this.getModel = function() {
        return this.model;
    }

    this.getInfo = function() {
        console.log("ЦВЕТ:", this.color);
        console.log("ЦЕНА:", this.price);
        console.log("МОДЕЛЬ:", this.model);
    }

    this.compare = function(car) {
        if (car.getPrice === undefined) {
            return;
        }

        if (this.getPrice() > car.getPrice()) {
            console.log(`${this.getModel()} дороже ${car.getModel()}`);
        } else {
            console.log(`${car.getModel()} дороже ${this.getModel()}`);
        }
    }

    this.setPrice = function(newPrice) {
        if (newPrice < 0) {

        }

        this.price = newPrice;
    }
}

const CarService = function() {
   
    this.compare = function(car1, car2) {

    }

    this.clean = function(car) {

    }

    this.changeColor = function(car) {

    }

    this.repair = function(car) {

    }
}

const car1 = new Car("blue", "Audi", 20000);
const car2 = new Car("yellow", "BMW", 50000);
const car3 = new Car("white", "Range Rover", 1000000); 

const carService = new CarService();

console.log(car1.getPrice());

car1.setPrice(70000);

console.log(car1.getPrice());

carService.compare(car1, car2);

// car1.price = '20000';
// car2.price = '100000';
// car3.price = '300000';

// car1.getInfo();
// car2.getInfo();

const compareCarPrices = (car1, car2) => {
    console.log("Цена 1:", car1.getPrice());
    console.log("Цена 2:", car2.getPrice());

    if (car1.getPrice() > car2.getPrice()) {
        console.log(`${car1.getModel()} дороже ${car2.getModel()}`);
    } else {
        console.log(`${car2.getModel()} дороже ${car1.getModel()}`);
    }
}

compareCarPrices(car1, car2);
compareCarPrices(car2, car3);

car1.compare(car2);
car2.compare(car3);

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