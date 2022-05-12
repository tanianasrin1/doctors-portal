import React from 'react';
import doctor from '../../assets/images/doctor.png'
import bg from '../../assets/images/appointment.png'
import PrimaryButton from '../Shared/PrimaryButton';

const MakeAppointment = () => {
    return (
        <section style={
            {
                background: `url(${bg})`
            }
        }
        className='flex justify-center items-center'>
           <div className='flex-1 hidden lg:block'>
           <img className='mt-[-100px]' src={doctor} alt="" />
           </div>
           <div className='flex-1'>
               <h3 className='text-xl text-primary'>Appointment</h3>
               <h2 className='text-3xl text-white'>Make an Appointment Today</h2>
               <p className='text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, voluptatem aut facilis quas laboriosam qui nulla perspiciatis fugiat cupiditate, tempore voluptatibus amet obcaecati. Magni maiores harum tempora voluptate autem eius.</p>
               <PrimaryButton>Get Starts</PrimaryButton>
           </div>
        </section>
    );
};

export default MakeAppointment;