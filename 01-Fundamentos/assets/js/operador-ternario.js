/**
 * *Dias de semana que abrimos a las 11
 * pero los fines de semana abrimos a las 9
 * 
 */

 const dia=6;// 0:domingo.....

 const horaActual=10;

 let horaApertura;
 let mensaje;//cerrado o abierto


//  if([0,6].includes(dia)){
//     console.log('Fin de semana');
//     horaApertura=9;
//  }else {
//      console.log('Dia de semana');
//      horaApertura=11;
//  }

horaApertura= ([0,6].includes(dia)) ? 9 : 11;

//  if(horaActual >= horaApertura){
//     mensaje='Esta abierto';
//  }else{
//      mensaje=`Esta cerrado, hoy abrimos a las ${ horaApertura }` ;
//  }
mensaje = (horaActual >= horaApertura)?'Esta abierto' : `Esta cerrado, hoy abrimos a las ${ horaApertura }` ;
 
console.log(horaApertura,mensaje);