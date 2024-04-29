import { useState } from 'react';
import Swal from 'sweetalert2';
import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';

export default function AddCraft() {
    const { user } = useContext(AuthContext);
    console.log(user)
    const [formData, setFormData] = useState({
        image: '',
        itemName: '',
        subcategoryName: '',
        shortDescription: '',
        price: '',
        rating: '',
        customization: '',
        processingTime: '',
        stockStatus: '',
        userEmail: '',
        userName: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your logic to handle form submission here

        const image = formData.image;
        const itemName = formData.itemName;
        const subcategoryName = formData.subcategoryName;
        const shortDescription = formData.shortDescription;
        const price = formData.price;
        const rating = formData.rating;
        const customization = formData.customization;
        const processingTime = formData.processingTime;
        const stockStatus = formData.stockStatus;
        const userEmail = user.email;
        const userName = user.displayName;

        const addCraftData = {
            image,
            itemName,
            subcategoryName,
            shortDescription,
            price,
            rating,
            customization,
            processingTime,
            stockStatus,
            userEmail,
            userName
        };
        console.log(addCraftData);
        fetch('http://localhost:5000/addCraft', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addCraftData)
        })
            .then(res => res.json()
                .then(data => {
                    console.log(data)
                    if (data.insertedId) {
                        Swal.fire({
                            title: 'Success',
                            text: 'Data inserted successfully',
                            icon: 'success',
                            confirmButtonText: 'Cool'
                        });
                    }
                })
            )


    };

    return (
        <div className="container mx-auto bg-gray-100 p-6">
            <h2 className="text-2xl font-semibold mb-4">Add Craft Item</h2>
            <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
                <div className="mb-4">
                    <label htmlFor="image" className="block mb-1">Image (URL)</label>
                    <input type="text" id="image" name="image" value={formData.image} onChange={handleChange} className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500" required />
                </div>
                <div className="mb-4">
                    <label htmlFor="itemName" className="block mb-1">Item Name</label>
                    <input type="text" id="itemName" name="itemName" value={formData.itemName} onChange={handleChange} className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500" required />
                </div>
                <div className="mb-4">
                    <label htmlFor="subcategoryName" className="block mb-1">Subcategory Name</label>
                    <select id="subcategoryName" name="subcategoryName" value={formData.subcategoryName} onChange={handleChange} className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500" required>
                        <option value="">Select Subcategory</option>
                        <option value="Wooden Furniture & Sculptures">Wooden Furniture & Sculptures</option>
                        <option value="Wooden Home Decor">Wooden Home Decor</option>
                        <option value="Wooden Utensils and Kitchenware">Wooden Utensils and Kitchenware</option>
                        <option value="Jute Home Decor">Jute Home Decor</option>
                        <option value="Jute Kitchenware & utensils">Jute Kitchenware & utensils</option>
                        <option value="Jute and wooden jewellery">Jute and wooden jewellery</option>
                    </select>
                </div>
                <div className="mb-4">
                    <label htmlFor="shortDescription" className="block mb-1">Short Description</label>
                    <textarea id="shortDescription" name="shortDescription" value={formData.shortDescription} onChange={handleChange} className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500" required />
                </div>
                <div className="mb-4">
                    <label htmlFor="price" className="block mb-1">Price</label>
                    <input type="text" id="price" name="price" value={formData.price} onChange={handleChange} className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500" required />
                </div>
                <div className="mb-4">
                    <label htmlFor="rating" className="block mb-1">Rating</label>
                    <input type="text" id="rating" name="rating" value={formData.rating} onChange={handleChange} className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500" required />
                </div>
                <div className="mb-4">
                    <label htmlFor="customization" className="block mb-1">Customization (Yes/No)</label>
                    <select id="customization" name="customization" value={formData.customization} onChange={handleChange} className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500" required>
                        <option value="">Select</option>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                    </select>
                </div>

                <div className="mb-4">
                    <label htmlFor="processingTime" className="block mb-1">Processing Time</label>
                    <input type="text" id="processingTime" name="processingTime" value={formData.processingTime} onChange={handleChange} className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500" required />
                </div>
                <div className="mb-4">
                    <label htmlFor="stockStatus" className="block mb-1">Stock Status</label>
                    <input type="text" id="stockStatus" name="stockStatus" value={formData.stockStatus} onChange={handleChange} className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500" required />
                </div>
                <div className="mb-4">
                    <label htmlFor="userEmail" className="block mb-1">User Email</label>
                    <input type="email" id="userEmail" defaultValue={user.email} name="userEmail" defaultValue={user.email} onChange={handleChange} className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500" required />
                </div>
                <div className="mb-4">
                    <label htmlFor="userName" className="block mb-1">User Name</label>
                    <input type="text" defaultValue={user.displayName} id="userName" name="userName" defaultValue={user.displayName} onChange={handleChange} className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500" required />
                </div>

                <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-300">Add</button>
            </form>
        </div>
    );
}


