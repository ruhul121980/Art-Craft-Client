import React, { useState } from 'react';
import { useNavigate, useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

export default function Update() {
    const navigate = useNavigate();
    const loaderUser = useLoaderData();
    const [formData, setFormData] = useState(loaderUser);
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData); 

        fetch(`http://localhost:5000/addCraft/${loaderUser._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.modifiedCount>0){
                     
                        Swal.fire({
                            title: 'Success',
                            text: 'Data Updated successfully',
                            icon: 'success',
                            confirmButtonText: 'Cool'
                        });
                        navigate('/myArt');

                }
            });
    };

    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    return (
        <div className="container mx-auto bg-gray-100 p-6">
            <h2 className="text-2xl font-semibold mb-4">Update Craft Item</h2>
            <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
                <div className="mb-4">
                    <label htmlFor="image" className="block mb-1">Image (URL)</label>
                    <input type="text" id="image" name="image" defaultValue={formData.image} onChange={handleChange} className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500" required />
                </div>
                <div className="mb-4">
                    <label htmlFor="itemName" className="block mb-1">Item Name</label>
                    <input type="text" id="itemName" name="itemName" defaultValue={formData.itemName} onChange={handleChange} className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500" required />
                </div>
                <div className="mb-4">
                    <label htmlFor="subcategoryName" className="block mb-1">Subcategory Name</label>
                    <input type="text" id="subcategoryName" name="subcategoryName" defaultValue={formData.subcategoryName} onChange={handleChange} className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500" required />
                </div>
                <div className="mb-4">
                    <label htmlFor="shortDescription" className="block mb-1">Short Description</label>
                    <textarea id="shortDescription" name="shortDescription" defaultValue={formData.shortDescription} onChange={handleChange} className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500" required />
                </div>
                <div className="mb-4">
                    <label htmlFor="price" className="block mb-1">Price</label>
                    <input type="text" id="price" name="price" defaultValue={formData.price} onChange={handleChange} className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500" required />
                </div>
                <div className="mb-4">
                    <label htmlFor="rating" className="block mb-1">Rating</label>
                    <input type="text" id="rating" name="rating" defaultValue={formData.rating} onChange={handleChange} className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500" required />
                </div>
                <div className="mb-4">
                    <label htmlFor="customization" className="block mb-1">Customization (Yes/No)</label>
                    <input type="text" id="customization" name="customization" defaultValue={formData.customization} onChange={handleChange} className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500" required />
                </div>
                <div className="mb-4">
                    <label htmlFor="processingTime" className="block mb-1">Processing Time</label>
                    <input type="text" id="processingTime" name="processingTime" defaultValue={formData.processingTime} onChange={handleChange} className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500" required />
                </div>
                <div className="mb-4">
                    <label htmlFor="stockStatus" className="block mb-1">Stock Status</label>
                    <input type="text" id="stockStatus" name="stockStatus" defaultValue={formData.stockStatus} onChange={handleChange} className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500" required />
                </div>
                
                <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-300">Update</button>
            </form>
        </div>
    );
}
