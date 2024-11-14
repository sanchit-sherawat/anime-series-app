
import CircleNavBar from "./navbar/criclenav";
import ProtectedRoutes from "../routes/protectedRoutes";
import Remember from "./remember";
import UserTaskList from "./usertask/usertasklist";
import { Route, Routes, Navigate } from "react-router-dom";
import UserTaskAdd from "./usertask/addlist";



const ReHome = () => {
    return <div className="homepro">
        <CircleNavBar />
        <Routes>
            {/* <Route path="/anime" element={<Navigate to="anime/anime-cards" replace />} /> */}

            <Route path="/Remember" element={<ProtectedRoutes><Remember /></ProtectedRoutes>} >
                <Route path="tasklist" element={<ProtectedRoutes><UserTaskList /></ProtectedRoutes>} />
                <Route path="addlist" element={<ProtectedRoutes><UserTaskAdd /></ProtectedRoutes>} />

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
export default ReHome