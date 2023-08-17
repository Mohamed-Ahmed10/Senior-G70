var car = {
    model: 2023,
    year: '1985',
    company: "BMW",
    sold: true
}

console.log(car)
console.log(car["company"])
console.log(car.model)

var person = {
    name: "Sayed",
    age: 2023
}

console.log("Hello " + person.name + " your age is " + person.age)

/////////////////////////////////////////////////////////////////////////////
function firstFn() {
    console.log("This is the first function in JS course")
}

firstFn()

function secondFn(x = 0, y = 0) {
    return x + y
}

console.log(secondFn(8, 5))
console.log(secondFn(8, 50))
console.log(secondFn())

console.log(8 * "A")


function sum(x, y) {
    return x + y
}
function sub(x, y) {
    return x - y
}
function multi(x, y) {
    return x * y
}
function division(x, y) {
    return x / y
}
/*
var x = +prompt("Please enter your first number"),
    y = +prompt("Please enter your second number")

console.log(sum(x, y))
console.log(sub(x, y))
console.log(multi(x, y))
console.log(division(x, y))
*/

// function sum2() {
//     var x = +prompt("Please enter your first number"),
//         y = +prompt("Please enter your second number");
//     console.log(x + y)
// }

// sum2()


var employees = ["Mohamed", "Mahmoud", "Omar", "Khaled"];

employees[4] = "Ahmed";

console.log(employees)
console.log(typeof employees)
console.log(employees.length)
console.log(employees[0])
console.log(employees.at(-1))

var x = 500;

if (x > 4) {
    console.log("x GT Four")

    if (x > 100) {
        console.log("X > 100 & X > 4")
    }
}
else if (x < 4) {
    console.log("x LT Four")
}
else {
    console.log("x Eq 4")
}
console.log("*****************")

var r = 20;

console.log(r)

// r = r + 1;

console.log(++r)

console.log(r--)

console.log(r)


console.log(1378523 % 2)

var t = 40;

console.log(t)

t += 7;

console.log(t)



console.log(5 && null && 4)

// & returns first false and last true

console.log(5 || 4)

// | returns first true and last false