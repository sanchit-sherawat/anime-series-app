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
            posterURL="https://wallpapers.com/images/hd/anime-group-1920-x-1295-j62rgwe1mxz6pi94.jpg"
            animename={"Anime Site"}
            onClick={() => handleCardClick("anime")}
            onMouseEnter={() => handleCardHover("anime.description")}
            onMouseLeave={() => handleCardLeave()} />
        <RoutesCard
            posterURL="data:image/png;base64,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"
            animename={"Profile Site"}
            onClick={() => handleCardClick("profile/home")}
            onMouseEnter={() => handleCardHover("anime.description")}
            onMouseLeave={() => handleCardLeave()} />
        <RoutesCard
            posterURL="data:image/png;base64,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"
            animename={"mini"}
            onClick={() => handleCardClick("mini")}
            onMouseEnter={() => handleCardHover("anime.description")}
            onMouseLeave={() => handleCardLeave()} />
        <RoutesCard
            posterURL="data:image/png;base64,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"

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
