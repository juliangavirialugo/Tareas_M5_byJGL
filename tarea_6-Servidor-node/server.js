//Tarea numero 6 por JGL
import http from 'http';
import { stringify } from 'querystring';
const port = 3002
const products = [
    { id: 1, name: 'Laptop', price: 999.99, category: 'Electronics' },
    { id: 2, name: 'Chair', price: 49.99, category: 'Furniture' },
    { id: 3, name: 'Pen', price: 1.99, category: 'Stationery' }
];

const server = http.createServer((req, res)=>{
    switch (req.url) {
        case '/':
            res.writeHead(200)
            res.write('este es el home')
            res.end()
            break;
        case '/products':
            if (req.method === 'GET') {
                res.writeHead(201, { "Content-Type": "JSON" })
                res.write(JSON.stringify(products))
                res.end()
                break;
            }
            if (req.method === 'POST') {
                let body = '';
                req.on('data', (chunk) => {
                    body += chunk.toString();
                });
                
               
                req.on('end', () => {
                    
                    const { id, price, name, category } = JSON.parse(body)
                    if(!id || !price|| !name || !category){
                        res.writeHead(400)
                        res.write('faltan datos')
                        res.end()
                        return;
                    }
                    products.push({ id, name, price, category });

                        res.writeHead(201, { "Content-Type": "text/plain" });
                        res.write('Producto creado');
                        res.end();

                   
                })
            }

            break;


        default:
            res.writeHead(404)
            res.write('Error en los datos de ingreso')
        res.end()
            break;
    }

})
server.listen(port)