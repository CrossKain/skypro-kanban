import { useEffect, useState } from "react";

import HeaderContainer from "./components/HeaderContainer";
import PopExit from "./components/PopExit";
import { cardList } from "./utils/data";
import Cards from "./components/Cards/Cards";
import NewCardPopup from "./components/NewCardPopup";
import EditCardPopup from "./components/EditCardPopup";

import "./App.css";
import { GlobalStyle } from "./GlobalStyles";

function App() {
  const [cards, setCards] = useState(cardList);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  });

  return (
    <>
      <GlobalStyle />
      <div className="wrapper">
        <PopExit />
        <NewCardPopup cards={cards} setCards={setCards} />
        <EditCardPopup />
        <header>
          <HeaderContainer />
        </header>
        <main className="main">
          <div className="container">
            <Cards isLoading={isLoading} cards={cards} />
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
