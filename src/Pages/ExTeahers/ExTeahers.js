import React from 'react';

const ExTeahers = () => {
    return (
        <div className=''>
            <h1 className='p-3 mb-4'>প্রাক্তন শিক্ষকবৃন্দ</h1>
            <hr />

            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th scope="col">ক্রমিক</th>
                        <th scope="col">ছবি	</th>
                        <th scope="col">তথ্য</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">১</th>
                        <td><img src="https://cdn-icons-png.flaticon.com/512/21/21104.png" height="100" width="100" alt="" /></td>
                        <td>
                            <p>নাম:---------------</p>
                            <p>পদবী:প্রাক্তন প্রধান শিক্ষক</p>
                            <p>মোবাইল নম্বর: </p>
                            <p>ই-মেইল এড্রেস:</p>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">২	</th>
                        <td><img src="https://cdn-icons-png.flaticon.com/512/21/21104.png" height="100" width="100" alt="" /></td>
                        <td>
                            <p>নাম: ----------------</p>
                            <p>পদবী:প্রাক্তন সহকারী প্রধান শিক্ষক</p>
                            <p>মোবাইল নম্বর: </p>
                            <p>ই-মেইল এড্রেস:</p>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">৩</th>
                        <td><img src="https://cdn-icons-png.flaticon.com/512/21/21104.png" height="100" width="100" alt="" /></td>
                        <td>
                            <p>নাম: ----------------</p>
                            <p>পদবী:প্রাক্তন সহকারী শিক্ষক</p>
                            <p>মোবাইল নম্বর: </p>
                            <p>ই-মেইল এড্রেস:</p>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">৩</th>
                        <td><img src="https://cdn-icons-png.flaticon.com/512/21/21104.png" height="100" width="100" alt="" /></td>
                        <td>
                            <p>নাম: ----------------</p>
                            <p>পদবী:প্রাক্তন সহকারী শিক্ষক</p>
                            <p>মোবাইল নম্বর: </p>
                            <p>ই-মেইল এড্রেস:</p>
                        </td>
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

export default ExTeahers;