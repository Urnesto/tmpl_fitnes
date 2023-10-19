import { useState } from "react";
import { Button } from "../Reusable/Button";
import axios from "axios";
import SuccessMessage from "../common/Message/SuccessMessage";
import ErrorMessage from "../common/Message/ErrorMessage";

const RequestSection = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [name, setName] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [showError, setShowError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const phoneRegex = /^(\+\d{11}|\d{11})$/;

  const handleChange = (e) => {
    const inputValue = e.target.value;

    if (inputValue.startsWith("+7")) {
      setIsValid(phoneRegex.test(inputValue));
      setPhoneNumber(inputValue);
    } else {
      setIsValid(false);
      setPhoneNumber("+7");
    }
  };

  const handleNameChange = (e) => {
    const inputValue = e.target.value;
    setName(inputValue);
  };

  const isPhoneNumberValid = (number) => {
    return phoneRegex.test(number);
  };
  const handleGetBill = () => {
    const requestData = {
      phone: phoneNumber,
      name: name,
      adress: adress,
    };
    axios
      .post("http://localhost:5000/api/product/getbill", requestData)
      .then((response) => {
        console.log("Response from the server:", response.data);
        setSuccessMessage("Data has been sent successfully!");
        setShowSuccess(true);
        setTimeout(() => {
          setShowSuccess(false);
          setSuccessMessage("");
        }, 5000);
      })
      .catch((error) => {
        console.error("Error:", error);
        setErrorMessage("An error occurred while sending data.");
        setShowError(true);
      });
  };
  const adress = "Some adrees";
  const isButtonDisabled = !(name && isPhoneNumberValid(phoneNumber));
  return (
    <div className="flex items-center justify-center">
      <div className="w-10/12 my-5 mb-20  lg:w-7/12 h-fit">
        <div className="text-gray-400">
          <h1 className=" text-xl lg:text-4xl">
            You don't know which offer is the right one
            <span className="text-tmpl-purple"> specifically for you</span>?
          </h1>
          <p className="text-xs lg:text-4xl my-5">
            <span className="text-white">Left a request</span>, and our manager
            will help you to define a proposal based on your wishes
          </p>
        </div>
        <div className="flex items-center flex-col lg:flex-row">
          <input
            type="text"
            value={name}
            onChange={handleNameChange}
            className=" bg-transparent h-10 w-full lg:w-56 my-3 lg:my-0 text-gray-400 border-b-2 border-tmpl-purple  rounded "
            placeholder="Name"
          />
          <input
            type="tel"
            className={`border-b-2 ${
              phoneNumber &&
              (isValid
                ? "border-green-400 focus:border-green-400 "
                : "border-red-500 focus:border-red-500")
            } bg-transparent h-10 w-full lg:w-56 my-3 lg:my-0 text-gray-400 border-b-2  focus:outline-none border-tmpl-purple mx-10 rounded `}
            value={phoneNumber}
            onChange={handleChange}
            placeholder="+370 Phone number"
          />
          <div className="my-5 lg:my-0 mx-0 lg:mx-3 text-sm "></div>
          <Button
            disabled={isButtonDisabled}
            handler={handleGetBill}
            bg={"tmpl-purple"}
          >
            SENT
          </Button>
          <div className="flex-col  mx-10 text-gray-400 text-xs">
            <p>By clicking on the button you agree</p>
            <p>
              for processing
              <a
                href="https://commission.europa.eu/law/law-topic/data-protection/reform/what-constitutes-data-processing_en"
                target="_blank"
                className="underline"
              >
                {" "}
                personal data
              </a>
            </p>
          </div>
          {showSuccess && (
            <SuccessMessage
              message={successMessage}
              onClose={() => setShowSuccess(false)}
            />
          )}
          {showError && (
            <ErrorMessage
              message={errorMessage}
              onClose={() => setShowError(false)}
            />
          )}
        </div>
      </div>
    </div>
  );
};
export default RequestSection;
