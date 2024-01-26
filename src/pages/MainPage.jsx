import { useEffect, useState } from "react";

import HeaderContainer from "../components/HeaderContainer";
import NewCardPopup from "../components/NewCardPopup";

import { cardList } from "../utils/data";
import Cards from "../components/Cards/Cards";
import { Outlet } from "react-router-dom";
import { getTasks } from "../API/tasks";

const MainPage = () => {
  const [cards, setCards] = useState(cardList);
  const [isLoading, setIsLoading] = useState(true);
  const [popExit, setPopExit] = useState(false);
  const [error, setError] = useState(null);
  

  function handleExit() {
    setPopExit(!popExit);
  }

  
  useEffect(() => {
    getTasks().then((data) => {
      setCards(data.tasks)
      setIsLoading(false)
    }).catch(() => {
      setError("Не удалось загрузить данные с свервера, попробуйте позже")
    })
  }, [])

  return (
    <div className="wrapper">
      <NewCardPopup cards={cards} setCards={setCards} />

      <header>
        <HeaderContainer handleExit={handleExit} />
      </header>
      <main className="main">
        <div className="container">
        {error ? <p style={{color: "red", padding: "2em", textAlign: "center"}}>{error}</p> : <Cards isLoading={isLoading} cards={cards} /> }
          
        </div>
      </main>
      <Outlet />
    </div>
  );
};

export default MainPage;
