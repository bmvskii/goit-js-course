import refs from './refs';

const status = {
  ACTIVE: 'status--active',
  INACTIVE: 'status--inactive',
};

export const changeChatStatus = (mode = 'on') => {
  const { statusBar } = refs;

  const statusBarValue = statusBar.querySelector('span');
  const cl = statusBar.classList;

  if (mode === 'off') {
    cl.remove(status.ACTIVE);
    cl.add(status.INACTIVE);
    statusBarValue.textContent = 'OFF';
  } else if (mode === 'on') {
    cl.remove(status.INACTIVE);
    cl.add(status.ACTIVE);
    statusBarValue.textContent = 'ON';
  }
};
