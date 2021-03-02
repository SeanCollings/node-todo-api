import axios from 'axios';
import { getCookie } from '.';
import { API_URL, LOCAL_TOKEN } from '../constants';

const http = axios.create({
  baseURL: API_URL,
});

http.interceptors.request.use(
  (config) => {
    const token = getCookie(LOCAL_TOKEN);
    if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default http;
