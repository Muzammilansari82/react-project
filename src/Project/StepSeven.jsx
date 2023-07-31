
import React, { useState, useEffect } from "react";


const StepSeven = () => {
  const [data6, setData6] = useState('');
  
  const handleChange6 = (event) => {
    setData6(event.target.value);
    console.log({data6});
  }; 
  const dataofduedate = () => {
    localStorage.setItem('dataofduedate', data6);
  };

  useEffect(() => {
    const storedData6 = localStorage.getItem('dataofduedate');
    if (storedData6) {
      setData6(storedData6);
    }
  }, []);
 

  return (
    <div>
      <h2 style={{marginTop : "50px"}}>Project Submisson Date</h2>
      <input type="date" value={data6} onChange={handleChange6} className="Email" planceholder="Enter Your Email"/>
      <button onClick={dataofduedate} className="button">Save Data</button>
     
    </div>
  );
};

export default StepSeven;
