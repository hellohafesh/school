import React from 'react';
// import { Container } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Home/Shared/Footer/Footer';
import Navs from '../Pages/Home/Shared/Nav/Navs';

const NormalLayout = () => {
    return (
        <div>
            <Navs></Navs>
            {/* <Container className='d-lg-flex d-lg-row-2'> */}

            <Outlet></Outlet>

            {/* 
            </Container> */}
            <Footer></Footer>
        </div>
    );
};

export default NormalLayout;