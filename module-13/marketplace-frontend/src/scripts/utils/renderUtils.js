export const updateUserInfoBar = userInfo => {
  const userInfoBarRef = document.querySelector('.user-info-bar');
  const authInfoRef = userInfoBarRef.querySelector(
    '.user-info-bar__data--auth > .value',
  );
  const userRoleInfoRef = userInfoBarRef.querySelector(
    '.user-info-bar__data--role > .value',
  );
  const userNameInfoRef = userInfoBarRef.querySelector(
    '.user-info-bar__data--username > .value',
  );

  const { isAuthorized, role, username } = userInfo;

  authInfoRef.textContent = isAuthorized ? 'yes' : 'no';
  userRoleInfoRef.textContent = isAuthorized ? role : 'none';
  userNameInfoRef.textContent = isAuthorized ? username : 'none';
};

export const toggleAuthActions = () =>
  document.body.classList.toggle('is-authorized');
