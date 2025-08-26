import React from "react";
import { menOuterwear } from "../../data/menProducts";
import ProductCard from '../../components/ProductCard';
import "../Men/CategoryPage.css";

const Outerwear = () => {
  return (
    <div className="category-page">
      <h2 className="category-title">Men’s Outerwear</h2>
      <div className="product-grid">
        {menOuterwear.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
};

export default Outerwear;
