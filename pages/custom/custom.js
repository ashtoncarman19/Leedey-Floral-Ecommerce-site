import React from 'react';

import { client } from '../../lib/client';
import { Product } from '../../components';
import Link from 'next/link';

const Custom = ({ products }) => {
    return(
    <div>
    <div className="products-heading">
      <h2>Completely Customizable Products</h2>
    </div>

    <div className="products-container">
      {products?.map((product) => <Product key={product._id} product={product} />)}
    </div>
  </div>
    )
}


export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  return {
    props: { products }
  }
}

export default Custom