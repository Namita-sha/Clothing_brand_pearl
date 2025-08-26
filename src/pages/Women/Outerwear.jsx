import React from "react";
import "./CategoryPage.css";
import { outerwearProducts } from "../../data/womenProducts";
import ProductCard from "../../components/ProductCard";

const Outerwear = () => {
  return (
    <div className="category-page">
      <h2 className="category-title">Coats & Jackets</h2>
      <div className="product-grid">
        {outerwearProducts.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
};

export default Outerwear;
