let displayJS = document.getElementById("display").value
 
function addToDisplay(input){
    displayJS += input
    document.getElementById("display").value = displayJS
    console.log(displayJS)
}

function clear(){
    displayJS = 0; // Réinitialise la valeur à une chaîne vide
    document.getElementById("display").value = displayJS;
    console.log(displayJS)
}

function calculate(){
    displayJS = eval(displayJS)
    document.getElementById("display").value = displayJS
    console.log(displayJS)
}