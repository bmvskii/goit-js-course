import { instance } from './axiosConfig';

export default {
  getAllProducts() {
    return instance.get(`/products`);
  },
  removeProductById(id) {
    return instance.delete(`/products/${id}`);
  },
  createProduct(payload) {
    return instance.post(`/products`, payload);
  },
  updateProductById(id, payload) {
    return instance.put(`/products/${id}`, payload);
  },
  getProductById(id) {
      return instance.get(`/products/${id}`);
  }
};
