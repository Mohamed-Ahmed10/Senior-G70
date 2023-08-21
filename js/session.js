"use strict";
var day = "Sunday";
/*
switch (day) {
    case "Saturday":
    case "Sunday":
        console.log("I am one or two");
        break;
    default:
        console.log("I am NOOOOO")
}

var dayNumber = +prompt("Enter day number")

function getDayName(x) {
    switch (x) {
        case 1:
            console.log("I am Saturday")
            break;
        case 2:
            console.log("I am Sunday")
            break;

        default:
            console.log("Invalid day number")
            break;
    }
}

getDayName(dayNumber)
*/


console.log(5)

try {
    console.log(test)
} catch (error) {
    console.log("My error " + error.message)
}
finally {
    console.log("I am finally")
}

console.log(5)

function calcRec(width, height) {
    if (isNaN(width) || isNaN(height)) {
        throw 'Incorrect input'
    }
    else return width * height
}

try {
    console.log(calcRec('sdvf', 5))
} catch (error) {
    console.error(error)
}
console.log("test")

t = 55;

console.log(t)
