import { error, success, info } from '@pnotify/core';

const config = {
    delay: 2000,
};

export const showError = msg => error({ text: msg, ...config });

export const showSuccess = msg => success({ text: msg, ...config });

export const showInfoBox = msg => info({ text: msg, ...config });
