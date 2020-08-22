
class Stack {
    constructor(...elements) {
        this._elements = [...elements];
    }

    // добавляем элемент в конец массива
    push(elem) {
        this._elements.push(elem);
    }

    // удаляем элемент с конца массива
    pop() {
        this._elements.pop();
    }

    // геттер, который возвращает
    // длину массива
    get length() {
        return this._elements.length;
    }

    // вставка элемента в произвольную позицию
    insertAt(index, elem) {
        // 1 - for и перестановку
        // 2 - spread + slice
        // 3 - splice

        if (this.isValidIndex(index)) {
            console.log("Индекс не валиден");
            return;
        }

        // [2, 3, 200]
        // index = 1
        // elem = 100
        
        // ...[2]
        // 100
        // ...[3, 200]
        // [2, 100, 3, 200]

        this._elements = [
            ...this._elements.slice(0, index),
            elem,
            ...this._elements.slice(index)
        ];

        this._elements.splice(index, 0, elem);
    }

    isValidIndex(index) {
        return index < 0 || index > this._elements.length;
    }

    // удаление элемента из произвольной
    // позицию
    deleteAt(index) {
        // 1 - delete
        // 2 - splice
        // 3 - filter
        // 4 - деструктуризация

        // arr = [0, 1, 2, 3, 4, 5]
        // index = 2
        // length = 6
        
        // delete arr[index];

        // [0, 1, undefined, 3, 4, 5]
        // length = 6

        // [0, 1, 3, 3, 4, 5]
        // [0, 1, 3, 4, 4, 5]
        // [0, 1, 3, 4, 5, 5]
        // length = 5

        // [0, 1, 3, 4, 5]

        // 1 стратегия -----

        if (index < 0 || index > this._elements.length) {
            console.log("Индекс не валиден");
            return;
        }

        this._elements.splice(index, 1);

        // 2 стратегия ----
        // if (index >= 0 && index < this._elements.length) {
        //     this._elements.splice(index, 1);
        // }
    }

    clear() {
        this._elements.length = 0;
    }

    // поиск элемента в массиве
    // при наличии элемента - true
    // в противном случае - false
    has(elem) {
        // elem = 2
        // [0, 1, 2, 3, 4, 5]
        // for (const element of this._elements) {
        //     if (element === elem) {
        //         return true;
        //     }
        // };

        // 1 итерация
        // element = 0
        // elem = 2

        // return false;

        // return element === elem;

        // if (element === elem) {
        //     return true;
        // } else {
        //     return false;
        // }

        // -----------

        // for (let i = 0; i < this._elements.length; i++) {
        //     if (elem === this._elements[i]) {
        //         return true;
        //     }
        // }

        // return false;

        // ---------

        // return this._elements.indexOf(elem) !== -1;

        // ---------

        return this._elements.includes(elem);

        // 1 - includes
        // 2 - for..of
        // 3 - indexOf
        // 4 - for
        // 5 - тернарник
    } 

    // выводит в console наш стек
    log() {
        console.log(this._elements);
    }
}

const stack = new Stack();
// const stack1 = new Stack(1, 2, 3, 4);

// stack1.log(); // [1,2,3,4]
stack.log(); // []
console.log(stack.length);

stack.push(2);
stack.push(3);

stack.log(); // [2, 3]

stack.push(200);

stack.insertAt(1, 100);
stack.log(); // [2, 100, 3, 200]

console.log(stack.length); // 4

console.log(stack.has(100)); // true
console.log(stack.has(300)); // false

stack.pop();
stack.log(); // [100, 2, 3]

stack.deleteAt(1); 

stack.deleteAt(100000000); 
stack.deleteAt(-100000); 

console.log(stack.has(2)); // false
stack.log(); // [100, 3]