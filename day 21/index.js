// Manipulating DOM Object
// Exercise level 1
// 1
const firstP=document.querySelector('p')
console.log(firstP)


// 2
const firstParagraph=document.querySelector('#first-p')
const secondParagraph=document.querySelector('#second-p')
const thirdParagraph=document.querySelector('#third-p')
const fourthParagraph=document.querySelector('#fourth-p')
console.log(firstParagraph)
console.log(secondParagraph)

// 3
const allParagraph= document.querySelectorAll('p')


//4
console.log(allParagraph)
allParagraph.forEach((p)=>{
    console.log(p.textContent)
})

//5
fourthParagraph.textContent='Fourth paragraph'
console.log(fourthParagraph)

// 6
firstParagraph.classList.add('class', 'para')
firstParagraph.id='first-para'
console.log(firstParagraph)

secondParagraph.className='para'
secondParagraph.id='second-para'
console.log(secondParagraph)

thirdParagraph.setAttribute('class', 'para')
thirdParagraph.setAttribute('id', 'third-para')
console.log(thirdParagraph)


fourthParagraph.className='para'
fourthParagraph.setAttribute('id', 'fourth-para')
console.log(fourthParagraph)


// Exercise level 2
// 1
firstParagraph.style.color='purple'
secondParagraph.style.fontSize='24px'
thirdParagraph.style.backgroundColor='yellow'
fourthParagraph.style.fontFamily='sans-serif'

// 2

allParagraph.forEach((p, i)=>{
    if(i % 2 === 0){
        p.style.color='red'
    }else{
        p.style.color='green'
    }
})






// for(let i=0; i < allParagraph.length; i++){

// }

// const allTitles = document.getElementsByClassName('title')
// console.log(allTitles)
// console.log(allTitles.length)

// for (let i = 0; i < allTitles.length; i++){
//     console.log(allTitles[i])
// }


// let firstTitle = document.getElementById('first-title')
// console.log(firstTitle)


// let firstTitleQuery = document.querySelector('h1')

// console.log(firstTitleQuery)

// let firstTitle1 = document.querySelector('#first-title') 
// console.log(firstTitle1)
// let firstTitle2 = document.querySelector('.title') 
// console.log(firstTitle2)

// const allTitles2= document.querySelectorAll('h1')

// console.log(allTitles2.length)

// for (let i = 0; i < allTitles2.length; i++) {
//     console.log(allTitles2[i]);
    
// }

// const titles = document.querySelectorAll('h1')
// titles.forEach((title, i)=>{
// title.style.fontSize='24px'
// if(i % 2 === 0){
//     title.style.color='red'
//     title.style.fontSize='20px'
// }else{
//     title.style.backgroundColor='blue'
//     title.style.fontSize='30px'
// }
// })
// titles[3].setAttribute('class', 'title')
// titles[3].setAttribute('id', 'fourth-title')
// // titles[3].className='title'
// // titles[3].id='fourth-title'
// titles[3].classList.add('title', 'another-class')
// titles[3].classList.remove('title', 'another-class')
// titles[3].textContent='Fourth Title'
// console.log(titles[3])