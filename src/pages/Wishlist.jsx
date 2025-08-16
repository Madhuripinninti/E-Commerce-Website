import React, { useContext } from 'react';
import { StoreContext } from '../context/StoreContext';

const Wishlist = () => {
  const { wishlist, removeFromWishlist } = useContext(StoreContext);

  return (
    <div style={{ padding: '20px' }}>
      <h2>❤️ Your Wishlist</h2>
      {wishlist.length === 0 ? (
        <p>Your wishlist is empty.</p>
      ) : (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
          {wishlist.map((item) => (
            <div key={item.id} style={cardStyle}>
              <img src={item.thumbnail} alt={item.title} style={imgStyle} />
              <h3>{item.title}</h3>
              <p>₹{(item.price * 85).toFixed(0)}</p>
              <button onClick={() => removeFromWishlist(item.id)} style={btnStyle}>❌ Remove</button>
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

const btnStyle = {
  padding: '8px 12px',
  backgroundColor: '#ff4d4f',
  color: '#fff',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
};

export default Wishlist;
