import axios from 'axios';
import { refreshToken } from './refreshToken';

export const instance = axios.create({
  baseURL: import.meta.env.VITE_ROOT_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// 헤더 토큰 자동 추가
instance.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem('accessToken');
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

//accessToken 만료시 자동 갱신
instance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const storedRefreshToken = localStorage.getItem('refreshToken');

        if (!storedRefreshToken) {
          window.location.href = '/login';
          return Promise.reject(error);
        }

        const newToken = await refreshToken({
          accessToken: storedRefreshToken,
        });

        localStorage.setItem('accessToken', newToken.accessToken);

        originalRequest.headers.Authorization = `Bearer ${newToken.accessToken}`;
        return instance(originalRequest);
      } catch (refreshError) {
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
        window.location.href = '/';
        return Promise.reject(refreshError);
        //refreshToken 만료시 자동 로그아웃
      }
    }

    return Promise.reject(error);
  }
);
