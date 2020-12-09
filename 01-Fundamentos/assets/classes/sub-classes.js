
class Persona{

    static _conteo=0;

    static get conteo(){
        return Persona._conteo+ 'Instancias';
        }
    static mensaje(){
        console.log(this.nombre);
        console.log('Soy un metodo estatico');
    }

    nombre= '';
    codigo= '';
    frase=  '';
    comida='';
    
    constructor(nombre= 'Sin nombre', codigo ='Sin codigo', frase='Sin codigo'){

        this.nombre=nombre;
        this.codigo=codigo;
        this.frase=frase;    
        
        Persona._conteo++;
    }

    set setComidaFavorita(comida){
        this.comida=comida.toUpperCase();
    }

    get getComidaFavorita(){
        return`La comida favorita de ${this.nombre} es ${this.comida}`;
    }

    quienSoy(){
        console.log(`Soy ${this.nombre} y mi identidad es ${this.codigo}`);

    }

    miFrase(){
        this.quienSoy();
        console.log(`${this.codigo} dice: ${this.frase}`)
    }

}

class Heroe extends Persona{
    
    clan= 'sin codigo';

    constructor(nombre,codigo,frase){
        super(nombre,codigo,frase);

        this.clan='The Avengers';
    }

    quienSoy(){
        console.log(`Soy ${this.nombre}, ${this.clan}`);
        super.quienSoy();
    }
}

const spiderman= new Heroe('Peter parker','Spider','Soy tu amigo');

console.log(spiderman);

// const spiderman= new Persona('Peter parker','Spider','Soy tu amigo');
// const iroman= new Persona('Tony','Iroman','Yo soy ironman');
// console.log(spiderman);
// console.log(iroman);
// spiderman.miFrase();
// iroman.quienSoy();
// spiderman.setComidaFavorita = 'El pie de cereza de la tia May';
// spiderman.nemesis= 'Duende Verde';
// console.log(spiderman.getComidaFavorita);
// Persona._conteo=2;
// console.log('Conteo statico',Persona._conteo);
// console.log(Persona.conteo);
// Persona.mensaje();
// Persona.propiedadExterna = 'Hola Mundo';