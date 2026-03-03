import React from 'react';
import { ArrowRight } from 'lucide-react';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-background"></div>

            <div className="container hero-content">
                <div className="hero-text-area animate-fade-in-up">
                    <span className="badge">New Collection 2026</span>
                    <h1 className="hero-title">
                        Redefine Your <br />
                        <span className="text-gradient">Everyday Style</span>
                    </h1>
                    <p className="hero-subtitle">
                        Discover a curated collection of premium essentials designed to elevate your wardrobe with uncompromising quality and modern aesthetics.
                    </p>

                    <div className="hero-actions">
                        <button className="btn btn-primary btn-lg">
                            Shop Now <ArrowRight size={20} style={{ marginLeft: '0.5rem' }} />
                        </button>
                        <button className="btn btn-outline btn-lg glass">
                            Explore Collections
                        </button>
                    </div>

                    <div className="hero-stats">
                        <div className="stat">
                            <span className="stat-value">50k+</span>
                            <span className="stat-label">Happy Customers</span>
                        </div>
                        <div className="stat-divider"></div>
                        <div className="stat">
                            <span className="stat-value">2k+</span>
                            <span className="stat-label">Premium Products</span>
                        </div>
                        <div className="stat-divider"></div>
                        <div className="stat">
                            <span className="stat-value">4.9/5</span>
                            <span className="stat-label">Rating</span>
                        </div>
                    </div>
                </div>

                <div className="hero-image-area">
                    <div className="image-wrapper glass">
                        {/* Generate a stunning image here instead of text later if needed, but for now we use a beautiful CSS composition */}
                        <div className="hero-abstract-art">
                            <div className="circle circle-1"></div>
                            <div className="circle circle-2"></div>
                            <div className="blur-overlay"></div>
                        </div>
                    </div>
                    {/* Floating elements */}
                    <div className="floating-card flex items-center glass">
                        <div className="avatar"></div>
                        <div>
                            <p style={{ fontSize: '0.8rem', fontWeight: 600, margin: 0 }}>Latest Arrival</p>
                            <p style={{ fontSize: '0.7rem', color: 'var(--color-text-muted)', margin: 0 }}>Just dropped</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
