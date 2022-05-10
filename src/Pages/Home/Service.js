import React from 'react';
import Services from './Services';
import  fluoride from "../../assets/images/fluoride.png"
import  cavity from "../../assets/images/cavity.png"
import  whitening from "../../assets/images/whitening.png"

const Service = () => {
    const services =[
        {
            _id:1,
            name: "Fluoride Treatment",
            description: '',
            img: fluoride
        },
        {
            _id:2,
            name: "Cavity Filling",
            description: '',
            img: cavity
        },
        {
            _id:1,
            name: "Teeth Whitening",
            description: '',
            img: whitening
        }
    ]
    return (
        <div className='mt-16 mb-16'>
            <h2 className='text-center text-secondary'>OUR SERVICES</h2>
            <h2 className='text-center text-2xl'>Services We Provide</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-12 mt-8'>
                {/* <Services img={fluoride} title="Fluoride Treatment"></Services>
                <Services img={cavity} title="Cavity Filling"></Services>
                <Services img={whitening} title="Teeth Whitening"></Services> */}
                {
                    services.map(service => <Services key={service._id} service={service}></Services>)
                }
            </div>
        </div>
    );
};

export default Service;