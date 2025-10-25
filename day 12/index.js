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
  const cleanParagraph = paragraph.replace(/[^a-zA-Z]/g, ' ')
  let words= cleanParagraph.split(/\s+/).filter(Boolean)
  console.log(words)
   let wordCount = {}
   words.forEach(word=>{
    wordCount[word]= (wordCount[word] || 0) + 1
   })
   let wordArray =[]
   wordArray.forEach(key => {
    // wordArray.push{'word' : key, 'count': wordCount[key]}
   });
return cleanParagraph
    
}  
  console.log(tenMostFrequentWords())  

// Exercise Level 3
// 1
function cleanText(){
  const sentence = `%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?`
  const cleanSentence = sentence.replace(/[^a-zA-Z0-9\s]/g,  '')
//   console.log(cleanSentence)
  return cleanSentence
}
console.log(cleanText())