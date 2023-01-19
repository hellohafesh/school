import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav';
import './Nav.css';
import logo from './download.png';

const logos = logo;
const Navs = () => {
    return (

        <div>
            <Container className='d-flex justify-content-between bg-primary '>
                <h6 className='pt-1 text-white'>চলমান শিক্ষাবর্ষঃ ২০২৩</h6>
                <h6 className='pt-1 text-white'>বৃহস্পতিবার, জানুয়ারী ১৯, ২০২৩</h6>
            </Container>
            <Container className='d-flex p-3'>
                <img src={logos} alt="School Image" />
                <div className=''>
                    <h3 className='fw-bold'>বিদ্যালয় দ্বি-মূখী উচ্চ বিদ্যালয়, বিদ্যালয়, বিদ্যালয়</h3>
                    <h5>স্থাপিতঃ ১৯৫৪; বিদ্যালয় কোডঃ ১২৬৬; ইআইআইএনঃ ১৬৯৫৪৬৭৯৮</h5>
                </div>
            </Container>


            <Container>
                <Navbar bg="light" expand="lg">
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className="bg-primary">
                        <Nav className="me-auto ">
                            <Nav.Link href="#home">হোম</Nav.Link>
                            <NavDropdown title="আমাদের সম্পর্কে" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">প্রতিষ্ঠানের ইতিহাস</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">শিক্ষকবৃন্দ</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">প্রাক্তন শিক্ষকবৃন্দ</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.4">কর্মচারীবৃন্দ </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.4">প্রাক্তন কর্মচারীবৃন্দ </NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="#link">নোটিশ</Nav.Link>
                            <NavDropdown title="উপস্থিতি রিপোর্ট" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.2">দৈনিক</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">মাসিক</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="#link">রেজাল্ট</Nav.Link>
                            <Nav.Link href="#link">অনলাইন ভর্তি</Nav.Link>
                            <Nav.Link href="#link">যোগাযোগ</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Container>
        </div>
    );
};

export default Navs;