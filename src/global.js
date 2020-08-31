const markedCheckbox=[];

const matrixArr=[];

const constStartEnd = [
    {id:0, start:"", end:"" },{id:1, start:"", end:"" },{id:2, start:"", end:"" },{id:3, start:"", end:"" },{id:4, start:"", end:"" },{id:5, start:"", end:"" }
 ];

// After user choose the days & hours (in the matrix) of some lesson, the location of the buttons saved in "matrixArr"
// This function sorts the array accords the days and then by the hours

function matrixArrSort(a , b){
    var button1 = a[0];
    var button2 = b[0];
       let aRow = parseInt(button1.id);
       let aCol = button1.name;
       let bRow = parseInt(button2.id);
       let bCol = button2.name;
       if(aCol < bCol) return -1;
       if(aCol > bCol) return 1;
       return aRow < bRow ? -1 : 1;
}

function snum(toConvert){
    switch(toConvert){
        case "ראשון" :  return 1;
        case "שני" :  return 2;
        case "שלישי" :  return 3;
        case "רביעי" :  return 4;
        case "חמישי" :  return 5;
        case "שישי" :  return 6;
        case "8:30" :  return 1;
        case "9:30" :  return 2;
        case "08:30" :  return 1;
        case "09:30" :  return 2;
        case "10:30" :  return 3;
        case "11:30" :  return 4;
        case "12:50" :  return 5;
        case "13:50" :  return 6;
        case "14:50" :  return 7;
        case "15:50" :  return 8;
        case "16:50" :  return 9;
        case "17:50" :  return 10;
        case "18:50" :  return 11;
        case "19:50" :  return 12;
        case "20:50" :  return 13;
        default : return undefined;
    }
}

function cDay(toConvert){  // convert char to day
switch (toConvert) {
    case 'א':
        return "ראשון";
        
        case 'ב':
        return "שני";
        
        case 'ג':
        return "שלישי";
        
        case 'ד':
            return "רביעי";
        
        case 'ה':
            return "חמישי";
        
        case 'ו':
            return "שישי";
        

    default: return undefined
}
}

function tnum(toConvert){
    switch (toConvert) {
        case 'a': return "ראשון"; 
        case 'b': return "שני";
        case 'c': return "שלישי";
        case 'd': return "רביעי";
        case 'e': return "חמישי";
        case 'f': return "שישי";
        case '2': return "8:30";
        case '3': return "9:30";
        case '4': return "10:30";
        case '5': return "11:30";
        case '6': return "12:50";
        case '7': return "13:50";
        case '8': return "14:50";
        case '9': return "15:50";
        case '10': return "16:50";
        case '11': return "17:50";
        case '12': return "18:50";
        case '13': return "19:50";
        case '14': return "20:50";

        default: return undefined;
            
    }
}

   // This function that returns true if two Object are equals, otherwise it's returns false

   function isEquivalent(a, b) {
    var aProps = Object.getOwnPropertyNames(a);
    var bProps = Object.getOwnPropertyNames(b);
    if (aProps.length !== bProps.length) {
        return false;
    }
    for (var i = 0; i < aProps.length; i++) {
        var propName = aProps[i];
        if((a[propName] instanceof Array) && (b[propName] instanceof Array)){
            if(!(a[propName].equals(b[propName])))
            return false;
        }
        else if (a[propName] !== b[propName]) {
            return false;
        }
    }
    return true;
}

// Check if two Arrays are equals:

Array.prototype.equals = function( array ) {
    return this.length === array.length && 
           this.every( function(this_i,i) { return this_i === array[i] } )  
    };

    // This function designed to sort the courses array by the course name and then by 
    // course type (type ==> "הרצאה, תרגיל וכו")

   function coursesSort(a , b){
    if(a.courseName < b.courseName) return 1;
    if(a.courseName > b.courseName) return -1;
    if(a.typeOfCourse < b.typeOfCourse) return -1;
    if(a.typeOfCourse > b.typeOfCourse) return 1;
  }

export {cDay, constStartEnd ,snum, isEquivalent,coursesSort, markedCheckbox ,tnum, matrixArrSort, matrixArr};