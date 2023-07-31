import React, { useState, useEffect } from "react";
import StepTwo from "./StepTwo";

const Child = () => {
  const [data, setData] = useState('');
  const [twoLetters, setTwoLetters] = useState('');

  const handleChange = (event) => {
    setData(event.target.value);
    setTwoLetters(event.target.value.slice(0, 2).toUpperCase());
  }; 

  const saveData = () => {
    localStorage.setItem('dataofStepOne', data);
    localStorage.setItem('dataofStepOneTwo', twoLetters);
  };

  useEffect(() => {
    const storedData = localStorage.getItem('dataofStepOne');
    const storedTwoLetters = localStorage.getItem('dataofStepOneTwo');
    if (storedData) {
      setData(storedData);
    }
    if (storedTwoLetters) {
      setTwoLetters(storedTwoLetters);
    }
  }, []);

  return (
    <div className="margin">
      <h2 className="h1">Enter Your Bussiness Email</h2>
      <input type="email" className="step6int" value={data} onChange={handleChange} placeholder="Enter Your Email"/>
      <button onClick={saveData} className="button">Save Data</button>
      {/* {data}
      {twoLetters}*/}
      <button
                  type="button"
                  onClick={StepTwo}
                  className="btn1"
                >
                  Next
                </button>
    </div>
  );
};

export default Child;
