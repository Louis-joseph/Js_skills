window.onscroll = function() { scrollIndicator() };

function scrollIndicator() {
    
    // Calcul de la hauteur du document
    let x = document.querySelector(".content").scrollHeight;

    //Récuperation de la position verticale
    let y = window.scrollY;

    //Récupération de la largeur de la fenêtre
    let p = document.getElementById("bar");

    //Calcul de la barre 
    p.style.width = Math.floor((y/x)*100)*1.25 + "%";

    // document.getElementById("progress-bar").style.width = barre+"px"
    
}