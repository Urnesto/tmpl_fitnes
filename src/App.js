import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import { Logo } from "./components/Reusable/logo";
import Footer from "./components/Footer";
import Section from "./components/Section";




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
  // hover : 100, добавить анимацию к родительскому диву

  return (
    <div className="bg-black h-full">
      {isLoading ? (
        <div className="transition-opacity duration-1000 ease-out opacity-100 "> 
          <Navbar />
          <Footer />
        </div>
        
      ) : (
        <div className="h-full flex items-center justify-center transition-opacity duration-1000 ease-out opacity-100 hover:opacity-0">
          <Logo size={"w-14 h-14"}/>
        </div>
      )}

      <Section />
      <Footer />
    </div>
  );
}

export default App;
