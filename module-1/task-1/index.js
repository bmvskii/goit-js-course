
// @@@@@@@ ПРИМЕР ВВОД И ОБРАБОТКА ПАРОЛЯ

let attempts = 0;
const MAX_ATTEMPTS_AMOUNT = 5;

do {
    console.log("ПОПЫТКА № ", attempts + 1);
    if (attempts < MAX_ATTEMPTS_AMOUNT) {
        attempts++;
    } else {
        break;
    }

    const pswd = prompt("Введите пароль:");
    const digits = '0123456789';
    const symbols = '!@#$%^&*()_+';

    let hasDigits = false;
    let hasSymbols = false;
    let hasUppercasedLetter = false;

    for (let i = 0; i < pswd.length; i++) {
        if (digits.includes(pswd[i])) {
            hasDigits = true;
        }
        if (symbols.includes(pswd[i])) {
            hasSymbols = true;
        }
        if (pswd[i] === pswd[i].toUpperCase()) {
            hasUppercasedLetter = true;
        }
    }

    if (pswd.length === 0) {
        console.log("Пароль пустой.");
        continue;
    }

    if (pswd.length < 8) {
        console.log("Длина пароля должна быть больше 8 символов");
        continue;
    }

    if (!hasUppercasedLetter) {
        console.log("В пароле отстутствет хотя бы 1 большая буква");
        continue;
    }

    if (!hasSymbols) {
        console.log("В пароле отстутствуют символы");
        continue;
    }

    if (!hasDigits) {
        console.log("В пароле отстутствуют цифры");
        continue;
    }

    break;

} while (true);


if (attempts < MAX_ATTEMPTS_AMOUNT) {
    alert("Пароль успешно установлен!");
} else {
    alert("Перезагрузите страницу, чтобы повторить попытку сначала.");
}
