import React from "react";
import { client } from '../../lib/client';
import { Flower } from '../../components';
import Link from 'next/link';

const SympathyHome = ({ flowers }) => (
    <div>
      <div className="products-heading">
        <h2>Sympathy Flowers</h2>
        <p>Show your support with customizable Casket Pieces, Saddles, and others</p>
      </div>
  
      <div className="products-container">
        {flowers?.map((flower) => <Flower key={flower._id} flower={flower} />)}
      </div>
      <div className='flower-button-container'>
        <Link href="/birthday/birthday"><button className='all-products-btn'>Browse Birthday Arrangements</button></Link>
        <Link href="/anniversary/anniversary"><button className='all-products-btn'>Browse Anniversary Arrangements</button></Link>
      </div>
    </div>
  );
  
  export const getServerSideProps = async () => {
    const query = '*[_type == "flower"]';
    const flowers = await client.fetch(query);
  
    const bannerQuery = '*[_type == "banner"]';
    const bannerData = await client.fetch(bannerQuery);
  
    return {
      props: { flowers }
    }
  }
  
  export default SympathyHome;