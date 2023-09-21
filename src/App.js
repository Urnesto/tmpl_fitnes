import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import { Logo } from "./components/Reusable/logo";
import Footer from "./components/Footer";

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
    <div className="bg-black h-screen">
      {isLoading ? (
        <Navbar />
      ) : (
        <div className="h-full flex items-center justify-center">
          <Logo size={"w-14 h-14"} />
        </div>
      )}
      <Footer />
    </div>
  );
}

export default App;
