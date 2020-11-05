import authService from '../services/authService';
import { getFormData } from './utils';
import { success, error } from '@pnotify/core';
import { toggleAuthActions, updateUserInfoBar } from '../utils/renderUtils';
import { closeAuthModal } from '../modals';
import { getAllCategories } from '../components/category';
import { instance, wrapAxiosWithToken } from '../services/axiosConfig';

const signInButtonRef = document.querySelector('.auth-form .form__button');

const signInHandler = event => {
  event.preventDefault();

  const payload = getFormData('sign-in');

  authService
    .signIn(payload)
    .then(response => {
      // TODO
      // 1. Сохранить токен, добавить заголовок Authorization
      // 2. Сохранить role и token в localStorage

      const {
        data: { data, message },
      } = response;
      const { token, fullname, role } = data;

      const updatedUserInfo = {
        isAuthorized: true,
        role,
        username: fullname,
      };
      updateUserInfoBar(updatedUserInfo);
      toggleAuthActions();
      success({ text: `User: ${fullname} successfully signed in.` });
      closeAuthModal();

      localStorage.setItem('user-token', token);
      localStorage.setItem('user-role', role);

      wrapAxiosWithToken();

      getAllCategories();
      // debugger;
    })
    .catch(err => {
      error({ text: err });
    });
};

signInButtonRef.addEventListener('click', signInHandler);
