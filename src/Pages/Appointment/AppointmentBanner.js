import React, { useState } from "react";
import chair from "../../assets/images/chair.png";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import bg from '../../assets/images/bg.png'


const AppointmentBanner = ({date, setDate}) => {
 
  return (
    <div className="hero min-h-screen w-full h-full"
    style={
        {
            background: `url(${bg})`,
            backgroundSize: 'cover'
        }
    }
   >
      <div class="hero min-h-screen ">
        <div class="hero-content flex-col lg:flex-row-reverse">
          <img src={chair} alt="" class="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <DayPicker mode="single" selected={date} onSelect={setDate} />
            <p>You have selected:  </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentBanner;
