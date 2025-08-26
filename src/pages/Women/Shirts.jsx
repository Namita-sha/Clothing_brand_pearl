import React from "react";
import "./CategoryPage.css";
import { shirtProducts } from "../../data/womenProducts";
import ProductCard from "../../components/ProductCard";

const Shirts = () => {
  return (
    <div className="category-page">
      <h2 className="category-title">Shirts & Blouses</h2>
      <div className="product-grid">
        {shirtProducts.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
};

export default Shirts;

