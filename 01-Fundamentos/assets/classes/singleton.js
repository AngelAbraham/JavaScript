
//Es una instancia unica de mi clase

class Singleton{
    static instancia; //undefined
    nombre= '';

    constructor(nombre=''){

        if(!!Singleton.instancia){
            return Singleton.instancia;
        }

        Singleton.instancia =this;
        this.nombre= nombre;
    }
}

const instancia1 = new Singleton('iroman');
const instancia2 = new Singleton('Spiderman');
const instancia3 = new Singleton('Blackpanther');


console.log(`Nombre en la instacia es ${instancia1.nombre}`);
console.log(`Nombre en la instacia es ${instancia2.nombre}`);
console.log(`Nombre en la instacia es ${instancia3.nombre}`);