import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Home/Shared/Footer/Footer';
import Navs from '../Pages/Home/Shared/Nav/Navs';

const MainLayout = () => {
    return (
        <div>
            <Navs></Navs>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;