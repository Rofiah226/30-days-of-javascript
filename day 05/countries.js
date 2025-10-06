// Exercise Level 2

//1
const countriesArray = [
  "Albania",
  "Bolivia",
  "Canada",
  "Denmark",
  "Ethiopia",
  "Finland",
  "Germany",
  "Hungary",
  "Ireland",
  "Japan",
  "Kenya",
];

// 4

const indexEthiopia = countriesArray.indexOf("Ethiopia");

if (indexEthiopia === 4) {
  console.log("ETHIOPIA");
} else {
  console.log(countriesArray.unshift("Ethiopia"));
}

// 5 is done in web_tech.js

// Exercise Level 3

console.log(countriesArray.slice(10));

// 3
const firstArray = countriesArray.slice(0, 6);
const secondArray = countriesArray.splice(6);
const unShifted = secondArray.unshift("Nigeria");
console.log(firstArray);
console.log(secondArray);
