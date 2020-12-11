import { buscarHeroe as buscarHeroeCallback} from './js/callback'
import './styles.css';
import { buscarHeroe} from './js/promesas'


const heroeId = 'capi'
const heroeId2 = 'spider'

buscarHeroe(heroeId).then(heroe =>{
    console.log(`Enviando a ${heroe.nombre} a la mision`)
})

// buscarHeroe(heroeId,( err,heroe1)=>{

//     if(err){return console.error( err); }

//     buscarHeroe (heroeId2,(err, heroe2) =>{
//         if(err){return console.error( err); }
        
//          console.log(`Enviando a ${heroe1.nombre} y ${heroe2.nombre} a la mision`);
//     });
 
// });
