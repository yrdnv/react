import axios from "../axios";

const endpoints = {
    all: () => axios.get('api/v1/post/'),
};

export default endpoints;