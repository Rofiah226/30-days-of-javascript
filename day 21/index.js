// Manipulating DOM Object

const allTitles = document.getElementsByClassName('title')
console.log(allTitles)
console.log(allTitles.length)

for (let i = 0; i < allTitles.length; i++){
    console.log(allTitles[i])
}


let firstTitle = document.getElementById('first-title')
console.log(firstTitle)


let firstTitleQuery = document.querySelector('h1')

console.log(firstTitleQuery)

let firstTitle1 = document.querySelector('#first-title') 
console.log(firstTitle1)
let firstTitle2 = document.querySelector('.title') 
console.log(firstTitle2)