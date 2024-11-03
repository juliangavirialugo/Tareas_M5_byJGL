import Chance from 'chance';
    
const chance = new Chance();

// Generar datos aleatorios
const nombre = chance.name();
const correo = chance.email();
const fechaNacimiento = chance.birthday();
const telefono = chance.phone();
const parrafo = chance.sentence({ words: 10 });
const edad = chance.age();
const favoriteAniaml = chance.animal()

// Imprimir los datos aleatorios generados
console.log("Datos aleatorios generados:");
console.log("Nombre:", nombre);
console.log("Correo electrónico:", correo);
console.log("Fecha de nacimiento:", fechaNacimiento.toLocaleDateString());
console.log("Teléfono:", telefono);
console.log('texto :',parrafo);
console.log('edad :', edad);
console.log('aniaml favorito: ', favoriteAniaml);

