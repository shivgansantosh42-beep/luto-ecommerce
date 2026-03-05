import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ShoppingBag, Search, Menu, X, User } from 'lucide-react';
import { useCart } from '../context/CartContext';
import './Navbar.css';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { getCartItemCount } = useCart();
    const navigate = useNavigate();

    const cartCount = getCartItemCount();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`navbar ${isScrolled ? 'scrolled glass' : ''}`}>
            <div className="container nav-content">

                {/* Logo */}
                <Link to="/" className="nav-logo">
                    <div className="logo-icon"></div>
                    <span className="logo-text">luto</span>
                </Link>

                {/* Desktop Links */}
                <div className="nav-links hidden-mobile">
                    <Link to="/category/men" className="nav-link">Men</Link>
                    <Link to="/category/women" className="nav-link">Women</Link>
                    <Link to="/category/accessories" className="nav-link">Accessories</Link>
                    <Link to="/category/footwear" className="nav-link">Footwear</Link>
                </div>

                {/* Icons */}
                <div className="nav-icons">
                    <button className="icon-btn hidden-mobile" aria-label="Search">
                        <Search size={22} />
                    </button>
                    <button className="icon-btn hidden-mobile" aria-label="Account">
                        <User size={22} />
                    </button>
                    <button
                        className="icon-btn cart-btn"
                        aria-label="Cart"
                        onClick={() => navigate('/cart')}
                    >
                        <ShoppingBag size={22} />
                        {cartCount > 0 && (
                            <span className="cart-badge pulse">{cartCount}</span>
                        )}
                    </button>
                    <button
                        className="icon-btn mobile-menu-btn"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label="Menu"
                    >
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`mobile-menu glass ${isMobileMenuOpen ? 'open' : ''}`}>
                <Link to="/category/men" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>Men</Link>
                <Link to="/category/women" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>Women</Link>
                <Link to="/category/accessories" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>Accessories</Link>
                <Link to="/category/footwear" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>Footwear</Link>
                <div className="mobile-menu-footer">
                    <button className="btn btn-outline" style={{ width: '100%' }}>Sign In</button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
