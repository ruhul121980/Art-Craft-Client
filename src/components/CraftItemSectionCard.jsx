import React from 'react';
import { Link } from 'react-router-dom';

export default function CraftItemSectionCard({data}) {
  return (
    <div className="max-w-sm mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
      <img className="w-full h-48 object-cover object-center" src={data.image} alt="Car" />
      <div className="p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">{data.itemName}</h2>
        <p className="text-gray-600">{data.shortDescription}</p>
        <div className="mt-4 flex justify-end">

        <Link to={`/craftItemtDetails/${data._id}`}>
        <button className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-blue-600 transition duration-300">View Details</button>
                </Link>
        </div>
      </div>
    </div>
  );
}
