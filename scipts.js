let displayJS = document.getElementById("display").value
let clearButton = document.getElementById("clear-button");
let changeModeBTN = document.getElementById("changeMode")

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

function ec(){
    const okBTN = document.getElementById("okBTN")
    document.getElementById("keyMode").style.display = "none"
    document.getElementById("display").setAttribute("placeholder", "m (Kg) =")
    
}

clearButton.addEventListener("click", () => {
    displayJS = "";
    document.getElementById("display").value = displayJS;
});

changeModeBTN.addEventListener("click", () => {
    document.getElementById("key").style.display = "none";
    document.getElementById()
    displayJS = "";
    document.getElementById("display").value = displayJS;    
})


