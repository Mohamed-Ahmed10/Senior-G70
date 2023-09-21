var users_request = new XMLHttpRequest(),
    output = document.getElementById("output")

users_request.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
        let response = JSON.parse(this.response);

        for (let index = 0; index < response.length; index++) {
            const user = response[index];
            output.innerHTML += `<li>${user.name}</li>`
        }
    }
}

users_request.open("GET", "https://jsonplaceholder.typicode.com/users")

users_request.send()