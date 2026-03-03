import React, { useState } from 'react';
import ProductCard from './ProductCard';
import { products } from '../data/products';
import './ProductGrid.css';

const ProductGrid = () => {
    const [activeCategory, setActiveCategory] = useState('All');
    const categories = ['All', 'Men', 'Women', 'Accessories', 'Footwear'];

    const filteredProducts = activeCategory === 'All'
        ? products
        : products.filter(p => p.category === activeCategory);

    return (
        <section className="product-section container">
            <div className="section-header">
                <h2 className="section-title">Trending Now</h2>
                <div className="category-filters hidden-mobile">
                    {categories.map(cat => (
                        <button
                            key={cat}
                            className={`filter-btn ${activeCategory === cat ? 'active' : ''}`}
                            onClick={() => setActiveCategory(cat)}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            </div>

            <div className="product-grid">
                {filteredProducts.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>

            <div className="view-all-container">
                <button className="btn btn-outline" style={{ minWidth: '200px' }}>
                    View All Products
                </button>
            </div>
        </section>
    );
};

export default ProductGrid;
