const myArray: number[] = [1, 2, 3, 4, 5];

const myArray2 = [...myArray]
myArray2.push(6, 7);

console.log(myArray);
console.log(myArray2);