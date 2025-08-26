import React from 'react';
import { menTrousers } from '../../data/menProducts';
import ProductCard from '../../components/ProductCard';
import '../Men/CategoryPage.css';

const Trousers = () => {
  return (
    <div className="category-page">
      <h2 className="category-title">Men’s Trousers</h2>
      <div className="product-grid">
        {menTrousers.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
};

export default Trousers;

