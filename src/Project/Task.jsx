import React, { useState } from "react";
import "./style.css";

const FirstTask = () => {
  const values = () => {
    const value1 = localStorage.getItem('DataOfStepFourp53') || "Default Value 1";
    const value2 = localStorage.getItem('DataOfStepFourp54') || "Default Value 2";
    const value3 = localStorage.getItem('DataOfStepFourp55') || "Default Value 3";
  
    return [value1, value2, value3];
  };
  const [flex2Visible, setFlex2Visible] = useState([true, true, true]);
  const [projectNames, setProjectNames] = useState(values());
  const [flex2Count, setFlex2Count] = useState(3);
  
  
  const newTask = (index) => {
    if (index >= projectNames.length) {
      const projectNameInput = prompt("Enter project name");
      if (projectNameInput) {
        setProjectNames((prevNames) => [...prevNames, projectNameInput]);
      }
    }
    setFlex2Visible((prevVisibility) => {
      const newVisibility = [...prevVisibility];
      newVisibility[index] = true;
      return newVisibility;
    });
  };

  const handleDeleteFlex2 = (index) => {
    setFlex2Visible((prevVisibility) => {
      const newVisibility = [...prevVisibility];
      newVisibility[index] = !newVisibility[index];
      return newVisibility;
    });
  };

  const addNewFlex2 = () => {
    setFlex2Count((prevCount) => prevCount + 1);
    newTask(flex2Count);
  };

  return (
    <div className="a1">
      {Array.from({ length: flex2Count }, (_, index) => (
        flex2Visible[index] && (
          <div key={index} className="flex2">
            <div>
              <p>Name</p>
              <a href="Inbox">{projectNames[index]}</a>
            </div>

            <div>
              <p>Assignee</p>
              <span className="span">
                {localStorage.getItem("dataofStepOneTwo")}
              </span>

              {localStorage.getItem("dataofStepOne")}
            </div>
            <div>
              <p>Status</p>
              <select name="cars" id="cars" className="status">
                <option value="check" disabled></option>
                <option value="New" className="blue">
                  New
                </option>
                <option value="Planned" className="purple">
                  Planned
                </option>
                <option value="In progress" className="sky-blue">
                  In progress
                </option>
                <option value="Review" className="yellow">
                  Review
                </option>
                <option value="Completed" className="green">
                  Completed
                </option>
              </select>
            </div>
            <div>
              <p>Due Date</p>
              {localStorage.getItem("dataofduedate")}
            </div>
            <div>
              <p>Impact</p>
              <select name="cars" id="cars" className="status">
                <option value="check" disabled></option>
                <option value="Low" className="green">
                  Low
                </option>
                <option value="Medium" className="yellow">
                  Medium
                </option>
                <option value="Hard" className="red">
                  Hard
                </option>
              </select>
            </div>
            <i
              className="fa-solid fa-trash margin"
              onClick={() => handleDeleteFlex2(index)}
            ></i>
          </div>
        )
      ))}

      <button onClick={addNewFlex2}>+ Add New</button>
      
    </div>
  );
};

export default FirstTask;
