// Exercise 3

// Level 1

// 1
const firstName = "Rofiah";
const lastName = "Akintunde";
const country = "Nigeria";
const city = "Lagos";
const age = 19;
const isMarried = false;

console.log(
  typeof firstName,
  typeof lastName,
  typeof country,
  typeof city,
  typeof age,
  typeof isMarried
);

// 2
console.log(typeof "10" == typeof 10);

// 3
let stringTen = "10";
let floatNine = 9.8;
let float = parseInt(9.8);
console.log(float == stringTen);

// 4
const numOne = 3 * 4;
const numTwo = 2 * 3;
console.log(numOne == 12);
console.log(numTwo == 6);
console.log(numTwo * 2 == numOne);
console.log(numTwo < numOne);

let name;
let numThree = 8;
let emptyValue = null;
let numFour = 7;
console.log(name);
console.log(numThree == numFour);
console.log(emptyValue);
console.log(numThree < numFour);

// 5

/*4 > 3 = true
4 >= 3 =true
4 < 3 =false
4 <= 3  =false
4 == 4  =true
4 === 4 =true
4 != 4  =false
4 !== 4  =false
4 != '4'  =false
4 == '4'   =true
4 === '4'  =false*/
//Answer
console.log(4 > 3);
console.log(4 >= 3);
console.log(4 < 3);
console.log(4 <= 3);
console.log(4 == 4);
console.log(4 === 4);
console.log(4 != 4);
console.log(4 !== 4);
console.log(4 != "4");
console.log(4 == "4");
console.log(4 === "4");

const py = "python";
const jr = "jargon";
console.log(py.length);
console.log(jr.length);
console.log(py.length > jr.length);

// 6
/* 
4 > 3 && 10 < 12 =true
4 > 3 && 10 > 12 =false
4 > 3 || 10 < 12 =true
4 > 3 || 10 > 12 =true
!(4 > 3)         =false
!(4 < 3)         =true
!(false)         =true
!(4 > 3 && 10 < 12)=false
!(4 > 3 && 10 > 12)=true
!(4 === '4')       =true
There is no 'on' in both dragon and python=false
*/

// Answer

console.log(4 > 3 && 10 < 12);
console.log(4 > 3 && 10 > 12);
console.log(4 > 3 || 10 < 12);
console.log(4 > 3 || 10 > 12);
console.log(!(4 > 3));
console.log(!(4 < 3));
console.log(!false);
console.log(!(4 > 3 && 10 < 12));
console.log(!(4 > 3 && 10 > 12));
console.log(!(4 === "4"));

const dg = "dragon";
const pt = "python";
console.log(dg.search("on"));
console.log(pt.search("on"));

// 7
const calendar = new Date();

console.log(calendar.getFullYear());
console.log(calendar.getMonth());
console.log(calendar.getDate());
console.log(calendar.getHours());
console.log(calendar.getMinutes());
console.log(calendar.getTime());

//Level 2

//1
// constant = window.prompt("Enter the area of triangle");
// let base = prompt("Enter base:");
// let height = prompt("Enter height:");
// let area = 0.5 * base * height;

// // window.alert(`The area of the triangle is ${area}`)
// console.log(`The area of the triangle is ${area}`);

// // 220
// let sideA = prompt("Enter side a:");
// let sideB = prompt("Enter side b:");
// let sideC = prompt("Enter side c:");

// sideA = parseInt(sideA);
// sideB = parseInt(sideB);
// sideC = parseInt(sideC);
// let perimeter = sideA + sideB + sideC;

// console.log(`The perimeter of a triangle is ${perimeter}`);

// // 3
// let length = prompt("Enter length");
// let width = prompt("Enter width");
// let area1 = length * width;
// let perimeterOfRec = 2 * area1;

// // window.alert(`The area of a rectangle is ${area1}`);
// // window.alert(`The perimeter of a rectangle is ${perimeterOfRec}`);
// console.log(`The area of a rectangle is ${area1}`);
// console.log(`The area of a rectangle is ${perimeterOfRec}`);

// // 4
// const PI = 3.14;
// let radius = prompt("Enter radius:");
// let areaOfCircle = PI * radius * radius;
// let circumference = Math.floor(2 * PI * radius);

// console.log(`The area of a circle is ${areaOfCircle}`);
// console.log(`The circumference of a circle is ${circumference}`);

// //5
// // const slope1 = calculateSlope(1, 2, 3, 4); // Points (1,2) and (3,4)
// // console.log("Slope 1:", slope1); // Output: Slope 1: 1

// // 6

// // 7

// // 8

// // 9
// let hours = prompt("Enter number of hours:") ;
// let rate = prompt("Enter rate per hour:");
// let earning = rate * hours;

// console.log(`Your weekly earning is ${earning}`);

// // 10
// const name2 = "Akintunde";
// if (name2.length > 7) console.log(`Your name is long`);
// else console.log(`Your name is short`);

// // 11
// const firstName1 = "Rofiah";
// const familyName = "Akintunde";
// if (firstName.length > familyName)
//   console.log(
//     `Your first name, ${firstName1} is longer than your name, ${familyName}`
//   );
// else
//   console.log(
//     `Your family name ${familyName} is longer than your name, ${firstName1}`
//   );

// // 12
// const myAge = 29;
// const yourAge = 21;
// const ageDifference = myAge - yourAge;
// console.log(`I am ${ageDifference} years older than you.`);

// // 13
// let birthYear = prompt("Enter birth year:");
// let age1 = 2025 - birthYear;
// let standardAge= 18
// if (age1 >= standardAge)
//   console.log(`You are ${age1}. You are old enough to get married.`);
// else
//   console.log (`You are ${age1}. You will be able to get married in ${standardAge- age1} year(s)`);



// 14
let numOfYears= new Date(prompt('Enter number of years you\'ve lived:')) 
console.log(`You lived ${numOfYears.getTime()} seconds`)


// 15
const year= new Date().getFullYear()
const month= new Date().getMonth() + 1
const date= new Date().getDate()
const numOfMins= new Date().getMinutes()
const numOfHours= new Date().getHours()


// i
console.log(`${year}-${month}-${date} ${numOfHours}:${numOfMins}`)
// ii
console.log(`${date}-${month}-${year} ${numOfHours}:${numOfMins}`)
// iii
console.log(`${date}/${month}/${year} ${numOfHours}:${numOfMins}`)



// Level 3
// 1
if (`${numOfHours < 10} ${numOfMins < 10}` )
  console.log(`${year}-${month}-${date} ${'0'+numOfHours}:${'0'+numOfMins}`)
else
console.log(`${year}-${month}-${date} ${numOfHours}:${numOfMins}`)




