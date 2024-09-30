import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';

function AnimeSide() {
    return (
        <div>
        <Navbar />

        <div className='allcontainer'>
            {/* This is where your Navbar or other common layout components would go */}
            {/* <h2>Anime Section</h2> */}
            <Outlet />  {/* This will render the nested routes */}
        </div></div>
    );
}

export default AnimeSide;
