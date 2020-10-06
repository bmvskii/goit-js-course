import './styles/index.scss';
import themes from './constants/themes';
import LocalStorage from './classes/localStorage';
import NoteTemplate from './templates/note.hbs';
import NoteData from './scripts/data';

const ls = new LocalStorage();
const NOTES_KEY = 'notes';

const notesWrapperRef = document.querySelector('.notes');
const formInputRef = document.querySelector('.form__input');
const formTextareaRef = document.querySelector('.form__textarea');
const formButtonRef = document.querySelector('.form__button');

const addNoteToLocalStorage = (noteInfo) => {
    if (ls.has(NOTES_KEY)) {
        const data = ls.get(NOTES_KEY);
        const newData = [...data, noteInfo];
        ls.set(NOTES_KEY, newData);
    } else {
        ls.set(NOTES_KEY, [noteInfo]);
        
        // ЭТИ СТРОКИ РАВНЫ СТРОКЕ ВЫШЕ 
        // const newArr = [];
        // newArr.push(noteInfo);
        // ls.set(NOTES_KEY, newArr);
    }
}

const createNote = (noteInfo, shouldAddToLs = true) => {
    const renderedTemplate = NoteTemplate(noteInfo);
    notesWrapperRef.innerHTML += renderedTemplate;

    if (shouldAddToLs) {
        addNoteToLocalStorage(noteInfo);
    }
};

const checkNotesInLocalStorage = () => {
    if (ls.has(NOTES_KEY)) {
        const notes = ls.get(NOTES_KEY);
        notes.forEach(note => createNote(note, false));
    } else {
        NoteData.forEach((note, index) => {
            const data = { ...note, index: index + 1 };
            createNote(data);
        });
    }
};

const addNoteClickHandler = (event) => {
    event.preventDefault();

    const title = formInputRef.value;
    const description = formTextareaRef.value;
    const index = notesWrapperRef.children.length + 1;

    const data = { title, description, index };
    createNote(data);
}; 

const removeNoteClickHandler = (event) => {
    const { target } = event;

    if (target.classList.contains('note__action--remove')) {
        const note = target.closest('.note');
        const { index } = note.dataset;
        // const index = note.getAttribute('data-index');

        const notes = ls.get(NOTES_KEY);
        const filteredNotes = notes.filter(note => note.index !== +index);

        ls.set(NOTES_KEY, filteredNotes);

        note.remove();
    }
};

checkNotesInLocalStorage();

formButtonRef.addEventListener('click', addNoteClickHandler);
notesWrapperRef.addEventListener('click', removeNoteClickHandler);

// ВАРИАНТЫ ГЕНЕРИРОВАНИЯ КАРТОЧЕК В JS

// --- 1
// const createNote = (data) => {
//     return `
//         <div class="note">
//             <div class="note__header">
//                 <h3 class="note__caption">Note #1</h3>
//                 <div class="note__actions">
//                     <button class="note__action note__action--remove">Remove</button>
//                 </div>
//             </div>
//             <h2 class="note__title">${data.title}</h2>
//             <p class="note__desc">${data.description}</p>
//         </div>`;
// };

// ---- 2
// const createNoteV2 = (data) => {
//     const noteWrapper = document.createElement('div');
//     noteWrapper.className = 'note';
// }

// Math.random();

// document.querySelector('.themes').addEventListener('click', (event) => {
//     const { target } = event;
    
//     if (!target.classList.contains('theme-button')){
//         return;
//     }

//     const { theme } = target.dataset;

//     document.body.classList = [];
//     document.body.classList.add(themes[theme])
// });