// services/animeService.js
import apiService from './apiService';

const getAnimeCards = () => apiService.get('/card/anime-cards');
const getAnimeCardById = (id) => apiService.get(`/card/anime-cards/${id}`);
const createAnimeCard = (data) => apiService.post('/card/anime-cards', data);

const animeService = {
  getAnimeCards,
  getAnimeCardById,
  createAnimeCard,
};

export default animeService;
