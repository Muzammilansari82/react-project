import React, { useState, useEffect } from "react";

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  const handleToggleDropdown = () => {
    setIsOpen(prevState => !prevState);
  };

  const handleCheckboxChange = () => {
    setIsChecked(prevState => !prevState);
  };

  return (
    <div>
      <button onClick={handleToggleDropdown}>@</button>
      {isOpen && (
        <div style={{ border: "1px solid black", padding: "10px" }}>
          
          <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
  <label for="vehicle1">{localStorage.getItem("DataOfStepFourp3")} </label>
  <input type="checkbox" id="vehicle2" name="vehicle2" value="Car" />
  <label for="vehicle2">{localStorage.getItem("DataOfStepFourp4")}</label>
  <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat" />
  <label for="vehicle3">{localStorage.getItem("DataOfStepFourp5")}</label>
        </div>
      )}
    </div>
  );
};

const Inbox = () => {
  const [styles, setStyles] = useState({
    bold: false,
    italic: false,
    underline: false
  });
  const [inputData, setInputData] = useState("");

  // Load saved data from local storage on component mount
  useEffect(() => {
    const savedData = localStorage.getItem("inputData");
    if (savedData) {
      setInputData(savedData);
    }
    const savedStyles = JSON.parse(localStorage.getItem("styles"));
    if (savedStyles) {
      setStyles(savedStyles);
    }
  }, []);

  const handleToggleStyle = (style) => {
    setStyles(prevStyles => ({
      ...prevStyles,
      [style]: !prevStyles[style]
    }));
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputData(value);
    localStorage.setItem("inputData", value);
  };

  useEffect(() => {
    localStorage.setItem("styles", JSON.stringify(styles));
  }, [styles]);

  return (
    <div>
      <div className="inbox1">
        <br />
        <h1>Inbox</h1>

        {inputData}</div>
      <div className="inbox2">
        <div>
          <Dropdown /> {/* Include the Dropdown component here */}
          <button onClick={() => handleToggleStyle("bold")}>
           <b>Bold</b>
          </button>
          <button onClick={() => handleToggleStyle("italic")}>
            <em>Italic</em>
          </button>
          <button onClick={() => handleToggleStyle("underline")}>
            <u>Underline</u>
          </button>
          <p style={{
            fontWeight: styles.bold ? "bold" : "normal",
            fontStyle: styles.italic ? "italic" : "normal",
            textDecoration: styles.underline ? "underline" : "none"
          }}>
            
          </p>
          <input
            type="text"
            name=""
            id=""
            value={inputData}
            onChange={handleInputChange}
            className="step6int"
          />
        </div>
      </div>
    </div>
  );
};

export default Inbox;
