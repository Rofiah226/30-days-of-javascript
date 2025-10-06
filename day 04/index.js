// Level 1

// 1

let birthYear = prompt("Enter your age:");
let age1 = Number(birthYear);
let standardAge = 18;
if (age1 >= standardAge) {
  console.log(`You are ${age1}. You are old enough to drive.`);
} else {
  console.log(
    `You are ${age1}. You will be able to drive in ${
      standardAge - age1
    } year(s)`
  );
}

// 2
let myAge = 19;
let yourAge = prompt("Enter your age");

if (yourAge > myAge) {
  console.log(`You are ${yourAge - myAge} years older than me.`);
} else {
  console.log(`I am ${myAge - yourAge} years older than you.`);
}

// 3
const a = 6;
const b = 5;

if (a > b) {
  console.log(`${a} is greater than ${b}`);
} else {
  console.log(`${a} is less than ${b}`);
}

// 4
let num1 = prompt("Enter a number:");
let num2 = num1 % 2;

if (num2 == 0) {
  console.log(`${num1} is an even number`);
} else {
  console.log(`${num1} is an odd number`);
}

//Level 2

// 1

let grade = prompt("Enter your grade score:");
switch (true) {
  case grade >= 80:
    console.log(`Grade A`);
    break;
  case grade >= 70:
    console.log(`Grade B`);
    break;
  case grade >= 60:
    console.log(`Grade C`);
    break;
  case grade >= 50:
    console.log(`Grade D`);
    break;
  case grade <= 49:
    console.log(`Grade F`);
    break;
  default:
    console.log(`You passed!`);
}

// 2
let months = prompt("Enter a month:");
let autumn = "September" || "October" || "November";
let winter = "December" || "January" || "February";
let spring = "March" || "April" || "May";
let summer = "June" || "July" || "August";

switch (months) {
  case autumn:
    console.log("Autumn");
    break;
  case winter:
    console.log("Winter");
    break;
  case spring:
    console.log("Spring");
    break;

  case summer:
    console.log("Summer");
    break;
}

// 3
let days= prompt('Enter a day:')
let weekend='Saturday'||'Sunday'
let weekday='Monday'||'Tuesday'||'Wednesday'||'Thursday'||'Friday'

switch(days){
  case weekend:
    console.log(`${weekend} is a weekend`)
    break;
    case weekday:
      console.log(`${weekday} is a weekday`)
      break;
}


// Level 3
// 1
let numOfDays= prompt('Enter a month')
let thirty='September'||'April'||'June'||'November'
let thirtyOne='January'||'May'||'March'||'July'||'August'||'October'||'November'||'December'
let twentyEight='February'

switch(numOfDays){
  case thirty:
    console.log(`${thirty} has 30 days`)
    break;
  case thirtyOne:
    console.log(`${thirtyOne} has 31 days`)
    break;
  case twentyEight:
    console.log(`${twentyEight} has 28 or 29 days in a leap year!`)
    break;
}