const signInButtonRef = document.querySelector('.action--sign-in');
const registerButtonRef = document.querySelector('.action--register');
const modalWrappersRefs = document.querySelectorAll('.modal-wrapper');

const authButtonClickHandler = type =>
  document.body.classList.add(`${type}-modal-is-open`);

export const closeAuthModal = () => {
  const classes = document.body.classList.value.split(' ');
  const modalClass = classes.find(_class => {
    return _class.includes('modal-is-open');
  });
  document.body.classList.remove(modalClass);
};

const modalWindowOpennessHandler = event => {
  const { target } = event;

  if (
    !target.closest('.form')
    // target !== signInButtonRef &&
    // target !== registerButtonRef
  ) {
    closeAuthModal();
  }
};

signInButtonRef.addEventListener('click', () => authButtonClickHandler('auth'));
registerButtonRef.addEventListener('click', () =>
  authButtonClickHandler('register'),
);

modalWrappersRefs.forEach(modalWrapper =>
  modalWrapper.addEventListener('click', modalWindowOpennessHandler),
);
