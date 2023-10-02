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
import SliderSection from "./components/SliderSection";
import CardSection from "./components/cardSection";
import InfoModal from "./components/common/InfoModal";
import trainer from "./assets/images/trainers/14.jpg";
import { trainerData } from "./lib/trainersData";
import usePhotoModal from "./hooks/usePhotoModal";



function App() {
  const [isToggleModal, setToggleModal] = useModal();
  const [isLoading, setLoading] = useState(false);
  const [TypeModal, setTypeModal] = useTypeModal();
  const [isPhotoModal, setPhotoModal] = useModal()
  const [PhotoModalType, setPhotoModalType] = useTypeModal();

  useEffect(() => {
    PreloaderHandler();
  });
  function PreloaderHandler() {
    setTimeout(() => {
      setLoading(true);
    }, 1500);
  }

  const PhotoModalHandler = (modalType) => {
    console.log(modalType)
    if (modalType) {
      setPhotoModalType(modalType);
      setPhotoModal(true);
      return;
    } 

      setPhotoModal(false);
  }

  const ModalHandler = (modalType) => {
    // MODALTYPE = 'feedback' || 'wantbuy' || undefined
    if (modalType) {
      setTypeModal(modalType);
      setToggleModal(true);
      return;
    } 

      setToggleModal(false);
  }


  // const PhotoModalHandler = (obj) => {
  // }

  // hover : 100, добавить анимацию к родительскому диву

  return (
    <div className=" bg-black h-full ">
      {isLoading ? (
        <>
          <Navbar modalHandler={ModalHandler} />
          <div className=" mx-3 lg:mx-5 ">
            <Section modalHandler={ModalHandler} />
           {isPhotoModal && !isToggleModal ? <InfoModal handler={PhotoModalHandler} data={PhotoModalType}/>  : <></>}  
            <ImageSection />
            <FreeSection />
            <InfoSection />
            <div className=" my-10 lg:my-22  ">
            <SliderSection data={trainerData} btnhandler={PhotoModalHandler} />
            </div>
            <CardSection />
          </div>
          <Footer modalHandler={ModalHandler} />
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
