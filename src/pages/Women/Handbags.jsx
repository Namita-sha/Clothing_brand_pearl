import React from "react";
import "./CategoryPage.css";
import { handbagsProducts } from "../../data/womenProducts";
import ProductCard from "../../components/ProductCard";

const Handbags = () => {
  return (
    <div className="category-page">
      <h2 className="category-title">Handbags</h2>
      <div className="product-grid">
        {handbagsProducts.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
};

export default Handbags;

