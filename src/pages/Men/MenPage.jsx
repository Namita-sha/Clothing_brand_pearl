import React from 'react';
import { useNavigate } from 'react-router-dom';
import './CategoryPage.css'; // Keep same CSS file

const MenPage = () => {
  const navigate = useNavigate();

  const menCategories = [
    {
      icon: '👕',
      title: 'Shirts',
      description: 'Smart and casual styles crafted for confidence.',
      path: '/men/shirts',
    },
    {
      icon: '👖',
      title: 'Trousers',
      description: 'Tailored, relaxed or rugged — bottoms built to move.',
      path: '/men/trousers',
    },
    {
      icon: '🧥',
      title: 'Outerwear',
      description: 'Layer with leather, denim, coats and bold jackets.',
      path: '/men/outerwear',
    },
    {
      icon: '👞',
      title: 'Footwear',
      description: 'Classic shoes and statement sneakers for all walks.',
      path: '/men/footwear',
    },
  ];

  return (
    <div className="category-page">
      <h2 className="category-title">Men's Collection</h2>

      <div className="features-grid">
        {menCategories.map((category, index) => (
          <div
            key={index}
            className="feature-card"
            onClick={() => navigate(category.path)}
          >
            <div className="feature-icon">{category.icon}</div>
            <h3 className="feature-title">{category.title}</h3>
            <p className="feature-description">{category.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenPage;
