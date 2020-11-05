import { instance } from './axiosConfig';

export default {
  getAllCategories() {
    return instance.get(`/categories`);
  },
  removeCategoryById(id) {
    return instance.delete(`/categories/${id}`);
  },
  createCategory(payload) {
    return instance.post(`/categories`, payload);
  },
  updateCategoryById(id, payload) {
    return instance.put(`/categories/${id}`, payload);
  },
  getCategoryById(id) {
      return instance.get(`/categories/${id}`);
  }
};
