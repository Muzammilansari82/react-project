import React,{useState, useEffect} from "react";
// import logo from "../assets/logo.png";
//  import StepFour from "./StepFour"
const StepFive = () => {
    const [data53, setData53] = useState("");
  const [data54, setData54] = useState("");
  const [data55, setData55] = useState("");

  const handleChangeData53 = (event) => {
    setData53(event.target.value);
  };
  const handleChangeData54 = (event) => {
    setData54(event.target.value);
  };

  const handleChangeData55 = (event) => {
    setData55(event.target.value);
  };

  const handleSaveData = () => {
    localStorage.setItem("DataOfStepFourp53", data53);
    localStorage.setItem("DataOfStepFourp4", data54);
    localStorage.setItem("DataOfStepFourp5", data55);
  };

  useEffect(() => {
    const storedData53 = localStorage.getItem("DataOfStepFourp53");
    const storedData54 = localStorage.getItem("DataOfStepFourp54");
    const storedData55 = localStorage.getItem("DataOfStepFourp55");

    if (storedData53) {
      setData53(storedData53);
    }
    if (storedData54) {
      setData54(storedData54);
      
    }

    if (storedData55) {
      setData55(storedData55);
    }
  }, []);

  return (
    <div>
      <div>
        <h2 style={{fontSize: "35px"}}>What needs to be done?</h2>
        <input
          type="text"
          placeholder="e.g First Task"
          className="step6int"
          value={data53}
          onChange={handleChangeData53}
        />

        <input
          type="text"
          placeholder="e.g Secound Task"
          className="step6int"
          value={data54}
          onChange={handleChangeData54}
        />

        <input
          type="text"
          placeholder="e.g Third Task"
          className="step6int"
          value={data55}
          onChange={handleChangeData55}
        />
        
      </div>
      <button onClick={handleSaveData} className="button">
        Save Data
      </button>
      {/* {data3}{data4}{data5} */}
    </div>
  );
};
export default StepFive;