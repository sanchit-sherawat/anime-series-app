import React, { useEffect, useState } from 'react';
import { Route, Routes, Navigate, useNavigate } from "react-router-dom";
import AnimeCardList from '../components/AnimeCardList';
import AnimeCardForm from '../components/AnimeCardForm';
import AnimeSeriesList from '../components/AnimeSeriesList';
import AnimeForm from '../components/AnimeSeriesForm';
import Navbar from '../components/Navbar';
import VideoPlayers from '../components/Series/Series';
import ProtectedRoutes from './protectedRoutes';
import Login from '../components/aouth/Login';
import RoutesCard from './routesCards';
// import ProfileSide from '../profilecomponent/profileSide';
import Home from '../profilecomponent/home';
import AnimeSide from './animeside';
import "./homeCard.css"
import MiniComponents from '../miniComponents/miniComponents';

const AppRoutes = () => {
    const navigate = useNavigate();
    const [token, setToken] = useState(null);
    const [siteChange, setSiteChange] = useState("")


    useEffect(() => {
        const accessToken = localStorage.getItem("accessToken");
        setToken(accessToken); // Set token if it exists
    }, []);

    if (!token) {
        // If there's no token, show only the Login component
        // return <Login />;
        return <Routes>  <Route path="*" element={<Navigate to="/login" replace />} /> <Route path='/login' element={<Login />} ></Route></Routes>
    }
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
        setSiteChange(animename)
        navigate("/" + animename)
        // Add your click handling logic here
        // <Navigate to="/add-anime-series" state={{ todos: animename}} replace={true} />
        // navigate('/add-anime-series', { state: { todos: animename } });
    };


    return (
        <>
            {/* If token exists, show the Navbar and the rest of the app */}
            {siteChange === "" ? PageRoutes(handleCardClick, handleCardHover, handleCardLeave) : <></>}
            {/* <RoutesCard animename={"Profile Site"} />
            <RoutesCard animename={"Todo  Site"} /> */}
            <Routes>  <Route path="/login" element={<Navigate to="/home" replace />} /></Routes>


            {siteChange === "anime" ? anmineSide() : <></>}
            {siteChange === "profile/home" ? <Home /> : <></>}
            {siteChange === "mini" ? <MiniComponents /> : <></>}


        </>
    );
};

export default AppRoutes;

function PageRoutes(handleCardClick, handleCardHover, handleCardLeave) {
    return <div className="homecontainer">
        <RoutesCard
            animename={"Anime Site"}
            onClick={() => handleCardClick("anime")}
            onMouseEnter={() => handleCardHover("anime.description")}
            onMouseLeave={() => handleCardLeave()} />
        <RoutesCard
            animename={"Profile Site"}
            onClick={() => handleCardClick("profile/home")}
            onMouseEnter={() => handleCardHover("anime.description")}
            onMouseLeave={() => handleCardLeave()} />
        <RoutesCard
            animename={"mini"}
            onClick={() => handleCardClick("mini")}
            onMouseEnter={() => handleCardHover("anime.description")}
            onMouseLeave={() => handleCardLeave()} />
        <RoutesCard
            animename={"ToDO Site"}
            onClick={() => handleCardClick("ToDO")}
            onMouseEnter={() => handleCardHover("anime?.description")}
            onMouseLeave={() => handleCardLeave()} /></div>;
}

function anmineSide() {
    return <> <Routes >
        {/* <Route path="/anime" element={<Navigate to="anime/anime-cards" replace />} /> */}

        <Route path="/anime" element={<ProtectedRoutes><AnimeSide /></ProtectedRoutes>} >
            <Route path="anime-cards" element={<ProtectedRoutes><AnimeCardList /></ProtectedRoutes>} />
            <Route path="add-anime" element={<ProtectedRoutes><AnimeCardForm /></ProtectedRoutes>} />
            <Route path="anime-series" element={<ProtectedRoutes><AnimeSeriesList /></ProtectedRoutes>} />
            <Route path="add-anime-series" element={<ProtectedRoutes><AnimeForm /></ProtectedRoutes>} />
            <Route path="anime-series/player" element={<ProtectedRoutes><VideoPlayers /></ProtectedRoutes>} />
            <Route path="*" element={<Navigate to="/" replace />} /> {/* Catch-all route */}
        </Route>
    </Routes></>;
}

// function ProfileSides() {
//     return <ProfileSide />
// }
