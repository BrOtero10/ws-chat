import axios from "axios";

const api = axios.create({
    baseURL: '/api',
    headers: {
        'Content-Type': 'application/json',
    },
});

api.interceptors.request.use(config => {
    const token = sessionStorage.getItem('access-token');
    if(token) {
        config.headers['access-token'] = token;
    }
    return config;
}, error => {
    return Promise.reject(error);
});

export default api;