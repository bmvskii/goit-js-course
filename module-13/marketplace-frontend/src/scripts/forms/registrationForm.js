import { setInputError, isPasswordStrengthEnough, getFormData } from './utils';
import errors from './errors';
import authService from '../services/authService';
import { success, error } from '@pnotify/core';
import { closeAuthModal } from '../modals';

const registerButtonRef = document.querySelector(
  '.register-form .form__button',
);

const isRegistrationFormValid = event => {
  event.preventDefault();

  const { target } = event;
  const { fullname, password, check_password, email } = target.closest('.form');
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

  if (!isPasswordStrengthEnough(password.value)) {
    setInputError(password, NOT_ENOUGHT_STRENGTH);
  }

  if (password.value !== check_password.value) {
    setInputError(check_password, NOT_MATCHES);
  }

  return document.querySelector('.form__block--hasError') === null;
};

const registrationHandler = event => {
  if (isRegistrationFormValid(event)) {
    const payload = getFormData('registration');

    authService
      .register(payload)
      .then(response => {
        const { data: { message } } = response;
        success({ text: message });
        closeAuthModal();
      })
      .catch(err => {
        error({ text: err });
      });
  } else {
      
  }
};

registerButtonRef.addEventListener('click', registrationHandler);
