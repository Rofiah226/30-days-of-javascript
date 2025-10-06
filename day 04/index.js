// Level 1

// 1

const birthYear = prompt("Enter your age:");
const age1 = Number(birthYear);
const standardAge = 18;
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
const myAge = 19;
const yourAge = prompt("Enter your age");

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


 true ? console.log(`${a} is greater than ${b}`)
  : console.log(`${a} is less than ${b}`);


// // 4
const num1 = prompt("Enter a number:");
const num2 = num1 % 2;

if (num2 == 0) {
  console.log(`${num1} is an even number`);
} else {
  console.log(`${num1} is an odd number`);
}

 //Level 2

 // 1

const grade = prompt("Enter your grade score:");
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
let autumn = "September"| "October"| "November";
let winter = "December"|"January"|"February";
let spring = "March"|"April"|"May";
let summer = "June"|"July"|"August";

switch (months) {
  case autumn:
    window.alert('Autumn');
    break;
  case winter:
    window.alert('Winter');
    break;
  case spring:
    window.alert('Spring');
    break;

  case summer:
    window.alert('Summer');
    break;
}

// 3
let days= prompt('Enter a day:')
let weekend='Saturday'||'Sunday'
let weekday='Monday'||'Tuesday'||'Wednesday'||'Thursday'||'Friday'

switch(days){
  case weekend:
    window.alert(`${weekend} is a weekend`)
    break;
    case weekday:
      window.alert(`${weekday} is a weekday`)
      break;
}


// Level 3
// 1
// const numOfDays= prompt('Enter a month:')
// const thirty='September'||'April'||'June'||'November'
// const thirtyOne='January'||'May'||'March'||'July'||'August'||'October'||'November'||'December'
// let twentyEight='February'

// switch(numOfDays){
//   case thirty:
//     console.log(`${thirty} has 30 days`)
//     break;
//   case thirtyOne:
//     console.log(`${thirtyOne} has 31 days`)
//     break;
//   case twentyEight:
//     console.log(`${twentyEight} has 28 or 29 days in a leap year!`)
//     break;
//}

const month = prompt("Enter a month:").toLowerCase();

switch (true) {
  case /^(january|march|may|july|august|october|december)/.test`${month}`:
    console.log(`{month} has 31 days.`);
    break;

  case /^(april|june|september|november)/.test(month):
    console.log(`{month} has 30 days.`);
    break;

  case /^february/.test(month):
    console.log(`{month} has 28 days or 29 in a leap year.`);
    break;

  default:
    console.log("Invalid month.");
}

