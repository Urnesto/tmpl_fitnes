import { useState } from "react";
import modalImage from "./modal.png";
import { Button } from "../../Reusable/Button";

const ModalWindow = ({ modalHandler, CurrentType }) => {
  const test = CurrentType;
  return (
    <div className="fixed inset-0  bg-gray-400 bg-opacity-25 backdrop-blur-sm flex items-center justify-center">
      <div className="bg-black   rounded w-full mx-5 lg:mx-0 lg:w-1/3 lg:h-fit">
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
        <div className="flex flex-col">
          <input
            type="text"
            className=" bg-transparent text-gray-400 border-b-2 border-tmpl-purple p-2 mx-10 rounded mb-5"
            placeholder="Имя"
          />
          <input
            type="phone"
            className=" bg-transparent text-gray-400 border-b-2 border-tmpl-purple p-2 mx-10 rounded mb-5"
            placeholder="Phone"
          />
        </div>
        <div className="text-center">
          <Button
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
        X
      </button>
    </div>
  );
};

export default ModalWindow;
