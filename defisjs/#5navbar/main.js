Window.onscroll = slideDown;

function slideDown() {

    let navbar = document.getElementById('navbar');
    let winScroll = window.scrollY;

    console.log(winScroll);

    if (winScroll > 100 ) {
        navbar.setAttribute("style" , "top:0");

    }else {
        navbar.setAttribute("style" , "top:-56px");
    }
    }