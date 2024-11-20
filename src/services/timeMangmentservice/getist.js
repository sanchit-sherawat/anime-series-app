// src/services/animeSeriesService.js
// const BASE_URL = 'http://localhost:3001/api/animeSeries';


// services/animeService.js
import {apiService} from '../apiService';
// src/services/animeSeriesService.js
// const BASE_URL = 'http://localhost:3001/api/animeSeries';

const getList = () => apiService.get('/times/usertimelist');
const getListByDate = (data) => apiService.post(`/times/getalltimemanagementbydate`,data);
const getListByUser = (data) => apiService.post(`/times/getalltimemanagementbyuser`,data);

const createTimeManagement = (data) => apiService.post('/times/createtime', data);

const gettimelist = {
    getList,
  // getAnimeSeriesById,
  getListByDate,
  createTimeManagement,
  getListByUser,
};

// export default animeSeriesService;
export default gettimelist;