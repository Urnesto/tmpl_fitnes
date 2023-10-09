import { useState } from "react";

const useModal = () => {
  const [isShowing, setIsShowing] = useState(false);

  //Types for TypeModal : {
  //* string: feedback || wantBuy
  //}

  function toggle() {
    if (isShowing) {
      document.body.style.overflow = "auto";
      setIsShowing(!isShowing);
    } else {
      document.body.style.overflow = "hidden";
      setIsShowing(!isShowing);
    }
  }

  return [isShowing, toggle];
};

export default useModal;
