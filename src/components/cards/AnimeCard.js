// AnimeCard.js
import React, { useState } from 'react';

const AnimeCard = ({ animename, description, totalEpisode, posterURL, onClick, onMouseEnter, onMouseLeave ,count}) => {
    const [isHovered, setIsHovered] = useState(false);
    if (!animename) {
        return <></>;
    }

    return (
        <div className={`card ${isHovered ? 'hovered' : ''}`} onClick={onClick}
            onMouseEnter={() => {
                setIsHovered(true);
                onMouseEnter();
            }}
            onMouseLeave={() => {
                setIsHovered(false);
                onMouseLeave();
            }}
        >
            <img src={posterURL} alt={animename} className="anime-img" />
            <div className="container">
                <h4><b>{animename} Ep: {totalEpisode?totalEpisode:count} </b></h4>
                <br />
                {isHovered ? <p>{description}</p> : <p >...</p>}
            </div>
        </div>
    );
};

export default AnimeCard;
