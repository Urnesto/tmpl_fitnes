import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import { Logo } from "./components/Reusable/logo";
function App() {



  const [isLoading, setLoading] = useState(false);
    useEffect(() =>{
      PreloaderHandler()
  })

  function PreloaderHandler(){
    setTimeout(()=>{
        setLoading(true)
    },1000)
}


  return (
    <div className="bg-black h-screen">
       {isLoading? <Navbar /> : <div><Logo size={'w-14 h-14'} /></div>}
    </div>
  );
}

export default App;
