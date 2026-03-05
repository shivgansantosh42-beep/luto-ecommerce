import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, ShoppingCart, Star } from 'lucide-react';
import { useCart } from '../context/CartContext';
import './ProductCard.css';

const ProductCard = ({ product }) => {
    const { addToCart } = useCart();

    const handleQuickAdd = (e) => {
        e.preventDefault(); // Prevent navigating to the product page when clicking the button
        e.stopPropagation();
        addToCart(product, 1);
        // You could add a mini toast notification here in the future
    };

    return (
        <Link to={`/product/${product.id}`} className="product-card glass" style={{ textDecoration: 'none', color: 'inherit' }}>
            <div className="product-image-container">
                <img src={product.image} alt={product.name} className="product-image" loading="lazy" />

                {product.isNew && <span className="product-badge new">New</span>}

                <button className="wishlist-btn" aria-label="Add to Wishlist">
                    <Heart size={18} />
                </button>

                <div className="product-overlay">
                    <button
                        className="btn btn-primary add-to-cart-btn"
                        onClick={handleQuickAdd}
                    >
                        <ShoppingCart size={18} /> Quick Add
                    </button>
                </div>
            </div>

            <div className="product-info">
                <div className="product-meta">
                    <span className="product-category">{product.category}</span>
                    <div className="product-rating">
                        <Star size={12} fill="var(--color-secondary)" color="var(--color-secondary)" />
                        <span>{product.rating}</span>
                    </div>
                </div>

                <h3 className="product-name">{product.name}</h3>
                <p className="product-price">
                    {new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(product.price)}
                </p>
            </div>
        </Link>
    );
};

export default ProductCard;
