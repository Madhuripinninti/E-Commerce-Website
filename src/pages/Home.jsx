import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { StoreContext } from '../context/StoreContext';

const bannerImages = [
  'https://media.istockphoto.com/id/1344928463/vector/hand-holding-mobile-smart-phone-with-shopp-app-online-shopping-concept.jpg?s=612x612&w=0&k=20&c=hzkpZejHuLTWPErJ-PeAd_Sj7s2kLb_Jqi5ZbyzKsDE=',
  'https://media.istockphoto.com/id/1198467447/vector/grocery-shopping-promotional-sale-banner.jpg?s=612x612&w=0&k=20&c=lq4GmWDc-c9ckvWdtTGcBZ6nEIdC8rUhvRWVrd2R_50=',
  'https://media.istockphoto.com/id/1405760376/vector/online-shopping-design-graphic-elements-signs-symbols-mobile-marketing-and-digital-marketing.jpg?s=612x612&w=0&k=20&c=2DSpkY9ktsAfzBOcZUMkZThW3B6kvGYG1cHQ3yeaPJg='
];

const Home = () => {
  const navigate = useNavigate();
  const { addToCart, addToWishlist } = useContext(StoreContext);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % bannerImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then(res => res.json())
      .then(data => {
        setProducts(data.products);
        setFilteredProducts(data.products);
      })
      .catch(err => console.error("Error loading products:", err));
  }, []);

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    const filtered = products.filter((product) =>
      product.title.toLowerCase().includes(term)
    );
    setFilteredProducts(filtered);
  };

  return (
    <div style={styles.wrapper}>
      {/* Search Bar with Wishlist & Cart */}
      <div style={styles.searchBarContainer}>
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={handleSearch}
          style={styles.searchInput}
        />
        <div style={styles.searchRightButtons}>
          <button onClick={() => navigate('/wishlist')} style={styles.iconBtn}>❤️ Wishlist</button>
          <button onClick={() => navigate('/cart')} style={styles.iconBtn}>🛒 Cart</button>
        </div>
      </div>

      {/* Banner */}
      <div style={styles.bannerContainer}>
        <img
          src={bannerImages[currentIndex]}
          alt={`Banner ${currentIndex + 1}`}
          style={styles.bannerImage}
        />
      </div>

      {/* Product Grid */}
      <div style={styles.container}>
        {filteredProducts.map((product) => (
          <div key={product.id} style={styles.card}>
            <img
              src={product.thumbnail}
              alt={product.title}
              style={styles.image}
              onClick={() => navigate(`/products/detail/${product.id}`)}
            />
            <h3 style={styles.title}>{product.title}</h3>
            <p style={styles.price}>₹{(product.price * 85).toFixed(0)}</p>
            <p style={styles.description}>{product.description.substring(0, 50)}...</p>

            <div style={styles.actions}>
              <button onClick={() => {
                addToCart(product);
                navigate('/cart');
              }} style={styles.plainButton}>
                🛒 Add to Cart
              </button>
              <button onClick={() => {
                addToWishlist(product);
                navigate('/wishlist');
              }} style={styles.plainButton}>
                ❤️ Wishlist
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  wrapper: {
    backgroundColor: '#f7f7f7',
    textAlign: 'center',
  },
  searchBarContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '15px',
    gap: '20px',
    backgroundColor: '#fff',
    flexWrap: 'wrap',
  },
  searchInput: {
    width: '280px',
    padding: '10px',
    fontSize: '16px',
    borderRadius: '5px',
    border: '1px solid #ccc',
  },
  searchRightButtons: {
    display: 'flex',
    gap: '10px',
  },
  iconBtn: {
    padding: '8px 14px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    backgroundColor: '#f0f0f0',
    cursor: 'pointer',
    fontSize: '14px',
  },
  bannerContainer: {
    width: '100%',
    height: '400px',
    overflow: 'hidden',
    boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
  },
  bannerImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    objectPosition: 'center',
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '20px',
    justifyContent: 'center',
    padding: '20px',
  },
  card: {
    width: '240px',
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '15px',
    backgroundColor: '#fff',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    textAlign: 'center',
  },
  image: {
    width: '100%',
    height: '150px',
    objectFit: 'cover',
    borderRadius: '6px',
    marginBottom: '10px',
    cursor: 'pointer',
  },
  title: {
    fontSize: '1rem',
    fontWeight: 'bold',
    color: '#333',
  },
  price: {
    color: 'green',
    fontSize: '1rem',
    margin: '5px 0',
  },
  description: {
    fontSize: '0.9rem',
    color: '#666',
    minHeight: '45px',
  },
  actions: {
    marginTop: '10px',
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
  },
  plainButton: {
    padding: '8px 10px',
    border: '1px solid #ccc',
    backgroundColor: 'transparent',
    cursor: 'pointer',
    borderRadius: '4px',
    fontSize: '14px',
  },
};

export default Home;
