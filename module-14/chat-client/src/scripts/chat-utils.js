import { wrap } from './utils';

import LogTemplate from '../templates/log.hbs';
import MessageTemplate from '../templates/message.hbs';
import InvitationModal from '../templates/invite-to-chat-modal.hbs';
import PrivateChatModal from '../templates/private-chat-modal.hbs';
import refs from './refs';

import { transformDateFromTimestamp } from './utils';
import types from './actionTypes';
import { conn } from './chat';
import {
  closeModalHandler,
  inviteModalClickHandler,
  privateChatModalHandler,
} from './modals';
import { showInfoBox, showSuccess } from './notifications';

const ID_KEY = 'id';
const CLIENT_ID = 'client_id';

export const sendCloseSignal = () => {
  const id = localStorage.getItem(ID_KEY);
  const payload = { id, type: types.CLOSE };

  sendMessage(payload);
};

export const renderLog = msg => {
  const localizedDate = transformDateFromTimestamp(msg.date);
  const logInfo = {
    text: msg.text,
    date: localizedDate,
  };
  const renderedLog = LogTemplate(logInfo);
  refs.chatLog.insertAdjacentHTML('beforeend', renderedLog);
};

export const renderPublicMessage = msg => {
  const template = renderMessage(msg);
  refs.chatArea.insertAdjacentHTML('beforeend', template);
};

export const renderPrivateMessage = msg => {
  const template = renderMessage(msg);
  const messagesRef = document.querySelector('.modal__message-area');
  messagesRef.insertAdjacentHTML('beforeend', template);
};

export const renderMessage = msg => {
  const { date, text, author_name, color, id, type } = msg;
  const localizedDate = transformDateFromTimestamp(date);

  const isNotYourMessage = localStorage.getItem(ID_KEY) !== id;
  const isPrivateMessage = type === types.PRIVATE_MESSAGE;

  // if (isNotYourMessage && !isPrivateMessage) {
  //   showDMButton = false;
  // }

  // const showDMButton = isNotYourMessage || !isPrivateMessage;

  const msgInfo = {
    date: localizedDate,
    text,
    author_name,
    color,
    showButton: isNotYourMessage,
    id,
  };

  return MessageTemplate(msgInfo);
};

export const addDMInvitationsEventListener = event => {
  const { target: elem } = event;

  if (elem.classList.contains('action--direct-message')) {
    const messageRef = elem.closest('.message');
    const authorName = messageRef.querySelector('.author__name').textContent;

    const { id } = messageRef.dataset;
    const clientId = localStorage.getItem('id');

    const payload = {
      recipientId: id,
      clientId,
      type: types.INVITE_TO_CHAT,
    };

    sendMessage(payload);
    showInfoBox(`Invitation to DM for ${authorName} successfully sent.`);
  }
};

export const processInvitationsToDm = msg => {
  const { requesterId, username } = msg;

  const data = { id: requesterId, username };
  const renderedModal = InvitationModal(data);

  document.body.insertAdjacentHTML('beforeend', renderedModal);

  const modal = document.querySelector('.modal-wrapper');

  modal.addEventListener('click', closeModalHandler);
  modal.addEventListener('click', inviteModalClickHandler);
};

export const processDMInvitationAccept = msg => {
  const { username, personId: id } = msg;
  const renderedModal = PrivateChatModal({ username, id });

  document.body.insertAdjacentHTML('beforeend', renderedModal);

  const modal = document.querySelector('.modal-wrapper');

  modal.addEventListener('click', closeModalHandler);
  modal.addEventListener('click', privateChatModalHandler);
};

export const processDMInvitationReject = msg => {
  const { text } = msg;
  showInfoBox(text);
};

export const renderPrivateMessages = msg => {};

export const applyInitialSettings = msg => {
  const { id } = msg;

  if (localStorage.getItem(ID_KEY) === null) {
    localStorage.setItem(ID_KEY, id);
  }
};

export const syncTokens = msg => {
  const { id } = msg;
  const localId = localStorage.getItem(ID_KEY);

  if (!localId) {
    localStorage.setItem(ID_KEY, id);
    showSuccess('Successfully connected to server');
  }

  if (id !== localId) {
    const payload = {
      type: types.UPDATE_TOKEN,
      oldId: id,
      newId: localId,
    };
    sendMessage(payload);
    showSuccess('Successfully refreshed connection');
  }
};

export const sendClientId = () => {
  if (localStorage.getItem(CLIENT_ID) === null) {
    const randomId = Math.random() * 10000 + 1;
    localStorage.setItem(CLIENT_ID, randomId);
  }
};

export const sendMessage = payload => {
  conn.send(wrap(payload));
};

export const updateToken = msg => {
  const { id } = msg;
  localStorage.setItem(ID_KEY, id);
};
