// Level 1

// 1
let arr = new Array();
console.log(arr);

// 2
let numbers = [2, 3, 4, 6, 8, 2, 1];

//3
console.log(numbers.length);

// 4
let firstNumber = numbers[0];
let middleNumber = numbers[3];
let lastNumber = numbers[6];

console.log(firstNumber, middleNumber, lastNumber);

// 5
let mixedDataTypes = [12, true, null, "yes", 2.7, 34, false];
console.log(mixedDataTypes.length);

// 6
const itCompanies = [
  "Facebook",
  "Google",
  "Microsoft",
  "Apple",
  "IBM",
  "Oracle",
  "Amazon",
];

// 7
console.log(itCompanies);

// 8
console.log(itCompanies.length);

// 9
console.log(itCompanies[0]);
console.log(itCompanies[3]);
console.log(itCompanies[6]);

// 10
console.log(itCompanies[0]);
console.log(itCompanies[1]);
console.log(itCompanies[2]);
console.log(itCompanies[3]);
console.log(itCompanies[4]);
console.log(itCompanies[5]);
console.log(itCompanies[6]);

// 11
console.log(itCompanies[0].toUpperCase());
console.log(itCompanies[1].toUpperCase());
console.log(itCompanies[2].toUpperCase());
console.log(itCompanies[3].toUpperCase());
console.log(itCompanies[4].toUpperCase());
console.log(itCompanies[5].toUpperCase());
console.log(itCompanies[6].toUpperCase());

// 12
let myString = itCompanies.toString();
console.log(`${myString} are big IT companies`);

// 13
let checkCompanies = itCompanies.includes("Microsoft");
console.log(checkCompanies);

if (checkCompanies == true) {
  console.log("Microsoft");
} else {
  console.log("Microsoft is not found");
}

// 14
let sub = "o";
let filteredCompanies = itCompanies.filter((itCompanies) =>
  itCompanies.includes(sub)
);

console.log(filteredCompanies);

// 15
console.log(itCompanies.sort());

//16
console.log(itCompanies.reverse());

// 17
console.log(itCompanies.slice(3, 7));

// 18
console.log(itCompanies.slice(0, 4));

//19
// console.log(itCompanies.slice())

// //20
// let middleString= itCompanies.length/2

// console.log(middleString)

// 20
console.log(itCompanies.shift());
console.log(itCompanies);

// 21

//22
console.log(itCompanies.pop());
console.log(itCompanies);

// 23
console.log(itCompanies.pop());
console.log(itCompanies.pop());
console.log(itCompanies.pop());
console.log(itCompanies.pop());
console.log(itCompanies.pop());
console.log(itCompanies);
