const cars = ['Tesla', 'Mercedes', 'Honda']
const [randomCar] = cars
const [ ,anotherRandomCar] = cars
// Output - Tesla
// Output  Mercedes
console.log(randomCar)
console.log(anotherRandomCar)

// ---------------------------------Problem2----------------------------------------

const employee = {
    name: 'Elon',
    age: 47,
    company: 'Tesla'
}
const { name: otherName} = employee;
// Output = Elon
console.log(name)
// Uncaught refrence error
console.log(otherName)
// Elon

// ---------------------------Problem 3 ----------------------------------

const person = {
    name: 'Phil Smith',
    age: 47,
    height: '6 feet'
}
const password = '12345';
const { password: hashedPassword} = person;
// undefined
// Output
console.log(password);
// 12345
console.log(hashedPassword);
// undefined

// ------------problem 4----------

const numbers = [8,2,3,5,6,1,67,12,2];
const [, first] = numbers;
// 2
const[,,,second] = numbers;
// 5
const [,,,,,,,,third] = numbers;
// 2
console.log(first == second);
// false
console.log(first == third);
// true

// -----------------------problem 5--------------------------------

const lastTest = {key: 'value', secondKey: [1,5,1,8,3,3]}
// undefined
const {key} = lastTest;
// value
const {secondKey} = lastTest;
// [1,5,1,8,3,3]
const [,willThisWork] = secondKey;
// 5

console.log(key);
// value
console.log(secondKey);
// [1,5,1,8,3,3]
console.log(secondKey[0]);
// 1
console.log(willThisWork);
// 5