import axios from 'axios';

const config = {
  baseURL: 'http://localhost:3000',
  headers: {
    'Content-Type': 'application/json',
  },
};

export const wrapAxiosWithToken = () => {
  const token = localStorage.getItem('user-token');
  if (token !== null) {
    instance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  }
};

export const instance = axios.create(config);
