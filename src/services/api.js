import axios from 'axios';

const api = axios.create({
    baseURL: 'https://www.petrescue.com.au/listings/search'
});

export default api;