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
class Cat2 extends AnimalClass{
// constructor(name, age, color, legs){
// super  (name, age, color, legs)
// }
getDescription(){
    //   const about = this.name + ' ' + this.age + ' ' + this.color + ' ' + this.legs
      const info= `My name is ${this.name}. I am ${this.age} years old, my color is ${this.color}. Of course I have ${this.legs} legs `
      return info 
     }
}
const cat2 = new Cat2 ('Roland', 4, 'green and white')
console.log(cat2)
console.log(cat2.sayHello())
console.log(cat2.getDescription())

// EXERCISE LEVEL 3
// 1
class Statistics{
constructor(ages )
{
    this.ages =ages
} count(){
    let counts = this.ages.length
    return counts
} mean (){
   const total = this.ages.reduce((acc, cur) => {
    return acc + cur;
  }, 0)
  const average = total / this.count()
    return Math.ceil(average)
} sum(){
    const total = this.ages.reduce((acc, cur) => {
    return acc + cur;
  }, 0)

  return total
}median(){
    const sortedAges = this.ages.sort((a, b)=> a-b)
    let lengthOfAges = sortedAges.length
    console.log(lengthOfAges)
    if(sortedAges.length !== 2 % 0){
    return sortedAges[Math.floor(lengthOfAges/2)]
    }else {
        let middle1 = sortedAges [(lengthOfAges / 2)-1]
        let middle2 = sortedAges [lengthOfAges/2]
        return (middle1 + middle2)/2
    }
} mode (){
    const emptyMap = ''
    for (const num in statistics) {
        if (!Object.hasOwn(object, num)) continue;
        
        const element = object[num];
        
        
    }
}
} 
const statistics= new Statistics ([31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26])
console.log('Count:', statistics.count())
console.log('Mean:',statistics.mean())
console.log('Sum:',statistics.sum())
console.log('Median:',statistics.median())

let nth = [11,3,2,5].sort((a,b)=> a-b)
console.log(nth)