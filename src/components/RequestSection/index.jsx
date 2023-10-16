import { useState } from "react";
import { Button } from "../Reusable/Button";

const RequestSection = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [name, setName] = useState("");

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

  const isPhoneNumberValid = (number) => {
    return /^(\+\d{11}|\d{11})$/.test(number);
  };
  const isButtonDisabled = !(name && isPhoneNumberValid(phoneNumber));
  return (
    <div className="flex items-center justify-center">
      <div className="w-10/12 my-5 mb-20  lg:w-7/12 h-fit">
        <div className="text-gray-400">
          <h1 className=" text-xl lg:text-4xl">
            Вы не знаете какое предложение подходит
            <span className="text-tmpl-purple"> именно вам</span>?
          </h1>
          <p className="text-xs lg:text-4xl my-5">
            <span className="text-white">Оставьте заявку</span>, и наш менеджер
            поможет вам определить предложение, исходя из ваших желаний
          </p>
        </div>
        <div className="flex items-center flex-col lg:flex-row">
          <input
            type="text"
            value={name}
            onChange={handleNameChange}
            className=" bg-transparent h-10 w-full lg:w-56 my-3 lg:my-0 text-gray-400 border-b-2 border-tmpl-purple  rounded "
            placeholder="Имя"
          />
          <input
            type="tel"
            className=" bg-transparent h-10 w-full lg:w-56 my-3 lg:my-0 text-gray-400 border-b-2 border-tmpl-purple mx-10 rounded "
            value={phoneNumber}
            onChange={handlePhoneNumberChange}
            placeholder="Номер телефона"
          />
          <div className="my-5 lg:my-0 mx-0 lg:mx-3 text-sm ">
            {isValid ? (
              <p style={{ color: "green" }}>Номер в веден верно</p>
            ) : (
              <p style={{ color: "red" }}>В веденный номер неправильный</p>
            )}
          </div>
          <Button disabled={isButtonDisabled} bg={"tmpl-purple"}>
            ОТПРАВИТЬ
          </Button>
          <div className="flex-col  mx-10 text-gray-400 text-xs">
            <p>Нажимая на кнопку вы соглашаетесь</p>
            <p>
              на обработку
              <a
                href="https://tmplfitness.ru/policy"
                target="_blank"
                className="underline"
              >
                {" "}
                персональных данных
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default RequestSection;
