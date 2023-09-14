var username_div = document.getElementById("username")

console.log(username_div.getAttribute("data-custom"))


function set_custom_attr() {
    username_div.setAttribute("fromJS", "This value from JS file")
}

console.log(username_div.innerHTML)
console.log(username_div.outerHTML)
console.log(username_div.textContent)


var username_input = document.querySelector("#usernameInput"),
    output = document.getElementById("output")



function get_input_value() {
    // console.log(username_input)
    // console.log(username_input.value)
    output.innerHTML = username_input.value
}

var output2 = document.getElementById("output2");

function create_elements_fn() {
    var my_element = document.createElement("p"),
        element_text = document.createTextNode("This is text"),
        my_comment = document.createComment("This is comment"),
        element_child = document.createElement("span");

    my_element.appendChild(element_child)
    my_element.append(element_text)
    my_element.prepend(my_comment)
    // my_element.style.background = "#F00"
    my_element.className = "test"

    output2.appendChild(my_element)
}

var my_images = document.images,
    my_forms = document.forms;

console.log(my_images)
console.log(my_forms[0].children)
console.log(my_forms[0].childNodes)

/////////////////////////////////////////////////////////
var my_form = document.getElementById("myForm"),
    results = []
function show_values() {
    for (let index = 0; index < my_form.children.length; index++) {
        const element = my_form.children[index];
        results.push(element.value)
    }
    console.log(results)
}