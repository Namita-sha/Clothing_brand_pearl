import React from 'react';
import { Link } from 'react-router-dom';
import './CategoryPage.css'; // Shared styling (same as home)
import ProductCard from '../../components/ProductCard';

const WomenPage = () => {
  return (
    <div className="category-page">
      <h2 className="category-title">Women's Collection</h2>

      {/* Grid Section */}
      <div className="features-grid">

        {/* Row 1 */}
        <div className="feature-card" onClick={() => window.location.href = '/women/dresses'}>
          <div className="feature-icon">👗</div>
          <h3 className="feature-title">Dresses</h3>
          <p className="feature-description">Elegant, flowy, and powerful silhouettes for every occasion.</p>
        </div>

        <div className="feature-card" onClick={() => window.location.href = '/women/shirts'}>
          <div className="feature-icon">👚</div>
          <h3 className="feature-title">Shirts & Blouses</h3>
          <p className="feature-description">From crisp to romantic — styles for the empowered woman.</p>
        </div>

        <div className="feature-card" onClick={() => window.location.href = '/women/outerwear'}>
          <div className="feature-icon">🧥</div>
          <h3 className="feature-title">Coats & Jackets</h3>
          <p className="feature-description">Layer your look with timeless and trend-forward outerwear.</p>
        </div>

        {/* Row 2 */}
        <div className="feature-card" onClick={() => window.location.href = '/women/trousers'}>
          <div className="feature-icon">👖</div>
          <h3 className="feature-title">Trousers</h3>
          <p className="feature-description">Chic, tailored, and comfortable bottoms made to move with you.</p>
        </div>

        <div className="feature-card" onClick={() => window.location.href = '/women/handbags'}>
          <div className="feature-icon">👜</div>
          <h3 className="feature-title">Handbags</h3>
          <p className="feature-description">Statement pieces and everyday elegance for every outfit.</p>
        </div>

        <div className="feature-card" onClick={() => window.location.href = '/women/footwear'}>
          <div className="feature-icon">👠</div>
          <h3 className="feature-title">Footwear</h3>
          <p className="feature-description">Powerful heels, bold flats & dreamy shoes you’ll wear forever.</p>
        </div>

        
      </div>
    </div>
  );
};

export default WomenPage;
