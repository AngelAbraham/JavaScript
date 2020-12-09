const fher= {
    nombre:'fernando',
    edad:30,
    imprimir(){
        console.log(`Nombre: ${this.nombre} - edad: ${this.edad}`);
    }
}

// fher.imprimir();


function Persona(nombre,edad){
console.log('Se ejecuto esta linea');
this.nombre=nombre;
this.edad= edad;
this.imprimir =function(){
    console.log(`Nombre: ${this.nombre} - edad: ${this.edad}`);
}
}

const maria=  new Persona('Maria', 18);
const melisa=  new Persona('Melisa', 18);

maria.imprimir();
melisa.imprimir();
console.log(maria)