const convert = document.getElementById("convert") ;


convert.addEventListener("click", function() {
    
 // Votre code ici
 let text = document.getElementById("msgToCode").value;
//  console.log(text.charCodeAt());

 let i = 0;

 while (text.length > i)
 {
    //  console.log(text.charCodeAt(i));
   
    console.log(text.charCodeAt(i).toString(2));

     i++;
 }

});