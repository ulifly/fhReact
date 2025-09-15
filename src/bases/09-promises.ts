const miPromesa = new Promise<string>((resolve, reject) => {
    // setTimeout(() => {
    //     resolve('la promesa es estar bien!, superar todo y salir adelante, volcer a ser feliz');
    // }, 2000);
    reject('no se pudo cumplir la promesa');
});

miPromesa.then((retornoDePromesa)=> {
    console.log(`La promesa dijo: ${retornoDePromesa}`);
}).catch((error) => {
    console.error(`La promesa no se logro: ${error}`);
}).finally(() => {
    console.log('La felicidad no depende de las circunstancias, sino de nuestra actitud ante ellas. sanar fue fundamental');
});