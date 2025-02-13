import axios from 'axios';

export const instance = axios.create({
  baseURL: import.meta.env.VITE_ROOT_BASE_URL,
});
