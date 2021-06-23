// document.getElementById("input").addEventListener("keyup",
function checkCapsLock(event) {
    if (event.getModifierState("CapsLock")) {
      alert("caps");
    }
  }
;

//onclick -> pour rechercher un clic de souris dans l’entrée
//onkeyup -> pour détecter un onglet dans le champ de saisie