import React, { useState, useEffect } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import ShowCategoryDetails from './ShowCategoryDetails';

export default function ShowCategory() {
  const [renderedCards, setRenderedCards] = useState([]);
  const alldata = useLoaderData();
  const { sub } = useParams();

  useEffect(() => {
    const cards = alldata.map(data => {
      if (data.subcategoryName === sub) {
        console.log("test true")
        return <ShowCategoryDetails key={data._id} data={data} />;
      }
      return null; 
    });
    setRenderedCards(cards.filter(Boolean)); 
  }, [alldata, sub]);

  return (
    <div>
      <h2 className='text-center font-bold text-2xl mb-5'>All Products of :{sub}</h2>
      <div className='grid grid-cols-3 gap-5'>
      {renderedCards}
      </div>
    </div>
  );
}
