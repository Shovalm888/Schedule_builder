import React from "react";

function ConstraintCheckbox(props){

    return <div className="col custom-control custom-checkbox">
    <input onClick={()=>{props.func(props.index);}}
    type="checkbox" className="custom-control-input" id={props.id} />
<label className="custom-control-label" htmlFor={props.id}>{props.name}</label>
</div>
}

export default ConstraintCheckbox;