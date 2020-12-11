import { buscarHeroe as buscarHeroeCallback} from './js/callback'
import './styles.css';
import { buscarHeroe} from './js/promesas'


const heroeId1 = 'capi'
const heroeId2 = 'spider'

Promise.all([buscarHeroe(heroeId1),buscarHeroe(heroeId2)])
.then (([heroe1,heroe2]) =>{
    console.log(`Enviando a ${heroe1.nombre} ${heroe2.nombre} a la mision`);
}).catch(err=>{
    alert(err);
}).finally(()=>{
    console.log('Se termino la promise.all')
})
// Promise.all([true,'hola',123]).then(arr =>{
//     console.log('promise.all',arr);
// });

// buscarHeroe(heroeId).then(heroe =>{
//     // console.log(`Enviando a ${heroe.nombre} a la mision`)
//     buscarHeroe(heroeId2).then(heroe2=>{
//         console.log(`Enviando a ${heroe.nombre} a la mision`);
//     })
// });

// buscarHeroe(heroeId,( err,heroe1)=>{

//     if(err){return console.error( err); }

//     buscarHeroe (heroeId2,(err, heroe2) =>{
//         if(err){return console.error( err); }
        
//          console.log(`Enviando a ${heroe1.nombre} y ${heroe2.nombre} a la mision`);
//     });
 
// });
