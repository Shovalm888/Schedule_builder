import React from "react";
import TimeTableRow from "./TimeTableRow";

// props.schedule contain the String matrix we need to print to the WebSite

function TimeTable(props) {

  return (
    
    <div className={`text-center carousel-item ${props.id === 0 ? "active" : ""} container-fluid`}>
      {props.schedule.map((row, index) => {

        return (
          <div>
            <TimeTableRow
              key={`TimeTableRow-${index}.${props.id}`}
              a={row[0]}
              b={row[1]}
              c={row[2]}
              d={row[3]}
              e={row[4]}
              f={row[5]}
              g={row[6]}
            />
          </div>
        );
      })}
      <p className="mt-4">{`${props.id + 1}/${props.amount}`}</p>
    </div>
  );
}

export default TimeTable;
