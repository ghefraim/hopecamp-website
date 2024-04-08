import React, { useState } from "react";
import Step from "./Step";

const MultiStepForm = ({ handleSubmit, formData, setFormData }) => {
  const [step, setStep] = useState(1);

  const [agreementChecked, setAgreementChecked] = useState(false); // Define the agreementChecked state

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleNext = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const handlePrev = () => {
    setStep((prevStep) => prevStep - 1);
  };

  const handleAgreementChange = (e) => {
    const { checked } = e.target;
    setAgreementChecked(checked);
  };

  // const handleSubmit = () => {
  //   console.log("Form submitted:", formData);
  // };

  return (
    <div className="max-w-lg mx-auto p-4">
      {step === 1 && (
        <Step
          stepNumber={1}
          formData={formData}
          handleChange={handleChange}
          handleNext={handleNext}
          handlePrev={handlePrev}
        />
      )}
      {step === 2 && (
        <Step
          stepNumber={2}
          formData={formData}
          handleChange={handleChange}
          handleNext={handleNext}
          handlePrev={handlePrev}
        />
      )}
      {step === 3 && (
        <Step
          stepNumber={3}
          formData={formData}
          handlePrev={handlePrev}
          handleSubmit={handleSubmit}
          agreementChecked={agreementChecked} // Pass agreementChecked state to Step
          handleAgreementChange={handleAgreementChange} // Pass handleAgreementChange to Step
        />
      )}
    </div>
  );
};

export default MultiStepForm;