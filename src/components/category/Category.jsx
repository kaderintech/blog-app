"use client"
import React, { useState } from 'react';
import './category.css';
import CategoryContent from '../categoryContent/CategoryContent';
import Manga from '../manga/Manga';

const Category = () => {
    const [selectedCategory, setSelectedCategory] = useState('Technology');

    const categories = ['Technology', 'Science', 'Health', 'Travel'];

    return (
        <div>
            <div className="category-list wrapper">
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
                {/* İçeriği dinamik olarak render et */}
                <CategoryContent />
            </div>
        </div>
    );
};

export default Category;
