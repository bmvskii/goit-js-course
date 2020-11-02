import service from './service/marketplaceService';

document.addEventListener('DOMContentLoaded', () => {
  const submitButton = document.querySelector('.form__button');
  const errors = {
    EMPTY_FIELD: 'Поле пустое.',
    MIN_VALUE_LENGTH: 'Должно быть не меньше 8 символов.',
    NOT_ENOUGHT_STRENGTH: 'Недосточно сложный пароль.',
    NOT_MATCHES: 'Пароли не совпадают.',
  };

  const setInputError = (input, errorText) => {
    const inputWrapper = input.closest('.form__block');

    if (inputWrapper.classList.contains('form__block--hasError')) {
      return;
    }

    inputWrapper.classList.add('form__block--hasError');

    const errorBlock = input.nextElementSibling;
    errorBlock.textContent = errorText;
  };

  const isPasswordStrengthEnougth = password => {
    const symbols = '@!@#$%^&*()_+|}{/.,;:`~$%^&*%$#';
    const digits = '0123456789';
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    let hasDigits = false;
    let hasSymbols = false;
    let hasUppercasedLetter = false;

    password.split('').forEach(letter => {
      if (symbols.includes(letter)) {
        hasSymbols = true;
      }
      if (digits.includes(letter)) {
        hasDigits = true;
      }
      if (letters.includes(letter)) {
        hasUppercasedLetter = true;
      }
    });

    if (!hasDigits || !hasSymbols || !hasUppercasedLetter) {
      return false;
    }

    return true;
  };

  const onFormSubmitHandler = event => {
    event.preventDefault();

    const { target } = event;
    const { fullname, password, check_password, email } = target.parentElement;
    const {
      EMPTY_FIELD,
      NOT_ENOUGHT_STRENGTH,
      MIN_VALUE_LENGTH,
      NOT_MATCHES,
    } = errors;

    [password, fullname, check_password, email].forEach(input => {
      if (input.value === '') {
        setInputError(input, EMPTY_FIELD);
      }
    });

    [password, check_password].forEach(input => {
      if (input.value.length < 8 && input.value.length > 0) {
        setInputError(input, MIN_VALUE_LENGTH);
      }
    });

    if (!isPasswordStrengthEnougth(password.value)) {
      setInputError(password, NOT_ENOUGHT_STRENGTH);
    }

    if (password.value !== check_password.value) {
      setInputError(check_password, NOT_MATCHES);
    }

    const hasErrors = document.querySelector('.form__block--hasError') !== null;
    debugger;

    if (!hasErrors) {
      const payload = {
        email: email.value,
        password: password.value,
        fullname: fullname.value,
      };

      service
        .register(payload)
        .then(response => {
          debugger;
        })
        .catch(error => {
          console.log(error);
        });
    }
  };

  const onBlockFocusHandler = event => {
    const { currentTarget } = event;
    const errorBlock = currentTarget.querySelector('.form__block-error');
    errorBlock.textContent = '';

    currentTarget.classList.remove('form__block--hasError');
  };

  document.querySelectorAll('.form__block').forEach(block => {
    block.addEventListener('click', onBlockFocusHandler);
  });

  submitButton.addEventListener('click', onFormSubmitHandler);
});
