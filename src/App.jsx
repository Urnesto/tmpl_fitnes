import { useState, useEffect } from "react";
import Home from "./pages/homePage";
import { cardData } from "./lib/tarifsData";
function App() {
  const [currentCard, setCurrentCard] = useState([]);
  const [currentTrainer, setCurrentTrainer] = useState([]);
  const [indexCard, setIndexCard] = useState(0);
  const [indexTrainer, setIndexTrainer] = useState(0);

  useEffect(() => {
    setCurrentCard(cardData[indexCard]);
  });
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
  return (
    <div>
      <Home />
    </div>
  );
}

export default App;
