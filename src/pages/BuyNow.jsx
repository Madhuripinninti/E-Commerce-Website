import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const BuyNow = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    customerName: '',
    orderDate: new Date().toISOString().split('T')[0],
    product: '',
    quantity: 1,
    totalAmount: 0
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'quantity' ? parseInt(value) : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedTotal = formData.quantity * 85;
    const orderData = {
      ...formData,
      totalAmount: updatedTotal
    };

    try {
      const res = await axios.post("http://localhost:9991/api/orders", orderData);
      if (res.data.status === "success") {
        alert("✅ Order placed successfully!");
        navigate("/payment", { state: orderData });
      } else {
        alert("❌ Order failed: " + res.data.message);
      }
    } catch (err) {
      console.error("Server error:", err);
      alert("❌ Server error.");
    }
  };

  return (
    <div style={{ maxWidth: "500px", margin: "auto", padding: "30px" }}>
      <h2>🛒 Place Order</h2>
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
        <input type="text" name="customerName" placeholder="Customer Name" value={formData.customerName} onChange={handleChange} required />
        <input type="date" name="orderDate" value={formData.orderDate} onChange={handleChange} required />
        <input type="text" name="product" placeholder="Product Name" value={formData.product} onChange={handleChange} required />
        <input type="number" name="quantity" placeholder="Quantity" value={formData.quantity} min="1" onChange={handleChange} required />
        <button type="submit" style={{ padding: "10px", backgroundColor: "#28a745", color: "white", border: "none", borderRadius: "6px" }}>
          🛍️ Confirm Order
        </button>
      </form>
    </div>
  );
};

export default BuyNow;
