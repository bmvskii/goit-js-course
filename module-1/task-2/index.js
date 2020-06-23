const rangeFrom = 1;
const rangeTo = 5;
const randomlyGeneratedNumber = Math.round(Math.random() * (rangeTo - rangeFrom) + rangeFrom);

alert(`Система загадала число от ${rangeFrom} до ${rangeTo}. Ваша задача: угадать его! Поехали :)`);

while (true) {
    const userNumber = Number(prompt("Введите число:"));

    if (Number.isNaN(userNumber) || userNumber < 1 || userNumber > 100) {
        alert("Вы ввели некоректное число. Повторите ввод!");
        continue;
    }

    if (userNumber > randomlyGeneratedNumber) {
        alert("Число больше загаданного!");
    } else if (userNumber < randomlyGeneratedNumber) {
        alert("Число меньше загаданного!");
    } else {
        alert("УРАА! Поздравляем. Вы угадали число!");
        break;
    }
};