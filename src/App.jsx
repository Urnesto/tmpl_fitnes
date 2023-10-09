import { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
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
import { trainerData } from "./lib/trainersData";
import usePhotoModal from "./hooks/usePhotoModal";
import { cardData } from "./lib/tarifsData";
import Pricing from "./pages/pricing";

function App() {
  const [isToggleModal, setToggleModal] = useModal();
  const [isLoading, setLoading] = useState(false);
  const [TypeModal, setTypeModal] = useTypeModal();
  const [isPhotoModal, setPhotoModal] = useModal();
  const [PhotoModalType, setPhotoModalType] = useTypeModal();
  const [currentCard, setCurrentCard] = useState([]);
  const [currentTrainer, setCurrentTrainer] = useState([]);
  const [indexCard, setIndexCard] = useState(0);
  const [indexTrainer, setIndexTrainer] = useState(0);

  useEffect(() => {
    PreloaderHandler();
    setCurrentCard(cardData[indexCard]);
  });
  useEffect(() => {
    PreloaderHandler();
    setCurrentTrainer(trainerData[indexTrainer]);
  });
  function PreloaderHandler() {
    setTimeout(() => {
      setLoading(true);
    }, 1500);
  }

  const PhotoModalHandler = (modalType) => {
    console.log(modalType);
    if (modalType) {
      setPhotoModalType(modalType);
      setPhotoModal(true);
      return;
    }

    setPhotoModal(false);
  };

  const ModalHandler = (modalType) => {
    // MODALTYPE = 'feedback' || 'wantbuy' || undefined
    if (modalType) {
      setTypeModal(modalType);
      setToggleModal(true);
      return;
    }

    setToggleModal(false);
  };

  const cardHandler = (arg) => {
    if (arg) {
      if (indexCard < cardData.length - 1) {
        setIndexCard(indexCard + 1);
        setCurrentCard(cardData[indexCard]);
      }
    } else {
      if (indexCard > 0) {
        setIndexCard(indexCard - 1);
        setCurrentCard(cardData[indexCard]);
      }
    }
  };

  const trainerHandler = (arg) => {
    if (arg) {
      if (indexTrainer < trainerData.length - 1) {
        setIndexTrainer(indexTrainer + 1);
        setCurrentTrainer(trainerData[indexTrainer]);
      }
    } else {
      if (indexTrainer > 0) {
        setIndexTrainer(indexTrainer - 1);
        setCurrentTrainer(trainerData[indexTrainer]);
      }
    }
  };
  // const PhotoModalHandler = (obj) => {
  // }

  // hover : 100, добавить анимацию к родительскому диву

  return (
    <div className=" bg-black h-full min-w-fit ">
      {isLoading ? (
        <>
          <Navbar modalHandler={ModalHandler} />
          <div className=" mx-3 lg:mx-5 ">
            <Section modalHandler={ModalHandler} />
            {isPhotoModal && !isToggleModal ? (
              <InfoModal handler={PhotoModalHandler} data={PhotoModalType} />
            ) : (
              <></>
            )}

            <priceComponent />
            <ImageSection />
            <FreeSection />
            <InfoSection />
            <div className=" my-10 lg:my-22  ">
              <SliderSection
                data={currentTrainer}
                btnhandler={PhotoModalHandler}
                sliderhandler={trainerHandler}
              />
            </div>
            <CardSection dataCard={currentCard} btnhandler={cardHandler} />
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
