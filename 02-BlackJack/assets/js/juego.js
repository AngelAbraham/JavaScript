/**
 * 2c= two of clubs treboles
 * 2d= diamonds
 * 2h= heards
 * 2S= Spades
 */

let deck= [];

const tipos = ['C','D','H','S'];
const especiales= ['A','J','Q','K'];

const crearDeck=()=>{
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
    deck = _.shuffle(deck);
    console.log(deck);
    return deck;
 }

 crearDeck();

 const pedirCarta=()=>{

    if(deck.length === 0){
        throw 'No hay cartas en el deck';
    }
    const carta=deck.pop();

    console.log(deck);
    console.log(carta);
     return carta;
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
const valor=valorCarta('AS');

console.log({valor});
