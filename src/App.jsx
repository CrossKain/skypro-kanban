import { useEffect, useState } from 'react'

import HeaderContainer from './components/HeaderContainer'
import PopExit from './components/PopExit'
import { cardList } from "./components/data";
import Cards from './components/Cards'
import NewCardPopup from './components/NewCardPopup'
import EditCardPopup from './components/EditCardPopup'

import './App.css'

function App() {
  const [cards, setCards] = useState(cardList);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000)
  });

  return (
    <div className="wrapper">
      <PopExit />
      <NewCardPopup cards={cards} setCards={setCards}/>
      <EditCardPopup/>
      <header className="header">
        <HeaderContainer />
      </header>
      <main className="main">
        <div className="container">
          <Cards isLoading={isLoading} cards={cards} />
        </div>
      </main>
    </div>
  )
}

export default App
