import React from 'react';

const MyArtCard = ({ data }) => {
  console.log("data from card",data)
  return (
    <div>
      <h2>My Art Card</h2>
      <p>User Email:{data.userEmail}</p>
      {/* Add more content based on your data structure */}
    </div>
  );
};

export default MyArtCard;
