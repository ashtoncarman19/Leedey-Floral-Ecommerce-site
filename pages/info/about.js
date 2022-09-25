import React from 'react';
import Link from 'next/link';
import {Toaster} from 'react-hot-toast'
import { client, urlFor } from '../../lib/client';
import { useStateContext } from '../../context/StateContext';

function AboutUs() {
    return (
     <div className='about-container'>
      <div className='store-hours'>
        <p>Business Hours</p>
        <p>Monday-Friday: 9AM-4PM</p>
        <p>Saturday: 10AM-3PM</p>
        <p>Sunday: Closed</p>
      </div>
     </div>
    )
  }
  
  export default AboutUs