import React, { useState, useEffect } from "react";
import StepFive from "./StepFive";

const StepFour = () => {
  const [data1, setData1] = useState('');
  const [data2, setData2] = useState('');

  const handleChangeData1 = (event) => {
    setData1(event.target.value);
  };

  const handleChangeData2 = (event) => {
    setData2(event.target.value);
  };

  const handleSaveData = () => {
    localStorage.setItem('DataOfStepFourp1', data1);
    localStorage.setItem('DataOfStepFourp2', data2);
  };

  useEffect(() => {
    const storedData1 = localStorage.getItem('DataOfStepFourp1');
    const storedData2 = localStorage.getItem('DataOfStepFourp2');

    if (storedData1) {
      setData1(storedData1);
    }

    if (storedData2) {
      setData2(storedData2);
    }
  }, []);

  return (
    <div>
      <h2>What’s your team or department?</h2>
      <input
        type="text"
        value={data1}
        onChange={handleChangeData1}
        placeholder="Enter Department"
        className="step6int"
      />
      <br />
      <h2>What’s your job role?</h2>
      <input
        type="text"
        value={data2}
        onChange={handleChangeData2}
        placeholder="Enter Job Role"
        className="step6int"
      />
      <br />
      <button onClick={handleSaveData} className="button">Save Data</button>
   
    </div>
  );
};

export default StepFour;
