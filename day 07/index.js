// FUNCTIONS

// Exercise Level 1
// 1
function fullName(firstname, lastname) {
  let myName = firstname + " " + lastname;

  console.log(myName);
}
fullName("Akintunde", "Rofiat");

// 2
function fullName(firstName, lastName = "Akintunde") {
  myName1 = firstName + " " + lastName;
  return myName1;
}
console.log(fullName("Rofiah"));

// 3
function addTwoNumbers(param1, param2) {
  let sum = param1 + param2;
  console.log(sum);
}
addTwoNumbers(2, 3);

// 4
function areaOfRect(length, width) {
  let area = length * width;
  console.log(area);
}
areaOfRect(8, 7);

//5
function perimeterOfRect(length, width) {
  let perimeter = 2 * (length + width);
  console.log(perimeter);
}
perimeterOfRect(9, 5);

// 6
function volumeOfRectPrism(length, width, height) {
  let volume = length * width * height;
  console.log(volume);
}
volumeOfRectPrism(3, 6, 5);

// 7
function areaOfCircle(PI, radius) {
  let areaOfC = PI * radius * radius;
  console.log(areaOfC);
}
areaOfCircle(3, 7);

// 8
function cirCumOfCircle(PI, radius) {
  let circumference = PI * radius;
  let totalCircum = 2 * circumference;
  console.log(totalCircum);
}
cirCumOfCircle(2, 5);

// 9
function densityOfSub(mass, volume) {
  let density = mass / volume;
  console.log(density);
}
densityOfSub(6, 2);

// 10

function speedOfObj(distance, time) {
  let speed = distance / time;
  console.log(speed);
}
speedOfObj(3, 6);

// 11
function weightOfSub(mass, gravity) {
  let weight = mass * gravity;
  console.log(weight);
}
weightOfSub(3, 9.8);

// 12

function celciusToFahrenheit(degreeC, constant) {
  let fahrenheit = degreeC * constant;
  let finalFahrenheit = fahrenheit + 32;
  console.log(finalFahrenheit);
}
celciusToFahrenheit(60, 9 / 5);

// 13
function bodyMassIndex(weight, height) {
  let bmi = (height * height);
  // console.log(bmi)
  let finalBmi = weight / bmi;

  if (finalBmi < 18.5) {
    console.log("Underweight");
  } else if (finalBmi <= 24.9) {
    console.log("Normal Weight");
  } else if (finalBmi <= 29.9) {
    console.log("Overweight");
  } else {
    console.log("Obese");
  }
}
bodyMassIndex(10, 2);

// 14
function checkSeason(
  month = ["September", "October", "November"],
  month2 = ["December", "January", "February"],
  month3 = ["March", "April", "May"],
  month4 = ["June", "July", "August"]
) {
  if (["September", "October", "November"].includes(month)) {
    console.log("Autumn");
  } else if (["December", "January", "February"].includes(month2)) {
    console.log("Winter");
  } else if (["March", "April", "May"].includes(month3)) {
    console.log(spring);
  } else if (["June", "July", "August"].includes(month4)) {
    console.log("Summer");
  } else {
    console.log("Incorrect month is entered");
  }
}
checkSeason("", "", "", "July");

// 15

function findMax(param1, param2, param3) {
  numOne = param1
  numTwo = param2
  numThree = param3
  if(numOne > numTwo && numOne > numThree){
    console.log(numOne)
  } else if (numTwo > numOne && numTwo > numThree){
    console.log(numTwo)
  } else{
    console.log(numThree)
  }
}
findMax(-110,-143,-10009)

// 16
// function solveLinEquation(varA, varB, varC, varX, varY) {
//     let linearEquation = (varA  * varY) + (varB * varX) + varC
//     let finalExpression = linearEquation == 0
//     console.log(finalExpression)
// }
// solveLinEquation(2, 2, 0, -2, 2)




















// function areaOfCircle(r) {
//   let area = Math.PI * r;
//   return area;
// }
// console.log(areaOfCircle(10));

// const anononymousFunction = function () {
//   console.log('Yayyy')
// }
// const anonymousFun = function() {
//   console.log(
//     'I am an anonymous function and my value is stored in anonymousFun'
//   )
// }

// function greetings(name='Rofiah') {
//     let greetingsCard = `${name}, welcome to 30 days of JS`
//     return greetingsCard
// }
// console.log(greetings())
// console.log(greetings(''))

// function calculateAge(birthYear, currentYear = 2025) {
//   let age = currentYear - birthYear
//   return age
// //   console.log(age)
// }
// console.log('Age: ', calculateAge(2006))
// // calculateAge(39,23)
