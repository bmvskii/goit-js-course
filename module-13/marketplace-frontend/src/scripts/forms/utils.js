export const setInputError = (input, errorText) => {
  const inputWrapper = input.closest('.form__block');

  if (inputWrapper.classList.contains('form__block--hasError')) {
    return;
  }

  inputWrapper.classList.add('form__block--hasError');

  const errorBlock = input.nextElementSibling;
  errorBlock.textContent = errorText;
};

export const getFormData = (type = 'registration') => {
  const formClass = {
    ['registration']: 'register',
    ['sign-in']: 'auth',
  };

  const form = document.querySelector(`.${formClass[type]}-form`);

  if (type === 'registration') {
    const { fullname, password, email } = form;
    return {
      email: email.value,
      password: password.value,
      fullname: fullname.value,
    };
  } else if (type === 'sign-in') {
    const { password, email } = form;
    return {
      email: email.value,
      password: password.value,
    };
  }
};

export const isPasswordStrengthEnough = password => {
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

export const onBlockFocusHandler = event => {
  const { currentTarget } = event;
  const errorBlock = currentTarget.querySelector('.form__block-error');
  errorBlock.textContent = '';

  currentTarget.classList.remove('form__block--hasError');
};
