//HUSK AT LÆSE DET HELE. Nogle af linjerne er lange!
//Skriv to globale variabler. 
//Den første hedder xAnswer og finder DOM elementet med id'et "xAnswer".
//Den anden hedder inputX og finder DOM elementet med id'et "x".
const xAnswer = document.getElementById('xAnswer');
const inputX = document.getElementById('x')

//Skriv to globale variabler. 
//Den første hedder yAnswer og finder DOM elementet med id'et "yAnswer".
//Den anden hedder inputY og finder DOM elementet med id'et "y".
const yAnswer = document.getElementById('yAnswer');
const inputY = document.getElementById('y')

//Skriv den globale variabel som hedder img og finder DOM elementet img.
const img = document.querySelector('img');


//Lav to globale variabler der hedder xvalue og yvalue, som gemmer x- og y-aksens værdier. De skal sættes til 0.
let xvalue = 0;
let yvalue = 0;

//Lav en eventListener for inputX, som "lytter" efter input. 
//Sæt xvalue til at være lig med inputX value (dette kan du gøre med event.target.value).
//BONUS: Hvis du vil kunne se hvor mange grader billedet bliver "skubbet" skal du sætte innerText i xAnswer til at være lig med xvalue.
//Sæt img's style til at lig med transform: skew. værdierne i skew sættes til xvalue og yvalue. HINT: brug en literal string : `transform: skew(${ }deg, ${ }deg);`.
inputX.addEventListner('input', (e) => {
    console.log(e.target.value);
    xvalue = inputX.e.target.value;
    
    xAnswer.innerText = xvalue;

});




//Gentag samme eventListener bare for inputY.



