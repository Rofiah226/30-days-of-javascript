// REGULAR EXPRESSIONS
// eXERCISE Level 1
// 1
const statement =  'He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.'
const digits = /\d+/g
const numbers = statement.match(digits)
let numArray=numbers.map(Number)
let totalIncome  = numArray.reduce((acc, curr)=> acc + curr, 0)
console.log(totalIncome)

// 2
function isValidVar(string) {
    const pattern = /^[a-zA-Z_$][a-zA-Z0-9_$]*$/
    if (pattern.test(string)) {
        console.log(true)
    } else {
        console.log(false)
    }
    return string
}
isValidVar('iifirst')

// Exercsie Level 2
// 1
function tenMostFrequentWords(text, number) {
  const paragraph = 'I love teaching. If you do not love teaching what else can you love. I love Python if you do not love something which can give you all the capabilities to develop an application what else can you love.'
  const words= paragraph.replace(/[^a-zA-Z]/g, ' ').split(' ')
  // let words= cleanParagraph.split(/\s+/).filter(Boolean)
  console.log(words)
  let wordCount = {}
  words.forEach(word=>{
    wordCount[word]= (wordCount[word] || 0) + 1
  })
  console.log(wordCount)
  const wordArray =Object.keys(wordCount).map(key =>({
    word : key,
    count : wordCount[key]
  }))
  console.log(wordArray)
  wordArray.sort((a,b) => b.count - a.count)
return wordArray.slice(0, number)
    
}  
  console.log(tenMostFrequentWords())  

// Exercise Level 3
// 1
function cleanText(text, number){
  const sentence = `%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?`
  const cleanSentence = sentence.replace(/[^a-zA-Z0-9\s]/g,  '')
  const splitSentence = cleanSentence.split(' ')
  console.log(splitSentence)
  let countOfWords = {}
  for (const word of splitSentence) {
    if(countOfWords[word]){
      countOfWords[word] += 1
    }else{
      countOfWords[word] = 1
    }
  }
  // splitSentence.forEach(word =>{
  //   if(countOfWords[word]){
  //     countOfWords += 1
  //   }else{
  //     countOfWords[word] = 1
  //   }
  // })
  console.log(countOfWords)
  const finalArray = []
  for(let key in countOfWords)
    finalArray.push({word : key , count : countOfWords[key]})
  finalArray.sort((a, b)=> b.count - a.count)
  return finalArray.slice(7, number)
}
console.log(cleanText())