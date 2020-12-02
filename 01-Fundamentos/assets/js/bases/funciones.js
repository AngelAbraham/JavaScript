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
// saludar('Abraham', 40,true, 'México');

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


//retornar valores

function saludar( nombre) {
    console.log(arguments);
    console.log('Hola ' + nombre);
    return 1;
    // return [1,2]; //Manera correcta
    // return 1,2;
    //Nunca se va a ejecutar
    // console.log("Soy un código que esta despues detl return");
}

const retornoDeSaludar = saludar('Abraham', 40,true, 'México');
console.log({retornoDeSaludar});

//Otra manera de retornar
function sumar(a,b){
    return a+b;
}

console.log(sumar(1,2));

//Funcion de fleshas con 2 constantes
// const sumar2= (a,b)=>{
//     return a+b;
// }

//resumida de funcion de flechas
const sumar2= (a,b)=> a+b;
console.log(sumar2(1,2));

function getAleatorio(){
    return Math.random();
}

console.log(getAleatorio());

//Tarea de taller

const getAleatorio2 = () => Math.random(); 
console.log(getAleatorio());
