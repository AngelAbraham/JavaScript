let a=5;

if(a >= 10){ //undefined, null o una asignacion
    console.log('A es mayor a 10');
}else{
    console.log('A es menor a 10');

}

// console.log('Fin de programa');

const hoy= new Date();
console.log(hoy);

let dia= hoy.getDay(); //0: Domingo 1:lunes 2:martes.....

console.log(dia);

// if(dia = 0){ //asignacion 

// if(dia == 0){ //que si da sin importar el tipo de dato

if(dia === 0){  //importar el tipo de datos
    console.log('Domigo');
}else if(dia=== 1){ 
        console.log('Lunes');
}else if(dia=== 2){
    console.log('Martes');

}else{
    console.log('No es domingo');
}

    // if(dia==1){
    //     console.log('Lunes');
    // }
    // console.log('No es domingo');
