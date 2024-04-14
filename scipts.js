let displayJS = document.getElementById("display").value
let clearButton = document.getElementById("clear-button");
let changeModeBTN = document.getElementById("changeMode")
localStorage.setItem("mEC", '')

function addToDisplay(input){
    displayJS += input
    document.getElementById("display").value = displayJS
}

function calculate(){
    try{
        displayJS = eval(displayJS)
        document.getElementById("display").value = displayJS
    }
    catch{
        document.getElementById("display").value = "ERROR"
    }
}

function ec(){
    let okBTN = document.getElementById("okBTN")
    document.getElementById("keyMode").style.display = "none"
    document.getElementById("numberKey").style.display = "grid"
    while (true) {
        if (localStorage.getItem("mEC") === '') {
            document.getElementById("display").setAttribute("placeholder", "m (Kg)")
        } else if (condition2) {
            // Instructions si condition2 est vraie
        } else {
            // Instructions par défaut si aucune condition n'est vraie
        }
    }

}



clearButton.addEventListener("click", () => {
    displayJS = "";
    document.getElementById("display").value = displayJS;
});

changeModeBTN.addEventListener("click", () => {
    document.getElementById("key").style.display = "none";
    document.getElementById("keyMode").style.display = "flex"
    displayJS = "";
    document.getElementById("display").value = displayJS;
})


