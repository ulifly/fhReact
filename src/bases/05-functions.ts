function greet(name: string): string {
  return `Hola, ${name}!`;
}


const greet2 = (name: string): string => `Hola, ${name}!`;


const message = greet("Mundo");
console.log(message);

const message2 = greet2("Ulises");
console.log(message2);


function getUser() {
    return {
        uid: 'ABC123',
        username: 'Ulises'

    }
}

const getUser2 = () => ({
    uid: 'ABC123',
    username: 'Ulises',
})

const user = getUser();
const user2 = getUser2();
console.log(user, user2);


const myNumbers :number[] = [1,2,3,4,5];

console.log(myNumbers);

// myNumbers.forEach(function (valor) {
//     console.log(valor);
// })

// myNumbers.forEach(valor => console.log(valor));

myNumbers.forEach(console.log);