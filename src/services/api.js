import axios from 'axios';

const api = axios.create({
    baseURL: 'https://gitlab.com/api/v4/users/fstroff'
});

export default api;