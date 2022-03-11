import axios from 'axios';

const apiURL = ''

const api = axios.create({
    baseURL: apiURL,
});

export { api }