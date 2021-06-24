const buttonCopy = document.getElementById("button-copy");
// const copyText = document.getElementById("copy-text");

buttonCopy.addEventListener("click", function() {

    let content = document.getElementById('copy-text');

    content.select();
    document.execCommand('copy');

    // alert("Copied!");
    
});