//Callback
const doSomething = callback => {
  setTimeout(() => {
    const skills = ['HTML', 'CSS', 'JS']
    callback(false, skills)
  }, 20)
}

const callback = (err, result) => {
  if (err) {
    return console.log(err)
  }
  return console.log(result)
}

doSomething(callback)

const promise = new Promise((resolve, reject) => {
setTimeout(()=>{
    const skills = ['HTML', 'CSS', 'JS']
if (skills.length > 0){
    resolve (skills)
}else{
    reject('Something is wrong')
}
}, 2000)
})

promise
.then(result=>{
    console.log(result)
})
.catch(error => console.log(error))



// const url = 'https://restcountries.com/v2/all' // countries api
// fetch(url)
//   .then(response => response.json()) // accessing the API data as JSON
//   .then(data => {
//     // getting the data
//     console.log(data)
//   })
//   .catch(error => console.error(error)) // handling error if something wrong happens

  const square = async function (n) {
  return n * n
}

console.log(square(2))


const fetchData = async () => {
  try {
    const response = await fetch(url)
    const countries = await response.json()
    console.log(countries)
  } catch (err) {
    console.error(err)
  }
}
console.log(fetchData())


