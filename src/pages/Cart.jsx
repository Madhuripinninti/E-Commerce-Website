import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { StoreContext } from '../context/StoreContext';

const Cart = () => {
  const { cart, removeFromCart } = useContext(StoreContext);
  const navigate = useNavigate();

  const handleBuyNow = (product) => {
    navigate('/buy-now', { state: { product } }); // 👈 send product to buy page
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>🛒 Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
          {cart.map((item) => (
            <div key={item.id} style={cardStyle}>
              <img src={item.thumbnail} alt={item.title} style={imgStyle} />
              <h3>{item.title}</h3>
              <p>₹{(item.price * 85).toFixed(0)}</p>
              <button onClick={() => removeFromCart(item.id)} style={removeBtn}>❌ Remove</button>
              <button onClick={() => handleBuyNow(item)} style={buyBtn}>✅ Buy Now</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const cardStyle = {
  border: '1px solid #ccc',
  borderRadius: '8px',
  padding: '15px',
  width: '220px',
  textAlign: 'center',
  backgroundColor: '#fff',
  boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
};

const imgStyle = {
  width: '100%',
  height: '150px',
  objectFit: 'cover',
  borderRadius: '6px',
  marginBottom: '10px',
};

const removeBtn = {
  padding: '6px 10px',
  marginTop: '8px',
  marginBottom: '5px',
  backgroundColor: '#ff4d4f',
  color: '#fff',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
};

const buyBtn = {
  padding: '6px 10px',
  backgroundColor: 'green',
  color: '#fff',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
};

export default Cart;
