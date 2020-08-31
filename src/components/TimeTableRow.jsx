import React from "react";

function TimeTableRow(props) {

  return (

    <div className="row">
      <span className={`col border border-secondary time-table-heading ${props.b === "ראשון" ? "rounded-rightTop" : props.a === "20:50" ? "rounded-rightButtom" : ""}`} style={{ minHeight: "50px" }}>
        {props.a}
      </span>
      <span className={`col border border-secondary ${props.b === "ראשון" ? "time-table-heading" : ""}`} style={{ minHeight: "50px" }}>
        {props.b}
      </span>
      <span className={`col border border-secondary ${props.b === "ראשון" ? "time-table-heading" : ""}`} style={{ minHeight: "50px" }}>
        {props.c}
      </span>
      <span className={`col border border-secondary ${props.b === "ראשון" ? "time-table-heading" : ""}`} style={{ minHeight: "50px" }}>
        {props.d}
      </span>
      <span className={`col border border-secondary ${props.b === "ראשון" ? "time-table-heading" : ""}`} style={{ minHeight: "50px" }}>
        {props.e}
      </span>
      <span className={`col border border-secondary ${props.b === "ראשון" ? "time-table-heading" : ""}`} style={{ minHeight: "50px" }}>
        {props.f}
      </span>
      <span className={`col border border-secondary ${props.b === "ראשון" ? "rounded-leftTop time-table-heading" : props.a === "20:50" ? "rounded-leftButtom" : ""}`} style={{ minHeight: "50px" }}>
        {props.g}
      </span>
    </div>
  );
}

export default TimeTableRow;
