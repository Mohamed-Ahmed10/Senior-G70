
/**************************** To do list*******************************/

var myForm = document.forms[0],
    myTaskInput = document.getElementById("taskInput"),
    myOutput = document.getElementById("tasksOutput"),
    tasksCounterOutput = document.querySelector("#tasks_counter"),
    finishedTasksCounter = document.querySelector("#finished_tasks_counter");


myForm.addEventListener("submit", function (ev) {
    ev.preventDefault();
    if (myTaskInput.value.trim() === "") {
        alert("You can't add an empty task")
        afterAdd()
    }
    else {
        addNewTask();
        afterAdd();
        finishTask();
        deleteTask();
        tasksCounterFn();
    }
})

function addNewTask() {
    myOutput.innerHTML += `
        <li class="list-group-item d-flex justify-content-between">
            ${myTaskInput.value}
            <div class="control">
                <i class="m-2 fa-solid fa-flag-checkered text-success"></i>
                <i class="m-2 fa-solid fa-delete-left text-danger"></i>
            </div>
        </li>`;
}

function afterAdd() {
    myTaskInput.value = "";
    myTaskInput.focus();
}

function finishTask() {
    var finish_icons = document.getElementsByClassName("fa-flag-checkered");

    for (let index = 0; index < finish_icons.length; index++) {
        const finish_icon = finish_icons[index];
        finish_icon.addEventListener("click", function () {
            finish_icon.parentElement.parentElement.classList.toggle("finished")
            finishedTasksCounterFn()
        })
    }
}

function deleteTask() {
    var delete_icons = document.getElementsByClassName("fa-delete-left");

    for (let index = 0; index < delete_icons.length; index++) {
        const delete_icon = delete_icons[index];
        delete_icon.addEventListener("click", function () {
            delete_icon.parentElement.parentElement.remove()
            tasksCounterFn()
            finishedTasksCounterFn()
        })
    }
}

function tasksCounterFn() {
    tasksCounterOutput.innerHTML = myOutput.children.length
}
function finishedTasksCounterFn() {
    var finishedTasks = document.getElementsByClassName("finished");

    finishedTasksCounter.innerHTML = finishedTasks.length
}