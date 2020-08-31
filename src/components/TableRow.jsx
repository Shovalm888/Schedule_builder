import React from "react";


function TableRow(props) {

    var days, beginning, duration;

    if (props.days !== "ימים") {
        var len = props.days.length;
        days = props.days[len - 1];
        beginning = props.beginningTime[len - 1];
        duration = props.duration[len - 1];

        // This loop organize the output in case that we have a lesson with split days

        for (var i = len - 2; i >= 0; i--) {
            days = days + "\n" + props.days[i];
            beginning += "\n" + props.beginningTime[i];
            duration += "\n" + props.duration[i];
        }
    }

    // for the Table Heading:
    else {
        days = props.days;
        beginning = props.beginningTime;
        duration = props.duration;
    }

    return <div className={`row table-border ${props.id === "-1" ? "table-heading" : ""}`} >

        {props.tableHeadChoice}

        <div className="col table-border">
            {props.courseName}
        </div>
        <div className="col table-border">
            {props.lecturerName}
        </div>
        <div className="col table-border">
            {props.typeOfCourse}
        </div>
        <div className="col table-border">
            <p style={{
                'whiteSpace': 'pre-wrap'
            }}>{days}</p>
        </div>
        <div className="col table-border">
            <p style={{
                'whiteSpace': 'pre-wrap'
            }}>{beginning}</p>
        </div>
        <div className="col table-border">
            <p style={{
                'whiteSpace': 'pre-wrap'
            }}>{duration}</p>
        </div>
    </div>;



}

export default TableRow;