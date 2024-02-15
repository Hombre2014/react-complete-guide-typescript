// Primitives: string, number, boolean, bigint, symbol, null, undefined
// More complex types: arrays, objects
// Function types, parameters

// Primitives

let age: number;
age = 12;
age = 12.5;
age = '12'; // error

let userName: string;
userName = 'Max';
userName = 1; // error

let isInstructor: boolean;
isInstructor = true;
isInstructor = false;
isInstructor = 'true'; // error, it is a string, not a boolean

// More complex types

let hobbies: string[];
hobbies = ['Sports', 'Cooking'];
hobbies = [100]; // error

// let person: any; // any type not a good practice
let person: {
  name: string;
  age: number;
};

person = {
  name: 'Max',
  age: 32,
};

// Wrong type
// person = {
//   isEmployee: true,
// };

let people: {
  name: string;
  age: number;
}[];

// Type inference
let course = 'React - The Complete Guide'; // string by inference
course = 12345; // error

// Union types
let course1: string | number = 'React - The Complete Guide'; // union type
course1 = 12345; // ok

// Type aliases
type Person = {
  name: string;
  age: number;
};

let person1: Person;
person1 = {
  name: 'Max',
  age: 32,
};

let peopleArray: Person[];
peopleArray = [
  {
    name: 'Max',
    age: 32,
  },
  {
    name: 'Manu',
    age: 27,
  },
];

// Functions and types
function add(a: number, b: number) {
  return a + b;
}

function print(value: any) {
  console.log(value);
}

// Generics
function insertAtBeginning<T>(array: T[], value: T) {
  const newArray = [value, ...array];
  return newArray;
}

const demoArray = [1, 2, 3];
const updatedArray = insertAtBeginning(demoArray, -1); // [-1, 1, 2, 3]
// updatedArray[0].split('');  // error
const stringArray = insertAtBeginning(['a', 'b', 'c'], 'd'); // ['d', 'a', 'b', 'c']
