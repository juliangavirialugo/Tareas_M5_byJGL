import 'dotenv/config';
import * as fs from "fs";

  const argument = process.argv.slice(2)
//Nombre apellido edad email cedula 
 const  [a, b, c]= argument
 console.log(argument);

 const createFile = (content)=>{
    fs.writeFile('./operación.txt', content, (error)=>{
        if (error) {
            console.error('error', error)
            return
        }
        console.log('Archivo creado');
        
    })
 }

//  function operacion(a, b, c ) {
    
//  }
//  const sumar = (a , b, c) => {

//     return parseInt(a) + parseInt(c)
//  }

 const operacion = (a , b, c) => {
   
    switch (b) {
        case '+':
            return parseInt(a) + parseInt(c)
         
        case '-':
            return parseInt(a) - parseInt(c)
       case '*':
            return parseInt(a) * parseInt(c)
            case '/':
        return parseInt(a) / parseInt(c)
        
        default:
                'Operador no soportado'     
    }
  
    const operador =()=>{

    }
 }

 const content = 
 `
 Operación
 Numero 1: ${a}
 Numero 2: ${c}
 Resultado: ${operacion(a,b,c)}
 `
 createFile(content)
