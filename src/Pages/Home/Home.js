import React from 'react';
import Banner from './Banner';
import Info from './Info';
import Service from './Service';


const Home = () => {
    return (
        <div className='px-12'>
            <Banner />
            <Info  />
            <Service />
        </div>
    );
};

export default Home;