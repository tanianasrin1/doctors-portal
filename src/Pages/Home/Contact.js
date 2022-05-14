import React from 'react';
import doctor from '../../assets/images/appointment.png'

const Contact = () => {
    return (
        <section 
        style={{
            background: `url(${doctor})`,
            backgroundSize: "cover",
          }}
          className="hero min-h-screen w-full h-full"
        >
            
            <div> 
                <h6 className='text-primary text-xl'>Contact Us</h6>
                <h2 className='text-3xl text-white'>Stay Contact With Us</h2>
                <input className='input' type="email" name="email" placeholder='Your Email' id="" /> <br /> 
                <input className='input' type="text" name="text" placeholder='submit' id="" /> <br />
                <input className='input' type="text" name="text" placeholder='submit' id="" />
                 
                
            </div>
        </section>
    );
};

export default Contact;