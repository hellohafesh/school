import React from 'react';
import { Link } from 'react-router-dom';

const Notice = () => {
    return (
        <div className=''>
            <h1 className='p-3 mb-4'>নোটিশ</h1>
            <hr />

            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th scope="col">ক্রমিক</th>
                        <th scope="col">শিরোনাম	</th>
                        <th scope="col">তারিখ</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">১</th>
                        <td><Link className="impLink" >ভর্তি পরীক্ষার ফলাফল-২০২৩ </Link></td>
                        <td> জানুয়ারী ১, ২০২৩</td>
                    </tr>
                    <tr>
                        <th scope="row">২	</th>
                        <td><Link className="impLink">ভর্তি পরীক্ষার ফলাফল নোটিশ-২০২৩</Link></td>
                        <td> জানুয়ারী ১, ২০২৩</td>
                    </tr>
                    <tr>
                        <th scope="row">৩</th>
                        <td><Link className="impLink">ছাত্র/ছাত্রী তথ্য সংগ্রহ ফরম - ২</Link></td>
                        <td>ডিসেম্বর ৩১, ২০২২</td>
                    </tr>
                    <tr>
                        <th scope="row">৪</th>
                        <td><Link className="impLink">ছাত্র/ছাত্রী তথ্য সংগ্রহ ফরম - ১</Link></td>
                        <td>ডিসেম্বর ৩১, ২০২২</td>
                    </tr>
                    <tr>
                        <th scope="row">৫</th>
                        <td><Link className="impLink">বার্ষিক পরীক্ষার ফলাফল নোটিশ-২০২২</Link></td>
                        <td>ডিসেম্বর ৩১, ২০২২</td>
                    </tr>
                    <tr>
                        <th scope="row">৬</th>
                        <td><Link className="impLink">বার্ষিক পরীক্ষার সময়সূচী/২২</Link></td>
                        <td>ডিসেম্বর ১, ২০২২</td>
                    </tr>

                </tbody>
            </table>
            <div className='d-flex mb-4'>
                <button className='btn btn-secondary btn-sm'> পূরবর্তী</button>
                <h6 className='ps-3 pe-3'>  ১/১  </h6>
                <button className='btn btn-secondary btn-sm'>পরবর্তী </button>
            </div>
        </div>
    );
};

export default Notice;