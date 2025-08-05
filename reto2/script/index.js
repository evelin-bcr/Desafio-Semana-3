let pinIngresado = " ";
let saldo = 100000;
const pinSecreto = 9725;

pinIngresado = Number(prompt ("Señor usuario por favor ingresa tu Pin:"));

while (pinIngresado !== pinSecreto) {
    alert ("Pin incorrecto, por favor intenta nuevamente");
    pinIngresado = Number(prompt ("Señor usuario por favor ingresa tu Pin:"));
}

alert ( "Bienvenido, tu saldo es: $" + saldo);
let opcion = prompt ("Elije una de las siguientes opciones:\n1. Consultar saldo\n2. Retirar dinero\n3. Salir"); 
while (opcion !== "3") {
    if (opcion === "1"){
        alert ("Tu saldo es: $" + saldo);
    } else if (opcion === "2") {
        let retiro = Number(prompt ("¿Cuánto dinero deseas retirar?"));

        if (isNaN(retiro) || retiro <= 0) {
            alert ("Por favor ingresa una cantidad válida para retirar.");
        } else {
            if (retiro > saldo) {
                alert ("El valor supera el saldo disponible, por intenta nuevamente.");
            } else {
                saldo = saldo - retiro;
                alert ("Has retirado: $" + retiro + "\n Tu nuevo saldo es: $" + saldo);
            }
        }

    } else {
        alert ("Opción invalida, por favor intenta nuevamente.");
    }

    opcion = prompt ("Elije una de las siguientes opciones:\n1. Consultar_saldo\n2. Retirar_dinero\n3. Salir"); 

}

if (opcion === "3") {
    alert ("Gracias por usar nuestros servicios. ¡Hasta pronto!");   
}