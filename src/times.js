const times = [
    {
        key : 1,
        colorA : "btn-secondary",
        colorB : "btn-secondary",
        a : "ראשון",
        b : "שני",
        c : "שלישי",
        d : "רביעי",
        e : "חמישי",
        f : "שישי"
    },
    {
        key : 2,
        colorA : "btn-outline-dark",
        colorB : "btn-secondary",
        a : "8:30",
        b : "8:30",
        c : "8:30",
        d : "8:30",
        e : "8:30",
        f : "8:30"
    },
    {
        key : 3,
        colorA : "btn-outline-dark",
        colorB : "btn-secondary",
        a : "9:30",
        b : "9:30",
        c : "9:30",
        d : "9:30",
        e : "9:30",
        f : "9:30" 
    },
    {
        key : 4,
        colorA : "btn-outline-dark",
        colorB : "btn-secondary",
        b : "10:30",
        a : "10:30",
        c : "10:30",
        d : "10:30",
        e : "10:30",
        f : "10:30"    
    },
    {
        key : 5,
        colorA : "btn-outline-dark",
        colorB : "btn-secondary",
        b : "11:30",
        a : "11:30",
        c : "11:30",
        d : "11:30",
        e : "11:30",
        f : "11:30"  
    },
    {
        key : 6,
        colorA : "btn-outline-dark",
        colorB : "btn-secondary",
        b : "12:50",
        a : "12:50",
        c : "12:50",
        d : "12:50",
        e : "12:50",
        f : "12:50"  
    },
    {
        key : 7,
        colorA : "btn-outline-dark",
        colorB : "btn-secondary",
        b : "13:50",
        a : "13:50",
        c : "13:50",
        d : "13:50",
        e : "13:50",
        f : "13:50" 
    },
    {
        key : 8,
        colorA : "btn-outline-dark",
        colorB : "btn-secondary",
        b : "14:50",
        a : "14:50",
        c : "14:50",
        d : "14:50",
        e : "14:50",
        f : "14:50" 
    },
    {
        key : 9,
        colorA : "btn-outline-dark",
        colorB : "btn-secondary",
        b : "15:50",
        a : "15:50",
        c : "15:50",
        d : "15:50",
        e : "15:50",
        f : "15:50" 
    },
    {
        key : 10,
        colorA : "btn-outline-dark",
        colorB : "btn-secondary",
        b : "16:50",
        a : "16:50",
        c : "16:50",
        d : "16:50",
        e : "16:50",
        f : "16:50" 
    },
    {
        key : 11,
        colorA : "btn-outline-dark",
        colorB : "btn-secondary",
        b : "17:50",
        a : "17:50",
        c : "17:50",
        d : "17:50",
        e : "17:50",
        f : "17:50" 
    },
    {
        key : 12,
        colorA : "btn-outline-dark",
        colorB : "btn-secondary",
        b : "18:50",
        a : "18:50",
        c : "18:50",
        d : "18:50",
        e : "18:50",
        f : "18:50" 
    },
    {
        key : 13,
        colorA : "btn-outline-dark",
        colorB : "btn-secondary",
        b : "19:50",
        a : "19:50",
        c : "19:50",
        d : "19:50",
        e : "19:50",
        f : "19:50" 
    },
    {
        key : 14,
        colorA : "btn-outline-dark",
        colorB : "btn-secondary",
        b : "20:50",
        a : "20:50",
        c : "20:50",
        d : "20:50",
        e : "20:50",
        f : "20:50" 
    }
];

