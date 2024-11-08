import * as fs from 'fs';

//este es el bucle for
const crearNum = () => {
    const num = 1000;
    const arrayNumeros =[];
    for (let index = 1; index <= num ; index++) {
        arrayNumeros.push(index);
    }
   return arrayNumeros
}; 
const arrayNum = crearNum();
// console.log(arrayNum);
const contenido = arrayNum.join('\n');
fs.writeFile('./numero.txt',contenido, (error)=>{
    
        if (error) {
                    console.error('Error',error)
                     return
             }
               
                console.log('Archivo creado con exito!')
    })

