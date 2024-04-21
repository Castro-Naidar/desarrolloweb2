//Compras a un supermercado
/*
let carrito=[
                "leche", 1,
                "carne", 2,
                "papa", 3,
                "fideos", 1
            ];
console.log("Item:" + carrito[0]);
console.log("Cantidad:" + carrito[1]);
console.log("Item:" + carrito[2]);
console.log("Cantidad:" + carrito[3]);
console.log("Item:" + carrito[4]);
console.log("Cantidad:" + carrito[5]);
console.log("Item:" + carrito[6]);
console.log("Cantidad:" + carrito[7]);
console.log("Impresion Completa");
carrito.push(
                "pan", 2, 
                "harina", 3
            );
console.log(carrito);

let item = {nombre: 'Leche', cantidad:1, precio: 7};
console.log("Item: "+item.nombre);
console.log("Cantida: "+item.cantidad);
console.log("Precio bs:"+ item.precio);

let carrito=[
                {nombre:'Leche', cantidad: 1, precio: 7,},
                {nombre: 'carne', cantidad: 2, precio: 15},
                {nombre: 'fideo', cantidad: 1, precio: 8},
                {nombre: 'papa', cantidad:3, precio: 10},
            ];
carrito.forEach(function(item){
    console.log("Item: " + item.nombre);
    console.log("Cantidad: " + item.cantidad);
    console.log("Precio bs"+ item.precio);
    console.log("Total:" + item.cantidad* item.precio);
});
carrito.push({nombre: 'harina', cantidad: 6,precio: 6});
console.log(carrito);
*/

// Función para generar un nombre aleatorio
function generarNombreCompleto() {
    const nombres = ["Juan", "María", "Luis", "Ana", "Carlos", "Laura", "Samuel","Victor", "Leonardo", "Zahir"];
    const apellidos = ["Gomez", "Rodriguez", "Fernandez", "Lopez", "Martinez", "Suarez", "Moron", "Suarez", "Poeta", "Vaca"];
    
    const nombreAleatorio = nombres[Math.floor(Math.random() * nombres.length)];
    const apellidoAleatorio = apellidos[Math.floor(Math.random() * apellidos.length)];
    
    return `${nombreAleatorio} ${apellidoAleatorio}`;
}
  
  // Función para generar un número aleatorio entre un rango dado
  function generarNota() {
    return Math.floor(Math.random() * 11); // Genera una nota entre 0 y 10
}
  
  // Función para clasificar una nota
  function clasificarNota(nota) {
    switch (nota) {
      case 2:
      case 3:
      case 4:
        $clasificar="Insuficiente";
        break;
      case 5:
      case 6:
        $clasificar="Suficiente";
        break;
      case 7:
      case 8:
        $clasificar="Bien";
        break;
      case 9:
        $clasificar="Notable";
        break;
      case 10:
        $clasificar="Sobresaliente";
        break;
      default:
        $clasificar="Nota fuera de rango";
        break;
    }
  }
  
  // Función para llenar el array de estudiantes con nombres aleatorios y notas aleatorias
  function cargarEstudiantes() {
    let estudiantes = [];
    Array.from({ length: 10 }).forEach(() => {
        let nombre = generarNombreCompleto();
        let nota = generarNota();
        estudiantes.push({ nombre: nombre, nota: nota });
    });
    return estudiantes;
}
  
  // Función para mostrar el array con los nombres, notas y clasificaciones de los estudiantes
  function mostrarEstudiantes(estudiantes) {
    console.log("Lista de estudiantes:");
    estudiantes.forEach(estudiante => {
      let clasificacion = clasificarNota(estudiante.nota);
      console.log(`${estudiante.nombre}: Nota ${estudiante.nota}, ${clasificacion}`);
    });
  }
  
  // Función para encontrar la nota mayor, la nota menor y calcular el promedio
  function calcularEstadisticas(estudiantes) {
    let notas = estudiantes.map(estudiante => estudiante.nota);
    let notaMayor = Math.max(...notas);
    let notaMenor = Math.min(...notas);
    let promedio = notas.reduce((total, nota) => total + nota, 0) / notas.length;
    console.log("\nEstadísticas generales:");
    console.log("La nota mayor es:", notaMayor);
    console.log("La nota menor es:", notaMenor);
    console.log("El promedio de las notas es:", promedio);
  }
  
  // Llamadas a las funciones
  function cargarNotas() {
    let estudiantes = cargarEstudiantes();
    mostrarEstudiantes(estudiantes);
    calcularEstadisticas(estudiantes);
  }
  
  // Llamar a la función para cargar las notas
  cargarNotas();
