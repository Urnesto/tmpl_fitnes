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
    }, 1000);
  }

  const [isLoading, setLoading] = useState(false);
  useEffect(() => {
    PreloaderHandler();
  });

  return (
    <div className=" bg-black h-full">
      {isLoading ? (
        <Navbar />
      ) : (
        <div className="h-full flex items-center justify-center">
          <Logo size={"w-14 h-14"} />
        </div>
      )}
      <div className=" mx-3 lg:mx-5">
        <Section />
        <ImageSection />
        <FreeSection />
      </div>
      <Footer />
    </div>
  );
}

export default App;
