import React from 'react';

import { client } from '../../lib/client';
import { Product } from '../../components';
import Link from 'next/link';

const Home = ({ products, bannerData }) => (
  <div>
    <div className="products-heading">
      <h2>All Products</h2>
    </div>

    <div className="products-container">
      {products?.map((product) => <Product key={product._id} product={product} />)}
    </div>
    <div className='flower-button-container'>
      <Link href="/custom/custom">
        <button className='all-products-btn'>Browse Customizable Products</button>
      </Link>
    </div>
  </div>
);

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: { products, bannerData }
  }
}

export default Home;