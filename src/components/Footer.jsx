import React from 'react';
import { Instagram, Twitter, Facebook, Mail } from 'lucide-react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-content">
                <div className="footer-brand">
                    <a href="/" className="nav-logo" style={{ marginBottom: '1.5rem', display: 'flex' }}>
                        <div className="logo-icon"></div>
                        <span className="logo-text">luto</span>
                    </a>
                    <p className="footer-desc">
                        Redefining everyday style with premium essentials crafted for modern living. Quality, sustainability, and aesthetic excellence.
                    </p>
                    <div className="social-links">
                        <a href="#" aria-label="Instagram"><Instagram size={20} /></a>
                        <a href="#" aria-label="Twitter"><Twitter size={20} /></a>
                        <a href="#" aria-label="Facebook"><Facebook size={20} /></a>
                    </div>
                </div>

                <div className="footer-links-group">
                    <h4 className="footer-heading">Shop</h4>
                    <a href="#" className="footer-link">New Arrivals</a>
                    <a href="#" className="footer-link">Bestsellers</a>
                    <a href="#" className="footer-link">Men's Collection</a>
                    <a href="#" className="footer-link">Women's Collection</a>
                    <a href="#" className="footer-link">Accessories</a>
                </div>

                <div className="footer-links-group">
                    <h4 className="footer-heading">Company</h4>
                    <a href="#" className="footer-link">About Us</a>
                    <a href="#" className="footer-link">Sustainability</a>
                    <a href="#" className="footer-link">Careers</a>
                    <a href="#" className="footer-link">Press</a>
                    <a href="#" className="footer-link">Contact</a>
                </div>

                <div className="footer-newsletter">
                    <h4 className="footer-heading">Stay in the loop</h4>
                    <p className="footer-desc" style={{ marginBottom: '1rem' }}>
                        Subscribe to receive updates, access to exclusive deals, and more.
                    </p>
                    <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
                        <div className="input-group">
                            <Mail className="input-icon" size={18} />
                            <input type="email" placeholder="Enter your email address" required />
                        </div>
                        <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '0.5rem' }}>
                            Subscribe
                        </button>
                    </form>
                </div>
            </div>

            <div className="footer-bottom glass">
                <div className="container flex justify-between items-center bottom-content">
                    <p>&copy; 2026 luto E-commerce. All rights reserved.</p>
                    <div className="bottom-links">
                        <a href="#">Privacy Policy</a>
                        <a href="#">Terms of Service</a>
                        <a href="#">Shipping Policy</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
