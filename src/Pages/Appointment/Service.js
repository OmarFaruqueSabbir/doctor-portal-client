import React from 'react';

const Service = ({ service,setTreatment }) => {
    const { name, slots } = service;
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{
                    slots.length > 0 ? <span>{slots[0]}</span> : <span className="text-red-500">No Slot available</span>
                }</p>
                <p>{slots.length} {slots.length > 1 ? 'spaces' : 'space'} spaces available</p>
                <div className="card-actions justify-center">
                    {/* <button disabled= {slots.length === 0}
                    onClick={()=> setTreatment(service)}
                    className="btn btn-secondary text-white UpperCase">Book Now</button> */}
                    <label for="booking-modal" disabled= {slots.length === 0}
                    onClick={()=> setTreatment(service)}
                    className="btn btn-secondary text-white UpperCase">Book Apppointment</label>
                </div>
            </div>
        </div>
    );
};

export default Service;