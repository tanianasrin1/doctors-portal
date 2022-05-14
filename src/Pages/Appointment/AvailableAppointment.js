import { format } from 'date-fns';
import React, { useState, useEffect } from 'react';
import Service from './Service';

const AvailableAppointment = ({date}) => {
    const [ services, setServices] = useState([]);

    useEffect( () => {
        fetch('services.json')
        .then(res => res.json())
        .then(data =>  setServices(data));
    } , [])
    return (
        <div className='my-24'>
            <h4 className='text-center text-xl text-secondary'>Available Appointment on {format(date, "PP")}</h4>
            <div className='grid sm:grid-cols-1 lg:grid-cols-3 gap-4 mt-5'>
                  {
                      services.map(service => <Service
                       key = {service.id}
                       service = {service}
                      ></Service>)
                  }
            </div>
        </div>
    );
};

export default AvailableAppointment;