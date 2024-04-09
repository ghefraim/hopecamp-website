import React, { useState } from "react";
import Step from "./Step";
// import firebase from "../../../firebase"

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

  const handleImageChange = (e) => {
    if (e.target.files[0]) {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        // Here you might want to handle the base64 string for previews or direct uploads
        setFormData(prev => ({ ...prev, imageUrl: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  //uploading image feauture 
  // const uploadImageToStorage = (file) => {
  //   const storageRef = firebase.storage().ref();
  //   const fileRef = storageRef.child('images/' + file.name);
  //   return fileRef.put(file).then(() => {
  //     return fileRef.getDownloadURL();  // This URL can be saved in your database
  //   });
  // };
  // // Call this function when submitting the form, using the original File object
  // uploadImageToStorage(formData.imageFile).then((downloadURL) => {
  //   console.log("Uploaded and got URL:", downloadURL);
  // });
  

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
          handleImageChange={handleImageChange}
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
