function balanceScale() {
    let balanceIcon = document.getElementById('balanceIcon');
    balanceIcon.innerHTML ="&#xf24e";

    setTimeout(function() {
        balanceIcon.innerHTML = "&#xf516"
    },1000);

    setTimeout(function() {
        balanceIcon.innerHTML = "&#xf515" 
    },2000)

}

balanceScale();

setInterval(balanceScale, 4000);

// Function cadena



