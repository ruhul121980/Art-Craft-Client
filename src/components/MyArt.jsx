import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';
import MyArtCard from './MyArtCard';

const MyArt = () => {
  const { user } = useContext(AuthContext);
  const alldata = useLoaderData();
  console.log(alldata)
  const email = user.email;
  const [renderedCards, setRenderedCards] = useState([]);

  useEffect(() => {
    const cards = alldata.map(data => {
      if (data.userEmail === email) {
        return <MyArtCard key={data._id} data={data} />;
      }
    });
    setRenderedCards(cards);
  }, [alldata, email]);

  return (
    <div className='grid grid-cols-3'>
    
      {renderedCards}
    </div>
  );
};

export default MyArt;
