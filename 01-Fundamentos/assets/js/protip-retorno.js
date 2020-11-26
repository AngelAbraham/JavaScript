// pro tips para atajos

// function crearPersona(nombre, apellido){
//     return{
//         // nombre: nombre,
//         // apellido: apellido
//         nombre, apellido
//     }
// }
// Con funcion de flecha para retorna el objeto de la funcion es necesario que ponga entre ({"",""}) para que tome el valor completo del retorno
const crearPersona= (nombre, apellido)=> ({nombre, apellido});
    
const persona = crearPersona('Abraham','Saldaña');
console.log(persona);

function imprimirArgumentos(){
    console.log (arguments);
}

// const imprimirArgumentos2 =(...args)=> {
//     console.log(args);
// }

const imprimirArgumentos2 =(edad,...args)=> {
    // console.log({edad,args});
    return args;
}

// imprimirArgumentos(10, true, false,"Abraham","Hola");

// const argumentos = imprimirArgumentos2(10, true, false,"Abraham","Hola");

// console.log({argumentos});
// console.log({argumentos});


const [casado,vivo,nombre,saludo] = imprimirArgumentos2(10, true, false,"Abraham","Hola");

console.log({casado,vivo,nombre,saludo});


//entre llaves y objetos

const {nombre:nuevoNombre,apellido:nuevoApellido } = crearPersona("Abraham","Saldania");
console.log(nuevoNombre, nuevoApellido);

//destructuracion de objetos

const tony= {
        nombre:'Tony Stark',
        codeName: 'Ironman',
        vivo:false,
        // edad: 48,
        trajes: ['Mark I','Mark V', 'Hulkbuster'],
       
    };

// const imprimirPropiedades= (personaje)=>{
//     console.log(personaje.nombre);
//     console.log(personaje.codeName);
//     console.log(personaje.vivo);
//     console.log(personaje.edad);
//     console.log(personaje.trajes); 
//     }

//     imprimirPropiedades(tony);

     
    // edad: 48 por defecto se puede intercalar o cambiar

const imprimirPropiedades= ({nombre,codeName,vivo,edad = 15,trajes})=>{
    // edad=edad || 0;
    console.log({nombre});
    console.log({codeName});
    console.log({vivo});
    console.log({edad});
    console.log({trajes}); 
    }

    imprimirPropiedades(tony);