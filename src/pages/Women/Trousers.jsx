import React from "react";
import "./CategoryPage.css";
import { trousersProducts } from "../../data/womenProducts";
import ProductCard from "../../components/ProductCard";

const Trousers = () => {
  return (
    <div className="category-page">
      <h2 className="category-title">Trousers</h2>
      <div className="product-grid">
        {trousersProducts.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
};

export default Trousers;

