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

// 2
// A callback is a function that can be used as a parameter in another function.

//3

const countries1 = ["Finland", "Sweden", "Denmark", "Norway", "IceLand"];

countries1.forEach((country) => console.log(country));

// 4
const names1 = ["Asabeneh", "Mathias", "Elias", "Brook"];
names1.forEach((name) => console.log(name));

// 5
const numbers3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
numbers3.forEach((number) => console.log(number));

// 6

const upperCaseCountry = countries1.map((country) => country.toUpperCase());
console.log(upperCaseCountry);

// 7
const countryLength = countries1.map((country) => country.length);

console.log(countryLength);

// 8
const numberSquare1 = numbers3.map((number) => number * number);
console.log(numberSquare1);

// 9
const nametoUpperCase = names1.map((name) => name.toUpperCase());
console.log(nametoUpperCase);
// 10
const products = [
  { product: "banana", price: 3 },
  { product: "mango", price: 6 },
  { product: "potato", price: " " },
  { product: "avocado", price: 8 },
  { product: "coffee", price: 10 },
  { product: "tea", price: "" },
];

const productsPrice = products.map((price) => price.price);
console.log(productsPrice);

// 11
const countriesWithLand = countries1.filter((country) =>
  country.includes("land")
);

console.log(countriesWithLand);

// 12
const countriesWithSixLtr = countries1.filter((country) => country.length <= 6);

console.log(countriesWithSixLtr);

// 13
const countries2 = ["Finland", "Sweden", "Denmark", "Norway", "IceLand"];
const countriesWithSixAndMore = countries2.filter(
  (country) => country.length >= 6
);
console.log(countriesWithSixAndMore);

// 14
const countries3 = ["Finland", "Sweden", "Denmark", "Norway", "IceLand"];
const countriesStartWithE = countries3.filter((country) =>
  country.startsWith("E")
);
console.log(countriesStartWithE);

// 15
const productPrices = products.filter((price) => price.price > 0);

console.log(productPrices);

// 16
const names2 = ["Asabeneh", "Mathias", "Elias", "Brook", 9, 0];
const typeOfStr = names2.filter((names) => typeof names === "string");

console.log(typeOfStr);

// 17
const total = numbers3.reduce((accumulator, current) => {
  return accumulator + current;
}, 0);
console.log(total);

const countries4 = [
  "Estonia",
  "Finland",
  "Sweden",
  "Denmark",
  "Norway",
  "Iceland",
];
const jointCountries = countries4.reduce((acc, cur, index, array) => {
  if (index == array.length - 1) {
    return acc + "and" + " " + cur;
  } else {
    return acc + cur + ", ";
  }
}, "");

console.log(`${jointCountries} are north European countries`);

// 19
// Some returns a true boolean if atleast one of the conditions is true, while every chceks id all the elements meets the condition, it also return boolean.

// 20
const someOfNames = names2.some((names) => names.length > 7);
console.log(someOfNames);

// 21
const countriesLand = countries3.every((country) => country.includes("land"));
console.log(countriesLand);

// 23
const findCountry = countries3.find((country1) => country1.length <= 6);
console.log(findCountry);

// 24
const findIndexCountry = countries3.findIndex((country) => country.length <= 6);
console.log(findIndexCountry);

// 25
const findNorwayInd = countries3.findIndex((country) =>
  country.includes("Norway")
);

console.log(findNorwayInd);

/// 26
const findRussiaIndex = countries3.findIndex((country) =>
  country.includes("Russia")
);

console.log(findRussiaIndex);

// Exercise Level 2
// 1
const products1 = [
  { product: "banana", price: 3 },
  { product: "mango", price: 6 },
  { product: "potato", price: " " },
  { product: "avocado", price: 8 },
  { product: "coffee", price: 10 },
  { product: "tea", price: "" },
];
const priceValue = products1
  .filter((product) => product.price > 0)
  .map((product) => product.price)
  .reduce((acc, cur) => {
    return acc + cur;
  }, 0);
console.log(priceValue);

// 2
// const callback1 =
const sumOfPrice = products1.reduce((acc, cur) => {
  return parseInt(acc) + cur.price;
}, 0);
console.log(sumOfPrice);

