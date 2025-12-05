import React from 'react';
// Assuming you have a CSS file for styling
import '../index.css'; 
// You might also use icons here, like from 'react-icons' or similar

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* Company/Navigation Links Section */}
        <div className="footer-section footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/about">About Us</a></li>
            <li><a href="/contact">Contact Us</a></li>
            <li><a href="/faq">FAQ</a></li>
            <li><a href="/returns">Shipping & Returns</a></li>
          </ul>
        </div>
        
        {/* Categories/Information Section */}
        <div className="footer-section footer-categories">
          <h3>Shop</h3>
          <ul>
            <li><a href="/category/electronics">Electronics</a></li>
            <li><a href="/category/clothing">Apparel</a></li>
            <li><a href="/category/home-goods">Home Goods</a></li>
            <li><a href="/category/books">Books</a></li>
          </ul>
        </div>
        
        {/* Contact/Social Media Section */}
        <div className="footer-section footer-contact">
          <h3>Connect</h3>
          <p>Email: <a href="mailto:support@ecommerce.com">support@ecommerce.com</a></p>
          <p>Phone: (123) 456-7890</p>
          <div className="social-links">
            {/* Replace with actual icons and links */}
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
          </div>
        </div>
        
      </div>
      
      {/* Copyright Bar */}
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Your E-commerce Store. All rights reserved.</p>
        <div className="payment-icons">
            {/* Placeholder for payment logos */}
            <span>Visa</span>
            <span>Mastercard</span>
            <span>PayPal</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;