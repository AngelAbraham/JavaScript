
// Archivo de index.js global como back
import './styles.css';
import {buscarHeroe,buscarHeroeAsync} from './js/promesas';

buscarHeroe('capi')
.then(heroe =>console.log(heroe))
.catch(console.warn);

buscarHeroeAsync('iron')
.then(heroe =>console.log(heroe))
.catch(console.warn);

// import {promesaLenta,promesaMedia,promesaRapida} from './js/promesas';

// promesaLenta.then(console.log);
// promesaMedia.then(console.log);
// promesaRapida.then(console.log);

// Promise.race([promesaLenta,promesaMedia,promesaRapida])
// .then(mensaje => console.log(mensaje))
// .catch(console.warn);
