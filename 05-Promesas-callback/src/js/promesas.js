const heroes={
    capi:{
        nombre:'Capitan america',
        poder: 'Aguantar inyecciones',
    },
    iron:{
        nombre: 'Iroman',
        poder:'Piu piu piu'
    },
    spider:{
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

//forma Async
export const buscarHeroeAsync= async(id)=>{
    
    const heroe =heroes[id];

        if(heroe){
            // resolve(heroe);
            return heroe;

        }else{
            throw Error(`No existe un heroe con el ${id}`);
            // reject(`No existe un heroe con el ${id}`);
        }
    
}

const promesaLenta = new Promise((resolve,reject)=>{
    setTimeout(() => resolve('Promesa lenta'), 2000);
    });

const promesaMedia = new Promise((resolve,reject)=>{
    setTimeout(() => resolve('Promesa Media'), 1500);
    });

const promesaRapida = new Promise((resolve,reject)=>{
    setTimeout(() => resolve('Promesa Rapida'), 1000);
    });

    export{
        promesaLenta,promesaMedia,promesaRapida
    }