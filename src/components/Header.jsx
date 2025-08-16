import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header style={styles.header}>
    <div style={styles.container}>
      {/* Logo at far left */}
      <div style={styles.logo}>
        🛍 <span style={{ marginLeft: '6px' }}>M-Cart</span>
      </div>

      {/* Centered navigation */}
      <nav style={styles.nav}>
        <Link to="/home" style={styles.link}>Home</Link>
        <Link to="/all-products" style={styles.link}>All Products</Link>
        <Link to="/contact" style={styles.link}>Contact</Link>
        <Link to="/profile" style={styles.link}>Profile</Link>
        <Link to="/login" style={styles.link}>Login</Link>
      </nav>
    </div>
  </header>
);

const styles = {
  header: {
    backgroundColor: '#2c3e50',
    height: '80px', // ⬆ Increased height
    display: 'flex',
    alignItems: 'center',
    boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0 30px',
  },
  logo: {
    color: '#fff',
    fontSize: '24px',
    fontWeight: 'bold',
    display: 'flex',
    alignItems: 'center',
    flex: '0 0 auto', // Fixed to the left
  },
  nav: {
    display: 'flex',
    gap: '30px',
    margin: '0 auto',
    justifyContent: 'center',
    flex: '1', // ⬅️ Force center alignment
  },
  link: {
    color: '#fff',
    textDecoration: 'none',
    fontSize: '16px',
    fontWeight: 'bold',
    transition: 'color 0.3s',
  },
};

export default Header;
