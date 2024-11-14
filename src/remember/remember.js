import { Outlet } from 'react-router-dom';

function Remember() {
    return (
        <div className="procompon">
                    
            {/* This is where your Navbar or other common layout components would go */}
            {/* <h2>Profile Section</h2> */}
            <Outlet />  {/* This will render the nested routes */}
        </div>
    );
}

export default Remember;