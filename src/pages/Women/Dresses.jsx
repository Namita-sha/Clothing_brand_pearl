import React from 'react';
import womenProducts from '../../data/womenProducts';
import './CategoryPage.css';
import ProductCard from "../../components/ProductCard";

const Dresses = () => {
  const dresses = womenProducts.filter(p => p.category === 'dresses');

  return (
    <div className="category-page">
      <h2 className="category-title">Dresses</h2>
      <div className="product-grid">
        {dresses.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
};

export default Dresses;



