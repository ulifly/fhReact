interface Person {
  name: string;
  lastName: string;
  age: number;
    address?: Address;
}

interface Address {
    street: string;
    city: string;
    postalCode: number;
}

const ulises: Person = {
  name: 'Ulises',
  lastName: 'Desentis',
  age: 30,
  address: {
    street: 'Calle Falsa 123',
    city: 'Mexico City',
    postalCode: 12345
  }
};

const spiderman: Person = {
    name: "Peter",
    lastName: "Parker",
    age: 25,
}

console.log(ulises);
console.log(spiderman);


// const people = {
//     name: 'Ulises',
//     lastName: 'Desentis',
//     age: 30,
//     location: 'Mexico'
// };


// people.age = 31;
// people.location = 'CDMX';

// console.log(people);

// const person =  {...people};

// const person = structuredClone(people);

// person.age = 50;
// person.location = 'USA';
// person.name = 'Fernando';
// console.log({ people, person });