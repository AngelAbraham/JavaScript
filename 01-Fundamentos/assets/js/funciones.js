//Funciones centrailizar la logica de las funciones como en java
// function saludar() {
//     console.log('Hola mundo');
// }

//No se recomienda
// let saludar = 123 ; 

//funcion anonima
// const saludar2 = function () {
//     console.log('Hola mundo')
// }
// saludar2();

//Argumentos
function saludar( nombre) {
    console.log(arguments);
    console.log('Hola ' + nombre);
}

// saludar('Abraham');
saludar('Abraham', 40,true, 'México');

//Probar argumentos con funciones anonimas
const saludar2 = function (nombre) {
         console.log('Hola' + nombre);
} 
saludar2('Abraham');

//Funciones de flecha

const saludarFlecha = () =>{
    console.log('Hola flecha');
}
saludarFlecha();

//Funciones de flecha con argumento

const saludarFlecha2 = (nombre) =>{
    console.log('Hola flecha' + nombre);
}

saludarFlecha2('Abraham');

