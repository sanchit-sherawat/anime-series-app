// src/services/animeSeriesService.js
// const BASE_URL = 'http://localhost:3001/api/animeSeries';


// services/animeService.js
import {apiService} from './apiService';
// src/services/animeSeriesService.js
// const BASE_URL = 'http://localhost:3001/api/animeSeries';

const getAnimeSeries = () => apiService.get('/api/animeSeries');
const getAnimeSeriesById = (data) => apiService.post(`/api/animeSeriesbyname`,data);
const createAnimeSeries = (data) => apiService.post('/api/animeSeries', data);

const animeSeriesService = {
  getAnimeSeries,
  // getAnimeSeriesById,
  getAnimeSeriesById,
  createAnimeSeries,
};

// export default animeSeriesService;
export default animeSeriesService;
