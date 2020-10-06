export default class LocalStorage {
    constructor() {
        this.key = 'Some key';
    }   

    // ПРИМЕР.
    // this здесь не работает!
    static hasItemInLocalStorage(key) {
        return localStorage.getItem(this.key) !== null;
    }

    set(key, value) {
        localStorage.setItem(key, JSON.stringify(value));
    }

    remove(key) {
        localStorage.removeItem(key);
    }

    has(key) {
        return this.get(key) !== null;
    }

    get(key) {
        return JSON.parse(localStorage.getItem(key));
    }

    clear() {
        localStorage.clear();
    }
}