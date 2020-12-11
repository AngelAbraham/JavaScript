import{buscarHeroe, buscarHeroeAsync} from './promesas';

const heroesIds=['capi','iron','spider'];
const heroesPromesas= heroesIds.map(buscarHeroe);

// const heroesPromesas= heroesIds.map(id=> buscarHeroe(id));

export const obtenerHeroesArr = async()=>{

    return  await Promise.all(heroesIds.map( buscarHeroe));
    // const heroesArr=[];

    // for(const id of heroesIds){
    // //    const heroe=await buscarHeroeAsync(id);
    // //    heroesArr.push(heroe);

    //     heroesArr.push(buscarHeroeAsync(id));
    // //    heroesArr.push(heroe);
    // }

    // // return heroesArr;
    // return await Promise.all(heroesArr);
};


export const obtenerHeroesAwait = async(id)=>{
    try{
        const heroe= await buscarHeroeAsync(id);
        return heroe;
    }catch(err){
        console.log('Cath');
        console.err(err);
        throw err;
    }
    
}


export const heroesCiclo= async()=>{
    console.time('HeoresCiclo');

    for await(const heroes of heroesPromesas){
        console.log(heroes);
    }

    // const heroes= await Promise.all(heroesPromesas);
    // heroes.forEach(heroe => console.log(heroe));


    // console.log(heroes);
    console.timeEnd('HeoresCiclo');
}