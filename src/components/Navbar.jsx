import React, { useState, useEffect } from 'react';
import { ShoppingBag, Search, Menu, X, User } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
                <a href="/" className="nav-logo">
                    <div className="logo-icon"></div>
                    <span className="logo-text">Aura</span>
                </a>

                {/* Desktop Links */}
                <div className="nav-links hidden-mobile">
                    <a href="#new" className="nav-link">New Arrivals</a>
                    <a href="#women" className="nav-link">Women</a>
                    <a href="#men" className="nav-link">Men</a>
                    <a href="#collections" className="nav-link">Collections</a>
                </div>

                {/* Icons */}
                <div className="nav-icons">
                    <button className="icon-btn hidden-mobile" aria-label="Search">
                        <Search size={22} />
                    </button>
                    <button className="icon-btn hidden-mobile" aria-label="Account">
                        <User size={22} />
                    </button>
                    <button className="icon-btn cart-btn" aria-label="Cart">
                        <ShoppingBag size={22} />
                        <span className="cart-badge pulse">3</span>
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
                <a href="#new" className="nav-link">New Arrivals</a>
                <a href="#women" className="nav-link">Women</a>
                <a href="#men" className="nav-link">Men</a>
                <a href="#collections" className="nav-link">Collections</a>
                <div className="mobile-menu-footer">
                    <button className="btn btn-outline" style={{ width: '100%' }}>Sign In</button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
