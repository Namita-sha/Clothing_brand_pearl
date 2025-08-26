// src/components/ProductCard.jsx
import React, { useState } from 'react';
import './ProductCard.css';

const ProductCard = ({ id, image, name, price, description }) => {
  const [wishlisted, setWishlisted] = useState(false);
  const [added, setAdded] = useState(false);

  return (
    <div className="product-card">
      <img src={image} alt={name} className="product-image" />
      <h3 className="product-name">{name}</h3>
      <p className="product-price">₹{price}</p>
      <p className="product-description">{description}</p>
      <div className="product-actions">
        <button className="action-btn" onClick={() => {
          setWishlisted(!wishlisted);
         
        }}>
          {wishlisted ? '♥ Wishlisted' : '♡ Wishlist'}
        </button>
        <button className="action-btn" onClick={() => {
          setAdded(true);
         
        }} disabled={added}>
          {added ? '✔ Added' : '+ Add to Cart'}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;


