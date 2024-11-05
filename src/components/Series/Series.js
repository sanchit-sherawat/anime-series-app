import React, { useState, useEffect } from 'react';
// import React from "react";
// import ReactPlayer from "react-player";
import VideoPlayer from "../playerandlist/player";
import { useLocation, useNavigate } from 'react-router-dom';
import animeSeriesService from '../../services/animeSeriesService';
import animeService from '../../services/animeService';

import './player.css'

const VideoPlayers = () => {
    const location = useLocation();
    const todos = location?.state?.todos;
    const [play, setPlay] = useState(false)
    const [comment, setComment] = useState("")

    const [animeSeriesList, setAnimeSeriesList] = useState([]);
    const [comments, setComments] = useState([])
    const [language,setLanguage]= useState(0)
    const navigate = useNavigate();

    // const navigate = useNavigate();

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
    }, []);
    // console.log("todo", todos)
    const [values, setValues] = useState([{
        animename: todos ? todos.animename : "",
        description: todos ? todos.description : '',
        count: todos ? todos.totalEpisode : "",
        server: '',
        language: '',
        scries: [{ name: '', url: '' }],
    }]);
    const [url, setUrl] = useState('')
    const [epname, setEpName] = useState('')


    // const [errors, setErrors] = useState({
    //     animename: '',
    //     description: '',
    //     count: '',
    //     server: '',
    //     language: '',
    //     scries: [],
    // });posterURL

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await animeSeriesService.getAnimeSeriesById(todos).then((res) => {
                    return res
                })
                console.log(response.data, "serise")
                setValues(response.data);
                setUrl(response.data[0]?.scries[0]?.url)
                setEpName(response.data[0]?.scries[0]?.name)
            } catch (error) {
                console.error('Error fetching Anime Series:', error);
                // Handle error, e.g., show an error message
            }
        };

        fetchData();
    }, [todos]);


    const setOnclick = (e) => {
        console.log(e?.url, "onclock")
        setUrl(e?.url)
        setEpName(e?.name)
        setPlay(!play)

    }

    const handleCardClick = (animename) => {
        console.log(`Clicked on ${animename}`);
        // // Add your click handling logic here
        // <Navigate to="/add-anime-series" state={{ todos: animename}} replace={true} />
        navigate('/anime/anime-series/player', { state: { todos: animename } });
        // window.location.reload()
        window.scrollTo(0, 0)
    };

    const commentSubmit = () => {
        if (comment) {
            setComments([...comments, comment]);
            setComment(''); // Clear the input after submitting
        }
    }
    return (

        <div className="container">
            <div className="video-player-container">
                <VideoPlayer values={{ url, play }} />
                <h1>{todos.animename} {epname}</h1>
                <div className='likelanguage'>
                    {values?.map((value, key) => (<div>
                        <input type="radio" id="html" name="fav_language" value={key} onChange={(e)=>setLanguage(e.target.value)}  />
                        <label for="html"  >{value.language}</label>
                       {
                        // alert(language) 
                       
                       }
                        {/* <h1>{value.language}</h1> */}
                    </div>
                    )
                    )}
                    <div style={{ display: "flex", gap: "16px", }}>
                        <i class="fa fa-thumbs-up" aria-hidden="true"></i>
                        <i class="fa fa-thumbs-down" aria-hidden="true"></i>
                    </div>
                </div>

                <div className='videodes'>{todos.description}</div>

                <div className='videodes1'>

                    {/* {todos.description} */}
                    <h3>Comments</h3>

                    <input
                        className="inputComments"
                        placeholder="Add a Comment ..."
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                    />
                    <button onClick={commentSubmit}>Submit</button>

                    {comments.map((com, key) => (
                        <div key={key}>
                            <hr />
                            <p>{com}</p>
                            <hr />
                        </div>
                    ))}

                </div>
            </div>
            <div className="lift-list-container">
                <div className="video-list-container">
                    <div className='navlist'>
                        <button>{values[0]?.server}</button>
                    </div>
                    <div className='video-list'>

                        {values[language]?.scries?.map((video, key) => (
                            <div key={key} className={epname !== video.name ? "video-list-url" : "video-list-url-click"} onClick={(e) => setOnclick(video)} >
                                <div>

                                    <img src={todos.posterURL} className='imagethum' alt="Forest" />
                                </div>

                                <div>
                                    {todos.animename} {video?.name}
                                    <p style={{
                                        color: "#bdbdbd",
                                        fontSize: "12px",
                                        fontStyle: "oblique"
                                    }}>
                                        {"anime world"}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>



                <div className='randomlist'>
                    <div className='video-list'>
                        {/* <hr></hr> */}


                        {animeSeriesList.map((video, key) => (

                            (video.animename ? video.animename !== todos.animename : video.animename) ? <div key={key} className='video-list-url' onClick={(e) => handleCardClick(video)} >
                                <div className='randomcard'>
                                    <i style={{
                                        // margin: "10%",
                                        padding: "5px",
                                        position: "absolute"
                                    }} class="fa fa-play" aria-hidden="true"></i>
                                    <img src={video.posterURL} className='imagethum1' alt="Forest" />
                                </div>

                                <div>
                                    {video.animename} {video?.name}
                                    <p style={{
                                        color: "#bdbdbd",
                                        fontSize: "12px",
                                        fontStyle: "oblique"
                                    }}>
                                        {"anime world"}
                                    </p>
                                </div>
                            </div> : <></>
                        ))}
                    </div>


                </div>
            </div>

        </div >


    );
};

export default VideoPlayers;
