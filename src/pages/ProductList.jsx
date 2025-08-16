import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then((res) => res.json())
      .then((data) => setProducts(data.products))
      .catch((err) => console.error('Failed to load products:', err));
  }, []);

  return (
    <div style={styles.container}>
      {products.map((product) => (
        <div key={product.id} style={styles.card}>
          <img src={product.thumbnail} alt={product.title} style={styles.image} />
          <h3 style={styles.title}>{product.title}</h3>
          <p style={styles.desc}>{product.description}</p>
          <p style={styles.price}>₹ {(product.price * 85).toFixed(0)}</p>
          <Link to={`/products/${product.id}`} style={styles.link}>View Details</Link>
        </div>
      ))}
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '20px',
    justifyContent: 'center',
    padding: '20px',
  },
  card: {
    width: '220px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    backgroundColor: '#fff',
    padding: '15px',
    textAlign: 'center',
    boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
  },
  image: {
    width: '100%',
    height: '150px',
    objectFit: 'cover',
    borderRadius: '4px',
  },
  title: {
    fontSize: '16px',
    margin: '10px 0 5px',
    color: '#2c3e50',
  },
  desc: {
    fontSize: '14px',
    color: '#555',
    height: '60px',
    overflow: 'hidden',
  },
  price: {
    fontSize: '16px',
    fontWeight: 'bold',
    margin: '10px 0',
    color: '#e74c3c',
  },
  link: {
    textDecoration: 'none',
    color: '#2980b9',
    fontSize: '14px',
  },
};

export default ProductList;
