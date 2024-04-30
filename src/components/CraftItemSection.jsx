import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CraftItemSectionCard from './CraftItemSectionCard';

export default function CraftItemSection() {
    const data = useLoaderData();
    console.log(data);

    if (!data) {
        return (
            <div className="flex justify-center items-center h-64">
                <span className="loading loading-spinner loading-lg"></span>
            </div>
        );
    }

    const limitedData = data.slice(0, 6); 

    return (
        <div className="container mx-auto">
            <h2 className='text-center mt-4 font-bold text-5xl mb-8'>Craft Items</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {
                    limitedData.map((item, index) => (
                        <CraftItemSectionCard key={index} data={item} />
                    ))
                }
            </div>
        </div>
    );
}
