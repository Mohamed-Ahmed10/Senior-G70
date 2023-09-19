var first = document.getElementById("first"),
    parent = document.getElementById("parent");




function addClass() {
    // first.className = "fromJS"
    // first.classList.add("fromJs")
    // first.classList.remove("fromHTML")
    // first.classList.toggle("fromJs")
    // console.log(first.classList.contains("fromHTML"))
    // console.log(first.classList.item(1))
    parent.innerHTML += `
        <div class="Ok">
            This is from JS
            <span>This is span from js</span>
            <input type="password" name="educationPass"/>
        </div>
        `
}


console.log(parent.firstElementChild)
console.log(parent.lastElementChild)
console.log(parent.lastChild)

var tagFromJS = document.createElement("span");

tagFromJS.append("This is span from JS")

parent.insertBefore(tagFromJS, parent.children[2])

parent.removeChild(document.getElementsByClassName("test")[3])

console.log(parent.children[2].nextElementSibling)
console.log(parent.children[2].previousElementSibling)



/////////////////////////////////////////////////////////////
//  EVENTS
var btn = document.querySelector("#btn")

// btn.onclick = function () {
//     console.log("Hello")
// }

// btn.onclick = function () {
//     console.log("Hello 2")
// }



// btn.addEventListener("click", function () {
//     console.log("Hello from listener 2")
// })



btn.addEventListener("click", function () {
    console.log("Hello from listener")
})

window.onload = function () { console.log("Loaded") }



var myInput = document.getElementById("myInput"),
    myOutput = document.querySelector("#output");

myInput.addEventListener("blur", function (ev) {
    // myOutput.innerHTML = ev.target.value
    console.log("blur")
})

/**************************** To do list*******************************/

var myForm = document.forms[0],
    myTaskInput = myForm.children[0],
    myOutput = document.getElementById("tasksOutput");


myForm.addEventListener("submit", function (ev) {
    ev.preventDefault();
    myOutput.innerHTML += `<li>${myTaskInput.value}</li>`;
    myTaskInput.value = "";
    myTaskInput.focus();
})
