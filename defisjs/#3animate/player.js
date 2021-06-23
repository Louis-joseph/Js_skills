const player = document.getElementById('player');
const moveSize = 24;
var playerWalk = 0;
var images = ['./img/1.png','./img/2.png','./img/3.png','./img/4.png','./img/5.png','./img/6.png','./img/7.png']

document.addEventListener('keydown', function(event) {
    if (event.code == 'ArrowUp') {
    playerWalk = playerWalk + 1;
     // Votre code ici

    player.style.top = (player.offsetTop - moveSize) + "px";
    } else if (event.code == 'ArrowRight') {
    playerWalk = playerWalk + 1;
    // Votre code ici
    document.getElementById('player').setAttribute("style", "background-images: url(" + images + ");background-repeat: no-repeat;background-size: 40px 40px");

    player.style.left = (player.offsetLeft + moveSize) + "px";
    } else if (event.code == 'ArrowDown') {
    playerWalk = playerWalk + 1;
    // Votre code ici

    player.style.top = (player.offsetTop + moveSize) + "px";
    } else if (event.code == 'ArrowLeft') {
    playerWalk = playerWalk + 1;
    // Votre code ici

    player.style.left = (player.offsetLeft - moveSize) + "px";
    }
   });