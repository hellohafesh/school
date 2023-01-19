import React from 'react';
import { Container, Image } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';

const Home = () => {
    return (

        <Container>
            <Carousel>
                <Carousel.Item>
                    <Image
                        className="d-block w-100"
                        src="https://bangladeshpost.net/webroot/uploads/featureimage/2021-10/6162fecec1402.jpg"
                        alt="First slide"
                        height="400"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <Image
                        className="d-block w-100 "
                        src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c2Nob29sfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
                        alt="Second slide"
                        height="400"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <Image
                        className="d-block w-100 "
                        src="https://bangladeshpost.net/webroot/uploads/featureimage/2020-08/5f3a90fe0399f.jpg"
                        alt="Third slide"
                        height="400"
                    />

                </Carousel.Item>
            </Carousel>
            <div className='w-full border border-primary mb-4 mt-4 p-1 ' >
                <h5 className='my-auto'><span className='bg-primary p-1  text-white'>আপডেট</span></h5>
            </div>
            <div className='w-full border border-primary mb-3'>
                <div className='p-3'>
                    <h6><span className='bg-primary p-1 text-white'>নোটিশ বোর্ড</span></h6>
                    <ul>
                        <li><Link href='!#' >ভর্তি পরীক্ষার ফলাফল-২০২৩ </Link></li>
                        <li><Link href='!#'>ভর্তি পরীক্ষার ফলাফল নোটিশ-২০২৩</Link></li>
                        <li><Link href='!#'>ছাত্র/ছাত্রী তথ্য সংগ্রহ ফরম - ২</Link></li>
                        <li><Link href='!#'>ছাত্র/ছাত্রী তথ্য সংগ্রহ ফরম - ১</Link></li>
                        <li><Link href='!#'>বার্ষিক পরীক্ষার ফলাফল নোটিশ-২০২২</Link></li>
                        <li><Link href='!#'>বার্ষিক পরীক্ষার সময়সূচী/২২</Link></li>
                    </ul>
                    <div className='d-flex justify-content-end'>
                        <Link href='!#'>সবগুলো দেখুন</Link>
                    </div>
                </div>

            </div>
            <div>
                <h5 className='bg-primary p-1 w-full text-white'>প্রতিষ্ঠানের ইতিহাস</h5>
                <p>
                    শিক্ষা একজন মানুষকে তার সুপ্ত মানসিক শক্তি উন্মোচনে সহায়তা করে। আবার একটি দেশের অর্থনীতির বুনিয়াদ গঠন এবং তার ক্রমোন্নতির জন্য প্রকৃত শিক্ষা হয়ে ওঠে একটি অনিবার্য উপাদান। এই উদ্দেশ্যে বিদ্যালয় দ্বি-মূখী উচ্চ বিদ্যালয় ১৯৫৪ সালে ---- জেলার --- উপজেলার ---- প্রাণকেন্দ্রে স্থাপন করা হয়। ইহার একটি গৌরবময় অতীত রয়েছে।
                </p>
                <Link href='!#'>বিস্তারিত ...</Link>
            </div>
        </Container>

    );
};

export default Home;