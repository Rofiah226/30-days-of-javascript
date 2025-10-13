function randonMacAddress(){
  let macAddress =''
  //   let part = ''
  console.log(macAddress.length)
  const characters = 'abcdefABCDEF0123456789'
  
  for(let i = 1; i <= 12; i++){
      //   for(let j = 1; j <= 2; j++){
        let randomIndex= Math.floor(Math.random() * characters.length - 1)
    let randomChar = characters[randomIndex]
    console.log(randomChar)
    //  macAddress.push(randomChar)
    macAddress += randomChar
    console.log(macAddress.length)
//   }
  console.log(macAddress)
  console.log(macAddress.length)
  if(macAddress.length % 2 === 0){
     macAddress += ':'
  }
  console.log(macAddress)

}
}
randonMacAddress()