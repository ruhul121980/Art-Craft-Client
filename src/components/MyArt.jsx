import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';
import MyArtCard from './MyArtCard';

const MyArt = () => {
  const { user } = useContext(AuthContext);
  const alldata = useLoaderData();
  const email = user.email;
  const [customizationFilter, setCustomizationFilter] = useState('All'); 
  const [renderedCards, setRenderedCards] = useState([]);

  
  useEffect(() => {
    const filteredData = alldata.filter(data => {
      if (customizationFilter === 'All') {
        return data.userEmail === email;
      } else {
        return data.userEmail === email && data.customization === customizationFilter;
      }
    });

    const cards = filteredData.map(data => (
      <MyArtCard key={data._id} data={data} />
    ));
    
    setRenderedCards(cards);
  }, [alldata, email, customizationFilter]);

  const handleFilterChange = (e) => {
    setCustomizationFilter(e.target.value);
  };

  return (
    <div>
      <div className="mb-4">
        <label htmlFor="customizationFilter" className="block mb-1">Filter by Customization:</label>
        <select id="customizationFilter" name="customizationFilter" value={customizationFilter} onChange={handleFilterChange} className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500">
          <option value="All">All</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
      </div>
      <div className='grid grid-cols-3'>
        {renderedCards}
      </div>
    </div>
  );
};

export default MyArt;
