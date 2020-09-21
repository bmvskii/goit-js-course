import './styles.scss';

import moment from 'moment';
import Clock from './clock/index.js';

const startButton = document.querySelector('.form__button--start');

const onClickHandler = () => {
    const minutes = document.querySelector('.form__input[name="minutes"]').value;
    const hours = document.querySelector('.form__input[name="hours"]').value;
    const seconds = document.querySelector('.form__input[name="seconds"]').value;

    const now = moment();
    const to = moment().hours(+hours).minutes(+minutes).seconds(+seconds);

    console.log(now);
    console.log(to);

    // const clock = new Clock();
    // clock.init();
}

startButton.addEventListener('click', onClickHandler);

