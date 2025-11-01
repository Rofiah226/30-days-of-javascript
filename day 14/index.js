// ERROR HANDLING

// Practice
try {
  // code that may throw an error
 let lastName = 'Akintunde'
 let fullName= firstName + lastName
} catch (err) {
  // code to be executed if an error occurs
  console.log(err)
} finally {
  // code to be executed regardless of an error occurs or not
  console.log('In any case I will be executed')
}

try {
    let lastName = 'Akintunde'
    let fullNameName = firstName + lastName
} catch (error) {
    console.log('Name of the error', error.name)
    console.log('Error message', error.message)
}finally{
    console.log('In any case I will be executed')
}

throw 'Error2' // generates an exception with a string value
throw 42 // generates an exception with the value 42
throw true // generates an exception with the value true
throw new Error('Required') // generates an error object with the message of Required

const throwErrorExampleFun = () => {
  let message
  let x = prompt('Enter a number: ')
  try {
    if (x == '') throw 'empty'
    if (isNaN(x)) throw 'not a number'
    x = Number(x)
    if (x < 5) throw 'too low'
    if (x > 10) throw 'too high'
  } catch (err) {
    console.log(err)
  }
}
throwErrorExampleFun()