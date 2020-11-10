import ProductCard from '../../templates/productCard.hbs';

const renderCategory = data => {
  return CategoryCardTemplate(data);
};



const renderCategories = categories => {
  const categoriesWrapper = document.createElement('div');
  categoriesWrapper.className = 'products';

  categories.forEach(category => {
    const renderedTemplate = renderCategory(category);
    categoriesWrapper.insertAdjacentHTML('beforeend', renderedTemplate);
  });

  document.getElementById('app').append(categoriesWrapper);
};

const data = categoriesMockData.map(category => ({
  ...category,
  isAdmin: true,
}));

renderCategories(data);
