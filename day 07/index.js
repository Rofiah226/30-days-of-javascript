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
  let bmi = height * height;
  // console.log(bmi)
  let finalBmi = weight / bmi;

  if (finalBmi < 18.5) {
    console.log("Underweight");
  } else if (18.5 >= finalBmi || finalBmi <= 24.9) {
    console.log("Normal Weight");
  } else if (finalBmi >= 24.9 || finalBmi <= 29.9) {
    console.log("Overweight");
  } else if (finalBmi >= 30) {
    console.log("Obese");
  }
  // return categoty;
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
  numOne = param1;
  numTwo = param2;
  numThree = param3;
  if (numOne > numTwo && numOne > numThree) {
    console.log(numOne);
  } else if (numTwo > numOne && numTwo > numThree) {
    console.log(numTwo);
  } else {
    console.log(numThree);
  }
}
findMax(-110, -143, -10009);

// Exercise Level 2
// 1
// function solveLinEquation(varA, varB, varC, varX, varY) {
//     let linearEquation = (varA  * varY) + (varB * varX) + varC
//     let finalExpression = linearEquation == 0
//     console.log(finalExpression)
// }
// solveLinEquation(2, 2, 0, -2, 2)

// 3
function printArray(array = "apple, banana, cashew, dodo") {
  for (let i = 0; i < array.length; i++) {}
  let array1 = array;
  console.log(array1);
}
printArray();

// 4
let todaysDate = new Date().getDate();
let todaysMonth = new Date().getMonth() + 1;
let currentYear = new Date().getFullYear();
let timeInhour = new Date().getHours();
let timeInMins = new Date().getMinutes();
function showDateTime(date) {
  let fullDate = date;
  console.log(fullDate);
  return fullDate;
}
showDateTime(
  `${todaysDate}/${todaysMonth}/${currentYear} ${timeInhour}:${timeInMins}`
);

// 5
function swapValues(a, b) {
  let temp = a
  a = b
  b = temp

  return `${a}, ${b}` 
}
console.log(swapValues(3,4))
// 6
let reverseArrayFinal= []
console.log(reverseArrayFinal)
function reverseArray(param = [1, 3, 3, 2]) {
  for (let i = param.length -1; i >= 0; i--){
    reverseArrayFinal.push(param[i])
  }
  console.log(reverseArrayFinal)
}
reverseArray([1,2])

// 7
let emptyArray = [];
function capitalizedArray(array = "avocado, banana, coconut") {
  let capitalArray = array.toUpperCase();
  emptyArray.push(capitalArray);
  console.log(emptyArray);
}
capitalizedArray();

// 8
let addedArray = ['avocado, banana']
function addItem(item) {
  let myItem = item
  addedArray.unshift(myItem)

  // return `${addedArray}`
  console.log(addedArray)
}
addItem('coconut')

// 9
// let removedItem = ''
const numbers =[5, 6, 7, 8 ,9]
function removeItem(index) {
    let removed = index
    console.log(removed.pop())
    console.log(removed)
    // removedItem.push(removed)
  }
  removeItem(numbers)
  // console.log(removeItem())

  // 10
  const num = [1, 2, 3]
  function sumOfNumbers(numbers) {
    let sum = 0
    for(let i = 0; i < numbers.length ; i++){
         sum = sum + numbers[i]
    }
    console.log(sum)
    return sum
  }
   console.log(sumOfNumbers(num))

   // 11
   function sumOfOdd(param) {
    let sumOdd = 0
    for(let i = 0; i < param; i++){
      if(i % 2 !== 0){
        sumOdd += i
      }
    }
    console.log(sumOdd)
   }
  sumOfOdd(11)

   // 12
   function sumofAllEven(number) {
     let sumEven = 0
     for (let i = 0; i< number; i++){
      //  sumEven += arguments[i]

       if (i % 2 === 0) {
        
         sumEven += i
      }
    }
      console.log(sumEven)
      // return sumEven
    }
    sumofAllEven(10)

    // 13
    function evensAndOdds(param) {
      // let num = param
      for (let i = 0; i < param; i++ ){
        if(i % 2 === 0) {
          console.log(i)
        }
        if (i % 2 !== 0){
          console.log(i)
        }
      }
      return 
    }
    console.log(evensAndOdds(22))


  // 14
  const sumAllNumbers = (...myNumbers) => {
    let theSum = 0
    for(const number of myNumbers){
        theSum += number
    }
    return theSum
  }
  console.log(sumAllNumbers(1,2,3))

  // 15
function randomUserIp(param1, param2, param3, param4) {
  param1 = Math.floor(Math.random() * 256)
  let firstParam = param1  
  param2 = Math.floor(Math.random() * 256)
  let secondParam = param2 
  param3 = Math.floor(Math.random() * 256)
  let thirdParam = param3 
  param4 = Math.floor(Math.random() * 256)
  let fourthParam = param4  

  return `${firstParam}.${secondParam}.${thirdParam}.${fourthParam}`
  
}
console.log(randomUserIp())

// 16

function randonMacAddress(){
  let macAddress =[]
  let part = ''

for(let i = 1; i <= 6; i++){
  for(let j = 1; j <= 2; j++){
    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
    let randomIndex= Math.floor(Math.random() * characters.length - 1)
    let randomChar = characters[randomIndex]
    console.log(randomChar)
     macAddress.push(randomChar)
  }
  if(macAddress < 6){
    ':' + macAddress
  }
  console.log(macAddress)

}
}
randonMacAddress()
// console.log(randomChars)
// function randomMacAddress(mac1, mac2, mac3, mac4, mac5, mac6) {
//  mac1 = Math.random() * randomChars.length
//          mac1 = firstMac
//  let finalFirstMac = randomChars[finalFirstMac]
//  console.log(FinalfirstMac)
// }




// // function declaration
// function sumAllNums() {
//   let sum = 0
//   for (let i = 0; i < arguments.length; i++) {
//     sum += arguments[i]
//   }
//   return sum
// }

// console.log(sumAllNums(1, 2, 3, 4)) // 10
// console.log(sumAllNums(10, 20, 13, 40, 10))  // 93
// console.log(sumAllNums(15, 20, 30, 25, 10, 33, 40))  // 173








// let me= ['any'].length

























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

