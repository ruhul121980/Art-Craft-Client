import React, { useEffect, useState } from 'react';
import CraftCategoryCard from './CraftCategoryCard';

const CraftCategory = () => {
    const [craftCategoryData, setCraftCategoryData] = useState([]);
    const [isLoading, setIsLoading] = useState(true); 

    useEffect(() => {
        const fetchCraftCategoryData = async () => {
            try {
                const response = await fetch('http://localhost:5000/showCraft');
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const data = await response.json();
                setCraftCategoryData(data);
                setIsLoading(false); 
                console.log('success');
            } catch (error) {
                console.error('Error fetching craft items:', error);
                setIsLoading(false); 
            }
        };

        fetchCraftCategoryData();
    }, []);

    return (
        <div className="container mx-auto px-4">
            <h2 className='text-center mt-8 font-bold text-5xl mb-8'>Craft Categories</h2>
            {isLoading ? ( 
                <div className="flex justify-center items-center h-64">
                    <span className="loading loading-spinner loading-lg"></span>
                </div>
            ) : (
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                    {craftCategoryData.map((category) => (
                        <CraftCategoryCard key={category._id} category={category} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default CraftCategory;
