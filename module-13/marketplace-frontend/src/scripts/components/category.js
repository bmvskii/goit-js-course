import CategoryCard from '../../templates/categoryCard.hbs';
import ProductCard from '../../templates/productCard.hbs';
import Nav from '../../templates/navTab.hbs';

import categoryService from '../services/categoriesService';
import productsService from '../services/productService';

import { error, success } from '@pnotify/core';
import { initNavBarEventListeners } from '../common';

const app = document.getElementById('app');

const categoriesMock = {
  1: 'Fruits',
  2: 'Bakery',
  3: 'Alcohol',
};

const categoriesClickHandler = async event => {
  const { target } = event;
  const category = target.closest('.category');
  if (category) {
    const { id } = category.dataset;
    debugger;

    const {
      data: {
        data: { products },
      },
    } = await productsService.getAllProducts();
    const category = await categoryService.getCategoryById(id);

    products
      .filter(product => product.categoryId === Number(id))
      .forEach(productInfo => {
        const renderedCategory = ProductCard({
          ...productInfo,
          categoryName: categoriesMock[id],
        });
        productsWrapper.insertAdjacentHTML('beforeend', renderedCategory);
      });

    app.innerHTML = `<div class="products">${productsWrapper.innerHTML}</div>`;
    app.insertAdjacentHTML('afterbegin', Nav());
    initNavBarEventListeners();
  }
  // } catch (err) {
  //   error({ text: err });
  // }

  // categoryService
  //   .getCategoryById(id)
  //   .then(() => {
  //     result.forEach(productInfo => {
  //       const renderedCategory = ProductCard({
  //         ...productInfo,
  //         categoryName: categoriesMock[id],
  //       });
  //       productsWrapper.insertAdjacentHTML('beforeend', renderedCategory);
  //     });

  //     app.innerHTML = `<div class="products">${productsWrapper.innerHTML}</div>`;
  //     app.insertAdjacentHTML('afterbegin', Nav());
  //     initNavBarEventListeners();
  // })
  // .catch(err => {
  //   error({ text: err });
  // });

  // productsService
  //   .getAllProducts()
  //   .then(response => {
  //     const {
  //       data: { data: products },
  //     } = response;
  //     const productsWrapper = document.createElement('div');

  //     const result = products.filter(product => {
  //       return product.categoryId === Number(id);
  //     });

  //     categoryService
  //       .getCategoryById(id)
  //       .then(() => {
  //         result.forEach(productInfo => {
  //           const renderedCategory = ProductCard({
  //             ...productInfo,
  //             categoryName: categoriesMock[id],
  //           });
  //           productsWrapper.insertAdjacentHTML('beforeend', renderedCategory);
  //         });

  //         app.innerHTML = `<div class="products">${productsWrapper.innerHTML}</div>`;
  //         app.insertAdjacentHTML('afterbegin', Nav());
  //         initNavBarEventListeners();
  //       })
  //       .catch(err => {
  //         error({ text: err });
  //       });
  //   })
  //   .catch(err => {
  // error({ text: err });
  // });
};

export const renderAllCategories = async () => {
  // try {
  const { data: categories } = await categoryService.getAllCategories();
  const categoriesWrapper = document.createElement('div');

  categories.forEach(categoryInfo => {
    const renderedCategory = CategoryCard(categoryInfo);
    categoriesWrapper.insertAdjacentHTML('beforeend', renderedCategory);
  });

  app.innerHTML = `<div class="categories">${categoriesWrapper.innerHTML}</div>`;
  app
    .querySelector('.categories')
    .addEventListener('click', categoriesClickHandler);
  // } catch (err) {
  //   error({ text: err });
  // }
};
