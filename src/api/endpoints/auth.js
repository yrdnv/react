import axios from "../axios";

const endpoints = {
    login: (data) => axios.post('auth/token/login/', data),
};

export default endpoints;