import ProfileSide from "./profileSide";
import Profile from "./profile";
import { Route, Routes, Navigate } from "react-router-dom";
import ProtectedRoutes from "../routes/protectedRoutes";
import Tech from "./tech";



const Home = () => {
    return <div className="homepro">
        {/* <SideBar /> */}
        <Routes>
            {/* <Route path="/anime" element={<Navigate to="anime/anime-cards" replace />} /> */}

            <Route path="/profile" element={<ProtectedRoutes><Profile /></ProtectedRoutes>} >
                <Route path="home" element={<ProtectedRoutes><ProfileSide /></ProtectedRoutes>} />
                <Route path="technology" element={<ProtectedRoutes><Tech /></ProtectedRoutes>} />

                {/* <Route path="anime-cards" element={<ProtectedRoutes><AnimeCardList /></ProtectedRoutes>} />
                <Route path="add-anime" element={<ProtectedRoutes><AnimeCardForm /></ProtectedRoutes>} />
                <Route path="anime-series" element={<ProtectedRoutes><AnimeSeriesList /></ProtectedRoutes>} />
                <Route path="add-anime-series" element={<ProtectedRoutes><AnimeForm /></ProtectedRoutes>} />
                <Route path="anime-series/player" element={<ProtectedRoutes><VideoPlayers /></ProtectedRoutes>} /> */}
                <Route path="*" element={<Navigate to="/" replace />} /> {/* Catch-all route */}
            </Route>
        </Routes>

    </div>

}
export default Home