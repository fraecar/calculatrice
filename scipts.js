let displayJS = document.getElementById("display").value
const clearButton = document.getElementById("clear-button");
let clavier = document.getElementsByClassName('key')


function addToDisplay(input){
    displayJS += input
    document.getElementById("display").value = displayJS
    console.log(displayJS)
}

function calculate(){
    try{
        displayJS = eval(displayJS)
        document.getElementById("display").value = displayJS
        console.log(displayJS)
    }
    catch{
        document.getElementById("display").value = "ERROR"
    }
}

clearButton.addEventListener("click", () => {
    displayJS = "";
    document.getElementById("display").value = displayJS;
});

function changeMode(){
    clavier.style.display = "none"
}