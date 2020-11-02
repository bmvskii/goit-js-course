const signInButtonRef = document.querySelector('.action--sign-in');
const registerButtonRef = document.querySelector('.action--register');
const modalWrapperRef = document.querySelector('.modal-wrapper');

const authButtonClickHandler = () =>
  document.body.classList.add('modal-is-open');

const modalWindowOpennessHandler = event => {
  const { target } = event;

  if (
    !target.closest('.form')
    // target !== signInButtonRef &&
    // target !== registerButtonRef
  ) {
    document.body.classList.remove('modal-is-open');
  }
};

[signInButtonRef, registerButtonRef].forEach(button =>
  button.addEventListener('click', authButtonClickHandler),
);

modalWrapperRef.addEventListener('click', modalWindowOpennessHandler);
