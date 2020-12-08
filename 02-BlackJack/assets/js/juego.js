

// (function({}))();


(()=>{
    'use strict'
    /**
 * 2c= two of clubs treboles
 * 2d= diamonds
 * 2h= heards
 * 2S= Spades
 */

let deck= [];
const tipos = ['C','D','H','S'],
      especiales= ['A','J','Q','K'];

// let puntosJugador= 0 , 
//     puntosComputadora=0;
let puntoJugadores=[];

//Referencias del html
const btnPedir = document.querySelector('#btnPedir'),
      btnDetener = document.querySelector('#btnDetener'),
      btnNuevo = document.querySelector('#btnNuevo');

const puntos = document.querySelectorAll('small'),
      divCartasJugador = document.querySelector('#jugador-cartas'),
      divCartasComputadoras = document.querySelector('#computadora-cartas');

const inicializarJuego = (numJugadores=2)=>{
    deck = crearDeck();
    for(let i=0; i < numJugadores;i++){
            puntoJugadores.push[0];
        }
    // console.log({puntoJugadores});
    }

const crearDeck=()=>{
    deck=[];

    for(let i=2; i<=10;i++){
        for(let tipo of tipos){
            deck.push(i + tipo);
            
        }
    }

    for(let tipo of tipos){
        for(let esp of especiales){
            deck.push(esp + tipo)
        }
    }
    console.log(deck);
    // deck = _.shuffle(deck);
    // console.log(deck);
    // return deck;
    return _.shuffle(deck);

 }

 const pedirCarta=()=>{

    if(deck.length === 0){
        throw 'No hay cartas en el deck';
    }
    // const carta=deck.pop();

    // console.log(deck);
    // console.log(carta);
    //  return carta;
    return deck.pop();

 }

//  deck=[];
 pedirCarta();


const valorCarta= (carta)=>{

    const valor = carta.substring(0, carta.length-1);

    return (isNaN(valor))?
        (valor==='A')? 11:10
        : valor*1;
    }
   // let puntos = 0 ;

    // puntos= (isNaN(valor))? puntos: puntos =valor *1;

    // if( isNaN(valor)){
    // //  console.log('No es un numero');
    //  puntos = (valor=== 'A')? 11 :10;

    // }else{
    //     puntos =valor *1;

    // }

    // console.log(puntos);

    // console.log({valor});
// const valor=valorCarta('AS');

// console.log({valor});

//turno: 0 jugador y ultimo computadora
const acumularPuntos=(carta,turno)=>{
    puntoJugadores[turno] =puntoJugadores[turno]+valorCarta(carta);
    puntos[turno].innerText = puntoJugadores[turno];
}

//Turno de la computadora
const turnoComputadora= (puntosMinimos)=>{
do{

    const carta= pedirCarta();
    acumularPuntos(carta,puntoJugadores.length-1);
    // puntosComputadora = puntosComputadora+valorCarta(carta);
    // puntos[1].innerText = puntosComputadora;

    // <!-- <img class="carta" src="assets/cartas/10D.png"></img> -->

    const imgCarta= document.createElement('img');
    imgCarta.src = `assets/cartas/${ carta }.png`;
    imgCarta.classList.add('carta');
    divCartasComputadoras.append(imgCarta);

    if (puntosMinimos >21){
        break;
    }
}while((puntosComputadora<puntosMinimos) && (puntosMinimos<=21));
 


setTimeout(() => {
     
if(puntosComputadora === puntosMinimos){
    alert('Empate');
}else if(puntosMinimos>21){
    alert('Computadora gana')
}else if(puntosComputadora>21){
    alert('Jugador gana')
}else {
    alert('Computadora gana')

}

}, 10);

};

//Eventos
btnPedir.addEventListener('click', ()=> {

    const carta= pedirCarta();

    acumularPuntos(carta,0);
    // puntosJugador = puntosJugador+valorCarta(carta);
    // puntos[0].innerText = puntosJugador;

    // <!-- <img class="carta" src="assets/cartas/10D.png"></img> -->

    const imgCarta= document.createElement('img');
    imgCarta.src = `assets/cartas/${ carta }.png`;
    imgCarta.classList.add('carta');
    divCartasJugador.append(imgCarta);

    if(puntosJugador>21){
        console.warn('Lo siento mucho, perdiste');
        btnPedir.disabled=true;
        btnDetener.disabled=true;

        turnoComputadora(puntosJugador);
    }else if(puntosJugador===21){
        console.warn('21, genial');
        btnPedir.disabled=true;
        btnDetener.disabled=true;


    }
    // puntos[1].innerText = puntosJugador;
    // console.log(puntosJugador);
});

btnDetener.addEventListener('click', ()=> {

        btnPedir.disabled=true;
        btnDetener.disabled=true;

        turnoComputadora(puntosJugador);
    // puntos[1].innerText = puntosJugador;
    // console.log(puntosJugador);
});

btnNuevo.addEventListener('click', ()=> {
    console.clear();
    inicializarJuego();
    // deck=[];
    // deck= crearDeck();

    // puntosJugador=0;
    // puntosComputadora=0;

    puntos[0].innerText=0;
    puntos[1].innerText =0;

    divCartasComputadoras.innerHTML='';
    divCartasJugador.innerHTML='';

    btnPedir.disabled=false;
    btnDetener.disabled=false;
// puntos[1].innerText = puntosJugador;
// console.log(puntosJugador);
});

//TODO: borrar

// turnoComputadora(21);
})();