let myCourses = [
    {
        key : 0,
        courseName : "אלגורתמים",
        lecturerName : "ילנה",
        type : "הרצאה",
        days : ["שלישי", "רביעי"],
        beginningTime : ["10:30", "12:50"],
        duration : [2,2]
    },
    {
        key : 1,
        courseName : "אלגורתמים",
        lecturerName : "שרי",
        type : "הרצאה",
        days : ["שני", "שני"],
        beginningTime : ["8:30", "12:50"],
        duration : [2,2]
    },
    {
        key : 2,
        courseName : "אלגורתמים",
        lecturerName : "יחיאל",
        type : "תרגיל",
        days : ["רביעי"],
        beginningTime : ["10:30"],
        duration : [2]
    },
    {
        key : 3,
        courseName : "אלגורתמים",
        lecturerName : "יחיאל",
        type : "תרגיל",
        days : ["רביעי"],
        beginningTime : ["8:30"],
        duration : [2]
    },
    {
        key : 4,
        courseName : "אלגורתמים",
        lecturerName : "קובי",
        type : "תרגיל",
        days : ["ראשון"],
        beginningTime : ["10:30"],
        duration : [2]
    },
    {
        key : 5,
        courseName : "אלגורתמים",
        lecturerName : "קובי",
        type : "תרגיל",
        days : ["ראשון"],
        beginningTime : ["14:50"],
        duration : [2]
    },
    {
        key : 6,
        courseName : "מערכות הפעלה",
        lecturerName : "שלי",
        type : "הרצאה",
        days : ["שני"],
        beginningTime : ["10:30"],
        duration : [2]
    },
    {
        key : 7,
        courseName : "מערכות הפעלה",
        lecturerName : "אדי",
        type : "הרצאה",
        days : ["חמישי"],
        beginningTime : ["8:30"],
        duration : [2]
    },
    {
        key : 8,
        courseName : "מערכות הפעלה",
        lecturerName : "סיוון",
        type : "תרגיל",
        days : ["רביעי"],
        beginningTime : ["8:30"],
        duration : [1]
    },
    {
        key : 9,
        courseName : "מערכות הפעלה",
        lecturerName : "דורון",
        type : "תרגיל",
        days : ["ראשון"],
        beginningTime : ["13:50"],
        duration : [1]
    },
    {
        key : 10,
        courseName : "מערכות הפעלה",
        lecturerName : "דורון",
        type : "תרגיל",
        days : ["ראשון"],
        beginningTime : ["14:50"],
        duration : [1]
    },
    {
        key : 11,
        courseName : "מערכות הפעלה",
        lecturerName : "סיוון",
        type : "תרגיל",
        days : ["רביעי"],
        beginningTime : ["11:30"],
        duration : [1]
    },
    {
        key : 12,
        courseName : "מערכות הפעלה",
        lecturerName : "איבגניה",
        type : "מעבדה",
        days : ["שני"],
        beginningTime : ["8:30"],
        duration : [2]
    },
    {
        key : 13,
        courseName : "מערכות הפעלה",
        lecturerName : "טירן",
        type : "מעבדה",
        days : ["שלישי"],
        beginningTime : ["8:30"],
        duration : [2]
    },
    {
        key : 14,
        courseName : "מערכות הפעלה",
        lecturerName : "טירן",
        type : "מעבדה",
        days : ["חמישי"],
        beginningTime : ["8:30"],
        duration : [2]
    },
    {
        key : 15,
        courseName : "מערכות הפעלה",
        lecturerName : "שלי",
        type : "מעבדה",
        days : ["שני"],
        beginningTime : ["12:50"],
        duration : [2]
    },
    {
        key : 16,
        courseName : "מערכות הפעלה",
        lecturerName : "דורון",
        type : "מעבדה",
        days : ["ראשון"],
        beginningTime : ["8:30"],
        duration : [2]
    },
    {
        key : 17,
        courseName : "מערכות הפעלה",
        lecturerName : "איבגניה",
        type : "מעבדה",
        days : ["שלישי"],
        beginningTime : ["8:30"],
        duration : [2]
    },
    {
        key : 18,
        courseName : "מסדים",
        lecturerName : "מתי",
        type : "הרצאה",
        days : ["רביעי"],
        beginningTime : ["12:50"],
        duration : [3]
    },
    {
        key : 19,
        courseName : "מסדים",
        lecturerName : "יואב",
        type : "הרצאה",
        days : ["שלישי"],
        beginningTime : ["14:50"],
        duration : [3]
    },
    {
        key : 20,
        courseName : "מסדים",
        lecturerName : "מתי",
        type : "הרצאה",
        days : ["חמישי"],
        beginningTime : ["10:30"],
        duration : [3]
    },
    {
        key : 21,
        courseName : "מסדים",
        lecturerName : "מתי",
        type : "תרגיל",
        days : ["רביעי"],
        beginningTime : ["15:50"],
        duration : [2]
    },
    {
        key : 22,
        courseName : "מסדים",
        lecturerName : "אביטל",
        type : "תרגיל",
        days : ["ראשון"],
        beginningTime : ["12:50"],
        duration : [2]
    },
    {
        key : 23,
        courseName : "מסדים",
        lecturerName : "מתי",
        type : "תרגיל",
        days : ["חמישי"],
        beginningTime : ["13:50"],
        duration : [2]
    },
    {
        key : 24,
        courseName : "פרוייקט",
        lecturerName : "ענת",
        type : "הרצאה",
        days : ["שני"],
        beginningTime : ["14:50"],
        duration : [3]
    },
    {
        key : 25,
        courseName : "מונחה עצמים",
        lecturerName : "מתי",
        type : "הרצאה",
        days : ["שלישי", "שלישי"],
        beginningTime : ["10:30", "14:50"],
        duration : [2,1]
    },
    {
        key : 26,
        courseName : "מונחה עצמים",
        lecturerName : "יואב",
        type : "הרצאה",
        days : ["ראשון"],
        beginningTime : ["10:30"],
        duration : [3]
    },
    {
        key : 27,
        courseName : "מונחה עצמים",
        lecturerName : "יואב",
        type : "הרצאה",
        days : ["רביעי"],
        beginningTime : ["14:50"],
        duration : [3]
    },
    {
        key : 28,
        courseName : "מונחה עצמים",
        lecturerName : "מורן",
        type : "תרגיל",
        days : ["ראשון"],
        beginningTime : ["13:50"],
        duration : [1]
    },
    {
        key : 29,
        courseName : "מונחה עצמים",
        lecturerName : "סיוון",
        type : "תרגיל",
        days : ["רביעי"],
        beginningTime : ["10:30"],
        duration : [1]
    },
    {
        key : 30,
        courseName : "מונחה עצמים",
        lecturerName : "סיוון",
        type : "תרגיל",
        days : ["רביעי"],
        beginningTime : ["9:30"],
        duration : [1]
    },
    {
        key : 31,
        courseName : "מונחה עצמים",
        lecturerName : "מורן",
        type : "תרגיל",
        days : ["ראשון"],
        beginningTime : ["14:50"],
        duration : [1]
    },
    {
        key : 32,
        courseName : "הסתברות",
        lecturerName : "בני",
        type : "הרצאה",
        days : ["רביעי"],
        beginningTime : ["8:30"],
        duration : [3]
    },
    {
        key : 33,
        courseName : "הסתברות",
        lecturerName : "אורלי",
        type : "הרצאה",
        days : ["ראשון"],
        beginningTime : ["10:30"],
        duration : [3]
    },
    {
        key : 34,
        courseName : "הסתברות",
        lecturerName : "אורלי",
        type : "תרגיל",
        days : ["שלישי"],
        beginningTime : ["10:30"],
        duration : [2]
    },
    {
        key : 35,
        courseName : "הסתברות",
        lecturerName : "קובי",
        type : "תרגיל",
        days : ["ראשון"],
        beginningTime : ["8:30"],
        duration : [2]
    },
    {
        key : 36,
        courseName : "הסתברות",
        lecturerName : "בני",
        type : "תרגיל",
        days : ["חמישי"],
        beginningTime : ["8:30"],
        duration : [2]
    }
]

