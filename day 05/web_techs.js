// Exercise  Level 2

// 1
const webTechArray=['HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB']

const indexSass=webTechArray.indexOf('Sass')

if (indexSass=== -1){
    console.log(webTechArray.unshift('Sass'))
} else {
    console.log('Sass is a CSS preprocess')
}

console.log(webTechArray)