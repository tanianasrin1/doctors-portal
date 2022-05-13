import React from 'react';
import Banner from './Banner';
import BannerPart from './BannerPart';
import Info from './Info';
import MakeAppointment from './MakeAppointment';
import Services from './Services';
import Testimonial from './Testimonial';



const Home = () => {
    return (
        <div className='px-32'>
            <Banner></Banner>
            <Info></Info>
            <Services></Services>
            <BannerPart></BannerPart>
            <MakeAppointment></MakeAppointment>
            <Testimonial></Testimonial>
            
        </div>
    );
};

export default Home;