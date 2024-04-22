/*
Descripción: Este es un programa simple en JavaScript que da la bienvenida al usuario y muestra
en qué navegador se está ejecutando.
Desarrollador: Castro Naidar
Fecha: 21/04/2024
Cambios: Ninguno
*/

// Validar si el navegador es compatible con el objeto navigator
if (navigator) {
    // Obtener el nombre del navegador
    var browserName = navigator.userAgent;

    // Función para obtener el nombre del navegador
    function getBrowserName() {
        switch (true) {
            case browserName.indexOf("Chrome") !== -1:
                $NomNav = "Google Chrome";
                break;
            case browserName.indexOf("Firefox") !== -1:
                $NomNav = "Mozilla Firefox";
                break;
            case browserName.indexOf("Googlebot") !== -1:
                $NomNav = "Googlebot";
                break
            case browserName.indexOf("Opera") !== -1:
                $NomNav = "Opera";
                break
            case browserName.indexOf("Safari") !== -1:
                $NomNav = "Safari";
                break;
            default:
                $NomNav = "Navegador desconocido";
                break;
        }
        return $NomNav
    }
    
    // variable para almacenar el nombre del navegador
    var currentBrowser = getBrowserName();

    // Mostrar mensaje de bienvenida y el nombre del navegador
    alert("¡Bienvenido! Estás utilizando " + currentBrowser + ".");
} else {
    // Si el objeto navigator no está disponible mostramos un mensaje de error
    alert("Lo siento, este navegador no es compatible con el objeto Navigator.");
}
