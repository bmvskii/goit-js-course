document.addEventListener('DOMContentLoaded', () => {
    const button = document.querySelector('.button');
    const input = document.querySelector('.input');
    const list = document.querySelector('.list');

    const ITEMS_LS_KEY = 'todos';

    const addItemToLocalStorage = (value) => {
        // здесь лежит значение ключа 'todos'
        const todos = localStorage.getItem(ITEMS_LS_KEY);
        // проверка на наличие 'todo' в локал сторедже
        const hasItemsInLocalStorage = todos !== null;
        let newTodos;

        if (!hasItemsInLocalStorage) {
            newTodos = [value];
        } else {
            const parsedTodos = JSON.parse(todos);
            newTodos = [...parsedTodos, value];
        }

        localStorage.setItem(ITEMS_LS_KEY, JSON.stringify(newTodos));
    };

    const createListItem = (value) => {
        const li = document.createElement('li');
        li.textContent = value;
        return li;
    }

    const onClickHandler = (event) => {        
        event.preventDefault();

        const { value } = input;
        const newListItem = createListItem(value);

        list.appendChild(newListItem);
        addItemToLocalStorage(value);        
    };

    const renderListItemsFromLocalStorage = () => {
        const todos = localStorage.getItem(ITEMS_LS_KEY);

        if (!todos) {
            return;
        }

        JSON.parse(todos).forEach(todo => {
            const li = createListItem(todo);
            list.appendChild(li);
        });
    };

    renderListItemsFromLocalStorage();
    button.addEventListener('click', onClickHandler);
});

// const user = { name: 'Ire Aderinokun', age: 25 };  

// localStorage.setItem('user', JSON.stringify(user));
// localStorage.setItem('user1', JSON.stringify(user));
// localStorage.setItem('user2', JSON.stringify(user));
// localStorage.setItem('user3', JSON.stringify(user));
// localStorage.setItem('user4', JSON.stringify(user));
// localStorage.setItem('user5', JSON.stringify(user));

// const userInfo = JSON.parse(localStorage.getItem('user'));
// const hasSomeKey = localStorage.getItem('user1') !== null;

// console.log(hasSomeKey);
// console.log(userInfo);

// localStorage.removeItem('user');

// localStorage.clear();

// // Read (Single)
// console.log( JSON.parse(localStorage.getItem('user')) ) 

// // Update
// const updatedUser = { name: 'Ire Aderinokun', age: 24 }  
// localStorage.setItem('user', JSON.stringify(updatedUser));

// // Delete
// localStorage.removeItem('user'); 

// Очистка
// localStorage.clear();

// Create
// const user = { name: 'Ire Aderinokun', age: 25 }  
// sessionStorage.setItem('user', JSON.stringify(user));

// // Read (Single)
// console.log( JSON.parse(sessionStorage.getItem('user')) ) 

// // Update
// const updatedUser = { name: 'Ire Aderinokun', age: 24 }  
// sessionStorage.setItem('user', JSON.stringify(updatedUser));

// // Delete
// sessionStorage.removeItem('user');  