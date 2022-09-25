import React from 'react';
import Link from 'next/link';

import { urlFor } from '../lib/client';

const HeroBanner = ({ heroBanner }) => {
  console.log(heroBanner)
  return (
    <div className="hero-banner-container">
      <div>
        <h1>{heroBanner.largeText1}</h1>

        <div>
          <Link href="/flower/arrangements">
            <button type="button">{heroBanner.buttonText}</button>
          </Link>
          </div>
        </div>
      </div>
  )
}

export default HeroBanner