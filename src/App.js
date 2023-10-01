import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import { Logo } from "./components/Reusable/logo";
import Footer from "./components/Footer";
import Section from "./components/Section";
import ImageSection from "./components/ImagesSection";
import FreeSection from "./components/FreeSection";




function App() {
  function PreloaderHandler() {
    setTimeout(() => {
      setLoading(true);
    }, 1500);
  }

  const [isLoading, setLoading] = useState(false);
  useEffect(() => {
    PreloaderHandler();
  });
  // hover : 100, добавить анимацию к родительскому диву

  return (
    <div className=" bg-black h-full ">
    {isLoading ? (
      <>
        <Navbar />
        <div className=" mx-3 lg:mx-5 ">
      <Section />
      <ImageSection />
      <FreeSection />
    </div>
    <Footer />
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

