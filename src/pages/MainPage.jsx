import { useEffect, useState } from "react";

import EditCardPopup from "../components/EditCardPopup";
import HeaderContainer from "../components/HeaderContainer";
import NewCardPopup from "../components/NewCardPopup";
import PopExit from "../components/PopExit";
import { cardList } from "../utils/data";
import Cards from "../components/Cards/Cards";

const MainPage = () => {
  const [cards, setCards] = useState(cardList);
  const [isLoading, setIsLoading] = useState(true);
  const [popExit, setPopExit] = useState(false);

  function handleExit() {
    setPopExit(!popExit);
  }

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  });

  return (
    <div className="wrapper">
      {popExit ?  <PopExit handleExit={handleExit}/> : null}
      <NewCardPopup cards={cards} setCards={setCards} />
      <EditCardPopup />
      <header>
        <HeaderContainer handleExit={handleExit} />
      </header>
      <main className="main">
        <div className="container">
          <Cards isLoading={isLoading} cards={cards} />
        </div>
      </main>
    </div>
  );
};

export default MainPage;
