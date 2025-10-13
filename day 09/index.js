// HIGHER ORDER FUNCTIONS

// Exercise Level 1
//1
// forEach
// iterates array elements. It can only be used in an array. It takes parameters of index, element and array

//Map
//It is an higher order function that is used to modify an array and return the modified array

// Filter
// It filters out elements with the filtering condition

//reduce
// It takes the accumulator and cuurent parameters and an optional initial value, it can be used to calculate the total sum of numbers in an array
















































const higherOrder = (n) => {
  const doSomething = (m) => {
    const doWhatEver = (t) => {
      return 2 * n + 3 * m + t;
    };
    return doWhatEver;
  };
  return doSomething;
};
console.log(higherOrder(2)(3)(10));


// a callback function, the name of the function could be any name
const callback = (n) => {
  return n **2
}
console.log(callback())

// function that takes other function as a callback
function cube(callback, n) {
  return callback(n) * n
}

console.log(cube(callback, 3))


function sayHello() {
  console.log('Hello')
}
setInterval(sayHello, 10000) // it prints hello in every second, 1000ms is 1s



function sayHi() {
  console.log('Hi')
}
setTimeout(sayHi, 2000)


let sum = 0
let numbers = [1, 2, 3, 4, 5]
numbers.forEach (num=> console.log(num))

const countries = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland']

countries.forEach((country)=> console.log(country.toUpperCase()))

const numbers1 = [1,2,3,4,5,]
const numbersSquare = numbers1.map((num) => num * num)

console.log(numbersSquare)


const countries1 = [
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethiopia',
  'Finland',
  'Germany',
  'Hungary',
  'Ireland',
  'Japan',
  'Kenya',
]

const countriesWithFiveLtrs = countries1.filter((country)=> country.length===5) 
console.log(countriesWithFiveLtrs)

const numbers2 = [1, 2, 3, 4, 15]
const sum1= numbers2.reduce((acc, cur) => acc + cur, 0)

console.log(sum1)

const ages= [23,17,33,20,14]
const age = ages.find((age)=> age<20)
console.log(age)

const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const bools = [true, true, true, true]

const areSomeTrue = bools.some((b) =>  b === false)

console.log(areSomeTrue) //true


const numbers4 = [9.81, 3.14, 100, 37]
// Using sort method to sort number items provide a wrong result. see below
console.log(numbers4.sort()) //[100, 3.14, 37, 9.81]
numbers4.sort(function (c, d) {
  return d - c
})

console.log(numbers4) //
