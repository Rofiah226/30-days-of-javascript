// CLASSES
// Exercise Level 1
// 1
class AnimalClass {
    constructor(
        name = 'Lucy',
        age = 2,
        color = 'brown',
        legs = 4
    ) {
        this.name = name
        this.age = age
        this.color = color
        this.legs = legs
        
    }
     getDescription(){
      const about = this.name + this.age + this.color + this.legs
      return about
     }
    sayHello(){
        const fullName = this.name
        return  `Hello ${fullName}`
    //   console.log(`Hi, I am ${this.name}`)
    }
}
const animal =  new AnimalClass()
console.log(animal)
console.log(animal.sayHello())
console.log(animal.getDescription())


// 2
class Dog extends AnimalClass{

}

const dog = new Dog('Luna', 3, 'black', 4)
console.log(dog)
console.log(dog.getDescription())

class Cat extends AnimalClass{

}
const cat = new Cat ('Roland', 4, 'green and white')
console.log(cat)
console.log(cat.sayHello())

// Exercise Level 2
// 1



// class Person {
//   constructor(firstName, lastName, age, country, city) {
//     this.firstName = firstName
//     this.lastName = lastName
//     this.age = age
//     this.country = country
//     this.city = city
//   }
//   getFullName() {
//     const fullName = this.firstName + ' ' + this.lastName
//     return fullName
//   }
// }

// const person1 = new Person('Asabeneh', 'Yetayeh', 250, 'Finland', 'Helsinki')
// const person2 = new Person('Lidiya', 'Tekle', 28, 'Finland', 'Espoo')

// console.log(person1.getFullName())
// console.log(person2.getFullName())

// class Student extends Person {
//   saySomething() {
//     return 'I am a child of the person class'
//   }
// }
// const s1 = new Student('Asabeneh', 'Yetayeh', 'Finland', 250, 'Helsinki')
// console.log(s1)
// console.log(s1.saySomething())
// console.log(s1.getFullName())
// // console.log(s1.getPersonInfo())
