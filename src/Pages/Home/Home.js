import React from 'react';
import Footer from '../Shared/Footer/Footer';
import Appointment from './Appointment';
import Banner from './Banner';
import Contact from './Contact';
import Info from './Info';
import Service from './Service';
import Testimonials from './Testimonials';
import TreatmentCard from './TreatmentCard';


const Home = () => {
    return (
        <div className='px-12'>
            <Banner />
            <Info  />
            <Service />
            <TreatmentCard />
            <Appointment />
            <Testimonials />
            <Contact />
        </div>
    );
};

export default Home;