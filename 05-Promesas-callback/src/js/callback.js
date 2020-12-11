const heroes={
    capi:{
        nombre:'Capitan america',
        poder: 'Aguantar inyecciones',
    },
    iron:{
        nombre: 'Iroman',
        poder:'Piu piu piu'
    },
    spiderman:{
        nombre: 'Spiderman',
        poder:'Telaraña'
    }
}

export const buscarHeroe = (id, callback)=>{
 const heroe =heroes[id];

 if(heroe){
     callback(null, heroe);
 }else{
     callback(`No existe un heroe con el ${id}`);
 }

}


