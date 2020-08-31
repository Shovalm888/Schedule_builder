import React from "react";
import { constStartEnd } from "../global";
import times from "../times";

function ConstraintStartEndTime(props) {

  //This function set the start/end time for each day which represent by "constStartEnd" index
  function onChange(e) {
    (props.beginning === "true") ? constStartEnd[props.id].start = e.target.value :
      constStartEnd[props.id].end = e.target.value;
  }

  return <div className="col mb-2">
  
    <label htmlFor={`constraintBeginning-${props.id}`}>{`${props.name}:`}</label>
    <select
      id={`constraintBeginning-${props.id}`}
      className="custom-select d-block w-100"
      name={props.id}
      onChange={onChange}
    >
      {times.map((val, index) => {       // this Map returns a list of all the hours which accepted from "times" const 
        return <option key={
          props.beginning === "true" ? `beginningOpt-${index}` : `endingOpt-${index}`
        }
          value={index !== 0 ? val.a : ""} id={index}>{index !== 0 ? val.a : "בחר..."}</option>

      })}

    </select>
  </div>

}

export default ConstraintStartEndTime;