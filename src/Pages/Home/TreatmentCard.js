import React from 'react';
import treatment from "../../assets/images/treatment1.png"

const TreatmentCard = () => {
    return (
        <div class="card lg:card-side bg-base-100 shadow-xl lg:px-20 mb-14">
            <figure><img src={treatment} alt="Album" /></figure>
            <div class="card-body lg:w-2/3 lg:pt-20">
                <h2 class="card-title text-4xl">Exceptional Dental <br /> Care,
                on Your Terms</h2>
                <h2 className='text-justify py-3'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</h2>
                <div class="card-actions justify-start">
                    <button class="btn btn-primary uppercase text-white font-bold bg-gradient-to-r from-secondary to-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default TreatmentCard;