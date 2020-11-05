import { Injectable } from '@nestjs/common';

@Injectable()
export class CategoriesService {
  constructor() {}

  categories = [];

  getAllCategories() {
    return this.categories;
  }

  createCategory(category) {
    this.categories.push(category);
  }

  getCategoryById(id) {
    const category = this.categories.find(category => category.id === id);
    return category;
  }

  updateCategoryById(id, body) {
    let category = this.categories.find(category => category.id === id);

    if (category) {
      category = body;
    }
  }

  removeCategoryById(id) {
    let category = this.categories.find(category => category.id === id);

    if (category) {
      return (this.categories = this.categories.filter(
        category => category.id === id,
      ));
    }
  }
}
