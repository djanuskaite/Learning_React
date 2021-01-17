import React from 'react';
// if some of the api's data is undefined
import PropTypes from 'prop-types';
import defaultImage from '../../../assets/default-image.jpeg'

const Product = ({ image, name, price }) => {
  // if the img is there only the get me back the url // if it's not there it's gonna be undefined // if img doesn't exist we re not even checking for that url
  const url = image && image.url
  return (
    <article className='product'>
      <h4>Single Product</h4>
      <img src={url || defaultImage} alt={name || 'default name'} />
      <h4>{name}</h4>
      <p>${price || 3.99}</p>
    </article>
  );
};

// if some of the api's data is undefined 
// props are missing
Product.propTypes = {
  image: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired
};
// in case if we have some info missing
// Product.defaultProps = {
//   name:'default',
//   price:3.99,
//   image:defaultImage
// }

export default Product;
