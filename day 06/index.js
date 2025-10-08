// Exercise Level 1

// 1
for (let i = 0; i <= 10; i++) {
  console.log(i);
}

// 2
for (let i = 10; i >= 0; i--) {
  console.log(i);
}

let i = 10;
while (i >= 0) {
  console.log(i);
  i--;
}

let k = 10;
do {
  console.log(k);
  k--;
} while (k >= 0);

// let i = 0
// do {
//   console.log(i)
//   i++
// } while (i <= 5)

// 0 1 2 3 4 5

// 3
for (let i = 0; i <= 30; i++) {
  console.log(i);
}

// 4
let text = '#';
while (j <= 30) {
  console.log(j * "#");
  j++;
}

// 5

for (let i = 0; i <= 10; i++) {
  console.log(`${i} * ${i}= ${i * i}`);
}

// 6
for (let i = 0; i <= 10; i++) console.log(`${i} ${i * i} ${i * i * i}`);

// 7

for (let i = 0; i <= 100; i += 2) {
  console.log(i);
}

// 8
for (let i = 0; i <= 100; i += 3) {
  console.log(i);
}

//9
const numbers1 = [1, 2, 3, 4, 5, 2];
let sum = 0;
for (let i = 0; i < numbers1.length; i++) {
  sum = sum + numbers1[i];
}
console.log(sum);

//10

// 11
for (let i = 0; i <= 100; i++) {
  // Even numbers
  console.log(i);
  // odd numbers
  console.log(`${i + i}`);
}

// Exercise Level 2
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
const newArr=[]
for (const country of countriesArray){
  newArr.push(country.toUpperCase())
}
console.log(newArr)



// 7
const countries1 = [
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

if (countries1.indexOf("land")) {
  console.log("Finland, Ireland,".split(", "));
} else {
  console.log("All these countries are without land");
}

// 8
const sub = countries1.substring("ia");
if (sub == true) {
} else {
}
