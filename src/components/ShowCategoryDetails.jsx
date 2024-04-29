import { Link } from "react-router-dom";

export default function ShowCategoryDetails({ data }) {
  console.log("data from last", data);
  return (
      <div className="card card-compact bg-base-100 shadow-xl md:w-96 lg:w-80 xl:w-72 mx-auto my-4">
          <figure>
              <img src={data.image} alt={data.itemName} className="w-full h-56 object-cover" />
          </figure>
          <div className="card-body p-4">
              <h2 className="card-title text-lg font-semibold">{data.itemName}</h2>
              <p className="text-gray-600">SubCategory: {data.subcategoryName}</p>
              <p className="text-gray-600">Short Description: {data.shortDescription}</p>
              <p className="text-gray-600">Price: {data.price}</p>
              <p className="text-gray-600">Rating: {data.rating}</p>
              <p className="text-gray-600">Customization: {data.customization}</p>
              <p className="text-gray-600">Processing Time: {data.processingTime}</p>
              <p className="text-gray-600">Stock Status: {data.stockStatus}</p>
              <Link to={`/craftItemtDetails/${data._id}`}>
        <button className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-blue-600 transition duration-300">View Details</button>
                </Link>
          </div>
      </div>
  );
}
