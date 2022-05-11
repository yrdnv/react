import axios from "axios";


const AxiosInstance = axios.create({
    baseURL: 'http://localhost:8000/',
});

AxiosInstance.interceptors.request.use((config) => {
    const authToken = localStorage.getItem('auth_token');

    if (authToken) {
        config.headers.authorization = `Token ${authToken}`;
    }

    return config;
}, (error) => Promise.reject(error)
);

export default AxiosInstance;