import React from 'react';
import doctor from '../../assets/images/doctor.png'
import appointment from '../../assets/images/appointment.png'

const MakeAppointment = () => {
    return (
        <section style={{background: `url(${appointment})`}}  className='flex justify-center items-center'>
            <div className='flex-1 hidden lg:block'>
                <img className='mt-[-100px]' src={doctor} alt="" />
            </div>
            <div className='flex-1 p-5'>
                <h3 className='text-xl text-primary'>Appointment</h3>
                <h2 className='text-3xl text-white font-bold'>Make an Appointment Today</h2>
                <p className='text-white'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo asperiores quidem delectus at ex, iste est voluptatibus eum suscipit maiores nesciunt, tenetur nemo! Ea suscipit quae, repudiandae vel ullam dignissimos expedita libero nostrum odit repellat cum. Esse vel molestiae exercitationem.
                </p>
                <button className="btn btn-primary uppercase text-white font-bold bg-gradient-to-r from-secondary to-primary">Get Started</button>
            </div>
        </section>
    );
};

export default MakeAppointment;