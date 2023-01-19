import React from 'react';
import { Image } from 'react-bootstrap';

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
            <div>
                <h6 className='w-full bg-primary text-white p-3'>গুরুত্বপূর্ণ লিংক</h6>
                <p className='w-full '>জাতীয় তথ্য বাতায়ন</p>
                <hr />
                <p className='w-full '>শিক্ষা মন্ত্রণালয়</p>
                <hr />
                <p className='w-full '>মাধ্যমিক ও উচ্চ শিক্ষা বিভাগ</p>
                <hr />
                <p className='w-full '>মাধ্যমিক ও উচ্চশিক্ষা অধিদপ্তর</p>
                <hr />
                <p className='w-full '>দিনাজপুর শিক্ষা বোর্ড</p>
                <hr />

            </div>
            <div>
                <h6 className='w-full bg-primary text-white p-3'>সামাজিক যোগাযোগ</h6>
                <p className='w-full '>ফেইসবুক</p>
                <hr />
                <p className='w-full '> টুইটার</p>
                <hr />
                <p className='w-full '>ইউটিউব</p>
                <hr />

            </div>
        </div>
    );
};

export default Side;