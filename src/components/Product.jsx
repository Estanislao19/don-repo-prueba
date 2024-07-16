import React from 'react';

const Product = ({ product }) => {
  return (
    <div className="product">
      <img src={product.picture.location} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
    </div>
  );
};

export default Product;
