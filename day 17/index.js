// WEB STORAGE
// localStorage.setItem('firstName', 'Asabeneh')
// localStorage.setItem('age', 20)

// const colors =['purple', 'brown', 'blue', 'pink']
// const colorsJson = JSON.stringify(colors, undefined, 1)
// localStorage.setItem('colors', colorsJson)

// let skills = [
//   { tech: 'HTML', level: 10 },
//   { tech: 'CSS', level: 9 },
//   { tech: 'JS', level: 8 },
//   { tech: 'React', level: 9 },
//   { tech: 'Redux', level: 10 },
//   { tech: 'Node', level: 8 },
//   { tech: 'MongoDB', level: 8 }
// ]

// let skillJSON = JSON.stringify(skills, undefined, 1)
// localStorage.setItem('skills', skillJSON)

// let firstName=localStorage.getItem('firstName')
// console.log(firstName)

// let skills1= localStorage.getItem('skills')
// let skillsObj=JSON.parse(skills1, undefined, 2)
// console.log(skills1)
// console.log(skillsObj)
// localStorage.clear('skillsObj')

//  EXERCISE LEVEL 1
// 1

localStorage.setItem("firstname", "Rofiah");
localStorage.setItem("lastname", "Akintunde");
localStorage.setItem("age", 19);
localStorage.setItem("country", 'Nigeria');
localStorage.setItem("city", 'Lagos');

console.log('local', 'session')

const student={
    firstname:'Rofiat',
    lastName:'Akintunde',
    age:19,
    skills:['HTML', 'CSS', 'JavaScript'],
    country:'Nigeria'
}

const studentJson=JSON.stringify(student, undefined,1)
localStorage.setItem('student', studentJson)
console.log(localStorage)