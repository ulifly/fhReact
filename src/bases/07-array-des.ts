const characters: string[] = ['Goku', 'Vegeta', 'Trunks'];

const [ p1 ] = characters;

const [ , p2 ] = characters;

const [ , , p3 ] = characters;

console.log( p1 );
console.log( p2 );
console.log( p3 );


const returnArrayFn = () => {
    return [ 'ABC', 123 ] as const; // const evita que se pueda cambiar el tipo de dato (utilidad de TS 4.0 en adelante)
}

const [ letters, numbers ] = returnArrayFn();
console.log( letters, numbers );

/*
🧠 Tarea: Implementar useState
Crea una función llamada useState. Debe cumplir con los siguientes requisitos:

Requisitos
La función debe llamarse useState.

Debe retornar un arreglo con dos elementos:

#1 - Un string (el valor inicial).

#2 - Una función anónima de flecha que:

Recibe un string.
Imprime ese string en consola.  


Ejemplo de uso esperado
const [name, setName] = useState('Goku');
console.log(name);       // Goku
setName('Vegeta');       // Imprime "Vegeta"

*/


const useState = ( valor: string) => {
    return [ valor, ( name: string ) => {console.log(name);}] as const;
}

const [name, setName] = useState('Goku');
console.log(name);       // Goku
setName('Vegeta');       // Imprime "Vegeta"