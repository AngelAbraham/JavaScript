const regresaTrue = ()=>{
    console.log('Verdadero');
    return true;

}

const regresaFalse = ()=>{
    console.log('False');
    return false;

}

console.warn('Not o la negacion');
console.log(true);

console.log(!true);

console.log(!false);

console.log(!regresaFalse());


console.warn('And'); //true si todos lo valores son verdaderos

console.log(true && true);

console.log(true && false);

console.log('==========');

console.log(regresaFalse() && regresaTrue());

console.warn('OR');//Condicion true
console.log(true || false);
console.log(regresaFalse() || regresaTrue());

//asignaciones
console.warn('Asignaciones');

const soyUndefined= undefined;
const soyNull= null;
const soyFalse= false;

// en los valores and el ultimo operador es el que se asigna todas las condiciones tienen que dar true
const a1 = false && 'Hola mundo' && 150;
const a2= 'Hola' && 'mundo' && soyFalse && true;

const a3 = soyFalse || 'Ya no soy falso';
const a4 = soyFalse || soyUndefined || soyNull || 'Ya no soy falso' || true;
const a5 = soyFalse || soyUndefined || regresaTrue() || 'Ya no soy falso' || true;


console.log({a1, a2, a3, a4, a5});

