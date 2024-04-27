

export default function AllArtTable({Art}) {

    const{image,itemName,subcategoryName,shortDescription,price,rating,customization,processingTime,stockStatus,userEmail,userName}=Art;
  return (
    <div className="overflow-x-auto">
  <table className="table">
    <tbody>
      <tr>
        <th>
          <label>
          </label>
        </th>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={image} />
              </div>
            </div>
            <div>
              <div className="font-bold">{itemName}</div>
              <div className="text-sm opacity-50">{subcategoryName}</div>
            </div>
          </div>
        </td>
        <td>
          {price}
          <br/>
          
        </td>
        <td>{stockStatus}</td>
        <th>
          <button className="btn btn-ghost btn-xs">View Details</button>
        </th>
      </tr>
     
      
     
    </tbody>
    {/* foot */}
    <tfoot>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
        <th></th>
      </tr>
    </tfoot>
    
  </table>
</div>
  )
}
