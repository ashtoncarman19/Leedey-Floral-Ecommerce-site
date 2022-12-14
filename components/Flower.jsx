import React from 'react';
import Link from 'next/link';

import { urlFor } from '../lib/client';

const Flower = ({ flower: { image, name, slug, price } }) => {
  return (
    <div>
      <Link href={`/flower/${slug.current}`}>
        <div className="product-card">
          <img 
            src={urlFor(image && image[0])}
            width={250}
            height={250}
            className="product-image"
          />
          <p className="product-name">{name}</p>
          <p className="product-price">Starting at ${price}</p>
        </div>
      </Link>
    </div>
  )
}

export default Flower