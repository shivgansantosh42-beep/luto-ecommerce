import React, { useMemo } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import ProductGrid from '../components/ProductGrid';
import './Category.css';

const Category = () => {
    const { name } = useParams();

    // Basic validation to prevent entering weird URLs
    const isValidCategory = useMemo(() => {
        // Check if the title-cased category is in our list
        const titleCase = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
        return VALID_CATEGORIES.includes(titleCase);
    }, [name]);

    if (!isValidCategory) {
        return <Navigate to="/" replace />;
    }

    const titleCaseName = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();

    return (
        <div className="category-page">
            <div className="category-header">
                <h1>{titleCaseName}</h1>
                <p>Explore our curated collection of premium {name.toLowerCase()}.</p>
            </div>
            <ProductGrid category={titleCaseName} hideTitle={true} />
        </div>
    );
};

export default Category;
