var temps = [100, 50, 20, 150]

function checkTemp(temp) {
    return temp >= 100
}

if (temps.every(checkTemp)) {
    console.log("Water boiled")
}
else {
    console.log("Not all")
}

console.log(temps.filter(checkTemp))