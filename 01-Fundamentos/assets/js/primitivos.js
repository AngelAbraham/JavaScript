let nombre= 'Peter parker';
console.log(nombre);

nombre= 'Ben parker';
console.log(nombre);

//comillas son las misma pero la simples son mas ligeras
nombre = "Tia May";
nombre = 'Tia May';

//tipo de tipado 
console.log(typeof nombre);

nombre = 123;
console.log(typeof nombre);

let esMarvel = false;
console.log(typeof esMarvel);

//Numeros
let edad= 33;
// let edad= 33.00;
console.log(typeof edad);

//camelCase o snake_Case practicas de programaciones
let superPoder;
console.log(typeof superPoder); // undefined

//Tipo de dato null
let soyNull=null;
console.log(typeof soyNull); // object

//Tipo de dato symbol son unicos por si solos
let symbol1= Symbol('a');
let symbol2= Symbol('a');
console.log(typeof symbol1); // object

console.log(symbol1 == symbol2); //false
