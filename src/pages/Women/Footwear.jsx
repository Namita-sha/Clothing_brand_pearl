import React from "react";
import "./CategoryPage.css";
import { footwearProducts } from "../../data/womenProducts";
import ProductCard from "../../components/ProductCard";

const Footwear = () => {
  return (
    <div className="category-page">
      <h2 className="category-title">Footwear</h2>
      <div className="product-grid">
        {footwearProducts.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
};

export default Footwear;

