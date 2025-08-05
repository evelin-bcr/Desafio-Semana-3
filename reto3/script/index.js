
let numero = Number(prompt("Ingrese un número para generar su tabla de multiplicar:"));
let respuesta = true;

while (respuesta) {
    console.log(`Tabla de multiplicar del ${numero}:`);
    if (numero <= 0) {
        console.log("El número debe ser mayor a 0.");
    } else if (isNaN(numero)) {
        console.log("Por favor, ingrese un número válido.");
    } else {
        for (let i = 1; i <= 10; i++) {
            console.log(`${numero} x ${i} = ${numero * i}`);
        }
    }

    let pregunta = prompt("¿Desea realizar otra operación? (si/no)").toLowerCase();

    if (pregunta === "no") {
        console.log("Gracias por usar el programa. ¡Hasta luego!");
        respuesta = false;
    } else {
        numero = Number(prompt("Ingrese un nuevo número para generar su tabla de multiplicar:"));
    }

}