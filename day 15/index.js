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
class Cat extends AnimalClass{
constructor(name, age, color, legs){
super  (name, age, color, legs)
}
}
console.log(Cat)