let currentCourses = [
    {
        key : 0,
        courseName : "שיטות הנדסיות",
        lecturerName : "אבי",
        type : "הרצאה",
        days : ["רביעי"],
        beginningTime : ["13:50"],
        duration : [2]
    },
    {
        key : 1,
        courseName : "שיטות הנדסיות",
        lecturerName : "ענת",
        type : "הרצאה",
        days : ["רביעי"],
        beginningTime : ["10:30"],
        duration : [2]
    },
    {
        key : 2,
        courseName : "שיטות הנדסיות",
        lecturerName : "איליה",
        type : "תרגיל",
        days : ["רביעי"],
        beginningTime : ["15:50"],
        duration : [3]
    },
    {
        key : 3,
        courseName : "שיטות הנדסיות",
        lecturerName : "קטרינה",
        type : "תרגיל",
        days : ["רביעי"],
        beginningTime : ["15:50"],
        duration : [3]
    },
    {
        key : 4,
        courseName : "שיטות הנדסיות",
        lecturerName : "טיראן",
        type : "תרגיל",
        days : ["רביעי"],
        beginningTime : ["15:50"],
        duration : [3]
    },
    {
        key : 5,
        courseName : "שיטות הנדסיות",
        lecturerName : "טיראן",
        type : "תרגיל",
        days : ["ראשון"],
        beginningTime : ["10:30"],
        duration : [3]
    },
    {
        key : 6,
        courseName : "שיטות הנדסיות",
        lecturerName : "ג'וליה",
        type : "תרגיל",
        days : ["ראשון"],
        beginningTime : ["10:30"],
        duration : [3]
    },
    {
        key : 7,
        courseName : "שיטות הנדסיות",
        lecturerName : "טיראן",
        type : "תרגיל",
        days : ["חמישי"],
        beginningTime : ["8:30"],
        duration : [3]
    },
    {
        key : 8,
        courseName : "שיטות הנדסיות",
        lecturerName : "קטרינה",
        type : "תרגיל",
        days : ["שני"],
        beginningTime : ["12:50"],
        duration : [3]
    },
    {
        key : 9,
        courseName : "שיטות הנדסיות",
        lecturerName : "מגי",
        type : "אחר",
        days : ["שלישי"],
        beginningTime : ["16:50"],
        duration : [3]
    },
    {
        key : 10,
        courseName : "שיטות הנדסיות",
        lecturerName : "מגי",
        type : "אחר",
        days : ["ראשון"],
        beginningTime : ["17:50"],
        duration : [3]
    },
    {
        key : 11,
        courseName : "מבוא לבדיקות",
        lecturerName : "קטרינה",
        type : "הרצאה",
        days : ["רביעי"],
        beginningTime : ["12:50"],
        duration : [1]
    },
    {
        key : 12,
        courseName : "מבוא לבדיקות",
        lecturerName : "סרגיי",
        type : "הרצאה",
        days : ["שלישי"],
        beginningTime : ["10:30"],
        duration : [1]
    },
    {
        key : 13,
        courseName : "מבוא לבדיקות",
        lecturerName : "קטרינה",
        type : "מעבדה",
        days : ["שני"],
        beginningTime : ["10:30"],
        duration : [1]
    },
    {
        key : 14,
        courseName : "מבוא לבדיקות",
        lecturerName : "סרגיי",
        type : "מעבדה",
        days : ["שני"],
        beginningTime : ["8:30"],
        duration : [1]
    },
    {
        key : 15,
        courseName : "מבוא לבדיקות",
        lecturerName : "סרגיי",
        type : "מעבדה",
        days : ["שני"],
        beginningTime : ["10:30"],
        duration : [1]
    },
    {
        key : 16,
        courseName : "מבוא לבדיקות",
        lecturerName : "סרגיי",
        type : "מעבדה",
        days : ["שלישי"],
        beginningTime : ["8:30"],
        duration : [1]
    },
    {
        key : 17,
        courseName : "מבוא לבדיקות",
        lecturerName : "קטרינה",
        type : "מעבדה",
        days : ["רביעי"],
        beginningTime : ["10:30"],
        duration : [1]
    },
    {
        key : 18,
        courseName : "מבוא לבדיקות",
        lecturerName : "סרגיי",
        type : "מעבדה",
        days : ["רביעי"],
        beginningTime : ["10:30"],
        duration : [1]
    },
    {
        key : 19,
        courseName : "מבוא לבדיקות",
        lecturerName : "סרגיי",
        type : "מעבדה",
        days : ["רביעי"],
        beginningTime : ["13:50"],
        duration : [1]
    },
    {
        key : 20,
        courseName : "אוטומטים",
        lecturerName : "שריי",
        type : "הרצאה",
        days : ["שני", "רביעי"],
        beginningTime : ["10:30","8:30"],
        duration : [2 , 2]
    },
    {
        key : 21,
        courseName : "אוטומטים",
        lecturerName : "יואב",
        type : "הרצאה",
        days : ["חמישי", "רביעי"],
        beginningTime : ["11:30","8:30"],
        duration : [2 , 2]
    },
    {
        key : 22,
        courseName : "אוטומטים",
        lecturerName : "אלי",
        type : "תרגיל",
        days : ["שלישי"],
        beginningTime : ["14:50"],
        duration : [2]
    },
    {
        key : 23,
        courseName : "אוטומטים",
        lecturerName : "אלי",
        type : "תרגיל",
        days : ["שני"],
        beginningTime : ["12:50"],
        duration : [2]
    },
    {
        key : 24,
        courseName : "אוטומטים",
        lecturerName : "אלי",
        type : "תרגיל",
        days : ["חמישי"],
        beginningTime : ["9:30"],
        duration : [2]
    },
    {
        key : 25,
        courseName : "אוטומטים",
        lecturerName : "שריי",
        type : "תרגיל",
        days : ["רביעי"],
        beginningTime : ["10:30"],
        duration : [2]
    },
    {
        key : 26,
        courseName : "אוטומטים",
        lecturerName : "יואב",
        type : "תרגיל",
        days : ["חמישי"],
        beginningTime : ["13:50"],
        duration : [2]
    },
    {
        key : 27,
        courseName : "הסתברות",
        lecturerName : "אורלי",
        type : "הרצאה",
        days : ["ראשון"],
        beginningTime : ["10:30"],
        duration : [3]
    },
    {
        key : 28,
        courseName : "הסתברות",
        lecturerName : "בני",
        type : "הרצאה",
        days : ["חמישי"],
        beginningTime : ["11:30"],
        duration : [3]
    },
    {
        key : 29,
        courseName : "הסתברות",
        lecturerName : "קובי",
        type : "תרגיל",
        days : ["ראשון"],
        beginningTime : ["13:50"],
        duration : [2]
    },
    {
        key : 30,
        courseName : "הסתברות",
        lecturerName : "קובי",
        type : "תרגיל",
        days : ["ראשון"],
        beginningTime : ["15:50"],
        duration : [2]
    },
    {
        key : 31,
        courseName : "הסתברות",
        lecturerName : "אורלי",
        type : "תרגיל",
        days : ["ראשון"],
        beginningTime : ["13:50"],
        duration : [2]
    },
    {
        key : 32,
        courseName : "הסתברות",
        lecturerName : "בני",
        type : "תרגיל",
        days : ["חמישי"],
        beginningTime : ["14:50"],
        duration : [2]
    },
    {
        key : 33,
        courseName : "גרפיקה ממחושבת",
        lecturerName : "מירי",
        type : "הרצאה",
        days : ["רביעי"],
        beginningTime : ["12:50"],
        duration : [2]
    },
    {
        key : 34,
        courseName : "גרפיקה ממחושבת",
        lecturerName : "דרור רן",
        type : "הרצאה",
        days : ["חמישי"],
        beginningTime : ["11:30"],
        duration : [2]
    },
    {
        key : 35,
        courseName : "גרפיקה ממחושבת",
        lecturerName : "דרור רן",
        type : "מעבדה",
        days : ["חמישי"],
        beginningTime : ["13:50"],
        duration : [2]
    },
    {
        key : 36,
        courseName : "גרפיקה ממחושבת",
        lecturerName : "קרן",
        type : "מעבדה",
        days : ["שלישי"],
        beginningTime : ["8:30"],
        duration : [2]
    },
    {
        key : 37,
        courseName : "גרפיקה ממחושבת",
        lecturerName : "קרן",
        type : "מעבדה",
        days : ["שלישי"],
        beginningTime : ["14:50"],
        duration : [2]
    },
    {
        key : 38,
        courseName : "ממשק אדם מחשב",
        lecturerName : "ענת",
        type : "הרצאה",
        days : ["שני"],
        beginningTime : ["8:30"],
        duration : [2]
    },
    {
        key : 39,
        courseName : "ממשק אדם מחשב",
        lecturerName : "ג'וליה",
        type : "הרצאה",
        days : ["שלישי"],
        beginningTime : ["8:30"],
        duration : [2]
    }
];


export default times;
export {myCourses, currentCourses};
