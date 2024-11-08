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
    // con filter filtramos los números pares
    const numPares = numeros.filter(num => num % 2 === 0);
    //Luego imprimimos los numeros pares 
    console.log(`Los numeros pares del archivo: ${archivo} son: `, numPares);
    

    const contenido2 = numPares.join('\n');

fs.writeFile('./numerosPares.txt',contenido2, (error)=>{
    if (error) {
                console.error('Error',error)
                 return
         }
           
            console.log('Archivo de numeros pares creado con exito!')
})

});

