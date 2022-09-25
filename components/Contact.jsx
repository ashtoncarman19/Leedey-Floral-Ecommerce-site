import React from 'react';

function ContactPage() {
    return (
        <div className='contact-container'>
        <div className='store-hours-container'>
            <div className='days-container'>
                <div>Monday</div>
                <div>Tuesday</div>
                <div>Wednesday</div>
                <div>Thursday</div>
                <div>Friday</div>
                <div>Saturday</div>
                <div>Sunday</div>
            </div>
            <div className='hours-container'>
                <div>9AM - 4PM</div>
                <div>9AM - 4PM</div>
                <div>9AM - 4PM</div>
                <div>9AM - 4PM</div>
                <div>9AM - 4PM</div>
                <div>9AM - 4PM</div>
                <div>Closed</div>
            </div>
          
        </div>
        <div className='contact-info'>
        <p>Address:</p>
        <p>Phone:</p>
        <p>Email:</p>
        </div>
     </div>
    )
  }
  
  export default ContactPage

