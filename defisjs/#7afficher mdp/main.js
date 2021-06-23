//Selectionner l'id input
const input = document.getElementById("input") ;
//Ajouter du text dans display
const display = document.getElementById("display") ;

document.getElementById('checkbox').addEventListener('click',
function() {
    if(input.type == "password") {
        //changer l'input type en "text"
        input.type = "text";
        display.textContent = "Hide";

 
    }else {
        input.type = "password";
        display.textContent = "Show";

    }

})

