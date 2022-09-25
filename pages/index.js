import React from 'react';

import { client } from '../lib/client';
import { Product, FooterBanner, HeroBanner, Flower } from '../components';
import Link from 'next/link';

const Home = ({ products, flowers, bannerData }) => (
  <div>
    <HeroBanner heroBanner={bannerData.length && bannerData[0]}  />
    <div className="products-heading">
      <h2>Best Selling Products</h2>
      <p>Create your Custom order today!</p>
    </div>

    <div className="products-container">
      {products?.slice(0,4).map((product) => <Product key={product._id} product={product} />)}
    </div>

    <div className='all-products-btn-container'>
      <Link href="/product/allProducts">
        <button className='all-products-btn'>Browse all Products</button>
      </Link>
    </div>

    <div className="products-heading">
      <h2>Best Selling Floral Arrangements</h2>
      <p>Call us to create a beautiful arrangement!</p>
    </div>

    <div className="products-container">
    {flowers?.slice(0,4).map((flower) => <Flower key={flower._id} flower={flower} />)}
    </div>
    <div className='all-products-btn-container'>
      <Link href="/flower/arrangements">
        <button className='all-products-btn'>Browse all Arrangements</button>
      </Link>
    </div>
  
    <FooterBanner footerBanner={bannerData && bannerData[0]} />
  </div>
);

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);
  const flowerquery = '*[_type == "flower"]';
  const flowers = await client.fetch(flowerquery);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: { products, flowers, bannerData }
  }
}

export default Home;

/*
  <div className="products-container">
    {flowers?.map((flower) => <Flower key={flower._id} flower={flower} />)}
  </div>

    <Link href="/flower/arangements">
    <button className='all-products'>Browse all Floral Arrangements</button>
    </Link>

    <div className="products-container">
      {flowers?.map((flower) => <Flower key={flower._id} flower={flower} />)}
    </div>
*/