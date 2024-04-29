import React, { useEffect, useState } from 'react';
import CraftCategoryCard from './CraftCategoryCard';

const CraftCategory = () => {
    const [craftCategoryData, setCraftCategoryData] = useState([]);

    useEffect(() => {
        const fetchCraftCategoryData = async () => {
            try {
                const response = await fetch('http://localhost:5000/showCraft');
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const data = await response.json();
                setCraftCategoryData(data);
                console.log('success');
            } catch (error) {
                console.error('Error fetching craft items:', error);
            }
        };

        fetchCraftCategoryData();
    }, []);

    return (
        <div>
            <h2 className='text-center mt-8 font-bold text-5xl mb-8'>Craft Categories</h2>
            <div className='grid grid-cols-3'>
            
                {craftCategoryData.map((category) => (
                    <CraftCategoryCard key={category._id} category={category} />
                ))}
            
            </div>
        </div>
    );
};

export default CraftCategory;
