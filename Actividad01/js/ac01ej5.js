/*
Descripción: Este programa en JavaScript combina dos arrays de nombres y apellidos
de forma aleatoria, formateando los nombres y apellidos para luego convertir el primer elemento
en mayuscula y el resto en minusculas
Desarrollador: Castro Naidar
Fecha: 21/04/2024
Cambios: Ninguno
*/

// Función para combinar de forma aleatoria nombres y apellidos
function combinarNombresApellidos(nombres, apellidos) {
    var nombresApellidos = [];
    for (var i = 0; i < nombres.length; i++) {
        for (var j = 0; j < apellidos.length; j++) {
            var nombre = nombres[i][0].toUpperCase() + nombres[i].slice(1).toLowerCase();
            var apellido = apellidos[j][0].toUpperCase() + apellidos[j].slice(1).toLowerCase();
            nombresApellidos.push(nombre + ' ' + apellido);
        }
    }
    // Mezclar de forma aleatoria
    return nombresApellidos.sort(function () { return 0.5 - Math.random() });
}

// Arrays de nombres y apellidos
var nombres = ['nAIDAR', 'wIILLIAN', 'bERTHY', 'Dana'];
var apellidos = ['cASTRO', 'gUZMAN', 'gONZALES', 'oSORIO'];

// Combinar nombres y apellidos de forma aleatoria y formatearlos
var nombresApellidosAleatorios = combinarNombresApellidos(nombres, apellidos);

// Mostrar el resultado
console.log(nombresApellidosAleatorios);
