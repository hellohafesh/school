import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav';
import './Nav.css';
import logo from './download.png';
import { Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const logos = logo;
const Navs = () => {
    return (

        <div>
            <Container className='d-lg-flex p-2 text-center justify-content-between bg-primary '>
                <h6 className='pt-1 text-white'>চলমান শিক্ষাবর্ষঃ ২০২৩</h6>
                <h6 className='pt-1 text-white'>শুক্রবার, ২০ জানুয়ারী ,২০২৩</h6>
            </Container>
            <Container className='d-lg-flex p-3 mx-auto'>
                <Image className='h-auto w-auto ' src={logos} alt="School Image" />
                <div className='d-flex align-items-center'>
                    <div className='mt-5 lg-mt-0 lg-ms-3'>
                        <h3 className='fw-bold'>বিদ্যালয় দ্বি-মূখী উচ্চ বিদ্যালয়, বিদ্যালয়, বিদ্যালয়</h3>
                        <h5>স্থাপিতঃ ১৯৫৪; বিদ্যালয় কোডঃ ১২৬৬; ইআইআইএনঃ ১৬৯৫৪৬৭৯৮</h5>
                    </div>
                </div>
            </Container >


            <Container>
                <Navbar bg="light" expand="lg">
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className="bg-primary">
                        <Nav className="me-auto ">
                            <Nav.Link><Link className="text-white navbutton" to="/">হোম</Link></Nav.Link>
                            <NavDropdown title="আমাদের সম্পর্কে" id="basic-nav-dropdown">
                                <NavDropdown.Item > <Link className="text-white navbutton" to="/about">প্রতিষ্ঠানের ইতিহাস</Link></NavDropdown.Item>
                                <NavDropdown.Item ><Link className="text-white navbutton" to="/about">শিক্ষকবৃন্দ</Link></NavDropdown.Item>
                                <NavDropdown.Item ><Link className="text-white navbutton" to="/about">প্রাক্তন শিক্ষকবৃন্দ</Link></NavDropdown.Item>
                                <NavDropdown.Item ><Link className="text-white navbutton" to="/about">কর্মচারীবৃন্দ </Link></NavDropdown.Item>
                                <NavDropdown.Item ><Link className="text-white navbutton" to="/about">প্রাক্তন কর্মচারীবৃন্দ </Link></NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link ><Link className="text-white navbutton" to="/about">নোটিশ</Link></Nav.Link>
                            <NavDropdown title="উপস্থিতি রিপোর্ট" id="basic-nav-dropdown">
                                <NavDropdown.Item ><Link className="text-white navbutton" to="/about">দৈনিক</Link></NavDropdown.Item>
                                <NavDropdown.Item ><Link className="text-white navbutton" to="/about">মাসিক</Link></NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link ><Link className="text-white navbutton" to="/about">রেজাল্ট</Link></Nav.Link>
                            <Nav.Link ><Link className="text-white navbutton" to="/about">অনলাইন ভর্তি</Link></Nav.Link>
                            <Nav.Link ><Link className="text-white navbutton" to="/about">যোগাযোগ</Link></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Container>
        </div >
    );
};

export default Navs;