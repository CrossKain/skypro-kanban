import { DayPicker } from "react-day-picker";
import { useEffect, useState } from "react";
import 'react-day-picker/dist/style.css';


function Calendar({setTaskValue, taskValue}) {

  const [selected, setSelected] = useState();
  useEffect(()=>{
    if(selected){
      
      setTaskValue({...taskValue, date: selected})
    }
  }, [selected, setTaskValue])

  let footer = <p>Выбирете день.</p>;
  if (selected) {
    footer = (
      <p>
        Срок исполнения до{" "}
        {selected.toLocaleString("ru-RU", {
          year: "2-digit",
          month: "numeric",
          day: "numeric",
        })}
        .
      </p>
    );
  }
  return (
    <DayPicker
      mode="single"
      selected={selected}
      onSelect={setSelected}
      footer={footer}
    />
  );
}

export default Calendar;
