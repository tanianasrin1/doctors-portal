import React from 'react';
import Footer from '../Shared/Footer';
import Banner from './Banner';
import BannerPart from './BannerPart';
import Contact from './Contact';
import Info from './Info';
import MakeAppointment from './MakeAppointment';
import Services from './Services';
import Testimonial from './Testimonial';



const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Info></Info>
            <Services></Services>
            <BannerPart></BannerPart>
            <MakeAppointment></MakeAppointment>
            <Testimonial></Testimonial>
            <Contact></Contact>
            <Footer></Footer>
            
        </div>
    );
};

export default Home;