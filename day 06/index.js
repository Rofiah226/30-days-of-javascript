// LOOPS
// Exercise Level 1

for (let i = 0; i <= 10; i++) {
  console.log(i);
}

// 2
for (let i = 10; i >= 0; i--) {
  console.log(i);
}
// 1

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

// 3
for (let i = 0; i <= 30; i++) {
  console.log(i);
}

// 4
let text = '#';
while (i<6) {
  console.log(text +='#')
  i++
}

// 5

for (let i = 0; i <= 10; i++) {
  console.log(`${i} * ${i}= ${i * i}`);
}

// 6
for (let i = 0; i <= 10; i++) console.log(`${i} ${i * i} ${i * i * i}`);

// 7
for (let i = 0; i <= 100; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

// 8

for (let i = 0; i <= 100; i++) {
  if (i % 2 !== 0) {
    console.log(i);
  }
  // console.log(i);
}

//9

for (let num = 2; num <= 100; num++) {
  let isPrime = true;
  for (let i = 2; i < num; i++)
    if (num % i === 0) {
      isPrime = false;
      break;
    }
  if (isPrime) console.log(num);
}

// 10
let sum = 0;
for (let i = 0; i <= 100; i++) {
  sum += i;
}
console.log(`The sum of all numbers from 0 to 100 is ${sum}`);

// 11
let sumEven = 0;
let sumOdd = 0;
for (let i = 0; i <= 100; i++) {
  if (i % 2 === 0) {
    console.log(i);
    sumEven += i;
  } else {
    sumOdd += i;
  }
}
console.log(
  `The sum of all evens from 0 to 100 is ${sumEven}. And the sum of all odds is ${sumOdd}`
);

// 12
let sumEven1 = 0;
let sumOdd1 = 0;
let newArray = [];
for (let i = 0; i <= 100; i++) {
  if (i % 2 === 0) {
    console.log(i);
    sumEven1 += i;
  } else {
    sumOdd1 += i;
  }
}
newArray.push(`${sumEven1}, ${sumOdd1}`);
console.log(sumEven1, sumOdd1);
console.log(newArray);

// 13
let numArray2 = [];
for (let i = 0; i < 5; i++) {
  numArray2.push(Math.floor(Math.random() * 101));
}
console.log(numArray2);

// 14
let numArray = [];
while (numArray.length < 5) {
  let randNum = Math.floor(Math.random() * 101);
  if (!numArray.includes(randNum)) {
    numArray.push(randNum);
  }
}
console.log(numArray);

// 15
const characters = "abcdefghijklmnopqrstuvwxyz0123456789";
let randomString = "";

for (let i = 0; i < 6; i++) {
  const randPositon = Math.floor(Math.random() * characters.length);
  const randomLetter = characters[randPositon];
  randomString += randomLetter;
}
console.log(randomString);





// Exercise Level 2

// 1

for (let i = 0; i < 36; i++) {
  const randPositon = Math.floor(Math.random() * characters.length);
  const randomLetter = characters[randPositon];
  randomString += randomLetter;
}
console.log(randomString);



// 2
const hexLetters = "abcdef0123456789";
let randomString4 = "";

for (let i = 0; i < 6; i++) {
  const randomIndex = Math.floor(Math.random() * hexLetters.length);
  randomLtr = hexLetters;
  randomString4 += randomLtr[randomIndex];
}
console.log(`#${randomString4}`);


// 3
let numArray4= [];
for (let i = 0; i < 3; i++) {
  numArray4.push(Math.floor(Math.random() * 256)); 
  // numArray4 += randomNum  
}  
console.log(`rgb(${numArray4})`)


//4
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
const newArr = [];
for (const country of countriesArray) {
  newArr.push(country.toUpperCase());
}
console.log(newArr);

// 5
const countriesArray3 = [
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
const newArr3=[]
for (const country1 of countriesArray3){(
  newArr3.push(country1.length)
)}
console.log(newArr3)

// 6
let countriesArray1 = [
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
const newArr1 = [];
for (const country2 of countriesArray1) {
  newArr1.push(country2, country2.slice(0, 3).toUpperCase(), country2.length);
}
console.log(newArr1);

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

for (const country of countries1) {
  if (country.includes("land")) {
    console.log(country);
  }
  // } else {
  //   console.log("no");
  // }
}

// 8
const countries2 = [
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
for (country of countries2) {
  // console.log( country)
  if (country.endsWith("ia")) console.log(country);
}

// 9
const countries3 = [
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
let longChar = "";

for (const country of countries3) {
  if (country.length > longChar.length) {
    longChar = country;
  }
}
console.log(longChar);


// 10
const countries4 = [
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

// for (const country1 of countries4) {
//   if (country1.length > 7) {
//     7 = country1;
//   }
// }

// let fiveChar=['1, 2, 2, 2, 2']
// while (i<fiveChar.length) {
  
// }
// console.log(country1);

// 11
const webTechArray = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB",
];
let longestWord = "";

for (const webTech of webTechArray) {
  if (webTech.length > longestWord.length) {
    longestWord = webTech;
  }
}
console.log(longestWord);

// 12
const webTechs = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB",
];
let anotherarray = [];

for (const webTech of webTechs) {
  anotherarray.push(webTech, webTech.length);
}
console.log(anotherarray);

// 13
const mernStack = ["MongoDB", "Express", "React", "Node"];

for (const mern of mernStack) {
  console.log(mern.charAt());
}

// 14
const webTechArray1 = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB",
];
let newArr2 = [];
for (const webTech of webTechArray1) {
  newArr2.push(webTech);
}
console.log(newArr2);

// 15
// let fruitArray= ['banana', 'orange', 'mango', 'lemon']
// let i=4
// while (i >=fruitArray.length) {
//   console.log(i)
// i--

// }

// 16
let fullStack = [
  ["HTML", "CSS", "JS", "React"],
  ["Node", "Express", "MongoDB"],
];

let stringFullStack = fullStack.toString() + " ";
console.log(stringFullStack.toUpperCase());

// Exercise Level 3

// 1
// copied country array
//   const countriesArray = [
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

// 2
const countriesArr = [
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
const sortedCountries = countriesArr.sort();
console.log(sortedCountries);

// 3
const sortedWebtechsArray = webTechArray.sort();
console.log(sortedWebtechsArray);

const sortedMernStack = mernStack.sort();
console.log(mernStack);

// 4
const countries = [
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
let longestWord1 = "";
for (const country of countries) {
  if (country.includes("land")) {
    console.log(country);
  }
}

// 5
for (const country of countries) {
  if (country.length > longestWord1.length) {
    longestWord1 = country;
  }
}
console.log(longestWord1);

// 6
for (const country of countries) {
  if (country.includes("land")) {
    console.log(country);
  }
}

// 7
//8
//9

for (const country of countries) {
  if (countries.reverse) {
  }
  console.log(country.toUpperCase());
}
console.log(countries);
