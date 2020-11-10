import { renderAllCategories } from './components/category';

export const initNavBarEventListeners = () => {
    const navBackButtonRef = document.querySelector('.nav__button');
    navBackButtonRef.addEventListener('click', renderAllCategories);
}
