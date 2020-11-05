import { instance } from './axiosConfig';

export default {
  register(payload) {
    return instance.post(`/users/register`, payload);
  },
  signIn(payload) {
    return instance.post(`/users/signin`, payload);
  },
  signOut() {
    return instance.post(`/users/signout`, payload);
  },
};
