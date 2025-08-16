// src/pages/Categories.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { categories } from '../data/catalog';

const Categories = () => (
  <div className="category-container">
    {categories.map(cat => (
      <Link to={`/products/${cat.slug}`} key={cat.slug}>
        <div className="category-card">
          <img src={cat.image} alt={cat.name} style={{ width: "100%", height: "200px", objectFit: "cover" }} />
          <h3>{cat.name}</h3>
        </div>
      </Link>
    ))}
  </div>
);

export default Categories;
