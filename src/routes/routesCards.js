// AnimeCard.js
import React, { useState } from 'react';
import './AnimeCard.css'; // Import the CSS file
import './homeCard.css'; // Import the CSS file



const RoutesCard = ({ animename, description, totalEpisode, posterURL, onClick, onMouseEnter, onMouseLeave ,count}) => {
    const [isHovered, setIsHovered] = useState(false);
    if (!animename) {
        return <></>;
    }
    

    return (<div >
        <div className={`homecard ${isHovered ? 'hovered' : ''}`} onClick={onClick}
            onMouseEnter={() => {
                setIsHovered(true);
                onMouseEnter();
            }}
            onMouseLeave={() => {
                setIsHovered(false);
                onMouseLeave();
            }}
        >
            {posterURL&&<img src={posterURL} alt={animename} className="anime-img" />}
            <div style={{display: "flex"}}>
                <h4><b>{animename} </b></h4>
                <br />
                {isHovered ? <p>{description}</p> : <p >...</p>}
            </div>
        </div>
        </div>
    );
};

export default RoutesCard;
