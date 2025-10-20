// DESTRUCTING AND SPREADING
// Exercise Level 1

// 1

const constants = [2.72, 3.14, 9.81, 37, 100];
let [e, pi, gravity, humanBodyTemp, boilingTemp] = constants;

// 2
console.log([e, pi, gravity, humanBodyTemp, boilingTemp]);

// 3
const countries = ["Finland", "Estonia", "Sweden", "Denmark", "Norway"];
let [fin, est, sw, den, nor] = countries;

console.log(fin, est, sw, den, nor);

// 4
const rectangle = {
  width: 20,
  height: 10,
  area: 200,
  perimeter: 60,
};

let { width: w, height: h, area: a, perimeter: p } = rectangle;

console.log(w, h, a, p);

// Exercise Level 2

const users1 = [
  {
    name: "Brook",
    scores: 75,
    skills: ["HTM", "CSS", "JS"],
    age: 16,
  },
  {
    name: "Alex",
    scores: 80,
    skills: ["HTM", "CSS", "JS"],
    age: 18,
  },
  {
    name: "David",
    scores: 75,
    skills: ["HTM", "CSS"],
    age: 22,
  },
  {
    name: "John",
    scores: 85,
    skills: ["HTML"],
    age: 25,
  },
  {
    name: "Sara",
    scores: 95,
    skills: ["HTM", "CSS", "JS"],
    age: 26,
  },
  {
    name: "Martha",
    scores: 80,
    skills: ["HTM", "CSS", "JS"],
    age: 18,
  },
  {
    name: "Thomas",
    scores: 90,
    skills: ["HTM", "CSS", "JS"],
    age: 20,
  },
];

// let [name, scores, skills, age] = users

// console.log([name, scores, skills, age])

for (const { name, scores, skills, age } of users1) {
  console.log(name, scores, skills, age);
}
//2
const users = [
  {
    name: "Brook",
    scores: 75,
    skills: ["HTM", "CSS", "JS"],
    age: 16,
  },
  {
    name: "Alex",
    scores: 80,
    skills: ["HTM", "CSS", "JS"],
    age: 18,
  },
  {
    name: "David",
    scores: 75,
    skills: ["HTM", "CSS"],
    age: 22,
  },
  {
    name: "John",
    scores: 85,
    skills: ["HTML"],
    age: 25,
  },
  {
    name: "Sara",
    scores: 95,
    skills: ["HTM", "CSS", "JS"],
    age: 26,
  },
  {
    name: "Martha",
    scores: 80,
    skills: ["HTM", "CSS", "JS"],
    age: 18,
  },
  {
    name: "Thomas",
    scores: 90,
    skills: ["HTM", "CSS", "JS"],
    age: 20,
  },
];

const checkSkills = (ski) => {
  const skills = users.map((ski) => ski.skills);

  return skills;
};
console.log(checkSkills());

//Another Example
const person = {
  firstName: "Asabeneh",
  lastName: "Yetayeh",
  age: 250,
  country: "Finland",
  job: "Instructor and Developer",
  skills: [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Redux",
    "Node",
    "MongoDB",
    "Python",
    "D3.js",
  ],
  languages: ["Amharic", "English", "Suomi(Finnish)"],
};
// Let us create a function which give information about the person object without destructuring

// const getPersonInfo = obj =>{
//   const skills = obj.skills
//   return skills
// }
// console.log(getPersonInfo())

const person1 = {
  firstName: "Asabeneh",
  lastName: "Yetayeh",
  age: 250,
  country: "Finland",
  job: "Instructor and Developer",
  skills: [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Redux",
    "Node",
    "MongoDB",
    "Python",
    "D3.js",
  ],
  languages: ["Amharic", "English", "Suomi(Finnish)"],
};
// Let us create a function which give information about the person object without destructuring

const getPersonInfo1 = (obj) => {
  const skills = obj.skills;
  const formattedSkills = skills.slice(0, -1).join(", ");
  const languages = obj.languages;
  const formattedLanguages = languages.slice(0, -1).join(", ");

  console.log(formattedSkills);
};

const student = ["David", ["HTM", "CSS", "JS", "React"], [98, 85, 90, 95]];

// let [
//   name1 = "David",
//   skills = ["HTM", "CSS", "JS", "React"],
//   jsScore = 90,
//   reactScore = 95,
// ] = student;
// console.log(name1`${skills.length}`, skills);
// const David = new Set(student);
// console.log(name1, skills, jsScore, reactScore);

// // Exercise Level 3

// 4
const students = {
  name: "David",
  age: 25,
  skills: {
    frontEnd: [
      { skill: "HTML", level: 10 },
      { skill: "CSS", level: 8 },
      { skill: "JS", level: 8 },
      { skill: "React", level: 9 },
    ],
    backEnd: [
      { skill: "Node", level: 7 },
      { skill: "GraphQL", level: 8 },
    ],
    dataBase: [{ skill: "MongoDB", level: 7.5 }],
    dataScience: ["Python", "R", "D3.js"],
  },
};

let newStudent = Object.assign(students, {});
console.log(newStudent);
let newStudent1 = Object.assign(newStudent.skills, {});
console.log(newStudent1);

// newStudent.push( {
//   skill: "Bootstrap",
//   level: 8,
// })

// newStudent=Object.assign(students.skills.backEnd, {})
// newStudent.push({Skill: 'Express' , Level : 9})

// Object.keys()
