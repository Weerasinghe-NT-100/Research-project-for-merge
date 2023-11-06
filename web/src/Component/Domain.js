import React from 'react';

const Domain = ({ title, description,backgroundColor }) => {
  return (
    <div 
    style={{
      boxShadow:'grey 2px 3px',
      padding: '20px',
      margin: '10px',
      width: '600px',
      flex: '1',
      backgroundColor: `${backgroundColor}`,
      borderRadius:'8px'
    }}
  >
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default Domain;
