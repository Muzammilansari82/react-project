// ParentComponent.js
import React, { useState } from 'react';
import Child from './Child';

const Parent = () => {
  const name = 'John Doe';
  const [email, setEmail] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    console.log(email);
  };

  return (
    <div style={{backgroundColor:'black'}}>
      <Child name={name} email={email} />
      <div>
        <h2>Enter Email:</h2>
        <input type="email" value={email} onChange={handleEmailChange} />
        
      </div>
    </div>
  );
};

export default Parent;
