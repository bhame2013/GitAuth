import axios from "axios";
import { parseCookies } from "nookies";

function getAPIClient(ctx?: any) {
  const { "auth.token": token } = parseCookies(ctx);

  const api = axios.create({
    baseURL: "https://books.ioasys.com.br/api/v1/",
  });

  api.interceptors.request.use((config) => {
    return config;
  });

  if (token) {
    api.defaults.headers["Authorization"] = `Bearer ${token}`;
  }

  return api;
}

const api = getAPIClient();

export { api };
