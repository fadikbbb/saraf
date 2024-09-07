// src/components/Layout.js

import { Outlet } from 'react-router-dom';
import SideBar from './side-bar'; // Ensure the path is correct

function Layout() {
    return (

        <div className="flex justify-between flex-1 w-screen h-screen rounded-xl shadow-md ">
            <Outlet />
            <SideBar />
        </div>

    );
}

export default Layout;
