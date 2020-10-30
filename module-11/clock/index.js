document.addEventListener('DOMContentLoaded', () => {
    const minutesElemRef = document.querySelector('.minutes');
    const hoursElemRef = document.querySelector('.hours');
    const secondsElemRef = document.querySelector('.seconds');

    const updateElement = ({ element, value }) => {
        element.classList.remove('updated');
        element.classList.add('removed');

        setTimeout(() => { 
            element.classList.remove('removed');
            element.classList.add('updated');

            element.innerHTML = formatValue(value);
        }, 300);
    } 

    const runClock = () => {
        let prevValue = new Date(); // 10/10/30

        setInterval(() => {
            const now = new Date(); // 10/10/40
            
            const minutes = now.getMinutes();
            const hours = now.getHours();
            const seconds = now.getSeconds();
    
            const updatedData = {
                'MINUTES': { element: minutesElemRef, value: minutes },
                'HOURS': { element: hoursElemRef, value: hours },
                'SECONDS': { element: secondsElemRef, value: seconds }
            }
    
            if (prevValue.getMinutes() !== now.getMinutes()) {
                updateElement(updatedData['MINUTES']);
            }
    
            if (prevValue.getHours() !== now.getHours()) {
                updateElement(updatedData['HOURS']);
            }
    
            if (prevValue.getSeconds() !== now.getSeconds()) { 
                updateElement(updatedData['SECONDS']);
            }
            
            prevValue = now;
        }, 1000);
    }

    // value.padStart(2, '0')
    const formatValue = (value) => value.toString().length === 2 ? value : `0${value}`;

    const initRefsValues = () => {
        const now = new Date();

        minutesElemRef.innerHTML = formatValue(now.getMinutes());
        secondsElemRef.innerHTML = formatValue(now.getSeconds());
        hoursElemRef.innerHTML = formatValue(now.getHours());
    }

    initRefsValues();
    runClock();
});