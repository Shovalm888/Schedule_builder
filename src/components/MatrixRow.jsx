import React, { useState } from "react";
import { matrixArr } from "../global.js";

function MatrixRow(props) {

  const [buttonClicked, setButtonClicked] = useState({
    a: true, b: true, c: true, d: true, e: true, f: true
  })

  // This function set the color for each button that has clicked and push to the 
  // global array "matrixArr" the button component and the function that set this
  // button the the original state (function to restart the button)

  function paint(event) {
    if (props.a !== "ראשון") {       // prevent from the first line which contains the days name to change it's buttons color
      var name = event.target.name;

      for (var i = 0; i < matrixArr.length; i++) {  // check if element already exist in array , remove it and change it's color

        if (matrixArr[i].includes(event.target)) {  // check if button was already clicked
          matrixArr.splice(i, 1);
          setButtonClicked(prevValue => ({ ...prevValue, [name]: eval("!prevValue." + name) }));
          return;
        }
      }
      // else (If the button was not clicked)
      matrixArr.push([event.target, (x) => {
        var name = x.name;
        setButtonClicked(prevValue => ({ ...prevValue, [name]: eval("!prevValue." + name) }))
      }]);
      setButtonClicked(prevValue => ({ ...prevValue, [name]: eval("!prevValue." + name) }));
    }
  }

  return <div className="row">
    <button onClick={paint} className={`btn col ${buttonClicked.a ? props.colorA : props.colorB} `} type="button" id={props.id} name="a">{props.a}</button>
    <button onClick={paint} className={`btn col ${buttonClicked.b ? props.colorA : props.colorB} `} type="button" id={props.id} name="b">{props.b}</button>
    <button onClick={paint} className={`btn col ${buttonClicked.c ? props.colorA : props.colorB} `} type="button" id={props.id} name="c">{props.c}</button>
    <button onClick={paint} className={`btn col ${buttonClicked.d ? props.colorA : props.colorB} `} type="button" id={props.id} name="d">{props.d}</button>
    <button onClick={paint} className={`btn col ${buttonClicked.e ? props.colorA : props.colorB} `} type="button" id={props.id} name="e">{props.e}</button>
    <button onClick={paint} className={`btn col ${buttonClicked.f ? props.colorA : props.colorB} `} type="button" id={props.id} name="f">{props.f}</button>
  </div>;
}

export default MatrixRow;