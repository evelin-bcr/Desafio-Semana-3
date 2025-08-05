
let nombre = " ";
let edad = " ";
let invitacion = " ";

nombre = prompt("¿Cual es tu nombre?");
edad = Number(prompt("¿Cual es tu edad?"));
if (edad >= 18) {
    invitacion = prompt("¿Tienes invitacion?");}
else { alert( "Hola " + nombre + ", lo siento no puedes ingresar.") }
    if (edad >= 18 && invitacion === "si") {
        alert("Hola " + nombre + ", bienvenido puedes ingresar.");
    }
    else { alert("Hola " + nombre + ", lo siento no puedes ingresar.") }



// Validar que los campos no se dejen en blanco o se cancele
// while (nombre === " " || nombre === null) 


