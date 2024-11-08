

// const numberString =['2','3','5']


import * as fs from 'fs';
const archivo = './numero.txt'

fs.readFile(archivo, { encoding: 'utf-8' }, (error, data) => {
    if (error) {
        console.error('Error lectura: ', error);
        return;
    }

    // Convertimos el contenido de data en un array de números
    const numeros = data.split('\n').map(num => parseInt(num, 10));

    // Filtramos los números pares
    const numPares = numeros.filter(num => num % 2 === 0);

    console.log(`Los numeros pares del archivo: ${archivo} son: `, numPares);
});
