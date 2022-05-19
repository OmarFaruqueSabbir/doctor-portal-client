import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Shared/Loading/Loading';

const Payment = () => {
    const {id} = useParams();
    const url = `http://localhost:5000/bookings/${id}`;

    const {data: appointment,isLoading} = useQuery(['booking',id],()=> fetch(url,{
        method: 'GET',
        headers:{
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    if(isLoading){
        return <Loading />
    }
    return (
        <div>
  <div class="card w-50 max-w-md bg-base-100 shadow-xl my-12">
  <div class="card-body">
      <p className="text-success font-bold">Hello {appointment.patientName}</p>
    <h2 class="card-title">Pay for {appointment.treatment}</h2>
    <p>Your Appointment <span className='text-orange-700'>{appointment.date}</span> at {appointment.slot}</p>
    <p>please pay: ${appointment.price}</p>
  </div>
</div>
    <div class="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
      <div class="card-body">
        <div class="form-control mt-6">
        </div>
      </div>
    </div>
</div>
    );
};

export default Payment;