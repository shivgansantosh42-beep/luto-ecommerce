import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Minus, Plus, Trash2, ArrowRight } from 'lucide-react';
import { useCart } from '../context/CartContext';
import './Cart.css';

const Cart = () => {
    const { cartItems, updateQuantity, removeFromCart, getCartTotal } = useCart();
    const navigate = useNavigate();

    const total = getCartTotal();

    if (cartItems.length === 0) {
        return (
            <div className="cart-page empty">
                <div className="empty-cart-content">
                    <h2>Your cart is empty</h2>
                    <p>Looks like you haven't added anything to your cart yet.</p>
                    <Link to="/" className="continue-shopping">
                        Continue Shopping
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="cart-page">
            <h1>Shopping Cart</h1>

            <div className="cart-container">
                <div className="cart-items">
                    {cartItems.map((item) => (
                        <div key={item.id} className="cart-item">
                            <div className="item-image">
                                <img src={item.image} alt={item.name} />
                            </div>

                            <div className="item-details">
                                <Link to={`/product/${item.id}`} className="item-name">
                                    {item.name}
                                </Link>
                                <span className="item-category">{item.category}</span>
                                <span className="item-price">₹{item.price.toFixed(2)}</span>
                            </div>

                            <div className="item-actions">
                                <div className="quantity-control">
                                    <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>
                                        <Minus size={14} />
                                    </button>
                                    <span>{item.quantity}</span>
                                    <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                                        <Plus size={14} />
                                    </button>
                                </div>

                                <button
                                    className="remove-button"
                                    onClick={() => removeFromCart(item.id)}
                                    aria-label="Remove item"
                                >
                                    <Trash2 size={18} />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="cart-summary">
                    <h3>Order Summary</h3>

                    <div className="summary-row">
                        <span>Subtotal</span>
                        <span>₹{total.toFixed(2)}</span>
                    </div>
                    <div className="summary-row">
                        <span>Shipping</span>
                        <span>{total > 1500 ? 'Free' : '₹100.00'}</span>
                    </div>
                    <div className="summary-row">
                        <span>Tax (Estimated)</span>
                        <span>₹{(total * 0.08).toFixed(2)}</span>
                    </div>

                    <div className="summary-divider"></div>

                    <div className="summary-row total">
                        <span>Total</span>
                        <span>₹{(total + (total > 1500 ? 0 : 100) + (total * 0.08)).toFixed(2)}</span>
                    </div>

                    <button
                        className="checkout-button"
                        onClick={() => navigate('/checkout')}
                    >
                        Proceed to Checkout
                        <ArrowRight size={18} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Cart;
