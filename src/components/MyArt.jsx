import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';
import MyArtCard from './MyArtCard';

const MyArt = () => {
  const { user } = useContext(AuthContext);
  const alldata = useLoaderData();
  const email = user.email;
  const [renderedCards, setRenderedCards] = useState([]);

  useEffect(() => {
    // Map over alldata to generate MyArtCard components
    const cards = alldata.map(data => {
      if (data.userEmail === email) {
        return <MyArtCard key={data._id} data={data} />;
      }
    });
    // Update the state with the generated cards
    setRenderedCards(cards);
  }, [alldata, email]);

  return (
    <div>
      {/* Render the MyArtCard components stored in the renderedCards state */}
      {renderedCards}
    </div>
  );
};

export default MyArt;
