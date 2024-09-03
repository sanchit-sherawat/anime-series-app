import { Outlet } from 'react-router-dom';

function AnimeSide() {
    return (
        <div>
            {/* This is where your Navbar or other common layout components would go */}
            <h2>Anime Section</h2>
            <Outlet />  {/* This will render the nested routes */}
        </div>
    );
}

export default AnimeSide;
