/*
Descripción: Programa que solicita un usuario, contraseña y luego valida esa constraseña con distintos
usuarios.
Desarrollador: Castro Naidar
Fecha: 21/04/2024
Cambios: Ninguno
*/

// Solicitar al usuario que ingrese su nombre de usuario y contraseña
var usuario = prompt("Por favor, ingresa tu nombre de usuario:");

// Validar el nombre de usuario y la contraseña
switch (usuario) {
    case "juan":
    case "pedro":
    case "maria":
    case "raul":
        var contrasena = prompt("Por favor, ingresa tu contraseña:");
        if (contrasena === "D153n0W3b2") {
            // Si el usuario y la contraseña son válidos
            alert("Inicio de sesión exitoso. ¡Bienvenido, " + usuario + "!");
        } else {
            // Si la contraseña no es valida
            alert("Contraseña incorrecta. Por favor, inténtalo de nuevo.");
        }
        break;
    default:
        // Si el usuario no es válido
        alert("Nombre de usuario incorrecto. Por favor, inténtalo de nuevo.");
        break;
}
