import React from 'react';

const Domain = ({ title, description }) => {
  return (
    <div 
    style={{
      border: '1px solid #000',
      padding: '20px',
      margin: '10px',
      width: '600px',
      flex: '1',
    }}
  >
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default Domain;
