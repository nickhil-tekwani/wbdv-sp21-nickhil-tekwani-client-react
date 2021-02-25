let myInteger = 123;
let myString = "QWE";
let someObject = {
  anObjectProperty: {
    anotherObjectProp: { q: 111, w: 222 },
    anotherArrayProp: [321, 432, 543],
  },
  aNumberArrayProp: [1, 2, 3],
  anObjectArrayProp: [
    { a: 123, b: 234 },
    { a: 321, b: 432 },
  ],
};

console.log(someObject.anObjectProperty.anotherArrayProp[2]); // ==> 543

const addEs6 = (a, b) => a + b;
let sum = addEs6(2, 3);
console.log(sum);

let all = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let square = all.map((i) => i * i);
console.log(all, square);

let even = all.filter((i) => i % 2 === 0);
let odd = all.filter((i) => i % 2 !== 0);
console.log(all, even, odd);
