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

export const buscarHeroe=(id)=>{
    
    const heroe =heroes[id];

    return new Promise( (resolve, reject)=>{
        if(heroe){
            resolve(heroe);
        }else{
            reject(`No existe un heroe con el ${id}`);
        }
    });
}