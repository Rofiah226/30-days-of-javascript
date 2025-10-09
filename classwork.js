// const alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const statesInNaija =[
  "Abia",
  "Adamawa",
  "Akwa Ibom",
  "Anambra",
  "Bauchi",
  "Bayelsa",
  "Benue",
  "Borno",
  "Cross River",
  "Delta",
  "Ebonyi",
  "Edo",
  "Ekiti",
  "Enugu",
  "FCT - Abuja",
  "Gombe",
  "Imo",
  "Jigawa",
  "Kaduna",
  "Kano",
  "Katsina",
  "Kebbi",
  "Kogi",
  "Kwara",
  "Lagos",
  "Nasarawa",
  "Niger",
  "Ogun",
  "Ondo",
  "Osun",
  "Oyo",
  "Plateau",
  "Rivers",
  "Sokoto",
  "Taraba",
  "Yobe",
  "Zamfara"
]
const numbers = "0123456789";
let randomString1 = [];
let randomNumbers = "";
for (let i = 0; i < 4; i++) {
  const randomLtrPosition = Math.floor(Math.random() * statesInNaija.length);
  const randState = statesInNaija[randomLtrPosition].toUpperCase().slice(0,3);
  console.log(randState)

  const randomNumPosition = Math.floor(Math.random() * numbers.length);
  const randNumber = numbers[randomNumPosition];
console.log(randNumber)
  randomNumbers += randNumber;
     
  if (randomString1.length < 3) {
      randomString1 += randState;
}
}
console.log(randomString1)    
console.log(randomNumbers)
console.log (`${randomString1}-${randomNumbers}`)











// for (let i = 0; i < 4; i++){
//     const randomPosition = Math.floor(Math.random() * numbers.length)
//     const randnumber = numbers[randomPosition]
//     console.log(randnumber)
//     randomString2 += randnumber

// }
// console.log(`${randomString1}-${randomString2}`)
