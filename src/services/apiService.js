// services/apiService.js
import axios from 'axios';

const API_BASE_URL = 'http://localhost:3001';
const GO_API_BASE_URL = 'http://localhost:8081';


export const apiService = axios.create({
  baseURL: API_BASE_URL,
});

export const goApiService = axios.create({
  baseURL: GO_API_BASE_URL,
});


// Function to get token from local storage
const getToken = () => localStorage.getItem('accessToken');

// Request interceptor to add the token to headers
apiService.interceptors.request.use(config => {
  const token = getToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}, error => {
  return Promise.reject(error);
});



// export default apiService;
