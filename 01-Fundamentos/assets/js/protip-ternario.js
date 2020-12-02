// const elMayor = (a,b)=>{
//     return (a> b)?a:b;
// }

const elMayor = (a,b)=> (a> b)?a:b;

const tieneMembrecia =(miembro) => (miembro) ?'2 Dolares' : '10 dolares';

console.log(20,15);
console.log(tieneMembrecia(true));


const amigo= true;
const amigosArr= [
    'Peter',
    'Tony',
    'Dr. Strange',
    amigo ? 'Thor' : 'Loki',
    // (()=>'Nick fury')()
    elMayor(10,15)
]

console.log(amigosArr);

const nota = 65;
const grado= nota >=95 ? 'A+':
             nota >=90 ? 'A' :     
             nota >=80 ? 'B+' :         
             nota >=80 ? 'B' :   'F';      

console.log(nota,grado);


