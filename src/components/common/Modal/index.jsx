import { useState } from "react";
import cloeIcon from "../../../assets/icons/closeIcon.svg";
import modalImage from "./modal.png";
import { Button } from "../../Reusable/Button";
import axios from "axios";
import SuccessMessage from "../Message/SuccessMessage";
import ErrorMessage from "../Message/ErrorMessage";
const ModalWindow = ({ modalHandler, CurrentType }) => {
  const [phoneNumber, setPhoneNumber] = useState("+7");
  const [isValid, setIsValid] = useState(false);
  const [name, setName] = useState("");
  const [isChecked, setIsChecked] = useState(false);
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

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };
  const isPhoneNumberValid = (number) => {
    return phoneRegex.test(number);
  };
  const isButtonDisabled = !(
    name &&
    isChecked &&
    isPhoneNumberValid(phoneNumber)
  );
  const handleGetBill = () => {
    let requestData = {
      wantbuty: test,
      phone: phoneNumber,
      name: name,
      adress: adress,
    };
    axios
      .post("http://localhost:5000/api/product/getbill", requestData)
      .then((response) => {
        setSuccessMessage("Data has been sent successfully!");
        setShowSuccess(true);

        setTimeout(() => {
          modalHandler();
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
  const adress = "Some adrees of gym";
  const test = CurrentType;
  return (
    <div className="fixed inset-0  bg-gray-400 bg-opacity-25 backdrop-blur-sm flex items-center justify-center">
      <div className="bg-black max-w-6xl  rounded-2xl w-full mx-5 lg:mx-0 lg:w-1/3 lg:h-fit">
        <img src={modalImage} alt="" className="w-screen pb-4 " />
        <h1 className="font-semibold text-center text-2xl lg:text-4xl text-white">
          Leave an application
        </h1>
        <p className="text-center text-gray-400 text-2xl lg:text-4xl mb-5">
          for callback
        </p>
        <p className="text-center text-xs lg:text-sm text-gray-400 my-5 mx-10">
          Leave a request and our manager will call you back within 15 minutes
          and and advise you. Or call us yourself
        </p>
        <ul className="list-disc text-xs lg:text-sm text-tmpl-purple list-inside text-md my-5 text-center">
          <li className="text-white">86 8444 444</li>
          <li className="text-white">86 8444 444</li>
        </ul>
        <div className="flex flex-col mx-10">
          <input
            type="text"
            value={name}
            onChange={handleNameChange}
            className=" bg-transparent text-gray-400 border-b-2 border-tmpl-purple p-1 lg:p-2  rounded mb-5"
            placeholder="Name"
          />
          <input
            type="text"
            className={`border-b-2 ${
              phoneNumber &&
              (isValid
                ? "border-green-400 focus:border-green-400 "
                : "border-red-500 focus:border-red-500")
            } bg-transparent  text-gray-400 border-b-2 p-1 lg:p-2 focus:outline-none border-tmpl-purple mb-5 rounded `}
            value={phoneNumber}
            onChange={handleChange}
            placeholder="+370 Phone"
          />
          <div className="flex my-2 flex-row items-center">
            <input
              type="checkbox"
              name="agreement"
              checked={isChecked}
              onChange={handleCheckboxChange}
              className="w-4 h-4 border-2 border-tmpl-purple rounded-sm "
            />
            <label
              htmlFor="agreement"
              className="text-white text-xs lg:text-sm mx-2 "
            >
              I'm agreeing to {""}
              <a
                href="https://commission.europa.eu/law/law-topic/data-protection/reform/what-constitutes-data-processing_en"
                target="_blank"
                className="underline"
              >
                personal data processing
              </a>
            </label>
          </div>
        </div>
        {
          <div className="text-center">
            <Button
              disabled={isButtonDisabled}
              handler={handleGetBill}
              className
              bg={"tmpl-purple"}
            >
              Click to process
            </Button>
          </div>
        }
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
      <button
        onClick={() => modalHandler()}
        className="text-white absolute m-4 top-0 right-0"
        bg={"tmpl-purple"}
      >
        <img src={cloeIcon} alt="close" />
      </button>
    </div>
  );
};

export default ModalWindow;
