import React from 'react';

const Contact = () => {
  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Contact Us</h2>
      <div style={styles.card}>
        <p><strong>Support Email:</strong> support@mcart.com</p>
        <p><strong>Phone:</strong> +91 98765 43210</p>
        <p><strong>Customer Service Hours:</strong> Mon - Sat, 9:00 AM to 8:00 PM</p>
        <p><strong>Address:</strong> M-Cart HQ, 2nd Floor, Tech Park, Hyderabad, India - 500081</p>
      </div>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '600px',
    margin: '60px auto',
    padding: '30px',
    borderRadius: '8px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
    backgroundColor: '#ffffff',
    fontFamily: 'Arial, sans-serif',
  },
  heading: {
    fontSize: '2rem',
    marginBottom: '20px',
    color: '#2c3e50',
    borderBottom: '2px solid #2c3e50',
    paddingBottom: '10px',
    textAlign: 'center',
  },
  card: {
    lineHeight: '1.8',
    fontSize: '1rem',
    color: '#333',
  },
};

export default Contact;
