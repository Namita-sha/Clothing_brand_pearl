import React from "react";
import { menFootwear } from "../../data/menProducts";
import ProductCard from '../../components/ProductCard';
import "../Men/CategoryPage.css";

const Footwear = () => {
  return (
    <div className="category-page">
      <h2 className="category-title">Men’s Footwear</h2>
      <div className="product-grid">
        {menFootwear.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
};

export default Footwear;

