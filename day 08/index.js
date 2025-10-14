// OBJECTS
//Exercise Level 1

// 1
const emptyDog = {};

// 2
console.log(emptyDog);

// 3
const dog = {
  names: "Rob",
  legs: 4,
  color: "gold",
  age: "Three months old",
  barkProperty: function () {
    return 'woof woof'
  },
};

// 4
console.log(dog["names"]);
console.log(dog.legs);
console.log(dog.color);
console.log(dog.age);
console.log(dog.barkProperty());

// 5
dog.breed = 'German Sheperd';
dog.getDogInfo = function (){
return `The name of my dog is ${this.names}, he is ${age}> The color of my dog id ${color}, and it is a ${this.breed}`
};

console.log(getDogInfo())

// Exercise Level 2
// 1
const users = {
  Alex: {
    email: "alex@alex.com",
    skills: ["HTML", "CSS", "JavaScript"],
    age: 20,
    isLoggedIn: false,
    points: 30,
  },
  Asab: {
    email: "asab@asab.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "Redux",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
    age: 25,
    isLoggedIn: false,
    points: 50,
  },
  Brook: {
    email: "daniel@daniel.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux"],
    age: 30,
    isLoggedIn: true,
    points: 50,
  },
  Daniel: {
    email: "daniel@alex.com",
    skills: ["HTML", "CSS", "JavaScript", "Python"],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  John: {
    email: "john@john.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux", "Node.js"],
    age: 20,
    isLoggedIn: true,
    points: 50,
  },
  Thomas: {
    email: "thomas@thomas.com",
    skills: ["HTML", "CSS", "JavaScript", "React"],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  Paul: {
    email: "paul@paul.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
};

const allUser = Object.values(users);
console.log(allUser);

for (const user of allUser) {
  let userSkill = user.skills;
  console.log(userSkill);
  // console.log(user)
  let maxSkill = 0;
  let userWithMostSkill = "";
  for (const user of allUser) {
    let count = userSkill.length;

    if (count >= maxSkill) {
      maxSkill = count;
      userWithMostSkill = user;
    }
  }
  console.log(userWithMostSkill);
  console.log(maxSkill);
}

// 2
for (const user of allUser) {
  let loggedIn = user.isLoggedIn;
  console.log(loggedIn);

  let loggedInUser = 0;
  let loggedUser = "";
  if (loggedIn === true) {
    loggedInUser = loggedIn;
    loggedUser = user;
  }
  console.log(loggedInUser);
  console.log(loggedUser);
}

for (const user1 of allUser) {
  let numOfPoints = user1.points;
  console.log(numOfPoints);

  let userWithMostPoints;
  let maxPoint = 50;
  if (numOfPoints >= 50) {
    numOfPoints = maxPoint;
    userWithMostPoints = user1;
    console.log(numOfPoints);
    console.log(userWithMostPoints);
  }
}

// 3

for (const user2 of allUser) {
  let userSkill1 = user2.skills;
  let mongoUser = userSkill1.includes("MongoDB");
  let expressUser = userSkill1.includes("Express");
  let reactUser = userSkill1.includes("React");
  let nodeUser = userSkill1.includes("Node.js");
  console.log(nodeUser);
  // let mernStack= mongoUser + expressUser + reactUser
  // let mernStack = ''
  if (mongoUser && expressUser && reactUser && nodeUser === true) {
    // user2 = mernStack
  }
  console.log(user2);
}

// 4
const copyUser = Object.assign({ myName: "Rofiah" }, users);
console.log(copyUser);

// 5
const keys = Object.keys(copyUser);
console.log(keys);

// 6
const values1 = Object.values(copyUser);
console.log(values1);

// 7
const countries = {
  Nigeria: {
    countryName: "Nigeria",
    capital: "Abuja",
    populations: 8000000,
    languages: "Yoruba, Igbo, Hausa, Pidgin",
  },

  Germany: {
    countryName: "Germany",
    capital: "Berlin",
    populations: 83000000,
    languages: "Danish, Frisian, Sorbian, Romani",
  },

  SouthKorea: {
    countryName: "South Korea",
    capital: "Seoul",
    populations: 51000000,
    languages: "Korea, English",
  },

  China: {
    countryName: "China",
    capital: "Beijing",
    populations: 1000000000,
    languages: "Korea, English",
  },
  USA: {
    countryName: "United States Of America",
    capital: "Washington D.C",
    populations: 340000000,
    languages: "English, Spanish, Chinese",
  },
  UK: {
    countryName: "United Kingdom",
    capital: "London",
    populations: 680000000,
    languages: "Irish, English",
  },
};

// Exercise level 3
const personAccount = {
  firstName: "Rofiah",
  lastName: "Akintunde",
  incomes: [
    {
      salary: 100000,
      freelancing: 50000,
      business: 500000,
    },
  ],
  expenses: {
    food: 300000,
    transportation: 30000,
    others: 100000,
  },
  totalIncome: function () {
    return (
      this.incomes.salary + this.incomes.business + this.incomes.freelancing
    );
  },
  totalExpense: function () {
    return (
      this.expenses.food + this.expenses.transportation + this.expenses.others
    );
  },
  accountInfo: function () {
    return `${this.firstName} ${
      this.lastName
    }, ${this.totalIncome()} ${this.totalExpense()}`;
  },
  addIncome: function (desc = "allowance", amount = 2999) {
    this.incomes.push({ desc, amount });

    return;
  },
  addExpense: function () {
    let addedExpense = Object.assign(this.expenses, { rent: 20000 });
    return addedExpense;
  },
  accountBalance: function () {
    return this.totalIncome() - this.totalExpense();
  },
};

console.log(personAccount.incomes);
console.log(personAccount.totalIncome());
console.log(personAccount.totalExpense());
console.log(personAccount.addIncome());
console.log(personAccount.addExpense());
console.log(personAccount.accountInfo());
console.log(personAccount.accountBalance());

// 2a
const users1 = [
  {
    _id: "ab12ex",
    username: "Alex",
    email: "alex@alex.com",
    password: "123123",
    createdAt: "08/01/2020 9:00 AM",
    isLoggedIn: false,
  },
  {
    _id: "fg12cy",
    username: "Asab",
    email: "asab@asab.com",
    password: "123456",
    createdAt: "08/01/2020 9:30 AM",
    isLoggedIn: true,
  },
  {
    _id: "zwf8md",
    username: "Brook",
    email: "brook@brook.com",
    password: "123111",
    createdAt: "08/01/2020 9:45 AM",
    isLoggedIn: true,
  },
  {
    _id: "eefamr",
    username: "Martha",
    email: "martha@martha.com",
    password: "123222",
    createdAt: "08/01/2020 9:50 AM",
    isLoggedIn: false,
  },
  {
    _id: "ghderc",
    username: "Thomas",
    email: "thomas@thomas.com",
    password: "123333",
    createdAt: "08/01/2020 10:00 AM",
    isLoggedIn: false,
  },

  {
    
  },
];

const products = [
  {
    _id: "eedfcf",
    name: "mobile phone",
    description: "Huawei Honor",
    price: 200,
    ratings: [
      { userId: "fg12cy", rate: 5 },
      { userId: "zwf8md", rate: 4.5 },
    ],
    likes: [],
  },
  {
    _id: "aegfal",
    name: "Laptop",
    description: "MacPro: System Darwin",
    price: 2500,
    ratings: [],
    likes: ["fg12cy"],
  },
  {
    _id: "hedfcg",
    name: "TV",
    description: "Smart TV:Procaster",
    price: 400,
    ratings: [{ userId: "fg12cy", rate: 5 }],
    likes: ["fg12cy"],
  },
];


const usersCollection ={
  user:{
  _id:'',
  username:'',
  email: '',
  password:'',
  createdAt:'',
  isLoggedIn:'',
  }
}

console.log(usersCollection)

function signUp(newName = 'Rofiah', newEmail='brook@brook.com', newPassword) {
  for (const user of users1) {
    if(user.email === newEmail){
      console.log('User already has an account')

      return
    }
  }

  
  const newUser ={
    _id:'erjxbx',
    username:newName,
    email: newEmail,
    password:newPassword,
    createdAt:new Date(),
    isLoggedIn:false,
  }
  users1.push(newUser)
  
}
console.log(users1)
console.log(signUp())

// 2b
function signIn(email, password){
  for (const user of users1) {
    if(user.email===email && user.password === password){
      user.isLoggedIn === true
    console.log('Login successful')
    }else{
      console.log('Invalid email or password')
    }
    return
  }

}

//3a
// function rateProduct(productId,userId,ratings) {
//   for (const product of products) {
//     if(product._id=== productId ){
//       const newRating{
//         userId : userId
//       }
//     }
//   }
// }



// const person = {
//   firstName: 'Asabeneh',
//   lastName: 'Yetayeh',
//   age: 250,
//   country: 'Finland',
//   city: 'Helsinki',
//   skills: [
//     'HTML',
//     'CSS',
//     'JavaScript',
//     'React',
//     'Node',
//     'MongoDB',
//     'Python',
//     'D3.js'
//   ],
//   getFullName: function() {
//     return `${this.firstName} ${this.lastName}`
//   }
// }

// console.log(person.getFullName())
// Asabeneh Yetayeh
// const users = {
//   Alex: {
//     email: 'alex@alex.com',
//     skills: ['HTML', 'CSS', 'JavaScript'],
//     age: 20,
//     isLoggedIn: false,
//     points: 30
//   },
//   Asab: {
//     email: 'asab@asab.com',
//     skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
//     age: 25,
//     isLoggedIn: false,
//     points: 50
//   },
//   Brook: {
//     email: 'daniel@daniel.com',
//     skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
//     age: 30,
//     isLoggedIn: true,
//     points: 50
//   },
//   Daniel: {
//     email: 'daniel@alex.com',
//     skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
//     age: 20,
//     isLoggedIn: false,
//     points: 40
//   },
//   John: {
//     email: 'john@john.com',
//     skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
//     age: 20,
//     isLoggedIn: true,
//     points: 50
//   },
//   Thomas: {
//     email: 'thomas@thomas.com',
//     skills: ['HTML', 'CSS', 'JavaScript', 'React'],
//     age: 20,
//     isLoggedIn: false,
//     points: 40
//   },
//   Paul: {
//     email: 'paul@paul.com',
//     skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
//     age: 20,
//     isLoggedIn: false,
//     points: 40
//   }
// }```
