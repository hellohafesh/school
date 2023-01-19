import React from 'react';

const Contact = () => {
    return (
        <div>
            <div className='mt-3 mb-5'>
                <h4> বিদ্যালয় দ্বি-মূখী উচ্চ বিদ্যালয় </h4>
                <h6>---পুর - ---গঞ্জ, --গ্রাম - ৮৬২৫০,</h6>
                <p>--গঞ্জ,--গঞ্জ, --পুর, বাংলাদেশ।</p>
                <p>মোবাইলঃ ০১-৮-১-০-২-৫-৬</p>
                <p>ই-মেইলঃ bidyaloy.bub@edu.com</p>
            </div>

            <h5 className='mt-6'>গুগল ম্যাপে আমাদের দেখুনঃ </h5>
            <div class="mapouter pe-4"><div class="gmap_canvas"><iframe width="100%" height="600" id="gmap_canvas" src="https://maps.google.com/maps?q=23.73288623921294,%2090.3963085125005&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe></div></div>

        </div>
    );
};

export default Contact;