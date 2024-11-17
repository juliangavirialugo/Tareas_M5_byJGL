//Tarea numero 6 por JGL
import http from 'http';
const port = 3002
const products = [
    { id: 1, name: 'Laptop', price: 999.99, category: 'Electronics' },
    { id: 2, name: 'Chair', price: 49.99, category: 'Furniture' },
    { id: 3, name: 'Pen', price: 1.99, category: 'Stationery' }
];

const server = http.createServer((req, res)=>{
    switch (req.url) {
        case '/':
            res.write('este es el incio')
            res.end()
            break;
        case '/productos':
            if (req.method ==='GET') {
                res.writeHead(200,{"Content-Type":"JSON"} )//lo convierte en tipo JSON de una
                res.write(products)
                res.end()
                break;
            }
            if (req.method ==='POST') {
                let body = ''
                req.on('data', (chunk) =>{   
                    body += chunk

                })
                req.on('end', () =>{
                    
                    // const {title, author, year} = JSON.parse(body)
                    // if (!title || !author || !year) {
                    //     res.writeHead(400,'error 400')
                    //     res.write('faltan datos ')
                    //     res.end()
                    //     return;
                    // }
                    // crear un archivo txt con los datos que nos envia el usuario
                    res.writeHead(201,)
                        res.write('libro creado ')
                        res.end()
                })
                break;
            }
           
        default:
            res.writeHead(404,'error 404')
            res.write('error 404')
            res.end()
       
    }
    
})
server.listen(port, ()=>{
    console.log(`El servidor esta corriendo en el puerto ${port}`);
    
})
