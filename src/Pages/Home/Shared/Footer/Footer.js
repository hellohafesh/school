import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./Footer.css";
const Footer = () => {
    return (
        <Container>





            <footer className="bg-primary text-center text-white">

                <div className="container p-4">

                    <section className="mb-4">

                        <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i className="fab fa-facebook-f">
                        </i> </a>


                        <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button">
                            <i className="fab fa-twitter">
                            </i>
                        </a>


                        <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i className="fab fa-google">
                        </i></a>


                        <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button">
                            <i className="fab fa-instagram">
                            </i></a>


                        <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button" >
                            <i className="fab fa-linkedin-in">
                            </i></a>


                        <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button" >
                            <i class="fa-brands fa-youtube"></i></a>
                    </section>



                    <section className="">
                        <form action="">

                            <div className="row d-flex justify-content-center">

                                <div className="col-auto">
                                    <p className="pt-2">
                                        <strong>আমাদের নিউজলেটার জন্য সাইন আপ করুন : </strong>
                                    </p>
                                </div>



                                <div className="col-md-5 col-12">

                                    <div className="form-outline form-white mb-4">
                                        <input type="email" id="form5Example21" className="form-control" placeholder='ইমেইল ঠিকানা দিন' />
                                    </div>
                                </div>



                                <div className="col-auto">

                                    <button type="submit" className="btn btn-outline-light mb-4">
                                        সাবস্ক্রাইব করবেন
                                    </button>
                                </div>

                            </div>

                        </form>
                    </section>



                    <section className="mb-4 w-75 mx-auto">
                        <p>
                            শিক্ষা একজন মানুষকে তার সুপ্ত মানসিক শক্তি উন্মোচনে সহায়তা করে। আবার একটি দেশের অর্থনীতির বুনিয়াদ গঠন এবং তার ক্রমোন্নতির জন্য প্রকৃত শিক্ষা হয়ে ওঠে একটি অনিবার্য উপাদান।
                        </p>
                    </section>



                    <section className="">

                        <div className="row">

                            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                                <Link className='aaaa'> <h5>বিউবি সম্পর্কে </h5 ></Link>


                            </div>



                            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                                <Link className='aaaa'> <h5>কৃতিমান ছাত্র </h5 ></Link>
                            </div>



                            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                                <Link className='aaaa'> <h5>পাঠক্রম সম্পর্কে</h5 ></Link>

                            </div>



                            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                                <Link className='aaaa'> <h5>আমাদের অর্জন</h5 ></Link>
                            </div>

                        </div>

                    </section>

                </div>



                <div className="text-center p-3">
                    বিউবি © ২০২৩ । সর্বস্বত্ব সংরক্ষিত ।
                </div>

            </footer>
        </Container>
    );
};

export default Footer;