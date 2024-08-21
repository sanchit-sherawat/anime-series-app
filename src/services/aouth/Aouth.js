import {goApiService} from '../apiService';
// src/services/animeSeriesService.js
// const BASE_URL = 'http://localhost:3001/api/animeSeries';

// const getAnimeSeries = () => goApiService.get('/api/animeSeries');
const login = (data) => goApiService.post(`/login`,data);
const regester = (data) => goApiService.post('/adduser', data);

const goAouthService = {
//   getAnimeSeries,
  login,
  regester,
};

// export default animeSeriesService;
export default goAouthService;