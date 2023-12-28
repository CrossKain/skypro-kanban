import Card from "./Card"
import { statusApp } from "./data"

function Cards({ isLoading, cards }) {

    return (<div className="main__block">
        <div className="main__content">
            {statusApp.map((status, index) => {
                return (<div key={index} className="main__column column">
                    <div className="column__title">
                        <p>{status}</p>
                    </div>
                    <div className="cards">
                        {!isLoading ? cards.map((data) => {
                            if (data.status === status) {
                                return (<Card key={data.id} title={data.title} theme={data.theme} date={data.date} />)
                            }
                        }) : "Данные загружаются"}
                    </div>
                </div>)
            })}
        </div>
    </div>)
}

export default Cards