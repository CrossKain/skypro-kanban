import classNames from "classnames";


function PopStatus({ status, setStatus, editMode }) {
 
  return (
    <div className="pop-browse__status status">
      <p className="status__p subttl">Статус</p>
      <div className="status__themes">
        {editMode ? (
          <>
            <label
              className={classNames("status__theme ", {
                _gray: status === "Без статуса",
              })}
            >
              <input
                type="radio"
                value={"Без статуса"}
                checked={status === "Без статуса"}
                onChange={(event) => setStatus(event.target.value)}
              />
              <span className={classNames({ _gray: status === "Без статуса" })}>
                Без статуса
              </span>
            </label>
            <label  className={classNames("status__theme ", {
                _gray: status === "Нужно сделать",
              })}>
              <input
                type="radio"
                value={"Нужно сделать"}
                checked={status === "Нужно сделать"}
                onChange={(event) => setStatus(event.target.value)}
              />
              <span className={classNames({ _gray: status === "Нужно сделать" })}>Нужно сделать</span>
            </label>
            <label  className={classNames("status__theme ", {
                _gray: status === "В работе",
              })}>
              <input
                type="radio"
                value={"В работе"}
                checked={status === "В работе"}
                onChange={(event) => setStatus(event.target.value)}
              />
              <span className={classNames({ _gray: status === "В работе" })}>В работе</span>
            </label>
            <label  className={classNames("status__theme ", {
                _gray: status === "Тестирование",
              })}>
              <input
                type="radio"
                value={"Тестирование"}
                checked={status === "Тестирование"}
                onChange={(event) => setStatus(event.target.value)}
              />
              <span className={classNames({ _gray: status === "Тестирование" })}>Тестирование</span>
            </label>
            <label  className={classNames("status__theme ", {
                _gray: status === "Готово",
              })}>
              <input
                type="radio"
                value={"Готово"}
                checked={status === "Готово"}
                onChange={(event) => setStatus(event.target.value)}
              />
              <span className={classNames({ _gray: status === "Готово" })}>Готово</span>
            </label>
          </>
        ) : (
          <div className="status__theme _gray">
            <p className="_gray">{status}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default PopStatus;
