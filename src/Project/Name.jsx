import React, { useState } from "react";
import StepSeven from "./StepSeven";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";
import StepFour from "./StepFour";
import StepFive from "./StepFive";
import StepSix from "./StepSix";
import StepOne from "./StepOne";
import Project from "./Project";
import DropDown from "./DropDown"
// import Cross from "../assets/Cross";
// import logo from "./assets/logoWhite.png";
// import logo from "../assets/logo.png";
import "./style.css";

const SimpleModal = () => {
  const [showModal, setShowModal] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [modalCompleted, setModalCompleted] = useState(false);
  // const [fullName, setFullName] = useState("");
  // const [companyName, setCompanyName] = useState("");

  const steps = [
    { stepNumber: 1, component: <StepOne /> },
    { stepNumber: 2, component: <StepTwo /> },
    { stepNumber: 3, component: <StepThree /> },
    { stepNumber: 4, component: <StepFour /> },
    { stepNumber: 5, component: <StepFive /> },
    { stepNumber: 6, component: <StepSix /> },
    { stepNumber: 7, component: <StepSeven /> },
    
    
  ];

  const handleOpenModal = () => {
    setCurrentStep(0);
    setModalCompleted(false);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setModalCompleted(false);
  };

  const handleNextStep = () => {
    const nextStep = currentStep + 1;

    if (nextStep === steps.length) {
      // If nextStep is equal to the number of steps, it means all steps are completed.
      setShowModal(false);
      setModalCompleted(true);
      
    } else {
      setCurrentStep(nextStep);
    }
   if (modalCompleted) {
    return <Project />
   }
  };

  

  return (
    <div>
 <nav>
      <span className="navbar-list">
        
          <DropDown />
        
        
        {/* Add more navigation links as needed */}
      </span>
    </nav>
<div>
  
</div>
<div className="modal-btn-bg">
    <button type="button" onClick={handleOpenModal} className="modal-btn">
      Start Project
    </button>
    {showModal && (
      <div className="modal-wrapper" id="myModal">
        <div className="modal border">
          <div className="modal-dialog content">
            <div className="content">
              <div className="modal-header">
                <button
                  type="button"
                  className="btn-close cross"
                  id="closeModal"
                  aria-label="Close"
                  onClick={handleCloseModal}
                ><i class="fa-solid fa-xmark" ></i></button>
              </div>
              <div className="modal-body">
                {steps.map(
                  (step, index) =>
                    index === currentStep && (
                      <div key={step.stepNumber}>{step.component}</div>
                    )
                )}
                <button
                  type="button"
                  onClick={handleNextStep}
                  className="btn1"
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )}
    </div>

    {modalCompleted &&(
      <div>
      <div>
        <Project/>
      </div>
      <div>
       
            {/* {localStorage.getItem('dataofStepOne')}<br />  
             {localStorage.getItem('stepFiveContact')} <br />
             {localStorage.getItem('DataOfStepFourp3')}
             {localStorage.getItem('DataOfStepFourp4')}
             {localStorage.getItem('DataOfStepFourp5')}
              {localStorage.getItem('DataOfStepFourp6')}<br /> 
             {localStorage.getItem('DataOfStepFourp1')}<br />
             {localStorage.getItem('DataOfStepFourp2')}*/}

       
        
      </div>
      </div>
    )}
  </div>
);
};

export default SimpleModal;
