interface Hero {
  id: number;
  name: string;
  owner: Owner;
}

export enum Owner {
  DC = 'DC',
  Marvel = 'Marvel',
}

const heroes: Hero[] = [
  {
    id: 1,
    name: 'Batman',
    owner: Owner.DC,
  },
  {
    id: 2,
    name: 'Spiderman',
    owner: Owner.Marvel,
  },
  {
    id: 3,
    name: 'Superman',
    owner: Owner.DC,
  },
  {
    id: 4,
    name: 'Flash',
    owner: Owner.DC,
  },
  {
    id: 5,
    name: 'Wolverine',
    owner: Owner.Marvel,
  },
  {
    id: 6,
    name: 'Thor',
    owner: Owner.Marvel
  }
];

export { heroes, type Hero }