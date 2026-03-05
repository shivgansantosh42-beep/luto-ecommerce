import React, { useState } from 'react';
import { useParams, Navigate, useNavigate } from 'react-router-dom';
import { ChevronLeft, Star, Minus, Plus, ShoppingBag } from 'lucide-react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import './ProductDetails.css';

const ProductDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { addToCart } = useCart();
    const [quantity, setQuantity] = useState(1);
    const [isAdded, setIsAdded] = useState(false);

    const product = products.find(p => p.id === parseInt(id));

    if (!product) {
        return <Navigate to="/" replace />;
    }

    const handleDecrease = () => {
        if (quantity > 1) setQuantity(prev => prev - 1);
    };

    const handleIncrease = () => {
        setQuantity(prev => prev + 1);
    };

    const handleAddToCart = () => {
        addToCart(product, quantity);
        setIsAdded(true);
        setTimeout(() => setIsAdded(false), 2000);
    };

    return (
        <div className="product-details-page">
            <button className="back-button" onClick={() => navigate(-1)}>
                <ChevronLeft size={20} />
                Back
            </button>

            <div className="product-details-container">
                <div className="product-image-section">
                    <div className="image-wrapper">
                        <img src={product.image} alt={product.name} />
                        {product.isNew && <span className="badge new-badge">New Arrival</span>}
                    </div>
                </div>

                <div className="product-info-section">
                    <div className="product-header">
                        <span className="category-label">{product.category}</span>
                        <h1 className="product-title">{product.name}</h1>
                        <div className="product-rating">
                            <Star size={18} fill="#ffc107" color="#ffc107" />
                            <span>{product.rating}</span>
                        </div>
                        <p className="product-price">₹{product.price.toFixed(2)}</p>
                    </div>

                    <div className="product-description">
                        <h3>Description</h3>
                        <p>{product.description}</p>
                    </div>

                    <div className="product-actions">
                        <div className="quantity-selector">
                            <button onClick={handleDecrease} disabled={quantity <= 1}>
                                <Minus size={16} />
                            </button>
                            <span>{quantity}</span>
                            <button onClick={handleIncrease}>
                                <Plus size={16} />
                            </button>
                        </div>

                        <button
                            className={`add-to-cart-btn ${isAdded ? 'added' : ''}`}
                            onClick={handleAddToCart}
                        >
                            <ShoppingBag size={20} />
                            {isAdded ? 'Added to Cart!' : 'Add to Cart'}
                        </button>
                    </div>

                    <div className="delivery-info">
                        <p>🚚 Free standard shipping on orders over ₹1500</p>
                        <p>↩️ Free 30-day returns</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
