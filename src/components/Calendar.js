import React, { useEffect } from "react";
import "../App.css";

function Calendar(props) {
  const generateDateArray = () => {
    const currentDate = new Date();
    const dates = [];

    for (let i = 0; i < 30; i++) {
      const newDate = new Date(currentDate);
      newDate.setDate(currentDate.getDate() + i);
      dates.push(newDate);
      // dates.push(newDate.toISOString().split('T')[0]);
    }
    // console.log(dates);
    return dates;
  };

  const totaldays = generateDateArray();

  const handlecalendar = (selectedDate) => {
    props.state.userData.calenderslot = selectedDate;
    // console.log(selectedDate);
  };

  return (
    <div className="main-calendar">
      {totaldays.map((date, index) => (
        <button
          key={index}
          onClick={() =>
            handlecalendar(
              date.toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
                weekday: "short",
              })
            )
          }
        >
          <div className="main-div">
            <div className="date-div">
              {date.toLocaleDateString("en-US", { day: "numeric" })}
            </div>
            <div className="month-div">
              {date.toLocaleDateString("en-US", { month: "short" })}
            </div>
          </div>
          {date.toLocaleDateString("en-US", { weekday: "short" })}
        </button>
      ))}
    </div>
  );
}

export default Calendar;
