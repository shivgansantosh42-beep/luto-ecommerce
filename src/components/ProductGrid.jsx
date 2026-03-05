import React, { useState } from 'react';
import ProductCard from './ProductCard';
import { useProducts } from '../context/ProductContext';
import './ProductGrid.css';

const ProductGrid = ({ category: initialCategory, hideTitle }) => {
    const { products, loading, error } = useProducts();
    const [activeCategory, setActiveCategory] = useState(initialCategory || 'All');

    React.useEffect(() => {
        if (initialCategory) {
            setActiveCategory(initialCategory);
        }
    }, [initialCategory]);

    if (loading) return <div className="container" style={{ textAlign: 'center', padding: '4rem' }}><h3>Loading amazing products...</h3></div>;
    if (error) return <div className="container" style={{ textAlign: 'center', padding: '4rem', color: 'red' }}><h3>{error}</h3></div>;

    const categories = ['All', ...new Set(products.map(p => p.category))];

    const filteredProducts = activeCategory === 'All'
        ? products
        : products.filter(p => p.category === activeCategory);

    return (
        <section className="product-section container">
            {!hideTitle && (
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
            )}

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
