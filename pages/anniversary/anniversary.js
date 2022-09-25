import React from "react";
import { client } from '../../lib/client';
import { Anniversary } from '../../components';
import Link from 'next/link';


const AnniversaryHome = ({ anniversarys }) => (
    <div>
      <div className="products-heading">
        <h2>Anniversary Flowers</h2>
        <p>Get flowers Celebrating Love</p>
    
      </div>
  
      <div className="products-container">
        {anniversarys?.map((anniversary) => <Anniversary key={anniversary._id} anniversary={anniversary} />)}
      </div>
      <div className='flower-button-container'>
        <Link href="/sympathy/sympathy"><button className='all-products-btn'>Browse Sympathy Arrangements</button></Link>
        <Link href="/birthday/birthday"><button className='all-products-btn'>Browse Birthday Arrangements</button></Link>
      </div>
    </div>
  );
  
  export const getServerSideProps = async () => {
    const query = '*[_type == "anniversary"]';
    const anniversarys = await client.fetch(query);
  
    const bannerQuery = '*[_type == "banner"]';
    const bannerData = await client.fetch(bannerQuery);
  
    return {
      props: { anniversarys}
    }
  }
  
  export default AnniversaryHome;