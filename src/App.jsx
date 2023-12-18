// import { useState } from 'react'

import './App.css'
import Calendar from './components/Calendar'
import CalendarNav from './components/CalendarNav'
import CardsCopywriting from './components/CardsCopywriting'
import CardsResearch from './components/CardsResearch'
import CardsWebDesign from './components/CardsWebDesign'
import Form from './components/Form'
import HeaderContainer from './components/HeaderContainer'
import MainDone from './components/MainDone'
import MainInWork from './components/MainInWork'
import MainNeedDone from './components/MainNeedDone'
import MainTests from './components/MainTests'
import PopExit from './components/PopExit'
import PopStatus from './components/PopStatus'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="wrapper">

      <PopExit />

      <div className="pop-new-card" id="popNewCard">
        <div className="pop-new-card__container">
          <div className="pop-new-card__block">
            <div className="pop-new-card__content">
              <h3 className="pop-new-card__ttl">Создание задачи</h3>
              <a href="#" className="pop-new-card__close">&#10006;</a>
              <div className="pop-new-card__wrap">
                <form className="pop-new-card__form form-new" id="formNewCard" action="#">
                  <div className="form-new__block">
                    <label htmlFor="formTitle" className="subttl">Название задачи</label>
                    <input className="form-new__input" type="text" name="name" id="formTitle" placeholder="Введите название задачи..." autoFocus />
                  </div>
                  <div className="form-new__block">
                    <label htmlFor="textArea" className="subttl">Описание задачи</label>
                    <textarea className="form-new__area" name="text" id="textArea" placeholder="Введите описание задачи..."></textarea>
                  </div>
                </form>
                <div className="pop-new-card__calendar calendar">
                  <p className="calendar__ttl subttl">Даты</p>
                  <div className="calendar__block">
                    <CalendarNav />
                    <Calendar />

                    <input type="hidden" id="datepick_value" value="08.09.2023" />
                    <div className="calendar__period">
                      <p className="calendar__p date-end">Выберите срок исполнения <span className="date-control"></span>.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="pop-new-card__categories categories">
                <p className="categories__p subttl">Категория</p>
                <div className="categories__themes">
                  <div className="categories__theme _orange _active-category">
                    <p className="_orange">Web Design</p>
                  </div>
                  <div className="categories__theme _green">
                    <p className="_green">Research</p>
                  </div>
                  <div className="categories__theme _purple">
                    <p className="_purple">Copywriting</p>
                  </div>
                </div>
              </div>
              <button className="form-new__create _hover01" id="btnCreate">Создать задачу</button>
            </div>
          </div>
        </div>
      </div>

      <div className="pop-browse" id="popBrowse">
        <div className="pop-browse__container">
          <div className="pop-browse__block">
            <div className="pop-browse__content">
              <div className="pop-browse__top-block">
                <h3 className="pop-browse__ttl">Название задачи</h3>
                <div className="categories__theme theme-top _orange _active-category">
                  <p className="_orange">Web Design</p>
                </div>
              </div>
              <PopStatus />
              <div className="pop-browse__wrap">
                <Form />
                <div className="pop-new-card__calendar calendar">
                  <p className="calendar__ttl subttl">Даты</p>
                  <div className="calendar__block">
                    <CalendarNav />
                    <Calendar />

                    <input type="hidden" id="datepick_value" value="08.09.2023" />
                    <div className="calendar__period">
                      <p className="calendar__p date-end">Срок исполнения: <span className="date-control">09.09.23</span></p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="theme-down__categories theme-down">
                <p className="categories__p subttl">Категория</p>
                <div className="categories__theme _orange _active-category">
                  <p className="_orange">Web Design</p>
                </div>
              </div>
              <div className="pop-browse__btn-browse ">
                <div className="btn-group">
                  <button className="btn-browse__edit _btn-bor _hover03"><a href="#">Редактировать задачу</a></button>
                  <button className="btn-browse__delete _btn-bor _hover03"><a href="#">Удалить задачу</a></button>
                </div>
                <button className="btn-browse__close _btn-bg _hover01"><a href="#">Закрыть</a></button>
              </div>
              <div className="pop-browse__btn-edit _hide">
                <div className="btn-group">
                  <button className="btn-edit__edit _btn-bg _hover01"><a href="#">Сохранить</a></button>
                  <button className="btn-edit__edit _btn-bor _hover03"><a href="#">Отменить</a></button>
                  <button className="btn-edit__delete _btn-bor _hover03" id="btnDelete"><a href="#">Удалить задачу</a></button>
                </div>
                <button className="btn-edit__close _btn-bg _hover01"><a href="#">Закрыть</a></button>
              </div>

            </div>
          </div>
        </div>
      </div>



      <header className="header">
        <HeaderContainer />
      </header>
      <main className="main">
        <div className="container">

          <div className="main__block">
            <div className="main__content">
              <div className="main__column column">
                <div className="column__title">
                  <p>Без статуса</p>
                </div>
                <div className="cards">
                  <CardsWebDesign />

                  <CardsResearch />

                  <CardsWebDesign />

                  <CardsCopywriting />

                  <CardsWebDesign />
                </div>
              </div>
              <MainNeedDone />
              <MainInWork />
              <MainTests />
              <MainDone />


            </div>

          </div>
        </div>
      </main>

    </div>


  )
}

export default App
