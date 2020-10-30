import { info, success, error, defaults } from '@pnotify/core';

import themes from './constants/themes';
import LocalStorage from './classes/localStorage';
import NoteTemplate from './templates/note.hbs';
// import NoteData from './scripts/data';
import AppService from './service/appService';

import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/Material.css';
import 'material-design-icons/iconfont/material-icons.css';
import 'loaders.css';

import './styles/index.scss';

defaults.styling = 'material';
defaults.icons = 'material';

const ls = new LocalStorage();
const service = new AppService();

const NOTES_KEY = 'notes';
const THEME_KEY = 'currentTheme';

const notesWrapperRef = document.querySelector('.notes');
const formInputRef = document.querySelector('.form__input');
const formTextareaRef = document.querySelector('.form__textarea');
const formButtonRef = document.querySelector('.form__button');
const themesWrapperRef = document.querySelector('.themes');

const addNoteToLocalStorage = noteInfo => {
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
};

const createNote = (noteInfo, shouldAddToLs = true) => {
  const renderedTemplate = NoteTemplate(noteInfo);
  notesWrapperRef.insertAdjacentHTML('beforeend', renderedTemplate);

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

const toggleLoader = () => {
  document.body.classList.toggle('is-loaded');
}

const fetchAllNotes = () => {
  toggleLoader();

  service
    .getAllNotes()
    .then(querySnapshot => {
      return querySnapshot.docs.map(doc => doc.data());
    })
    .then(notes => {
      notes.forEach(noteInfo => {
        const renderedTemplate = NoteTemplate(noteInfo);
        notesWrapperRef.insertAdjacentHTML('beforeend', renderedTemplate);
      });
    })
    .catch(err => {
      error({ text: err });
    })
    .finally(() => {
      toggleLoader();
    });
};

const addNoteClickHandler = event => {
  event.preventDefault();

  const title = formInputRef.value;
  const description = formTextareaRef.value;
  const index = notesWrapperRef.children.length + 1;

  const data = { title, description, index };
  toggleLoader();
  service
    .createNote(data)
    .then(res => {
      success({ text: `Note #${index} is successfully saved.`, delay: 1000 });
    })
    .catch(err => {
      error({ text: err });
    })
    .finally(() => {
      toggleLoader();
    });

  createNote(data);
};

const removeNoteClickHandler = event => {
  const { target } = event;

  if (target.classList.contains('note__action--remove')) {
    const note = target.closest('.note');
    const { index } = note.dataset;
    // const index = note.getAttribute('data-index');

    const notes = ls.get(NOTES_KEY);
    const filteredNotes = notes.filter(note => note.index !== +index);

    ls.set(NOTES_KEY, filteredNotes);

    service.

    note.classList.add('note--removed');

    setTimeout(() => note.remove(), 600);
  }
};

const removeThemeFromBody = () => {
  const bodyClassList = document.body.classList;
  for (const theme in themes) {
    if (bodyClassList.contains(themes[theme])) {
      bodyClassList.remove(themes[theme]);
      break;
    }
  }
};

const themeChangeHandler = event => {
  const { target } = event;

  if (target.classList.contains('theme-button')) {
    const { theme } = target.dataset;
    const activeThemeClass = themes[theme];

    removeThemeFromBody();
    ls.set(THEME_KEY, activeThemeClass);
    document.body.classList.add(activeThemeClass);
  }
};

const checkActiveThemeInLocalStorage = () => {
  if (ls.has(THEME_KEY)) {
    const activeTheme = ls.get(THEME_KEY);

    removeThemeFromBody();
    document.body.classList.add(activeTheme);
  }
};

const makeNoteImportant = event => {
  const { target } = event;

  if (target.classList.contains('note__action--importance')) {
    const note = target.closest('.note');
    note.classList.toggle('note--important');
  }
};

// PUT /password
// GET /password
// POST /password
// DELETE /password

// checkNotesInLocalStorage();
checkActiveThemeInLocalStorage();

fetchAllNotes();

formButtonRef.addEventListener('click', addNoteClickHandler);

notesWrapperRef.addEventListener('click', removeNoteClickHandler);
notesWrapperRef.addEventListener('click', makeNoteImportant);

themesWrapperRef.addEventListener('click', themeChangeHandler);
