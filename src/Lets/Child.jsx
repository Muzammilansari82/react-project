// Child.js
import React from 'react';

const Child = ({ email }) => {
  return (
    <div style={{backgroundColor:'green'}}>
      
      
      <p>Email (from Parent): {email}</p>
    </div>
  );
};

export default Child;
