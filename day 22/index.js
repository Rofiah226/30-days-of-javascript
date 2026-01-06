let title = document.createElement('h1')
title.className='title'
title.textContent='Title'
title.style.fontSize='20px'
console.log(title)


for (let i = 0; i < 3; i++) {
    let title1 = document.createElement('h2')
     title1.style.color = 'red'
     title1.textContent='I love you'
document.body.appendChild(title1)
     console.log(title1)
    
}

//Exercise level 1

for (let i = 0; i <= 100; i++) {
   let numbers = document.createElement('p')

   numbers.textContent=[i]
   document.body.appendChild(numbers)
   for (let num = 0; num < i; num++){

      if(num % i !== 0){
      numbers.style.backgroundColor='yellow'
      // console.log(num)
   }
}
if(i % 2 ===0){ numbers.style.backgroundColor='green'
}else if(i % 2 !== 0){
   numbers.style.backgroundColor='yellow'
   //else if(i % 1 === 0 && i % i === 0 ){
      //    numbers.style.backgroundColor='red'
      // }
   }
//    numbers.style.fontSize='20px'
//    document.div.appendChild(numbers)
   console.log(numbers)
}