// routes/index.js
import React from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {
    Route,
    Routes,
} from "react-router-dom";
// import App from '../components/App';
import AnimeCardList from '../components/AnimeCardList';
import AnimeCardForm from '../components/AnimeCardForm';
import AnimeSeriesList from '../components/AnimeSeriesList';
import AnimeForm from '../components/AnimeSeriesForm';
import Navbar from '../components/Navbar';
import VideoPlayers from '../components/Series/Series';

const AppRoutes = () => {
    return (
        <>
        <Navbar/>
            {/* <BrowserRouter> */}
                <Routes>
                    {/* <Route exact path="/" component={App} /> */}
                    <Route path="/anime-cards" element={<AnimeCardList />} />
                    <Route path="/add-anime" element={<AnimeCardForm />} />
                    <Route path="/anime-series" element={<AnimeSeriesList />} />
                    <Route path="/add-anime-series" element={<AnimeForm />} />
                    <Route path='/anime-series/player' element={<VideoPlayers/>}/>
                </Routes>
            {/* </BrowserRouter> */}
        </>)
};

export default AppRoutes;
