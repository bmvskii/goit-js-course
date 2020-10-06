

const callback = () => {
    const tabsRef = document.querySelector('.tabs');
    const tabsContentRef = document.querySelector('.tabs-content');

    let activeTabRef = document.querySelector('.tab--active');

    const onTabClickHandler = (event) => {
        const { target } = event;
        const newActiveTabLiRef = target.closest('.tab');
        const activeTabContentRef = tabsContentRef.querySelector('.tab-content--active');
        let newActiveTabLiIndex;

        Array.from(tabsRef.children).forEach((item, index) => {
            if (item === newActiveTabLiRef) {
                newActiveTabLiIndex = index;
            }
        });

        activeTabContentRef.classList.remove('tab-content--active');
        tabsContentRef.children[newActiveTabLiIndex].classList.add('tab-content--active');

        activeTabRef.classList.remove('tab--active');
        newActiveTabLiRef.classList.add('tab--active');

        activeTabRef = newActiveTabLiRef;
    }

    tabsRef.addEventListener('click', onTabClickHandler);
}

document.addEventListener('DOMContentLoaded', callback);