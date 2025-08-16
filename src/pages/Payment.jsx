import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Payment = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  if (!state) return <p>⚠️ No order details found.</p>;

  const handlePayment = () => {
    alert("💰 Payment Successful!");
    navigate("/home");
  };

  return (
    <div style={{ maxWidth: "500px", margin: "auto", padding: "30px" }}>
      <h2>💳 Payment Page</h2>
      <p><strong>Name:</strong> {state.customerName}</p>
      <p><strong>Product:</strong> {state.product}</p>
      <p><strong>Quantity:</strong> {state.quantity}</p>
      <p><strong>Total:</strong> ₹{state.totalAmount}</p>

      <button onClick={handlePayment} style={{ marginTop: "20px", padding: "10px", backgroundColor: "#007bff", color: "white", border: "none", borderRadius: "6px" }}>
        Pay Now
      </button>
    </div>
  );
};

export default Payment;
