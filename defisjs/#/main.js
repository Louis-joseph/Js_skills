const myBtn = document.getElementById("myBtn");
const cntClic = document.getElementById("cntClic");


var nbClic = 0;

myBtn.addEventListener('click',increment);

function increment(){
    nbClic++;
    cntClic.textContent=nbClic;

}

