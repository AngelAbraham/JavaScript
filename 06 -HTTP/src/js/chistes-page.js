import {obtenerChiste} from "./http-provide";

const body = document.body;
let btnOtro,olList;

const crearChisteHtml=()=>{
    const html=` <h1 class="mt-5">Chistes</h1>
                <hr>
                <button class="btn btn-primary">Otro chiste</button>
                <ol class="mt-2 list-group">
                <li class="list-group-item"> 
                </li>
                </ol>`;
    
    const divChistes = document.createElement('div');
    divChistes.innerHTML= html;
    body.append(divChistes);
}

const evento = () =>{
    olList=document.querySelector('ol');
    btnOtro= document.querySelector('button');

    btnOtro.addEventListener('click',async()=>{
        btnOtro.disabled=true;
    dibujarChiste(await obtenerChiste());
        btnOtro.disabled=false;

    })
    // btnOtro.addEventListener('click',()=>{
    
    // obtenerChiste();
        // console.log('Hola mundo');
    // })

}

const dibujarChiste= (chiste)=>{
    let i=1;
    const olItem= document.createElement('li');
    olItem.innerHTML= `${i++}.-<b> ${chiste.id}</b>: ${chiste.value}`;

    olItem.classList.add('list-group-item');

    olList.append(olItem);
    
}

export const init= () =>{
    crearChisteHtml();
    evento();
}