// 3
const countriesArray = [
  "Afghanistan",
  "Albania",
  "Algeria",
  "Andorra",
  "Angola",
  "Antigua and Barbuda",
  "Argentina",
  "Armenia",
  "Australia",
  "Austria",
  "Azerbaijan",
  "Bahamas",
  "Bahrain",
  "Bangladesh",
  "Barbados",
  "Belarus",
  "Belgium",
  "Belize",
  "Benin",
  "Bhutan",
  "Bolivia",
  "Bosnia and Herzegovina",
  "Botswana",
  "Brazil",
  "Brunei",
  "Bulgaria",
  "Burkina Faso",
  "Burundi",
  "Cambodia",
  "Cameroon",
  "Canada",
  "Cape Verde",
  "Central African Republic",
  "Chad",
  "Chile",
  "China",
  "Colombi",
  "Comoros",
  "Congo (Brazzaville)",
  "Congo",
  "Costa Rica",
  "Cote d'Ivoire",
  "Croatia",
  "Cuba",
  "Cyprus",
  "Czech Republic",
  "Denmark",
  "Djibouti",
  "Dominica",
  "Dominican Republic",
  "East Timor (Timor Timur)",
  "Ecuador",
  "Egypt",
  "El Salvador",
  "Equatorial Guinea",
  "Eritrea",
  "Estonia",
  "Ethiopia",
  "Fiji",
  "Finland",
  "France",
  "Gabon",
  "Gambia, The",
  "Georgia",
  "Germany",
  "Ghana",
  "Greece",
  "Grenada",
  "Guatemala",
  "Guinea",
  "Guinea-Bissau",
  "Guyana",
  "Haiti",
  "Honduras",
  "Hungary",
  "Iceland",
  "India",
  "Indonesia",
  "Iran",
  "Iraq",
  "Ireland",
  "Israel",
  "Italy",
  "Jamaica",
  "Japan",
  "Jordan",
  "Kazakhstan",
  "Kenya",
  "Kiribati",
  "Korea, North",
  "Korea, South",
  "Kuwait",
  "Kyrgyzstan",
  "Laos",
  "Latvia",
  "Lebanon",
  "Lesotho",
  "Liberia",
  "Libya",
  "Liechtenstein",
  "Lithuania",
  "Luxembourg",
  "Macedonia",
  "Madagascar",
  "Malawi",
  "Malaysia",
  "Maldives",
  "Mali",
  "Malta",
  "Marshall Islands",
  "Mauritania",
  "Mauritius",
  "Mexico",
  "Micronesia",
  "Moldova",
  "Monaco",
  "Mongolia",
  "Morocco",
  "Mozambique",
  "Myanmar",
  "Namibia",
  "Nauru",
  "Nepal",
  "Netherlands",
  "New Zealand",
  "Nicaragua",
  "Niger",
  "Nigeria",
  "Norway",
  "Oman",
  "Pakistan",
  "Palau",
  "Panama",
  "Papua New Guinea",
  "Paraguay",
  "Peru",
  "Philippines",
  "Poland",
  "Portugal",
  "Qatar",
  "Romania",
  "Russia",
  "Rwanda",
  "Saint Kitts and Nevis",
  "Saint Lucia",
  "Saint Vincent",
  "Samoa",
  "San Marino",
  "Sao Tome and Principe",
  "Saudi Arabia",
  "Senegal",
  "Serbia and Montenegro",
  "Seychelles",
  "Sierra Leone",
  "Singapore",
  "Slovakia",
  "Slovenia",
  "Solomon Islands",
  "Somalia",
  "South Africa",
  "Spain",
  "Sri Lanka",
  "Sudan",
  "Suriname",
  "Swaziland",
  "Sweden",
  "Switzerland",
  "Syria",
  "Taiwan",
  "Tajikistan",
  "Tanzania",
  "Thailand",
  "Togo",
  "Tonga",
  "Trinidad and Tobago",
  "Tunisia",
  "Turkey",
  "Turkmenistan",
  "Tuvalu",
  "Uganda",
  "Ukraine",
  "United Arab Emirates",
  "United Kingdom",
  "United States",
  "Uruguay",
  "Uzbekistan",
  "Vanuatu",
  "Vatican City",
  "Venezuela",
  "Vietnam",
  "Yemen",
  "Zambia",
  "Zimbabwe",
];
function categorizeCountries() {
  return countriesArray.filter(
    (country) =>
      country.includes("land") ||
      country.includes("ia") ||
      country.includes("island") ||
      country.includes("stan")
  );
}
console.log(categorizeCountries());

// 4

// function returnArray(){
//   let letterCount = {}
//  for (const country of countriesArray)
// }
// console.log(returnArray())

// 5
function getFirstTenCountries() {
  for (i = 0; i <= countriesArray.length; i++) {}
  // let emptyArray = []
  let tenCountries = [];
  if ((countriesArray.length = 10)) {
    tenCountries += countriesArray;
  }
  return tenCountries;
}
console.log(getFirstTenCountries());

// function getLastTenCountries(){
//   for(i = countriesArray.length-1; i >= 0; i--){
//   }
//   // let emptyArray = []
//   let tenCountries = []
//   if (countriesArray.length >= 10){

//     tenCountries += countriesArray
//   }
//   return (tenCountries)
// }
// console.log(getLastTenCountries())
// // console.log(typeof)

/*const higherOrder = (n) => {
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
  return n ** 2;
};
console.log(callback());

// function that takes other function as a callback
function cube(callback, n) {
  return callback(n) * n;
}

console.log(cube(callback, 3));

function sayHello() {
  console.log("Hello");
}
setInterval(sayHello, 10000); // it prints hello in every second, 1000ms is 1s

function sayHi() {
  console.log("Hi");
}
setTimeout(sayHi, 2000);

let sum = 0;
let numbers = [1, 2, 3, 4, 5];
numbers.forEach((num) => console.log(num));

const countries = ["Finland", "Denmark", "Sweden", "Norway", "Iceland"];

countries.forEach((country) => console.log(country.toUpperCase()));

const numbers1 = [1, 2, 3, 4, 5];
const numbersSquare = numbers1.map((num) => num * num);

console.log(numbersSquare);

// const countries1 = [
//   "Albania",
//   "Bolivia",
//   "Canada",
//   "Denmark",
//   "Ethiopia",
//   "Finland",
//   "Germany",
//   "Hungary",
//   "Ireland",
//   "Japan",
//   "Kenya",
// ];

const countriesWithFiveLtrs = countries1.filter(
  (country) => country.length === 5
);
console.log(countriesWithFiveLtrs);

const numbers2 = [1, 2, 3, 4, 15];
const sum1 = numbers2.reduce((acc, cur) => acc + cur, 0);

console.log(sum1);

const ages = [23, 17, 33, 20, 14];
const age = ages.find((age) => age < 20);
console.log(age);

const names = ["Asabeneh", "Mathias", "Elias", "Brook"];
const bools = [true, true, true, true];

const areSomeTrue = bools.some((b) => b === false);

console.log(areSomeTrue); //true

const numbers4 = [9.81, 3.14, 100, 37];
// Using sort method to sort number items provide a wrong result. see below
console.log(numbers4.sort()); //[100, 3.14, 37, 9.81]
numbers4.sort(function (c, d) {
  return d - c;
});

console.log(numbers4); */
