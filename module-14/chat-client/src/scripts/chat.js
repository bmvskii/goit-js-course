import { unwrap } from './utils';
import refs from './refs';
import {
  syncTokens,
  renderLog,
  sendMessage,
  updateToken,
  processInvitationsToDm,
  processDMInvitationAccept,
  processDMInvitationReject,
  addDMInvitationsEventListener,
  renderPrivateMessage,
  renderPublicMessage,
} from './chat-utils';
import types from './actionTypes';
import { showError } from './notifications';
import { changeChatStatus } from './renderUtils';

const serverConnectionUrl = 'ws://127.0.0.1:7000';
let socket = new WebSocket(serverConnectionUrl);
let intervalId = null;

export const conn = socket;

refs.chatArea.addEventListener('click', addDMInvitationsEventListener);

refs.joinChatButton.addEventListener('click', event => {
  event.preventDefault();

  const username = refs.usernameInput.value || 'Anonymous';
  const id = localStorage.getItem('id');

  const payload = { type: types.JOIN, username, id };
  sendMessage(payload);

  document.body.classList.add('joined');
});

refs.sendMessageButton.addEventListener('click', event => {
  event.preventDefault();

  const text = refs.messageArea.value || 'Empty message';
  const id = localStorage.getItem('id');

  const payload = { type: types.MESSAGE, text, id };
  sendMessage(payload);
});

socket.addEventListener('open', () => {
  changeChatStatus('on');
});

socket.addEventListener('close', () => {
  showError('Some internal problems with chat');
  changeChatStatus('off');
});

socket.addEventListener('message', event => {
  try {
    const msg = unwrap(event.data);
    
    const actions = {
      [types.LOG]: renderLog,
      [types.MESSAGE]: renderPublicMessage,
      [types.PRIVATE_MESSAGE]: renderPrivateMessage,
      [types.INITIAL]: syncTokens,
      [types.ERROR]: showError,
      [types.UPDATE_TOKEN]: updateToken,
      [types.INVITE_TO_CHAT]: processInvitationsToDm,
      [types.REJECT_INVITATION]: processDMInvitationReject,
      [types.ACCEPT_INVITATION]: processDMInvitationAccept,
    };

    const currentAction = actions[msg.type];
    currentAction(msg);

  } catch (err) {
    showError(err);
  }
});

socket.addEventListener('error', event => {
  console.log('ERROR:', event);
});
