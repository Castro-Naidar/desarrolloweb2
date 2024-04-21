/*
const INTERVALO=10;

console.log("Intervalo sera de " + INTERVALO + " minutos");
//INTERVLO=15// No se permite por ser constante

var intervalo=15;
console.log("Intervalor sera de " + intervalo + " minutos con una variable");
intervalo=20;
console.log("Intervalor de " + intervalo + " minutos con una variable modificada")

let varb=true;//boolenao
let varn=3.141592;//Numerico
let vars="Texto string";//cadena
let var1;//Indefinido
console.log("Para la variable varb="+varb+" con el tipo dato="+typeof varb);
console.log("Para la variable varb="+varn+" con el tipo dato="+typeof varn);
console.log("Para la variable varb="+vars+" con el tipo dato="+typeof vars);
console.log("Para la variable varb="+var1+" con el tipo dato="+typeof var1);

var1=vars;
console.log("Para la variable varb="+var1+" con el tipo dato="+typeof var1);
*/

//Realizar las siguiente conversiones implicitas
let var1=15.25;//Numero
let var2=0;
let var3=true;//Booleano
let var4="100";//Cadena

console.log("Conversiones Implícitas:");
console.log("var1 + var2:", var1 + var2); // Conversión implícita de var2 (0) a número
console.log("var3 + var2:", var3 + var2); // Conversión implícita de var3 (true) a número (1)
console.log("var4 + var1:", var4 + var1); // Concatenación de cadena con número (var4 se convierte implícitamente a número)

console.log("\nConversiones Explícitas:");
console.log("parseInt(var4) + var1:", parseInt(var4) + var1); // Conversión explícita de cadena a número
console.log("String(var1) + var4:", String(var1) + var4); // Conversión explícita de número a cadena
console.log("Boolean(var2):", Boolean(var2)); // Conversión explícita de número a booleano



