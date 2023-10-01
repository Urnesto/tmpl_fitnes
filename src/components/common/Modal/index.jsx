import { useState } from "react";
import modalImage from "./modal.png";
const ModalWindow = ({toggleModal}) => {
  
    const ButtonHandler = () =>{
        toggleModal()
    }

  return (
    <div  className='fixed inset-0 bg-gray-400 bg-opacity-25 backdrop-blur-sm flex items-center justify-center'>
      <div className="bg-black  rounded w-1/3 h-3/5">
      <img src={modalImage} alt="" className="w-screen pb-4 " />
        <h1 className="font-semibold text-center text-4xl text-white">
          Оставить заявку
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
          <button className="px-5 py-2  bg-gray-700 rounded">Sign in</button>
             <button className="px-5 py-2  bg-gray-700 rounded" onClick={()=> ButtonHandler()}> X </button>
        </div>
      </div>
    </div>
  );
};

export default ModalWindow;
