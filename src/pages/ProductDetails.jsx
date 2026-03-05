import React, { useState } from 'react';
import { useParams, Navigate, useNavigate } from 'react-router-dom';
import { ChevronLeft, Star, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useProducts } from '../context/ProductContext';
import { useCart } from '../context/CartContext';
import './ProductDetails.css';

const ProductDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { addToCart } = useCart();
    const { products, loading, error } = useProducts();
    const [quantity, setQuantity] = useState(1);
    const [isAdded, setIsAdded] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);

    // Show loading state while context fetches products
    if (loading) return <div className="container" style={{ padding: '5rem', textAlign: 'center' }}><h2>Loading product...</h2></div>;
    if (error) return <div className="container" style={{ padding: '5rem', textAlign: 'center', color: 'red' }}><h2>{error}</h2></div>;

    const product = products.find(p => p.id === parseInt(id));

    // Ensure we have a default image set if product exists
    const currentImage = selectedImage || product?.image;

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
                        <img src={currentImage} alt={product.name} />
                        {product.isNew && <span className="badge new-badge">New Arrival</span>}
                    </div>
                    {/* Image Gallery Thumbnails */}
                    {product.images && product.images.length > 1 && (
                        <div className="image-gallery-thumbnails" style={{ display: 'flex', gap: '10px', marginTop: '15px' }}>
                            {product.images.map((img, index) => (
                                <div
                                    key={index}
                                    onClick={() => setSelectedImage(img)}
                                    style={{
                                        width: '80px',
                                        height: '80px',
                                        cursor: 'pointer',
                                        border: currentImage === img ? '2px solid var(--color-primary)' : '2px solid transparent',
                                        borderRadius: '8px',
                                        overflow: 'hidden'
                                    }}
                                >
                                    <img src={img} alt={`${product.name} thumbnail ${index + 1}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                </div>
                            ))}
                        </div>
                    )}
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
