import LogTemplate from '../templates/log.hbs';
import MessageTemplate from '../templates/message.hbs';
import { error } from '@pnotify/core';

localStorage.clear();

const serverConnectionUrl = 'ws://127.0.0.1:7000';
const socket = new WebSocket(serverConnectionUrl);

const joinChatButton = document.querySelector('.button--join-chat-button');
const usernameInputRef = document.querySelector('.auth-panel .input');
const sendMessageButtonRef = document.querySelector('.button--send-message');
const messageAreaRef = document.querySelector('.send-message-form textarea');

const chatAreaRef = document.querySelector('.chat-area');
const chatLogRef = document.querySelector('.chat-logs');

const wrap = msg => JSON.stringify(msg);
const unwrap = msg => JSON.parse(msg);

joinChatButton.addEventListener('click', event => {
  event.preventDefault();
  const username = usernameInputRef.value || 'Anonymous';
  const id = localStorage.getItem('id');

  socket.send(wrap({ type: 'join', username, id }));

  document.body.classList.add('joined');
});

sendMessageButtonRef.addEventListener('click', event => {
  event.preventDefault();

  const text = messageAreaRef.value || 'Empty message';
  const id = localStorage.getItem('id');

  socket.send(wrap({ type: 'message', text, id }));
});

const transformDateFromTimestamp = date => {
  const dateOptions = {
    era: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    weekday: 'long',
    timezone: 'UTC',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
  };

  return new Date(date).toLocaleTimeString(dateOptions);
};

const addLog = logInfo => {
  const renderedLog = LogTemplate(logInfo);
  chatLogRef.insertAdjacentHTML('beforeend', renderedLog);
};

const addMsg = msgInfo => {
  const renderedMsg = MessageTemplate(msgInfo);
  chatAreaRef.insertAdjacentHTML('beforeend', renderedMsg);
};

socket.addEventListener('open', () => {});

socket.addEventListener('close', event => {
  socket.send('Bye server');
});

socket.addEventListener('message', event => {
  const msg = unwrap(event.data);

  if (msg.type === 'log') {
    const { date, text } = msg;
    const localizedDate = transformDateFromTimestamp(date);
    addLog({ text, date: localizedDate });
  } else if (msg.type === 'message') {
    const { date, text, author_name, color } = msg;
    const localizedDate = transformDateFromTimestamp(date);
    addMsg({ date: localizedDate, text, author_name, color });
  } else if (msg.type === 'initial') {
    const { id } = msg;
    if (localStorage.getItem('id') === null) {
      localStorage.setItem('id', id);
    }
  } else if (msg.type === 'error') {
    error({ text: msg.text });
  }
});

socket.addEventListener('error', event => {});

window.onbeforeunload = function () {
  socket.onclose = function () {};
  socket.close();
};
