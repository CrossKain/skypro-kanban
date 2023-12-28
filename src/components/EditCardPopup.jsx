import Calendar from "./Calendar";
import CalendarNav from "./CalendarNav";
import Form from "./Form";
import PopStatus from "./PopStatus";

function EditCardPopup() {
    return (<div className="pop-browse" id="popBrowse">
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
                                <Calendar/>
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
    </div>)
}

export default EditCardPopup