import React, { useEffect, useState } from "react";
import { products } from "../../data/products";
import "./CategoryPage.css";
import ProductCard from "../../components/ProductCard";

const CategoryPage = ({ category, title }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const res = await fetchProducts(category);
        setProducts(res.data);
      } catch (err) {
        setError(`Failed to load ${title}.`);
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, [category, title]);

  if (loading) {
    return <p className="category-title">Loading {title}...</p>;
  }

  if (error) {
    return <p className="category-title">{error}</p>;
  }

  return (
    <div className="category-page">
      <h2 className="category-title">{title}</h2>
      <div className="product-grid">
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;