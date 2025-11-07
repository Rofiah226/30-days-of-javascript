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
    sayHello(){
        const fullName = this.name
        return fullName
    //   console.log(`Hi, I am ${this.name}`)
    }
}
const animal =  new AnimalClass()
console.log(animal)
console.log(animal.sayHello())


class Person {
  constructor(firstName, lastName, age, country, city) {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
    this.country = country
    this.city = city
  }
  getFullName() {
    const fullName = this.firstName + ' ' + this.lastName
    return fullName
  }
}

const person1 = new Person('Asabeneh', 'Yetayeh', 250, 'Finland', 'Helsinki')
const person2 = new Person('Lidiya', 'Tekle', 28, 'Finland', 'Espoo')

console.log(person1.getFullName())
console.log(person2.getFullName())