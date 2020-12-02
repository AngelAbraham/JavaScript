//Objeto literales son objetos que tiene pares de valores propiedad: valor
const personaje= {

// let personaje= {
    nombre:'Tony Stark',
    codeName: 'Ironman',
    vivo:false,
    edad: 48,
    coord: {
        lat: 34.032,
        lng: -118.90
    },
    trajes: ['Mark I','Mark V', 'Hulkbuster'],
    direccion: {
        zip:'10880,97265',
        ubicacion: 'Malibu'
    },
    ultimaPelicula: 'Infinity war'
};
//Consultar los objetos
console.log(personaje);
console.log ('Nombre', personaje.nombre);
console.log ('Nombre', personaje['nombre']);
console.log ('Edad', personaje.edad);

//consultar objetos anidados
console.log("Coordenadas", personaje.coord.lat);
console.log("Numero de trajes ", personaje.trajes.length);
console.log("No del ultimo traje", personaje.trajes[personaje.trajes.length-1]);

const x= 'vivo';
console.log('Vivo',personaje[x]);

// objetos literales mas detalles

delete personaje.edad;
console.log(personaje);

//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!IMPORTANTE con propiedad let puede mutar nuestro objeto y para que no se mute debe ser const
personaje.casado= true;

//propiedades de cada arreglo

const entriesPares= Object.entries( personaje);
console.log(entriesPares);

//congelar el objeto para mutaciones 
Object.freeze(personaje);
personaje.dinero=10000;
console.log(personaje);

//cambios objetos internos de la propiedad
// Object.freeze(personaje.direccion); congelar el objeto
personaje.direccion.ubicacion='Costa rica';
console.log(personaje);

const propiedades = Object.getOwnPropertyNames(personaje);
console.log({propiedades});

const valores = Object.values(personaje);
console.log({propiedades,valores});