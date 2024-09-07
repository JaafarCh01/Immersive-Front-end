import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000/api', // Adjust this if your backend is on a different port
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;