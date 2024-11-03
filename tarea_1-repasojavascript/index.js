
/* Punto 1: Acceso y Modificación Básica de Datos: Dado el siguiente array de libros */
let libros = [
    { titulo: 'El Hobbit', autor: 'J.R.R. Tolkien', paginas: 300 },
    { titulo: 'Cien años de soledad', autor: 'Gabriel García Márquez', paginas: 400 },
    { titulo: 'Harry Potter y la piedra filosofal', autor: 'J.K. Rowling', paginas: 350 }
];
//Imprime en la consola el nombre y el autor del segundo libro.
console.log(libros[1].titulo);
console.log(libros[1].autor);

//Actualiza el número de páginas del primer libro a 350.
libros[0].paginas = 350
console.log(libros[0].paginas);
console.log(libros[0]);

//Utiliza la función map para generar un nuevo array de libros que solo tenga las propiedades titulo y autor
const nuevoArray = libros.map(libros => {
    return {titulo: libros.titulo , autor: libros.autor}
})
console.log(nuevoArray);


/* Punto 2: Cálculo de Estadísticas Básicas: Dado el siguiente array de estudaintes y utilizando un bucle for: */
const estudiantes = [
    { nombre: "Pedro", edad: 29, promedio: 7.9 },
    { nombre: "Ana", edad: 33, promedio: 8.9 },
    { nombre: "Pablo", edad: 32, promedio: 9.5 },
    { nombre: "Juan", edad: 25, promedio: 6.0 },
    { nombre: "Maria", edad: 28, promedio: 7.3 },
    { nombre: "Andres", edad: 45, promedio: 8.7 },
];
//Calcula la suma de las edades de todos los estudiantes en el array
let sumaEdades = 0;
for (let i = 0; i < estudiantes.length; i++) {
    sumaEdades += estudiantes[i].edad;
}
console.log("La suma de las edades es:", sumaEdades);

//Calcula el promedio de edad de los estudiantes.
let promEdades = sumaEdades / estudiantes.length;
console.log('el promedio de las edades son:', promEdades);
 
 /* Punto 3: Búsqueda y Filtrado de Datos: Dado el siguiente array de productos: */
 let productos = [
    { nombre: 'Camisa', categoria: 'Ropa', precio: 20 },
    { nombre: 'Computadora', categoria: 'Electrónica', precio: 800 },
    { nombre: 'Zapatos', categoria: 'Ropa', precio: 50 },
    { nombre: 'Teléfono', categoria: 'Electrónica', precio: 300 }
];

//Utilizando filter debes filtrar productos que tengan la categoría 'Ropa' e imprimirlos en pantalla.
 const ropa = productos.filter(productos => productos.categoria ==='Ropa' )
 console.log(ropa);
 
 //Filtra los productos con precio mayor de 30 en un nuevo array llamado preciosMayores.
 const mayoresDe30 = productos.filter(productos => productos.precio > 30 )
 console.log('Los productos con precio mayo a $30 son: ',mayoresDe30);

 
 /* Reto
 Te invitamos a crear un programa que sea capaz de recorrer el array estudiantes de el punto 2 y encontrar a el/la estudiante con el mayor promedio, utilizando un bucle for o cualquer otro método visto en clase
 
 const estudiantes = [
    { nombre: "Pedro", edad: 29, promedio: 7.9 },
    { nombre: "Ana", edad: 33, promedio: 8.9 },
    { nombre: "Pablo", edad: 32, promedio: 9.5 },
    { nombre: "Juan", edad: 25, promedio: 6.0 },
    { nombre: "Maria", edad: 28, promedio: 7.3 },
    { nombre: "Andres", edad: 45, promedio: 8.7 },
]; */

    let estudianteMayorPromedio = estudiantes[0];

    for (let i = 0; i < estudiantes.length; i++) {
        if (estudiantes[i].promedio >  estudianteMayorPromedio.promedio) {
            estudianteMayorPromedio = estudiantes[i];
        }
    }
 

console.log("El estudiante de mayor promedio es", estudianteMayorPromedio);