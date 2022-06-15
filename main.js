const stringArray = []
function stringFunc () {
    stringArray.sort()
    console.log(stringArray)
}


stringFunc (stringArray.push("zell" , "benovo" , "aop" , "moshiba"))

    const numberArray = []
function arrayFunc () {
    numberArray.sort((a,b)=> { return a-b})
    console.log(numberArray)
}


arrayFunc (numberArray.push("9", "5" , "3" , "1"))

    const numbersArray = []
 function numbersFunc () {
    numbersArray.sort((a,b)=> b-a)
    console.log(numbersArray);
}
numbersFunc (numbersArray.push("3" , "7" , "11" , "22"))
 

let inputNames =document.createElement("input")
document.body.appendChild(inputNames)
inputNames.placeholder = "Enter name:"

// let saveNames = document.createElement("button")
// document.body.appendChild(saveNames)
// saveNames.innerHTML= "save";
// saveNames.addEventListener("click" ,arrayNamesFunc)


let userNames = inputNames.value;
const arrayNames = []
function arrayNamesFunc (evenTe) {
    if (evenTe.key == "Enter") {
        
   
    if (arrayNames.length < 10){
        arrayNames.push(inputNames.value);
        arrayNames.sort()
    }
    console.log(arrayNames);
}
}

functin