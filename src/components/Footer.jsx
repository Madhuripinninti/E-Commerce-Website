import React from 'react';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <p style={styles.text}>© {new Date().getFullYear()} M-Cart. All rights reserved.</p>
        <div style={styles.links}>
          <a href="/contact" style={styles.link}>Contact</a>
          <a href="/privacy" style={styles.link}>Privacy Policy</a>
          <a href="/terms" style={styles.link}>Terms & Conditions</a>
        </div>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: '#2c3e50',
    color: 'white',
    padding: '20px 10px',
    marginTop: '40px',
  },
  container: {
    maxWidth: '1000px',
    margin: '0 auto',
    textAlign: 'center',
  },
  text: {
    marginBottom: '10px',
    fontSize: '14px',
  },
  links: {
    display: 'flex',
    justifyContent: 'center',
    gap: '15px',
    flexWrap: 'wrap',
  },
  link: {
    color: '#ffffff',
    textDecoration: 'none',
    fontSize: '14px',
  },
};

export default Footer;
