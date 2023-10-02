import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import { Logo } from "./components/Reusable/logo";
import Footer from "./components/Footer";
import Section from "./components/Section";
import ImageSection from "./components/ImagesSection";
import FreeSection from "./components/FreeSection";
import ModalWindow from "./components/common/Modal";
import InfoSection from "./components/InfoSection";
import useModal from "./hooks/useModal";
import useTypeModal from "./hooks/useTypeModal";

function App() {
  const [isToggleModal, setToggleModal] = useModal();
  const [isLoading, setLoading] = useState(false);
  const [TypeModal, setTypeModal] = useTypeModal();
  useEffect(() => {
    PreloaderHandler();
  });

  function PreloaderHandler() {
    setTimeout(() => {
      setLoading(true);
    }, 1500);
  }

  const ModalHandler = (modalType) => {
    // MODALTYPE = 'feedback' || 'wantbuy' || undefined
    if (modalType) {
      setTypeModal(modalType);
      setToggleModal(true);
      return;
    } else {
      setToggleModal(false);
    }
  };

  // hover : 100, добавить анимацию к родительскому диву

  return (
    <div className=" bg-black h-full ">
      {isLoading ? (
        <>
          <Navbar modalHandler={ModalHandler} />
          <div className=" mx-3 lg:mx-5 ">
            <Section modalHandler={ModalHandler} />
            <ImageSection />
            <FreeSection />
            <InfoSection />
          </div>
          <Footer />
          {isToggleModal ? (
            <ModalWindow
              CurrentType={TypeModal}
              modalHandler={setToggleModal}
            />
          ) : (
            <> </>
          )}
        </>
      ) : (
        <div className="h-screen flex items-center  justify-center animate-pulse ">
          <Logo size={"w-14 h-14"} />
        </div>
      )}
    </div>
  );
}

export default App;
