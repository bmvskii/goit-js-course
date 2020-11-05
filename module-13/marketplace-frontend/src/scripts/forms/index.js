import { onBlockFocusHandler } from './utils';

import './registrationForm';
import './signInForm';

document.querySelectorAll('.form__block').forEach(block => {
  block.addEventListener('click', onBlockFocusHandler);
});