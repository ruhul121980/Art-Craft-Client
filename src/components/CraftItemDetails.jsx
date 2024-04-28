import { useLoaderData, useParams } from "react-router-dom";

export default function CraftItemDetails() {
  const Arts = useLoaderData();
  const { id } = useParams();
  const Art = Arts.find(Art => Art._id === id);

  if (!Art) {
    return <div>Loading...</div>; 
  }

  const {
    _id,
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
  } = Art;

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <img src={image} alt={itemName} className="max-w-sm rounded-lg shadow-2xl" />
        <div>
          <h1 className="text-5xl font-bold">{itemName}</h1>
          <p className="py-6">{shortDescription}</p>
          <p><strong>Subcategory:</strong> {subcategoryName}</p>
          <p><strong>Price:</strong> {price}</p>
          <p><strong>Rating:</strong> {rating}</p>
          <p><strong>Customization:</strong> {customization}</p>
          <p><strong>Processing Time:</strong> {processingTime}</p>
          <p><strong>Stock Status:</strong> {stockStatus}</p>
          <p><strong>Product By:</strong> {userName}</p>
          <p><strong>Contact:</strong> {userEmail}</p>
          
        </div>
      </div>
    </div>
  );
}
