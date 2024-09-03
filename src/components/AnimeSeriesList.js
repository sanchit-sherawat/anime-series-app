// src/components/AnimeSeriesList.js
import React, { useEffect, useState } from 'react';
// import animeSeriesService from '../services/animeSeriesService';
import AnimeCard from './cards/AnimeCard';
import { useNavigate } from 'react-router-dom';
import animeService from '../services/animeService';


const AnimeSeriesList = () => {
  const [animeSeriesList, setAnimeSeriesList] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await animeService.getAnimeCards()
        console.log(response)
        setAnimeSeriesList(response.data);
      } catch (error) {
        console.error('Error fetching Anime Series:', error);
        // Handle error, e.g., show an error message
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures this effect runs once on mount

  const handleCardHover = () => {
    console.log('Hovered over a card');
    // Add your hover handling logic here
    // return(
    //   // <div className="card-container"><p>{e}</p></div>
    // )

  };

  const handleCardLeave = () => {
    console.log('Left a card');
    // Add your leave handling logic here
  };
  const handleCardClick = (animename) => {
    console.log(`Clicked on ${animename}`);
    // // Add your click handling logic here
    // <Navigate to="/add-anime-series" state={{ todos: animename}} replace={true} />
    navigate('/anime/anime-series/player', { state: { todos: animename } });
  };

  return (
    <div>
      <h2>Anime Series List</h2>
      {/* <ul>
        {animeSeriesList.map((animeSeries) => (
          <li key={animeSeries._id}>
            <strong>{animeSeries.animename}</strong>
            <p>{animeSeries.description}</p>
            <p>Count: {animeSeries.count}</p>
          </li>
        ))}
      </ul> */}
      <div className="card-container">
      {animeSeriesList.map((anime) => (
        
        <AnimeCard
          key={anime.animename}
          {...anime}
          onClick={() => handleCardClick(anime)}
          onMouseEnter={()=>handleCardHover(anime.description)}
          onMouseLeave={()=>handleCardLeave()}
        />
      ))}
    </div>
    </div>
  );
};

export default AnimeSeriesList;
