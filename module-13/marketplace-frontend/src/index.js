import { defaults } from '@pnotify/core';

import './scripts/forms';
import './scripts/modals';

import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/Material.css';
import 'material-design-icons/iconfont/material-icons.css';
import 'loaders.css';

defaults.styling = 'material';
defaults.icons = 'material';

import './sass/styles.scss';

import './scripts/components/category';
import './scripts/common';

fetch('https://restcountries.eu/rest/v2/name/asdasfvxc')
  .then(res => res.json())
  .then(result => {
    if (result.status === 404) {
      throw new Error("Country doesn't exist");
    }
  })
  .catch(err => {
    console.log(err);
  });
