import React, { useState } from "react";
import cloeIcon from "../../../assets/icons/closeIcon.svg";
const SuccessMessage = ({ message, onClose }) => {
  return (
    <div className="bg-red-500 text-white p-2 rounded-md fixed top-5 left-5 z-50">
      <div className="flex items-center">
        <span className="mr-2">❌</span>
        {message}
        <button onClick={onClose} className="ml-2 text-white">
          <img src={cloeIcon} alt="close" />
        </button>
      </div>
    </div>
  );
};

export default SuccessMessage;
