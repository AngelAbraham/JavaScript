const jokeUrl='https://api.chucknorris.io/jokes/random';
const urlUsuarios='https://reqres.in/api/users?page=2';

const obtenerChiste= async()=>{

    try{
        const resp = await fetch(jokeUrl);

        // if(!resp.ok) return alert('No se pudo realizar la peticion');
        if(!resp.ok) throw 'No se pudo realizar la peticion';

        // const chiste = await resp.json();
        // return chiste;

        // return await resp.json(); //forma resumidad de conts chiste

        const {icon_url,id,value} = await resp.json();
        
        return{icon_url,id,value};

    }catch(err){
        throw err;
        // return {
        //     id:'No se encontro chiste'
        // }

    }
   
}


const obtenerUsuarios = async()=>{
    const resp = await fetch(urlUsuarios);
    const {data:usuarios}= await resp.json();

    // console.log(usuarios);
    return usuarios;

}
export{
    obtenerChiste,
    obtenerUsuarios
}

//ejemplos de index
// fetch(jokeUrl)
// .then (resp =>{
//     // console.log(resp);
//     resp.json().then(({id,value}) =>{
//         console.log(id);
//         console.log(value);

//     });
// });

// fetch(jokeUrl)
// .then (resp => resp.json())
// .then (({id,value})=>{
//     console.log(id,value);
// } )