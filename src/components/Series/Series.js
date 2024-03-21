import React, { useState, useEffect } from 'react';
// import React from "react";
// import ReactPlayer from "react-player";
import VideoPlayer from "../playerandlist/player";
import { useLocation } from 'react-router-dom';
import animeSeriesService from '../../services/animeSeriesService';
import './player.css'

const VideoPlayers = () => {
    const location = useLocation();
    const todos = location?.state?.todos;
    const [play, setPlay] = useState(false)
    // console.log("todo", todos)
    const [values, setValues] = useState({
        animename: todos ? todos.animename : "",
        description: todos ? todos.description : '',
        count: todos ? todos.totalEpisode : "",
        server: '',
        language: '',
        scries: [{ name: '', url: '' }],
    });
    const [url,setUrl]=useState('')
    // const [errors, setErrors] = useState({
    //     animename: '',
    //     description: '',
    //     count: '',
    //     server: '',
    //     language: '',
    //     scries: [],
    // });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await animeSeriesService.getAnimeSeriesById(todos).then((res) => {
                    return res
                })
                console.log(response.data, "serise")
                setValues(response.data);
                setUrl(response.data[0]?.scries[0]?.url)
            } catch (error) {
                console.error('Error fetching Anime Series:', error);
                // Handle error, e.g., show an error message
            }
        };

        fetchData();
    }, [todos]);


    const setOnclick =(e)=>{
        console.log(e?.url,"onclock")
        setUrl(e?.url)
        setPlay(!play)

    }
    return (
     
        <div className="container">
            <div className="video-player-container">
                <VideoPlayer values={{url,play}} />
            </div>
       
            <div className="video-list-container">
            <button>{values[0]?.server}</button>
                <div className='video-list'>
                    
                    {values[0]?.scries?.map((video,key) => (
                        <div  key={key} className='video-list-url' onClick={(e)=>setOnclick(video)} >

                                {video?.name }
                        </div>
                    ))}
                </div>

            </div>
        </div>


    );
};

export default VideoPlayers;
