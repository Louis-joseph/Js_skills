let warning = document.getElementById("warning");
let active = document.getElementById ("active");


//Détecter le Verrrouillage Majuscule
document.getElementById("input").addEventListener("keyup",
function(event) {
    if (event.getModifierState("CapsLock")) {
        //changer le style css en js avec le display
        warning.style.display = "block";
        // warning.style.display = "yellowgreen";
    }else {
        warning.style.display = "none";
    }
})

//Détecter le Verrouilage Numérique
document.getElementById("input").addEventListener("keydown",
function(event) {
    if (event.getModifierState("NumLock")) {
        active.style.display = "block";
    }else {
        active.style.display = "none";
    }
})
