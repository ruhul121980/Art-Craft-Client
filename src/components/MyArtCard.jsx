import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate} from 'react-router-dom';
import Swal from 'sweetalert2';

const MyArtCard = ({ data }) => {
  const navigate = useNavigate();
  const {
    _id,
    image,
    itemName,
    price,
    rating,
    customization,
    stockStatus,
  } = data;
  
  const handleDelete = (_id) => {
    Swal.fire({
        title: 'Are you sure?',
        text: 'You will not be able to recover this item!',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!',
        cancelButtonText: 'No, cancel!'
    }).then((result) => {
        if (result.isConfirmed) {
            fetch(`https://server-side-ruby-one.vercel.app/addCraft/${_id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        Swal.fire({
                            title: 'Success',
                            text: 'Data Deleted successfully',
                            icon: 'success',
                            confirmButtonText: 'Cool'
                        });
                        navigate('/myArt');
                    }
                });
        }
    });
};


  return (
    <div className="card card-compact bg-base-100 shadow-xl md:w-96 lg:w-80 xl:w-72">
      <figure>
        <img src={image} alt={itemName} className="w-full h-56 object-cover" />
      </figure>
      <div className="card-body p-4">
        <h2 className="card-title text-lg font-semibold">{itemName}</h2>
        <p className="text-gray-600">Price: ${price}</p>
        <p className="text-gray-600">Rating: {rating}</p>
        <p className="text-gray-600">Customization: {customization}</p>
        <p className="text-gray-600">Stock Status: {stockStatus}</p>
        <div className="flex justify-between mt-4">
          <div>
            <Link to={`/update/${_id}`}><button className="btn btn-outline">Update</button></Link>
            <button onClick={()=>handleDelete(_id)} className="btn btn-outline ml-2">Delete</button>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default MyArtCard;
