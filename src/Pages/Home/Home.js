import React from 'react';
import Banner from './Banner';
import Info from './Info';
import Service from './Service';
import TreatmentCard from './TreatmentCard';


const Home = () => {
    return (
        <div className='px-12'>
            <Banner />
            <Info  />
            <Service />
            <TreatmentCard />
        </div>
    );
};

export default Home;