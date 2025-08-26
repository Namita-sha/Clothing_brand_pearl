import React from 'react';
import { menShirts } from '../../data/menProducts';
import ProductCard from '../../components/ProductCard';
import './CategoryPage.css';

const MenShirts = () => {
  return (
    <div className="category-container">
      <h2 className="category-title">Men's Shirts</h2>
      <div className="products-grid">
        {menShirts.map((item) => (
          <ProductCard key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default MenShirts;


