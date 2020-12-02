let juegos = ['Zelda', 'Mario', 'Metroid', 'Chrono'];
console.log('Largo: ', juegos.length);

let primero = juegos[0];
let ultimo = juegos[juegos.length-1];

console.log(primero, ultimo);

juegos.forEach((elemento,indice,arr)=>{
    console.log({elemento,indice,arr});
});

// juegos.push( 'F-Zero' );

//Agregar elemento con push
let nuevaLongitud = juegos.push( 'F-Zero' );
console.log( {nuevaLongitud , juegos} );

//Agregar elemento con unshigt sin necesidad de hacer push directo
nuevaLongitud = juegos.unshift('Fire emblem');
console.log( {nuevaLongitud , juegos} );

//borrar ultimo elemento
let ultimoBorrar= juegos.pop();
console.log({ultimoBorrar});


let posicion = 1;
console.log(juegos);

// Splice( aparti de la posiciond e remplazo [0,1(aqui),0], hasta el elemento [0,1,2(posicion 2),3])
let juegosBorrados = juegos.splice(posicion,2);
console.log({juegosBorrados,juegos});

//indice de busqueda (!!!Importante de mayusculas y minisculas del elementos)
let metroidIndex= juegos.indexOf('Metroid');
console.log({metroidIndex});


