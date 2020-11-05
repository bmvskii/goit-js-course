import CategoryCard from '../../templates/categoryCard.hbs';
import categoryService from '../services/categoriesService';
import { error, success } from '@pnotify/core';

const renderCategory = info => {
  return CategoryCard(info);
};

export const getAllCategories = () => {
  categoryService
    .getAllCategories()
    .then(response => {
      debugger;
    })
    .catch(err => {
      error({ text: err });
    });
};
