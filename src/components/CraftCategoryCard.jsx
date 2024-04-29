import React from 'react';
import { Link } from 'react-router-dom';

const CraftCategoryCard = ({ category }) => {
    return (
        <Link to={`/showCategory/${category.subcategory_name}`} className="max-w-xs bg-white shadow-lg rounded-lg overflow-hidden mx-auto my-6">
            <figure>
                <img src={category.image} alt="Craft Category" className="w-full h-48 object-cover object-center" />
            </figure>
            <div className="px-6 py-4">
                <h2 className="font-bold text-xl mb-2">{category.subcategory_name}</h2>
            </div>
        </Link>
    );
}

export default CraftCategoryCard;
