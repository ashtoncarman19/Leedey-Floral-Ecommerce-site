import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus, AiFillStar, AiOutlineStar } from 'react-icons/ai';

import { client, urlFor } from '../../lib/client';
import { Anniversary } from '../../components';

const FlowerDetails = ({ anniversary, anniversarys }) => {
  const { image, name, details, price } = anniversary;
  const [index, setIndex] = useState(0);

  

  return (
    <div>
      <div className="product-detail-container">
        <div>
          <div className="image-container">
            <img src={urlFor(image && image[index])} className="product-detail-image" />
          </div>
          <div className="small-images-container">
            {image?.map((item, i) => (
              <img 
                key={i}
                src={urlFor(item)}
                className={i === index ? 'small-image selected-image' : 'small-image'}
                onMouseEnter={() => setIndex(i)}
              />
            ))}
          </div>
        </div>

        <div className="product-detail-desc">
          <h1>{name}</h1>
          <div className="reviews">
            <div>
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiOutlineStar />
            </div>
            <p>
              (20)
            </p>
          </div>
          <h4>Details: </h4>
          <p>{details}</p>
          <p className="price">Starting at ${price}</p>
          <p> Please note that we only allow call in orders for custom arrangements</p>
          <p> If you would like to order a custom arrangement please call us at (580)-000-0000</p>
        </div>
      </div>

      <div className="maylike-products-wrapper">
          <h2>You may also like</h2>
          <div className="marquee">
            <div className="maylike-products-container track">
              {anniversarys.map((item) => (
                <Anniversary key={item._id} anniversary={item} />
              ))}
            </div>
          </div>
      </div>
    </div>
  )
}

export const getStaticPaths = async () => {
  const query = `*[_type == "product"] {
    slug {
      current
    }
  }
  `;

  const anniversarys = await client.fetch(query);

  const paths = anniversarys.map((anniversary) => ({
    params: { 
      slug: anniversary.slug.current
    }
  }));

  return {
    paths,
    fallback: 'blocking'
  }
}

export const getStaticProps = async ({ params: { slug }}) => {
  const query = `*[_type == "anniversary" && slug.current == '${slug}'][0]`;
  const anniversarysQuery = '*[_type == "anniversary"]'
  
  const anniversary = await client.fetch(query);
  const anniversarys = await client.fetch(anniversarysQuery);

  console.log(anniversary);

  return {
    props: { anniversarys, anniversary }
  }
}

export default FlowerDetails