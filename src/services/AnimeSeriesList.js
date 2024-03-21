// src/components/AnimeSeriesList.js
import React, { useEffect, useState } from 'react';
import animeSeriesService from '../services/animeSeriesService';

const AnimeSeriesList = () => {
  const [animeSeriesList, setAnimeSeriesList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await animeSeriesService.getAnimeSeries();
        setAnimeSeriesList(response);
      } catch (error) {
        console.error('Error fetching Anime Series:', error);
        // Handle error, e.g., show an error message
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures this effect runs once on mount

  return (
    <div>
      <h2>Anime Series List</h2>
      <ul>
        {animeSeriesList.map((animeSeries) => (
          <li key={animeSeries._id}>
            <strong>{animeSeries.animename}</strong>
            <p>{animeSeries.description}</p>
            <p>Count: {animeSeries.count}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AnimeSeriesList;
