import axios from 'axios';

const apiURL = 'https://books.ioasys.com.br/api/v1/'

const api = axios.create({
    baseURL: apiURL,
});

api.interceptors.response.use(async response => {
  if (response.status === 401) {
    // redirecionar o usuário por que o token dele não é válido ou expirado
  }
})

export { api }