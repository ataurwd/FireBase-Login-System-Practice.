import React from 'react';
import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    return (
        <div className='max-w-5xl mx-auto'>
            <Navbar/>
            <Outlet/>
        </div>
    );
};

export default MainLayout;