import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Contact from './pages/Contact';
import Profile from './pages/Profile';
import AllProducts from './pages/AllProducts';
import ProductList from './pages/ProductList';
import ProductDetail from './pages/ProductDetail';
import ForgotPassword from './pages/ForgotPassword';
import Footer from './components/Footer'; 
import Wishlist from './pages/Wishlist';
import Cart from './pages/Cart';
import BuyNow from './pages/BuyNow';
import Payment from './pages/Payment';

const App = () => {
  const location = useLocation(); 

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/login" element={<Login />} />
        
        <Route path="/home" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/products/category/:category" element={<ProductList />} />
        <Route path="/products/detail/:id" element={<ProductDetail />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/all-products" element={<AllProducts />} />
      <Route path="/wishlist" element={<Wishlist />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/buy-now" element={<BuyNow />} />
      <Route path="/payment" element={<Payment />} />

      </Routes>

      {/* ✅ Show Footer only if current path is /home */}
      {location.pathname === '/home' && <Footer />}
    </>
  );
};

export default App;
