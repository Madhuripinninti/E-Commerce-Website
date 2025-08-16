import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AllProducts = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then(res => res.json())
      .then(data => {
        setProducts(data.products);
        setFilteredProducts(data.products);
        setLoading(false);
      })
      .catch(err => {
        console.error("Error fetching products:", err);
        setLoading(false);
      });
  }, []);

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    const filtered = products.filter((product) =>
      product.title.toLowerCase().includes(term)
    );
    setFilteredProducts(filtered);
  };

  const addToCart = (product) => {
    setCart([...cart, product]);
    alert(`🛒 Added "${product.title}" to cart!`);
  };

  const addToWishlist = (product) => {
    setWishlist([...wishlist, product]);
    alert(`❤️ Added "${product.title}" to wishlist!`);
  };

  const viewCart = () => {
    alert(`🛒 Cart has ${cart.length} item(s)`);
  };

  const viewWishlist = () => {
    alert(`❤️ Wishlist has ${wishlist.length} item(s)`);
  };

  if (loading) return <h3 style={{ textAlign: 'center' }}>Loading Products...</h3>;

  return (
    <div style={{ padding: '20px' }}>
      {/* 🔍 Search + Wishlist + Cart Top Row */}
      <div style={styles.topBar}>
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={handleSearch}
          style={styles.search}
        />
        <button style={styles.plainButton} onClick={viewWishlist}>❤️ View Wishlist</button>
        <button style={styles.plainButton} onClick={viewCart}>🛒 View Cart</button>
      </div>

      {/* Products Grid */}
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
              <button onClick={() => addToCart(product)} style={styles.plainButton}>
                🛒 Add to Cart
              </button>
              <button onClick={() => addToWishlist(product)} style={styles.plainButton}>
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
  topBar: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '15px',
    marginBottom: '20px',
    flexWrap: 'wrap',
  },
  search: {
    width: '250px',
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    fontSize: '16px',
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '20px',
    justifyContent: 'center',
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

export default AllProducts;
