// for (let charCode = 65; charCode <= 90; charCode++) {
//     console.log(String.fromCharCode(charCode))
// }

// for (let charCode = 97; charCode <= 122; charCode++) {
//     console.log(String.fromCharCode(charCode))
// }


for (let charCode = 65; charCode <= 122; charCode++) {
    if(charCode > 90 && charCode < 97) continue;
    console.log(String.fromCharCode(charCode))
}