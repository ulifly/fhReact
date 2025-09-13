const person = {
    name: 'Tony',
    age: 45,
    clave: 'Ironman'
}

const {name, age, clave} = person;

console.log({name, age, clave});


interface Hero {
    name: string;
    age: number;
    clave: string;
    rank?: string;
}

const useContext = ( {name, age, clave, rank} : Hero) => {
    return {
        keyName: clave,
        user: {
            name,
            age
        },
        rank: rank,
    };
};

const { keyName, user, rank } = useContext(person);

console.log({ keyName, user, rank });