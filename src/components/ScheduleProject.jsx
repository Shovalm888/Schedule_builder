import React, { useState } from "react";
import MatrixRow from "./MatrixRow";
import TableRow from "./TableRow";
import { cDay, coursesSort, isEquivalent, markedCheckbox, snum, tnum, matrixArrSort, matrixArr, constStartEnd } from "../global";
import Trashicon from "./Trashicon";
import Checkbox from "./Checkbox";
import TimeTable from "./TimeTable";
import Alert from "./Alert";
import ConstraintCheckbox from "./ConstraintCheckbox";
import ConstraintStartEndTime from "./ConstraintStartEndTime";
import times, { myCourses, currentCourses } from "../times";
import ReactTooltip from 'react-tooltip';


function ScheduleProject() {

  // Override array equals:
  Array.prototype.equals = function (array) {
    return (
      this.length === array.length &&
      this.every(function (this_i, i) {
        return this_i === array[i];
      })
    );
  };

  const weekDays = ["ראשון", "שני", "שלישי", "רביעי", "חמישי", "שישי"];
  const coursesTypes = ["הרצאה", "תרגיל", "מעבדה", "אחר"];

  const [matrixEmpty, setMatrixEmpty] = useState(false);
  const [highPriority, setHighPriority] = useState(false);  // to save courses with high priority to appear in the firsts timetables
  const [timeTable, setTimeTable] = useState([]);   // to save the schedule String matrix
  const [alertMsg, setAlertMsg] = useState("");  // to print to the website alert messages with <Alert/> component
  const [items, setItems] = useState([]); // to save the lessons, each index contain one lesson
  const [takeInput, setInput] = useState({  // to save user input and initiate the texts area after submit lesson
    courseName: "",
    lecturerName: "",
    typeOfCourse: ""
  });

  const constWindowless = Array(6).fill(false); // to save which days should be windowless (constraint)
  const constFreeDay = Array(6).fill(false); // to save which days should be free (constraint)

  // <<<<<<<<<<<<<<<< Example for courses >>>>>>>>>>>>>>>>>>//
  // Example 1:
  function addExample1() {
    myCourses.map((val) => {
      let course = {
        courseName: val.courseName,
        lecturerName: val.lecturerName,
        typeOfCourse: val.type,
        days: val.days,
        beginningTime: val.beginningTime,
        duration: val.duration
      };
      addItem(course);
    })
  }
  // Example 2:
  function addExample2() {
    currentCourses.map((val) => {
      let course = {
        courseName: val.courseName,
        lecturerName: val.lecturerName,
        typeOfCourse: val.type,
        days: val.days,
        beginningTime: val.beginningTime,
        duration: val.duration
      };
      addItem(course);
    })
  }


  // ======================== useState SET functions start here : ======================= // 

  function clearTimeTableState() {
    setTimeTable([]);
  }

  function addTimeTable(schedule) {
    setTimeTable((prevItems) => {
      return [...prevItems, schedule];
    });
  }

  function addItem(course) {
    setItems((prevItems) => {
      return [...prevItems, course];
    });
  }

  function takeRelevantCourses() {
    return items.filter((val, index) => {
      return markedCheckbox.includes(index);
    });
  }

  function deleteItem() {
    markedCheckbox.sort(); // Delete lecture
    while (markedCheckbox.length) {
      var id = markedCheckbox.pop();
      setItems((prevItems) => {
        return prevItems.filter((item, index) => {
          return index !== id;
        });
      });
    }
  }

  function onChangeTextArea(event) {
    const { name, value } = event.target;
    setInput((prevValue) => ({ ...prevValue, [name]: value }));
  }

  function setWindowless(index) {
    constWindowless[index] = !(constWindowless[index]);
  }
  function setFreeDay(index) {
    constFreeDay[index] = !(constFreeDay[index]);
  }

  // ======================== useState SET functions end here.  ======================= //

  //=========================== Start Take Input From User ===============================================//

  /* This function takes the lesson information inserted by the user, validate them and insert them 
  to the lessons table */

  function takeCourse(event) {

    event.preventDefault(); // Prevent page restart

    matrixArr.sort(matrixArrSort); // sort by [day , time]

    if (matrixArr.length === 0) {  // If the user did not choose days & hours for the lesson
      setMatrixEmpty(true);
      return;
    }

    setMatrixEmpty(false);

    let course = {
      courseName: "",
      lecturerName: "",
      typeOfCourse: "",
      days: [],
      beginningTime: [],
      duration: []
    };

    let [courseName, lecturerName, typeOfCourse] = Object.values(takeInput);
    course.courseName = courseName;
    course.lecturerName = lecturerName;
    course.typeOfCourse = typeOfCourse;

    let index = 0; // dayIndex

    while (matrixArr.length > 0) {
      // taking the button's location which represents the day and the hour
      var [button, setButtonColor] = matrixArr.pop();
      var row = button.id;
      var col = button.name;

      // Push the first lessons' hour to "course" object
      if (course.days[0] === undefined) {
        course.days.push(tnum(col));
        course.beginningTime.push(tnum(row));
        course.duration.push(1);
      }

      // In case we got a consecutive lessons' hours so => update the beginning time and increase the duration
      else if (
        (tnum(col) === course.days[index]) &&
        (course.beginningTime[index] === tnum((+row + 1).toString()))
      ) {
        course.beginningTime.pop();
        course.beginningTime.push(tnum(row));
        course.duration[index]++;
      }

      // In case we got a lesson with split hours so => add another cell to the arrays "days", "beginningTime" & "duration" 
      else {
        index++;
        course.days.push(tnum(col));
        course.beginningTime.push(tnum(row));
        course.duration.push(1);
      }

      setButtonColor(button); // Set the matrix's button's color to the original color 
    }

    // If this course already exist return without adding it to the "items" array that contains all the courses
    for (const x of items) {
      if (isEquivalent(course, x)) return;
    }
    // In case that tnum didn't succeed to convert well : 
    for(var i = 0; i < course.days.length ; i++){
      if(course.days[i] === undefined || course.beginningTime[i] === undefined)
      return;
    }

    // Add this course to "Items"
    addItem(course);
  }

  //=========================== End Take Input From User ===============================================//



  // ========================== Start Algorithem To Find TimeTables =================================== //

  function findSchedule() {

    clearTimeTableState(); // Remove all the previous timetables 

    // Validation for start & end time to each day
    for (var val of constStartEnd) {
      if (val.start !== "" && val.end !== "") {
        if (parseInt(val.start) > parseInt(val.end)) {
          alert("זמני התחלה וסיום לא הגיוניים");
          return;
        }
      }
    }

    items.sort(coursesSort);  // Sort items array by course name and then by course type

    // "constItems" will contain only the relevant lessons depends on user constraints 
    const constItems = items.filter((val) => {

      var flag = true;
      for (var i = 0; i < val.days.length; i++) {
        if (
          (constFreeDay[snum(val.days[i]) - 1])
          || (parseInt(constStartEnd[snum(val.days[i]) - 1].start) > parseInt(val.beginningTime[i]))
          || (parseInt(constStartEnd[snum(val.days[i]) - 1].end) < (parseInt(val.beginningTime[i]) + val.duration[i] - 1))
        ) {
          flag = false;
          break;
        }
      }
      if (flag)
        return val;
    });


    let prev = [];
    let curr = [];
    let courseTypeIndex = [];
    let differTypes = 0;

    // "differTypes" variable summarize all the differnte types of lecture in each course in "items" array (the original array)
    for (var i = 0; i < items.length; i++) {
      curr = [items[i].courseName, items[i].typeOfCourse];
      if (!curr.equals(prev)) {
        differTypes++;
        prev = curr;
      }
    }

    /* The next loop save in "courseTypeIndex" the beginning index of each differnte lesson type.
    Differnte lesson type is when we have differnt course name or differnte types in the same lesson */
    curr = [];
    prev = [];

    for (i = 0; i < constItems.length; i++) {
      curr = [constItems[i].courseName, constItems[i].typeOfCourse];
      if (!curr.equals(prev)) {
        courseTypeIndex.push(i);
        prev = curr;
      }
    }

    // If the number of different lesson type isn't equal that's mean that when we filtered "items" into 
    // "constItems" we subtracted a  whole type lecture of some course 
    if (courseTypeIndex.length !== differTypes || courseTypeIndex.length === 0) {
      setAlertMsg("לא נמצאו התאמות");
      return;
    }

    // If the flag "highPriority" is true => the user has a preference to some particular lesson
    if (highPriority)
      setRelevantCoursesFirst(courseTypeIndex, constItems);

    let schedule = Array(14)
      .fill()
      .map(() => Array(7).fill(""));

    schedule = initSchedule(schedule); // Initiate the matrix schedule with Days & Hours

    findAndPrint(0, courseTypeIndex, schedule, constItems);

    if (timeTable.length === 0)  // In cases that there were not found a timetables
      setAlertMsg("לא נמצאו התאמות");
  }

  //<<<<<<<<<<<< Initiate schedule matrix with days and hours >>>>>>>>>>>>>//

  function initSchedule(schedule) {
    for (var ch = ['a', 'b', 'c', 'd', 'e', 'f'], num = 0; num < ch.length; num++)
      schedule[0][num + 1] = tnum(ch[num]);

    for (num = 0; num < 13; num++)
      schedule[num + 1][0] = tnum((num + 2).toString());

    return schedule;
  }

  //-------------------- Starts of recursive function to find the timetables ----------------------//

  function findAndPrint(i, typeIndex, schedule, constItems) {

    // In case we need to print the schedule
    if (i === typeIndex.length) {

      if (checkIfWindowless(schedule)) {
        addTimeTable(JSON.parse(JSON.stringify(schedule))); //Deep copy of object with JSON
      }
      return;
    }

    let end = typeIndex[i + 1];

    if (end === undefined) end = constItems.length;

    for (let curr = typeIndex[i]; curr < end; curr++) {
      if (putLesson(constItems[curr], schedule)) {
        findAndPrint(i + 1, typeIndex, schedule, constItems);
        removeLesson(constItems[curr], schedule);
      }
    }
  }

  //-------------------- End of recursive function to find the timetables ----------------------//

  /* <<<<<<<<<<<<<<<<<<<<<<<< This function sets the high priority lessons 
  to be taken first when the algorithm search for schedule 
  by putting  them in the firsts places in "constItems" array >>>>>>>>>>>>>>>>>>>>>>>*/

  function setRelevantCoursesFirst(courseTypeIndex, constItems) {

    const moreRelevant = takeRelevantCourses(); // "moreRelevant" contains the marked lessons that should be in first priority

    while (moreRelevant.length) {

      var tmp = moreRelevant.pop();
      var index = constItems.indexOf(tmp);

      if (index !== -1) { // Enter the "if" statement only if the marked course appear in "constItems"

        if (!courseTypeIndex.includes(index)) { // If temp index apear in "courseTypeIndex" => he already will be taken first 
          var curr = 0, prev = 0;
          for (var i = 0; i < courseTypeIndex.length; i++) { //In this loop we find the closer index in "course TypeIndex" that smaller than "index" (tmp index)
            curr = courseTypeIndex[i];
            if (prev < index && curr > index)
              break;

            prev = curr;
          }
          [constItems[index], constItems[prev]] = [constItems[prev], constItems[index]]; // make the swap
        }
      }
    }
  }

  /* <<<<<<<<<<<<<<<<<< This function checks if the schedule is windowless 
  in the requested days or not >>>>>>>>>>>>>>>>>>>>>>>>>>>*/

  function checkIfWindowless(schedule) {
    for (var i = 0; i < 6; i++) {
      if (constWindowless[i]) {   // "constWindowless" is array contain true if day x need to be windowless
        var start = false, end = false;
        for (var j = 0; j < 13; j++) {
          if (schedule[j + 1][i + 1] !== "") {
            start = true;
            if (end)
              return false;
          }
          else if (start) {
            end = true;
          }
        }
      }
    }
    return true;
  }

  /*<<<<<<<<<<<<<<<<<<<<<< put lesson function tries to put "lesson" 
  in the schedule, the lesson will be put only if there is no overlap >>>>>>>>>>>>>>>>>>>> */

  function putLesson(lesson, schedule) {
    let flag = false;
    for (let i = 0; i < lesson.days.length; i++) {    // Try to put the lesson in the schedule
      for (let j = 0; j < lesson.duration[i]; j++) {
        if (
          schedule[snum(lesson.beginningTime[i]) + j][snum(lesson.days[i])] ===
          ""
        ) {
          schedule[snum(lesson.beginningTime[i]) + j][
            snum(lesson.days[i])
          ] = j === 0 ? `${lesson.courseName} ${lesson.typeOfCourse} \n ${lesson.lecturerName}`
              : `המשך ${lesson.courseName}`;

        } else {          // In case of failure remove the lesson that we started to put in the schedule
          for (; i >= 0; i--) {
            flag ? (j = lesson.duration[i] - 1) : j--;   // the flag sign if the second loop was canceled after one loop at list
            for (; j >= 0; j--) {
              schedule[snum(lesson.beginningTime[i]) + j][
                snum(lesson.days[i])
              ] = "";
            }
            flag = true;
          }
          return false;
        }
      }
    }
    return true;
  }

  // <<<<<<<<<<<<<<<<<<< Remove lesson from schedule: >>>>>>>>>>>>>>>>> //

  function removeLesson(lesson, schedule) {
    for (let i = 0; i < lesson.days.length; i++) {
      for (let j = 0; j < lesson.duration[i]; j++) {
        schedule[snum(lesson.beginningTime[i]) + j][snum(lesson.days[i])] = "";
      }
    }
  }

  // ================================ End Algorithem To Find TimeTables ================================== //

  // ================================ Start Take input from .html file of Braude WebSite ================================== //

  function addCourseBasedOnScrap(event) {

    var file = event.target.files[0];
    if (file === undefined) {
      return;
    }

    var reader = new FileReader();
    reader.onload = function (event) {
      // The file's text will be printed here

      let inputAsText = event.target.result;

      let course = {        // The Object that will be contained in "items" array
        courseName: "",
        lecturerName: "",
        typeOfCourse: "",
        days: [],
        beginningTime: [],
        duration: []
      };

      let copyFrom, paste, tmp;

      course.courseName = inputAsText.substring(inputAsText.indexOf('<link rel="stylesheet" href="./') + 31, inputAsText.indexOf("_files/"));

      while ((tmp = inputAsText.indexOf("<b>")) != -1) {

        inputAsText = inputAsText.slice(tmp + 3);

        course.typeOfCourse = inputAsText.substring(0, inputAsText.indexOf("</b>"));

        // This section might be problematic in case we got more than one type that not includes in coursesTypes --->
        if (!coursesTypes.includes(course.typeOfCourse)) {
          course.typeOfCourse = coursesTypes[3];  // if the type in not "הרצאה, תרגיל , מעבדה או אחר" put "אחר" in type
        }
        // <---- End of problematic section

        inputAsText = inputAsText.slice(inputAsText.indexOf("<b>") + 3);
        var _timer = Date.now();
        for (var i = 0; (inputAsText.indexOf("<b>") > (copyFrom = inputAsText.indexOf("<td>&nbsp;")) || (inputAsText.indexOf("<b>") === -1 && copyFrom !== -1)) && copyFrom !== -1; i++) {

          inputAsText = inputAsText.slice(copyFrom + 10);
          paste = inputAsText.substring(0, inputAsText.indexOf("</td>"));

          switch (i % 5) {
            case 0:

              break;
            case 1:
              course.days.push(cDay(paste));
              break;
            case 2:
              course.beginningTime.push(paste);
              break;
            case 3:
              course.duration.push(parseInt(paste) - parseInt(course.beginningTime[parseInt(i / 5)])); // can also write course.beginningTime.length - 1 insted of i / 5
              break;
            case 4:
              course.lecturerName = paste;
              break;
            // default is useless here because i is an integer and (i % 5) cant be different than 0,1,2,3,4
          }
          if(Date.now() - _timer > 5000) break;
        }

        if (course.days.length !== course.duration.length || course.days[0] === undefined) {
          alert("קיים חשש לקריאת נתונים שגויה מהקובץ!");
        } else {

          // In case that cDay did not succeed to convert well :
          for(var i = 0; i < course.days.length ; i++){
           if(course.days[i] === undefined || course.beginningTime[i] === undefined)
           return;
          }

          var existedCourse = false;
          for (const x of items) {         // Checks if this lesson already exist in "items"
            if (isEquivalent(course, x)) existedCourse = true;
          }
          

          if (!existedCourse) {            // Adding lesson
            addItem(JSON.parse(JSON.stringify(course)));
          }
        }
        // Reset the array before we are taking the next lesson:
        course.days = [];
        course.duration = [];
        course.beginningTime = [];
        course.lecturerName = "";
        course.typeOfCourse = "";
      }
    }
    reader.readAsText(file);
  }

  // ================================ End Take input from .html file of Braude WebSite ================================== //

  // Tooltips messages
  let tooltipAddHtmlFile = 'נווט בתחנת המידע אל הקורס אותו תרצה להוסיף <br /> לחץ על לחצן ימני בעכבר ובחר "שמור בשם"<br /> הוסף את הקובץ המורד לכאן וודא שהשעורים שנוספו תואמים לאלו שבתחנת המידע';
  let tooltipHighPriority = "בכל קורס ניתן לבחור לכל סוג של שיעור, אחד מכל סוג כלומר: <br />הרצאה אחת, תרגיל אחד וכו' שהם יהיו בעדיפות גבוה כלומר,<br /> יופיעו במערכות הראשונות "

  //Table heading
  function addChartHeading() {
    return (
      <TableRow
        key="TableRow-(-1)"
        id="-1"
        courseName="שם הקורס"
        lecturerName="שם המרצה"
        typeOfCourse="סוג שיעור"
        days="ימים"
        beginningTime="שעת התחלה"
        duration="משך שיעור"
        tableHeadChoice={<Trashicon key="Trashicon-(-1)" deleteMarkedItems={deleteItem} />}
      />
    );
  }

  // HTML Render :

  return (
    <div>
      <div className="container-flud">
        <div className="row justify-content-center">
          <div className="col-md-4 order-md-2 mb-4 pl-5 div-rtl text-right">
            <form className="form-group " onSubmit={takeCourse}>
              <div className="row mb-5">
                <label htmlFor="courseName1">שם קורס</label>
                <input
                  className="form-control "
                  onChange={onChangeTextArea}
                  id="courseName1"
                  name="courseName"
                  value={takeInput.courseName}
                  placeholder="הכנס שם הקורס"
                  required
                />
              </div>

              <div className="row mb-5">
                <label htmlFor="lecturerName1">שם מרצה</label>
                <input
                  className="form-control "
                  onChange={onChangeTextArea}
                  id="lecturerName1"
                  name="lecturerName"
                  value={takeInput.lecturerName}
                  placeholder="הכנס שם המרצה"
                  required
                />
              </div>

              <div className="row mb-5">
                <label htmlFor="typeOfCourse1">סוג</label>
                <select
                  className="custom-select d-block w-100"
                  name="typeOfCourse"
                  onChange={onChangeTextArea}
                  id="typeOfCourse1"
                  value={takeInput.typeOfCourse}
                  required
                >
                  <option value="">בחר...</option>
                  <option>{coursesTypes[0]}</option>
                  <option>{coursesTypes[1]}</option>
                  <option>{coursesTypes[2]}</option>
                  <option>{coursesTypes[3]}</option>
                </select>
              </div>
              <div className="row">
                <button className="btn btn-secondary " type="submit">
                  הוסף שיעור
                </button>
                {matrixEmpty ?
                  <div className="mx-4 text-danger">
                    *טבלת השעות ריקה
                </div>
                  : ""
                }
              </div>
              <div className="row mt-4">
                <input type="file" accept=".html , application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,application/vnd.ms-excel" name="file" id="file" className="inputfile" onChange={addCourseBasedOnScrap} />
                <label data-tip={tooltipAddHtmlFile} data-for='toolTip1' htmlFor="file">הוסף קורס ע"י קובץ HTML</label>
                <ReactTooltip id='toolTip1' html={true} />
              </div>
            </form>

          </div>
          <div className="col-md-1 order-md-1 div-rtl">
            <button className="col btn btn-warning mb-3" onClick={addExample1} type="button">דוגמה 1 למערכת</button>
            <button className="col btn btn-warning mb-3" onClick={addExample2} type="button">דוגמה 2 למערכת</button>
          </div>
          <div className="col-md-5 order-md-1 div-rtl">
            {times.map((currTime) => {
              return <MatrixRow
                id={currTime.key}
                key={`MatrixRow-${currTime.key}`}
                colorA={currTime.colorA}
                colorB={currTime.colorB}
                a={currTime.a}
                b={currTime.b}
                c={currTime.c}
                d={currTime.d}
                e={currTime.e}
                f={currTime.f} />;
            })}
          </div>
        </div>

        <div className="row div-rtl mt-4">

          <div className="mt-5 container text-right">
            {items.length > 0 ?
              <button className="btn my-3 btn-danger" onClick={() => {
                for (var i = 0; i < items.length; i++)
                  markedCheckbox.push(0);
                deleteItem();
              }}>
                מחק הכל
              </button>
              : ""}
            {items.length > 0 ? addChartHeading() : ""}
            {items.map((toAddItem, index) => (
              <TableRow
                key={`TableRow-${index}`}
                index={index}
                courseName={toAddItem.courseName}
                lecturerName={toAddItem.lecturerName}
                typeOfCourse={toAddItem.typeOfCourse}
                days={toAddItem.days}
                beginningTime={toAddItem.beginningTime}
                duration={toAddItem.duration}
                tableHeadChoice={<Checkbox id={index} key={Object.values(toAddItem)} />}
              />
            ))}
          </div>
        </div>
        <div className="row div-rtl text-right mt-4">
          <div className="container">
            <hr className="mt-5 mb-5 featurette-divider" />
            <h3 className="row text-muted mb-4">הוספת אילוצים</h3>

            <div className="row mb-4 custom-control custom-switch">
              <input onClick={() => (setHighPriority(!highPriority))}
                type="checkbox" className="custom-control-input" id="customSwitch1" />
              <label className="custom-control-label" data-tip={tooltipHighPriority} data-for='toolTip2' htmlFor="customSwitch1">קורסים מסומנים עם עדיפות גבוהה: </label>
              <ReactTooltip id='toolTip2' html={true} />
            </div>

            <div className="row mb-4">
              <p className="col-md-2">בלי חלונות בימים:</p>
              {weekDays.map((val, index) => (
                <ConstraintCheckbox
                  key={`constaintCheckbox-${index}`}
                  id={`constaintCheckbox-${index}`}
                  index={index}
                  name={val}
                  func={setWindowless}
                />
              ))}
            </div>
            <div className="row mb-4">
              <p className="col-md-2">ימים חופשיים:</p>
              {weekDays.map((val, index) => (
                <ConstraintCheckbox
                  key={`constaintFreeDay-${index}`}
                  id={`constaintFreeDay-${index}`}
                  index={index}
                  name={val}
                  func={setFreeDay}
                />
              ))}
            </div>
            <div className="row mb-4">
              <p className="col-md-2">שעת התחלה:</p>
              {weekDays.map((val, index) =>
                <ConstraintStartEndTime
                  key={`constraintBeginning-${index}`}
                  id={index}
                  name={val}
                  beginning="true"
                />
              )}
            </div>
            <div className="row mb-4">
              <p className="col-md-2">שעת סיום:</p>
              {weekDays.map((val, index) =>
                <ConstraintStartEndTime
                  key={`constraintEnding-${index}`}
                  id={index}
                  name={val}
                  beginning="false"
                />
              )}
            </div>
            <hr className="mt-5 mb-5 featurette-divider" />
            <div className="row justify-content-center">
              <button className="btn btn-primary btn-lg btn-block" style={{ width: "50%" }} onClick={findSchedule}>
                מצא מערכת
        </button>
            </div>
          </div>



        </div>

        <div className="row div-rtl">

          {timeTable.length === 0 ? <Alert key="Alert" msg={alertMsg} /> :
            <div className="container-fluid my-5 text-right" >
              <section className="colored-section" id="testimonials">

                <div id="testimonial-carousel" className="carousel slide" data-interval="false" data-ride="false">
                  <div className="carousel-inner">

                    {
                      timeTable.map((x, index) => {
                        return <TimeTable
                          key={`TimeTable-${index}`}
                          amount={timeTable.length}
                          schedule={x}
                          id={index} />;
                      })
                    }


                  </div>
                  <a className="carousel-control-prev" href="#testimonial-carousel" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" style={{ backgroundColor: "#000000bf" }}></span>
                  </a>
                  <a className="carousel-control-next" href="#testimonial-carousel" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" style={{ backgroundColor: "#000000bf" }}></span>
                  </a>
                </div>

              </section>
            </div>
          }
        </div>
      </div>
    </div>
  );
}

export default ScheduleProject;
