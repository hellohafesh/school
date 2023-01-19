import React from 'react';
import { Container, Image } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';

const Home = () => {
    return (
        <Container className='h-50'>

            <Carousel>
                <Carousel.Item>
                    <Image
                        className="d-block w-100 "
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTES5GXUg3Qf96vrAjZHH3KLZ1XcGzoi-42mg&usqp=CAU"
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <Image
                        className="d-block w-100 "
                        src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c2Nob29sfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <Image
                        className="d-block w-100 "
                        src="https://c8.alamy.com/comp/JM2RYY/bangladeshi-school-students-walking-on-the-school-ground-at-class-JM2RYY.jpg"
                        alt="Third slide"
                    />

                </Carousel.Item>
            </Carousel>
        </Container>
    );
};

export default Home;