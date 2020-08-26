document.addEventListener('DOMContentLoaded', () => {
    const shapeContent = document.querySelector('.shape__content');
    const shape = document.querySelector('.shape');
    const textInput = document.querySelector('.form__input[data-type="text"]');
    const widthInput = document.querySelector('.form__input[data-type="width"]');
    const heightInput = document.querySelector('.form__input[data-type="height"]');
    const button = document.querySelector('button');

    const shapeOnClickHandler = (event) => {
        const { currentTarget } = event;
        currentTarget.style.borderRadius = currentTarget.style.borderRadius === '50%' ? '0' : '50%';
    };

    const textInputOnInputHandler = (event) => {
        const { currentTarget } = event;
        shapeContent.textContent = currentTarget.value;
    };

    const widthInputOnChangeHandler = (event) => {
        const { currentTarget } = event;
        shape.style.width = `${200 + +currentTarget.value}px`;
    }

    const heightInputOnChangeHandler = (event) => {
        const { currentTarget } = event;
        shape.style.height = `${200 + +currentTarget.value}px`;
    }

    const onKeyPressHandler = (event) => {
        const { code } = event;

        switch (code) {
            case 'ArrowUp': {
                // const oldPosition = Number.parseInt(shape.style.transform);
                // const translateStyles = oldPosition ?  `translateY(${oldPosition - 50}px)`: 'translateY(-50px)';
                // shape.style.transform = translateStyles;
                break;
            }
            case 'ArrowRight': {
                shape.style.transform = 'translateX(50px)';
                break;
            }
            case 'ArrowLeft': {
                shape.style.transform = 'translateX(-50px)';
                break;
            }
            case 'ArrowDown': {
                shape.style.transform = 'translateY(50px)';
                break;
            }
        }
    }

    const onSubmitHandler = (event) => {
        event.preventDefault();
        
        // const { currentTarget } = event;
        shapeContent.textContent = textInput.value;
    }

    button.addEventListener('click', onSubmitHandler);
    document.addEventListener('keydown', onKeyPressHandler);
    widthInput.addEventListener('input', widthInputOnChangeHandler);
    heightInput.addEventListener('input', heightInputOnChangeHandler);
    // textInput.addEventListener('input', textInputOnInputHandler);
    shape.addEventListener('click', shapeOnClickHandler);
});