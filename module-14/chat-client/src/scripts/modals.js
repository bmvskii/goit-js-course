import { sendMessage } from './chat-utils';
import types from './actionTypes';

export const inviteModalClickHandler = event => {
  const { target: elem, currentTarget: wrapper } = event;

  if (elem.classList.contains('action__button')) {
    const recipientId = localStorage.getItem('id');
    const { id: requesterId } = elem.closest('.modal__actions').dataset;
    const payload = {
      recipientId,
      requesterId,
    };

    if (elem.classList.contains('action__button--accept')) {
      payload.type = types.ACCEPT_INVITATION;
    } else if (elem.classList.contains('action__button--reject')) {
      payload.type = types.REJECT_INVITATION;
    }
    
    sendMessage(payload);
    wrapper.remove();
  }
};

export const closeModalHandler = event => {
  const { target: elem, currentTarget: wrapper } = event;

  if (
    !elem.closest('.modal') ||
    elem.classList.contains('modal__button--close')
  ) {
    wrapper.remove();
  }
};

export const privateChatModalHandler = event => {
  const { target: elem } = event;

  if (elem.classList.contains('modal__button--send-message')) {
    const { id: to } = elem.dataset;
    const from = localStorage.getItem('id');
    const text = elem.previousElementSibling.value;

    const payload = {
      text,
      from,
      to,
      type: types.PRIVATE_MESSAGE,
    };

    sendMessage(payload);
  }
};
