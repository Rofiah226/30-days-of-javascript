// PROMISES
// Exercise Level 1
// 1

const countriesAPI = 'https://restcountries.com/v3.1/all?fields=name,capital,languages,population,area'
fetch(countriesAPI)
.then(response => response.json())
.then(data =>{
    data.forEach(country => {
        console.log(
            `Country:${country.name.common}`, 
            `Capital:${country.capital }`, 
            `Languages:${country.languages}`,
            `Areas:${country.area}`
        )
    });
})
.catch(error=>console.error(error))

// Exercise level 2
// 1
const catsAPI = 'https://api.thecatapi.com/v1/breeds'
fetch(catsAPI)
.then(response=>response.json())
.then(cats => {
    catNames=cats.map(catN=>catN.name)
    console.log(catNames)
    console.log(cats)
    const totalAverage=cats.reduce((sum, acc)=>{
   
    })
})

//Exercise level 3
// 1













