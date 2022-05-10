import React from 'react';
import Footer from '../Shared/Footer/Footer';
import Banner from './Banner';
import Contact from './Contact';
import Info from './Info';
import Service from './Service';
import Testimonials from './Testimonials';
import TreatmentCard from './TreatmentCard';
import MakeAppointment from './MakeAppointment';


const Home = () => {
    return (
        <div>
            <Banner />
            <Info  />
            <Service />
            <TreatmentCard />
            <MakeAppointment />
            <Testimonials />
            <Contact />
            <Footer />
        </div>
    );
};

export default Home;