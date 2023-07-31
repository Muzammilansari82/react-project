import React, { useState, useEffect } from "react";

const StepSix = () => {
  const [data3, setData3] = useState("");
  const [data4, setData4] = useState("");
  const [data5, setData5] = useState("");

  const handleChangeData3 = (event) => {
    setData3(event.target.value);
  };
  const handleChangeData4 = (event) => {
    setData4(event.target.value);
  };

  const handleChangeData5 = (event) => {
    setData5(event.target.value);
  };

  const handleSaveData = () => {
    localStorage.setItem("DataOfStepFourp3", data3);
    localStorage.setItem("DataOfStepFourp4", data4);
    localStorage.setItem("DataOfStepFourp5", data5);
  };

  useEffect(() => {
    const storedData3 = localStorage.getItem("DataOfStepFourp3");
    const storedData4 = localStorage.getItem("DataOfStepFourp4");
    const storedData5 = localStorage.getItem("DataOfStepFourp5");

    if (storedData3) {
      setData3(storedData3);
    }
    if (storedData4) {
      setData4(storedData4);
      
    }

    if (storedData5) {
      setData5(storedData5);
    }
  }, []);

  return (
    <div>
      <div>
        <h2 style={{fontSize: "35px"}}>Add Your Team Mates</h2>
        <input
          type="email"
          placeholder="First Teammate"
          className="step6int"
          value={data3}
          onChange={handleChangeData3}
        />

        <input
          type="email"
          placeholder="Secound Teammate"
          className="step6int"
          value={data4}
          onChange={handleChangeData4}
        />

        <input
          type="email"
          placeholder="Third Teammate"
          className="step6int"
          value={data5}
          onChange={handleChangeData5}
        />
        
      </div>
      <button onClick={handleSaveData} className="button">
        Save Data
      </button>
      {/* {data3}{data4}{data5} */}
    </div>
  );
};
export default StepSix;
