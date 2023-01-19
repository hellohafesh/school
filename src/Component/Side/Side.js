import React from 'react';
import { Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./Side.css";

const Side = () => {
    return (
        <div>
            <div className='mt-4'>
                <h6 className='w-full bg-primary text-white p-3'>প্রধান শিক্ষক</h6>
                <Image className='h-50 w-50' src="https://cdn-icons-png.flaticon.com/512/21/21104.png" alt="School Image" />
                <h6>Name প্রধান শিক্ষক</h6>
                <p>প্রধান শিক্ষক</p>
            </div>
            <div>
                <h6 className='w-full bg-primary text-white p-3'>সহকারী প্রধান শিক্ষক</h6>
                <Image className='h-50 w-50' src="https://cdn-icons-png.flaticon.com/512/21/21104.png" alt="School Image" />
                <h6>Name সহকারী প্রধান শিক্ষক</h6>
                <p>সহকারী প্রধান শিক্ষক</p>
            </div>
            <div className='mb-4'>
                <h6 className='w-full bg-primary text-white p-3'>গুরুত্বপূর্ণ লিংক</h6>
                <div className=" row">
                    <Link className='w-full impLink'>জাতীয় তথ্য বাতায়ন</Link>
                    <Link className='w-full impLink'>শিক্ষা মন্ত্রণালয়</Link>
                    <Link className='w-full impLink'>মাধ্যমিক ও উচ্চ শিক্ষা বিভাগ</Link>
                    <Link className='w-full impLink'>মাধ্যমিক ও উচ্চশিক্ষা অধিদপ্তর</Link>
                    <Link className='w-full impLink'>দিনাজপুর শিক্ষা বোর্ড</Link>
                </div>
            </div>
            <div className='mb-4'>
                <h6 className='w-full bg-primary text-white p-3'>সামাজিক যোগাযোগ</h6>
                <div className="row">
                    <Link className='w-full impLink'>ফেইসবুক</Link>
                    <Link className='w-full impLink'> টুইটার</Link>
                    <Link className='w-full impLink'>ইউটিউব</Link>
                </div>

            </div>
        </div>
    );
};

export default Side;