import React from 'react';
import appointment from '../../assets/images/appointment.png'

const Contact = () => {
    return (
        <div className='px-14 py-10 ' style={{ background: `url(${appointment})` }} >
            <div className='py-5'>
                <p className='text-base text-center font-bold' style={{ color: '#19D3AE' }}>Contact Us</p>
                <p className='text-2xl text-center text-white'>Stay Connect With Us</p>
            </div>
            <div className='grid grid-cols-1 gap-5 justify-items-center'>
                <input type="text" placeholder="Email" class="input input-bordered input-sm w-full max-w-md" />
                <input type="text" placeholder="Subject" class="input input-bordered input-sm w-full max-w-md" />
                <textarea
                    className='textarea w-full max-w-md'
                    placeholder='Your message'
                    rows={6}
                ></textarea>
                <button className="btn btn-primary uppercase text-white font-semibold bg-gradient-to-r from-secondary to-primary">Submit</button>
            </div>
        </div>
    );
};

export default Contact;