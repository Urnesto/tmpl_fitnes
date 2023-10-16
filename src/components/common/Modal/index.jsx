import { useState } from "react";
import cloeIcon from "../../../assets/icons/closeIcon.svg";
import modalImage from "./modal.png";
import { Button } from "../../Reusable/Button";

const ModalWindow = ({ modalHandler, CurrentType }) => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [name, setName] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  const handlePhoneNumberChange = (e) => {
    let inputValue = e.target.value.replace(/\s/g, "");
    if (!inputValue.startsWith("+7")) {
      inputValue = "+7" + inputValue;
    }
    setPhoneNumber(inputValue);
    const phoneRegex = /^(\+\d{11}|\d{11})$/;

    setIsValid(phoneRegex.test(inputValue));
  };

  const handleNameChange = (e) => {
    const inputValue = e.target.value;
    setName(inputValue);
  };

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };
  const isPhoneNumberValid = (number) => {
    return /^(\+\d{11}|\d{11})$/.test(number);
  };
  const isButtonDisabled = !(
    name &&
    isChecked &&
    isPhoneNumberValid(phoneNumber)
  );
  const test = CurrentType;
  return (
    <div className="fixed inset-0  bg-gray-400 bg-opacity-25 backdrop-blur-sm flex items-center justify-center">
      <div className="bg-black max-w-6xl min-w-0 rounded-2xl w-full mx-5 lg:mx-0 lg:w-1/3 lg:h-fit">
        <img src={modalImage} alt="" className="w-screen pb-4 " />
        <h1 className="font-semibold text-center text-4xl text-white">
          Оставить заявку {test}
        </h1>
        <p className="text-center text-gray-400 text-4xl mb-5">
          на обратный звонок
        </p>
        <p className="text-center text-sm text-gray-400 my-5 mx-10">
          Оставьте заявку, и наш менеджер перезвонит вам в течение 15 минут и
          проконсультирует вас. Или позвоните самостоятельно
        </p>
        <ul className="list-disc text-tmpl-purple list-inside text-md my-5 text-center">
          <li className="text-white">8 499 322 07 55</li>
          <li className="text-white">8 499 322 07 75</li>
        </ul>
        <div className="flex flex-col mx-10">
          <input
            type="text"
            value={name}
            onChange={handleNameChange}
            className=" bg-transparent text-gray-400 border-b-2 border-tmpl-purple p-2  rounded mb-5"
            placeholder="Имя"
          />
          <input
            type="text"
            className=" bg-transparent text-gray-400 border-b-2 border-tmpl-purple p-2  rounded mb-5"
            value={phoneNumber}
            onChange={handlePhoneNumberChange}
            placeholder="Номер телефона"
          />
          {isValid ? (
            <p style={{ color: "green" }}>Номер в веден верно</p>
          ) : (
            <p style={{ color: "red" }}>В веденный номер неправильный</p>
          )}
          <div className="flex my-2 flex-row items-center">
            <input
              type="checkbox"
              name="agreement"
              checked={isChecked}
              onChange={handleCheckboxChange}
              className="w-4 h-4 border-2 border-tmpl-purple rounded-sm "
            />
            <label htmlFor="agreement" className="text-white mx-2 ">
              Я соглашаюсь на {""}
              <a
                href="https://tmplfitness.ru/policy"
                target="_blank"
                className="underline"
              >
                обработку персональных данных
              </a>
            </label>
          </div>
        </div>
        <div className="text-center">
          <Button
            disabled={isButtonDisabled}
            handler={() => modalHandler("ОПЛАТА")}
            className
            bg={"tmpl-purple"}
          >
            Want Buy
          </Button>
        </div>
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
