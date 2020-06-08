import axios from 'axios';

const api = axios.create({
    baseURL: 'http://100.115.92.205:3333'
});

export default api;