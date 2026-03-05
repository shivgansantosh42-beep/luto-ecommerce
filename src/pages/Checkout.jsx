import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CreditCard, CheckCircle2 } from 'lucide-react';
import { useCart } from '../context/CartContext';
import './Checkout.css';

const Checkout = () => {
    const navigate = useNavigate();
    const { cartItems, getCartTotal, clearCart } = useCart();
    const [paymentMethod, setPaymentMethod] = useState('');
    const [isProcessing, setIsProcessing] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const total = getCartTotal();
    const finalTotal = total + (total > 1500 ? 0 : 100) + (total * 0.08);

    const handlePlaceOrder = (e) => {
        e.preventDefault();
        if (!paymentMethod) {
            alert("Please select a payment method.");
            return;
        }

        setIsProcessing(true);

        // Simulate payment processing delay
        setTimeout(() => {
            setIsProcessing(false);
            setIsSuccess(true);
            clearCart();

            // Redirect back to home after 3 seconds
            setTimeout(() => {
                navigate('/');
            }, 3000);
        }, 2000);
    };

    if (isSuccess) {
        return (
            <div className="checkout-page success">
                <div className="success-message">
                    <CheckCircle2 size={64} className="success-icon" />
                    <h2>Order Placed Successfully!</h2>
                    <p>Thank you for shopping with Luto. You will be redirected to the home page shortly.</p>
                </div>
            </div>
        );
    }

    if (cartItems.length === 0 && !isSuccess) {
        return (
            <div className="checkout-page empty">
                <h2>Your cart is empty. Please add items to checkout.</h2>
                <button onClick={() => navigate('/')} className="return-home">Return Home</button>
            </div>
        );
    }

    return (
        <div className="checkout-page">
            <h1>Checkout</h1>

            <div className="checkout-container">
                <div className="checkout-form-section">
                    <form onSubmit={handlePlaceOrder}>
                        <div className="form-group">
                            <h3>Shipping Information</h3>
                            <div className="input-row">
                                <input type="text" placeholder="First Name" required />
                                <input type="text" placeholder="Last Name" required />
                            </div>
                            <input type="text" placeholder="Address" required />
                            <div className="input-row">
                                <input type="text" placeholder="City" required />
                                <input type="text" placeholder="Postal Code" required />
                            </div>
                        </div>

                        <div className="form-group payment-section">
                            <h3>Payment Method</h3>

                            <div className="payment-options">
                                <label className={`payment-option ${paymentMethod === 'credit_card' ? 'selected' : ''}`}>
                                    <input
                                        type="radio"
                                        name="payment"
                                        value="credit_card"
                                        onChange={(e) => setPaymentMethod(e.target.value)}
                                    />
                                    <div className="option-content">
                                        <CreditCard size={24} />
                                        <span>Credit / Debit Card</span>
                                    </div>
                                </label>

                                <label className={`payment-option ${paymentMethod === 'upi' ? 'selected' : ''}`}>
                                    <input
                                        type="radio"
                                        name="payment"
                                        value="upi"
                                        onChange={(e) => setPaymentMethod(e.target.value)}
                                    />
                                    <div className="option-content">
                                        <span className="upi-icon">UPI</span>
                                        <span>UPI / Netbanking</span>
                                    </div>
                                </label>
                            </div>
                        </div>
                    </form>
                </div>

                <div className="checkout-summary-section">
                    <div className="order-summary-box">
                        <h3>Order Summary</h3>
                        <p className="item-count">{cartItems.length} items</p>

                        <div className="summary-items-list">
                            {cartItems.map(item => (
                                <div key={item.id} className="summary-mini-item">
                                    <img src={item.image} alt={item.name} />
                                    <div className="mini-item-details">
                                        <span className="name">{item.name}</span>
                                        <span className="qty">Qty: {item.quantity}</span>
                                    </div>
                                    <span className="price">₹{(item.price * item.quantity).toFixed(2)}</span>
                                </div>
                            ))}
                        </div>

                        <div className="summary-divider"></div>

                        <div className="summary-total-row">
                            <span>Total to Pay</span>
                            <span className="final-price">₹{finalTotal.toFixed(2)}</span>
                        </div>

                        <button
                            className={`place-order-button ${isProcessing ? 'processing' : ''}`}
                            onClick={handlePlaceOrder}
                            disabled={isProcessing}
                        >
                            {isProcessing ? 'Processing Payment...' : 'Place Order'}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Checkout;
