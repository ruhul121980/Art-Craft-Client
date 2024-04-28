import React from 'react';
import { Link } from 'react-router-dom';

const MyArtCard = ({ data }) => {
  const {
    _id,
    image,
    itemName,
    price,
    rating,
    customization,
    stockStatus,
  } = data;

  return (
    <div className="card card-compact bg-base-100 shadow-xl md:w-96 lg:w-80 xl:w-72">
      <figure>
        <img src={image} alt={itemName} className="w-full h-56 object-cover" />
      </figure>
      <div className="card-body p-4">
        <h2 className="card-title text-lg font-semibold">{itemName}</h2>
        <p className="text-gray-600">Price: ${price}</p>
        <p className="text-gray-600">Rating: {rating}</p>
        <p className="text-gray-600">Customization: {customization ? 'Yes' : 'No'}</p>
        <p className="text-gray-600">Stock Status: {stockStatus}</p>
        <div className="flex justify-between mt-4">
          <div>
            <Link to={`/update/${_id}`}><button className="btn btn-outline">Update</button></Link>
            <button className="btn btn-outline ml-2">Delete</button>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default MyArtCard;
