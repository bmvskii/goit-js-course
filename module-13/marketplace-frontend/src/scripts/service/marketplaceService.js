import axios from 'axios';

const instance = axios({ baseURL: 'http://localhost:3000' });

export default {
    register(payload) {
        return instance.post(`/users/register`, payload);
    },
    signIn() {
        return instance.post(`/users/signin`, payload);
    },
    signOut() {
        return instance.post(`/users/signout`, payload);
    },
}