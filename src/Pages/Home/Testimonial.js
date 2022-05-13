import React from 'react';
import quote from '../../assets/icons/quote.svg';
import people1 from '../../assets/images/people1.png'
import people2 from '../../assets/images/people2.png'
import people3 from '../../assets/images/people3.png'
import Review from './Review';

const Testimonial = () => {
    const reviews = [
        {
            _id:1,
            name: 'Winson Herry',
            review: '',
            location: 'california',
            img: people1
        },
        {
            _id:2,
            name: 'Winson Herry',
            review: '',
            location: 'california',
            img: people2
        },
        {
            _id:2,
            name: 'Winson Herry',
            review: '',
            location: 'california',
            img: people3
        },
    ];
    return (
        <section className='my-28'>
             <div className='flex justify-between'>
                 <div>
                     <h4 className='text-xl text-primary font-bold'>Testimonials</h4>
                     <h4 className='text-3xl'>What our Patients say</h4>
                 </div>
                 <div>
                     <img src={quote } alt="" />
                 </div>
             </div>
             <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                 {
                     reviews.map(review => <Review
                       key = {review.id}
                       review = {review}
                     ></Review>)
                 }
             </div>
        </section>
    );
};

export default Testimonial;