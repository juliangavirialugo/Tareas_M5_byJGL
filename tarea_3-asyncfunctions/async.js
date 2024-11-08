
/*=============================================
=            Coded By Juliangadev        =
Tarea numero 3. Async Await
=============================================*/

const esperarSegundos = async (tiempo) => {
    const time = tiempo*1000//se crea la const time para añadir el tiempo que utilizara setimeout
    setTimeout(() => {
        console.time('tiempo')
        console.log('Se ha ejecutado con exito!')
        console.timeEnd('tiempo');
    }, time);
}

export default esperarSegundos;
//se exporta la funcion esperar segundos para que pueda utilizarse en los demas archivos
