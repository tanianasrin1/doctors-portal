import { format } from 'date-fns';
import React, { useState, useEffect } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import BookingModal from './BookingModal';
import Service from './Service';

const AvailableAppointment = ({date}) => {
    const [ treatment, setTreatment ] = useState(null)

    const formattedDate = format(date, 'PP');
    const {data: services, isLoading, refetch} = useQuery(['available', formattedDate], ()=> fetch(`http://localhost:5000/available?date=${formattedDate}`)
        .then(res => res.json()))

    if(isLoading) {
        <Loading></Loading>
    }


    return (
        <div className='my-24'>
            <h4 className='text-center text-xl text-secondary'>Available Appointment on {format(date, "PP")}</h4>
            <div className='grid sm:grid-cols-1 lg:grid-cols-3 gap-4 mt-5'>
                  {
                      services?.map(service => <Service
                       key = {service.id}
                       service = {service}
                       setTreatment = {setTreatment}
                      ></Service>)
                  }
            </div>
            {treatment && <BookingModal 
            date={date} 
            treatment = {treatment}
            setTreatment = {setTreatment}
            refetch = {refetch}
            ></BookingModal>}
        </div>
    );
};

export default AvailableAppointment;