import React from "react";
import { markedCheckbox } from "../global";


// Every Checkbox have the "props.id" associated to lesson,
// the function "onClick" push the lesson's id to "markedCheckbox" array when the checkbox
// is checked and remove the id when the checkbox is unchecked

function Checkbox(props) {

  return <div className="col-md-auto custom-control custom-checkbox first-col" >

    <input onClick={() => {

      if (markedCheckbox.includes(props.id))
        markedCheckbox.splice(markedCheckbox.indexOf(props.id), 1);

      else markedCheckbox.push(props.id);
    }
    }

      type="checkbox" className="custom-control-input" id={`check-${props.id}`} />
    <label className="custom-control-label" htmlFor={`check-${props.id}`}></label>
  </div>;
}

export default Checkbox;