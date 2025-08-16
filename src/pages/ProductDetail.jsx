import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const ProductDetail = () => {
  const { id } = useParams(); // get id from URL
  const [product, setProduct] = useState(null);
  const [related, setRelated] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then(res => res.json())
      .then(data => {
        setProduct(data);

        // fetch related products from same category
        fetch(`https://dummyjson.com/products/category/${data.category}`)
          .then(res => res.json())
          .then(res => {
            const others = res.products.filter(p => p.id !== data.id); // exclude current
            setRelated(others);
          });
      });
  }, [id]);

  if (!product) return <h2>Loading...</h2>;

  return (
    <div style={{ padding: '30px' }}>
      <button onClick={() => navigate(-1)} style={styles.backBtn}>← Back</button>

      <h2>{product.title}</h2>
      <img src={product.thumbnail} alt={product.title} style={styles.image} />
      <p><strong>₹{(product.price * 85).toFixed(0)}</strong></p>
      <p>{product.description}</p>

      <h3 style={{ marginTop: '40px' }}>Related Products</h3>
      <div style={styles.related}>
        {related.map(item => (
          <div
            key={item.id}
            style={styles.relatedCard}
            onClick={() => navigate(`/products/detail/${item.id}`)}
          >
            <img src={item.thumbnail} alt={item.title} style={styles.relatedImage} />
            <p>{item.title}</p>
            <p style={{ color: 'green' }}>₹{(item.price * 85).toFixed(0)}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  backBtn: {
    marginBottom: '20px',
    background: '#eee',
    padding: '8px 12px',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer'
  },
  image: {
    width: '300px',
    borderRadius: '10px',
    marginBottom: '20px'
  },
  related: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '20px',
    marginTop: '20px'
  },
  relatedCard: {
    width: '180px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    padding: '10px',
    cursor: 'pointer',
    textAlign: 'center',
  },
  relatedImage: {
    width: '100%',
    height: '120px',
    objectFit: 'cover',
    borderRadius: '6px',
    marginBottom: '8px'
  }
};

export default ProductDetail;
