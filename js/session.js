console.log(5 * "4")

console.log(Number("55555"))

console.log(parseInt("123.999999999"))
console.log(parseFloat("123.9"))


var myName = "Mohamed",
    lastName = "Ahmed",
    job = "frontend developer and frontend instructor";

console.log(myName);
/**************************** length ************************************
console.log(myName.length);

/**************************** charAt ************************************

console.log(myName.charAt(0))
/**************************** charCodeAt ***************************

console.log(lastName.charCodeAt(0))

/**************************** fromCharCode ************************************

console.log(String.fromCharCode(97))
/**************************** concat ************************************

console.log(myName.concat(" " , lastName ," " , job))

/**************************** startsWith ************************************

console.log(job.startsWith("front"))
/**************************** endsWith ************************************

console.log(job.endsWith("instructor"))

/**************************** includes ************************************

console.log(job.includes("and"))

/**************************** indexOf ************************************
console.log(job.indexOf("frontend"))

/**************************** lastIndexOf ************************************
console.log(job.lastIndexOf("frontend"))

/**************************** match ************************************
// console.log(job.match("Front"))
console.log(job.match(/front/ig))

/**************************** repeat ************************************
console.log(myName.repeat(50))

/**************************** replace ************************************

// console.log(job.replace("front", "new"))
console.log(job.replace(/front/g, "new"))

// gi
/**************************** search ************************************
console.log(job.search("developer"))

/**************************** slice ******************VIMP******************

console.log(job.slice(0, 2))

/**************************** split *********************VIMP***************

console.log(job.split("d"))
/**************************** substr ************************************
console.log(myName.substr(1, 3))

/**************************** substring ************************************
console.log(myName.substring(1, 3))

/**************************** toLowerCase ************************************

console.log(myName.toLowerCase())

/**************************** toUpperCase ************************************

console.log(myName.toUpperCase())
/**************************** trim ************************************/

var newJob = "             Front  end         developer             ";

console.log(newJob);
let result = "";
newJob = newJob.trim().split(" ")
for (let char = 0; char < newJob.length; char++) {
    const element = newJob[char];
    if(element.length > 0) result += element;
    console.log(element);
}
console.log(result)


/*
JS tasks 
-------------------------------
Task 2 
Create an array include some names then check the names starts with letter m or not 
Then print in console   this name starts with letter m 
Use array with some capital and small example ["Mohamed" , "mahmoud" , "Ali" ] want to output mohamed and mahmoud
-------------------------------
Task 3 
Eliminate the   all spaces from the job (string)
    Job= "      Front    end            developer    " 

Note :trim  will  remove the spaces from the beginning of the string only , I want to remove all the spaces add one space only
*/
