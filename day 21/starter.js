const yearElement = document.querySelector('h1')
const colors =['red', 'green', 'pink', 'grey', 'purple', 'yellow']
const dateAndTime = document.querySelector('h2')
let index=0

setInterval(()=>{
    yearElement.style.color=colors[index]
    index=(index+1) % colors.length
}, 1000)

const lists = document.querySelectorAll('li')

setInterval(()=>{
    dateAndTime.style.color=colors[index]
    index=(index+1)%colors.length
}, 2000)

console.log(lists)
lists.forEach(list => {
    const text = list.textContent.toLowerCase()
    if(text.includes('done')){
        list.style.backgroundColor='green'
    }else if(text.includes('ongoing')){
        list.style.backgroundColor='yellow'
    }else if(text.includes('coming')){
        list.style.backgroundColor='red'
    }
});