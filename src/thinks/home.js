
// import CircleNavBar from "./navbar/criclenav";
import ProtectedRoutes from "../routes/protectedRoutes";
import Thinks from "./Thinks";
import DraggableNav from "./DraggableNav";
// import UserTaskList from "./usertask/usertasklist";
import { Route, Routes, Navigate } from "react-router-dom";
import CircularNav from "./CircularNav";
import Stored from "./thinkscomponents/thinkstord";
import CodeForm from "./thinkscomponents/CodeForm";
// import UserTaskAdd from "./usertask/addlist";



const ReThinks = () => {
    return <div className="homepro">
        {/* <DraggableNav /> */}
        <CircularNav/>
        <Routes>
            {/* <Route path="/anime" element={<Navigate to="anime/anime-cards" replace />} /> */}

            <Route path="/Thinks" element={<ProtectedRoutes><Thinks /></ProtectedRoutes>} >
                <Route path="list" element={<ProtectedRoutes><Stored /></ProtectedRoutes>} />
                <Route path="add" element={<ProtectedRoutes><CodeForm /></ProtectedRoutes>} />

                {/* <Route path="anime-cards" element={<ProtectedRoutes><AnimeCardList /></ProtectedRoutes>} />
                <Route path="add-anime" element={<ProtectedRoutes><AnimeCardForm /></ProtectedRoutes>} />
                <Route path="anime-series" element={<ProtectedRoutes><AnimeSeriesList /></ProtectedRoutes>} />
                <Route path="add-anime-series" element={<ProtectedRoutes><AnimeForm /></ProtectedRoutes>} />
                <Route path="anime-series/player" element={<ProtectedRoutes><VideoPlayers /></ProtectedRoutes>} /> */}
                <Route path="/Thinks" element={<Navigate to="/Thinks/tasklist" replace />} /> {/* Catch-all route */}
            </Route>
        </Routes>


    </div>

}
export default ReThinks