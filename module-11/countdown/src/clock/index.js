export default class Clock {
    constructor() {
        const wrapper = document.querySelector('.countdown');
        wrapper.classList.remove('hidden');

        this.minutesElemRef = document.querySelector('.minutes');
        this.hoursElemRef = document.querySelector('.hours');
        this.secondsElemRef = document.querySelector('.seconds');

        this.prevValue = new Date();
    }

    static formatValue(value) {
        return value.toString().length === 2 ? value : `0${value}`;
    }

    init() {
        this.initClock();
        
        setInterval(() => this.tick(), 1000);
    }

    tick() {
        const { prevValue, minutesElemRef, hoursElemRef, secondsElemRef } = this;
        const now = new Date();
            
        const minutes = now.getMinutes();
        const hours = now.getHours();
        const seconds = now.getSeconds();

        const updatedData = {
            'MINUTES': { element: minutesElemRef, value: minutes },
            'HOURS': { element: hoursElemRef, value: hours },
            'SECONDS': { element: secondsElemRef, value: seconds }
        }

        if (prevValue.getMinutes() !== now.getMinutes()) {
            this.updateRef(updatedData['MINUTES']);
        }

        if (prevValue.getHours() !== now.getHours()) {
            this.updateRef(updatedData['HOURS']);
        }

        if (prevValue.getSeconds() !== now.getSeconds()) {
            this.updateRef(updatedData['SECONDS']);
        }
        
        this.prevValue = now;
    }

    initClock() {
        const now = new Date();
    
        this.minutesElemRef.innerHTML = Clock.formatValue(now.getMinutes());
        this.secondsElemRef.innerHTML = Clock.formatValue(now.getSeconds());
        this.hoursElemRef.innerHTML = Clock.formatValue(now.getHours());
    }

    updateRef({ element, value }) {
        element.classList.remove('updated');
        element.classList.add('removed')

        setTimeout(() => { 
            element.classList.remove('removed');
            element.classList.add('updated');

            element.innerHTML = Clock.formatValue(value);
        }, 200);
    } 
}