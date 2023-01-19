import React from 'react';
import { Container } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Side from '../Component/Side/Side';
import Footer from '../Pages/Home/Shared/Footer/Footer';
import Navs from '../Pages/Home/Shared/Nav/Navs';

const MainLayout = () => {
    return (
        <div>
            <Navs></Navs>
            <Container className='d-lg-flex'>
                <Outlet></Outlet>
                <Side></Side>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;