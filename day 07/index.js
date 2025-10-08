// Exercise Level 1
// 1
function fullName(firstname, lastname) {
    let myName= firstname + ' '+ lastname

    console.log(myName)
}
fullName('Akintunde', 'Rofiat')

// 2
function fullName(firstName, lastName='Akintunde') {
    myName1= firstName + ' ' +lastName
return myName1
}
console.log(fullName('Rofiah'))

// 3












function areaOfCircle(r) {
  let area = Math.PI * r;
  return area;
}
console.log(areaOfCircle(10));

function addTwoNumbers(param1, param2) {
  let sum = param1 + param2;
  console.log(sum);
}
addTwoNumbers(2, 3);

// const anononymousFunction = function () {
//   console.log('Yayyy')
// }
const anonymousFun = function() {
  console.log(
    'I am an anonymous function and my value is stored in anonymousFun'
  )
}

function greetings(name='Rofiah') {
    let greetingsCard = `${name}, welcome to 30 days of JS`                 
    return greetingsCard
}
console.log(greetings())
console.log(greetings(''))


function calculateAge(birthYear, currentYear = 2025) {
  let age = currentYear - birthYear
  return age
//   console.log(age)
}
console.log('Age: ', calculateAge(2006))
// calculateAge(39,23)