import { Link } from "react-router-dom";
import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';

export default function AllArtTable({ Art }) {
  const { user } = useContext(AuthContext);

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
    <div className="overflow-x-auto">
      <table className="table">
        <tbody>
          <tr>
            <th style={{ width: "20%" }}>
              <label>
              </label>
            </th>
            <td style={{ width: "30%" }}>
              <div className="flex items-center gap-3">
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img src={image} alt={itemName} />
                  </div>
                </div>
                <div>
                  <div className="font-bold">{itemName}</div>
                  <div className="text-sm opacity-50">{subcategoryName}</div>
                </div>
              </div>
            </td>
            <td style={{ width: "15%" }}>{price}</td>
            <td style={{ width: "15%" }}>{stockStatus}</td>
            <th style={{ width: "20%" }}>
              {user ? (
                <Link to={`/allArtDetails/${_id}`}>
                  <button className="btn btn-ghost btn-xs">View Details</button>
                </Link>
              ) : (
                <Link to="/login">
                  <button className="btn btn-ghost btn-xs">View Details</button>
                </Link>
              )}
            </th>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
