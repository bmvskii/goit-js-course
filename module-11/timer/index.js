class Counter {
    constructor(initialValue = 0) {
        this._value = initialValue;
        this._timerId = null;
    }

    start() {
        console.log("---- Timer started ----");

        // ---- 1 вариант
        // const self = this;
        // console.log("OUTER THIS:", self === this);

        // self._timerId = setInterval(function() {
            // console.log("INNER THIS:", self === this);
            // self.show();
        // }, 1000);

        // ---- 2 вариант
        this._timerId = setInterval(this.show.bind(this), 1000);

        // ---- 3 вариант
        // this._timerId = setInterval(() => this.show(), 1000);

        // ---- 4 вариант
        // this._timerId = setInterval(this.show, 1000, this);

        // ---- 5 вариант
        // this._timerId = setInterval(function(ctx) {
        //     ctx.show();
        // }, 1000, this);
    }

    // ---- для 4 варианта
    // show(that) {
            // that.showValue();
            // that._value++;
    // }

    show() {
        this.showValue();
        this._value++;
    }

    showValue() {
        console.log("Current value:", this._value);
    }

    isActive() {
        return this._timerId !== null;
    }

    stop() {
        clearInterval(this._timerId);
        this._timerId = null;
        this._value = 0;

        console.log("---- Timer stopped ----");
    }
}

// const counter = new Counter();
// const counter1 = new Counter(10);
// const counter2 = new Counter(20);

// counter.start();
// counter1.start();
// counter2.start();