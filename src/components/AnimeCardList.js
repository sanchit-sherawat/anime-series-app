// components/AnimeCardList.jsx
import React, { useEffect, useState } from 'react';
import animeService from '../services/animeService';
import AnimeCard from './cards/AnimeCard';
// import { Navigate } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

const AnimeCardList = () => {
  const [animeCards, setAnimeCards] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    animeService.getAnimeCards()
      .then((response) => {
        setAnimeCards(response.data)
        console.log(response.data)
        return
      })
      .catch(error => console.error('Error fetching anime cards:', error));

  }, []);
  const handleCardHover = (e) => {
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
    // Add your click handling logic here
    // <Navigate to="/add-anime-series" state={{ todos: animename}} replace={true} />
    navigate('/anime/add-anime-series', { state: { todos: animename } });
  };

  return (

    <div className="card-container">
      {animeCards.map((anime) => (
        
        <AnimeCard
          key={anime.animename}
          {...anime}
          onClick={() => handleCardClick(anime)}
          onMouseEnter={()=>handleCardHover(anime.description)}
          onMouseLeave={()=>handleCardLeave()}
        />
      ))}
    </div>
  );
};

export default AnimeCardList;
    // <div>
    //   <h2>Anime Card List</h2>
    //   <ul>
    //     {animeCards.map(animeCard => (
    //       <li key={animeCard._id}>
    //         <strong>{animeCard.animename}</strong>
    //         <p>{animeCard.description}</p>
    //         <p>Total Episodes: {animeCard.totalEpisode}</p>
    //         <img src={animeCard.posterURL} alt={animeCard.animename} />



    //       </li>
    //     ))}
    //   </ul>
    // </div>