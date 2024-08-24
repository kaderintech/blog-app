import React, { useState } from 'react';
import './category.css';

const Category = () => {
    const [selectedCategory, setSelectedCategory] = useState('Technology');

    const categories = ['Technology', 'Science', 'Health', 'Travel'];

    const renderContent = () => {
        switch (selectedCategory) {
            case 'Technology':
                return <p>Technology Content</p>;
            case 'Science':
                return <p>Science Content</p>;
            case 'Health':
                return <p>Health Content</p>;
            case 'Travel':
                return <p>Travel Content</p>;
            default:
                return <p>Select a category</p>;
        }
    };

    return (
        <div>
            <div className="category-list">
                
                {categories.map((category) => (
                    <div
                        key={category}
                        className={`category-item ${selectedCategory === category ? 'active' : ''}`}
                        onClick={() => setSelectedCategory(category)}
                    >
                        {category}
                    </div>
                ))}
            </div>
            <div className="category-content">
                {renderContent()}
                
            </div>
        </div>
    );
};

export default Category;
