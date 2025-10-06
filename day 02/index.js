// Exercise: Level 1

// 1
const challenge = "30 Days Of JavaScript";
// 2
console.log(challenge);

// 3
console.log(challenge.length);

// 4
console.log(challenge.toUpperCase());

// 5
console.log(challenge.toLowerCase());

// 6
console.log(challenge.substring(2));

//7
console.log(challenge.substring(0, 3));

// 8
console.log(challenge.includes("Script", 20));

// 9
console.log(challenge.split());

// 10
console.log(challenge.split(" "));

// 11
const string = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon";

console.log(string.split(", "));

//12
console.log(challenge.replace("JavaScript", "Python"));

// 13
console.log(challenge.charAt(15));

//14
console.log(challenge.charCodeAt("J"));

// 15
console.log(challenge.indexOf("a"));

//16
console.log(challenge.lastIndexOf("a"));

//17
const sentence =
  "You cannot end a sentence with because because because is a conjunction";

console.log(sentence.indexOf("because"));

//18
console.log(sentence.lastIndexOf("because"));

//19
console.log(sentence.search("because"));

//20
const challenge1 = " 30 Days Of JavaScript";
console.log(challenge1.trim());

//21
console.log(challenge.startsWith("30"));

//22
console.log(challenge.endsWith("JavaScript"));

//23
console.log(challenge.match("a"));

//24
const merge = "30 Days of";
console.log(merge.concat(" JavaScript"));

//25
console.log(challenge.repeat(2));






// Level 2

// 1
console.log(
  "The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another."
);

// 2
console.log(
  "\"Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.\""
);

// 3
console.log('10'===10)
console.log('10'==10)

// 4
const string1='9.8'
let stringFloat=Math.ceil(parseFloat(string1))

console.log(stringFloat==10)
// 5
const py = "python",
  jy = "jargon";
console.log(py.search("on"));
console.log(jy.search("on"));

// 6
const course = "I hope this course is not full of jargon";
console.log(course.search("jargon"));

// 7
let randNum = Math.random();
let numBtwZeroAndHundred = randNum * 101;
console.log(numBtwZeroAndHundred);

// 8
let randNum1 = Math.random();
let numBtwFiftyAndHundred = randNum * (100 - 50) + 1;

console.log(numBtwFiftyAndHundred);

// 9
let randNum2 = Math.random();
let numBtwZeroAnd255 = randNum * 256;
console.log(numBtwZeroAnd255);

// 10
const myString = "JavaScript";
const randomString =Math.floor( Math.random() * myString.length)
console.log(myString[randomString]);

//11
console.log(`1 1 1 1 1\n2 1 2 4 8\n3 1 3 9 27\n4 1 4 16 64\n5 1 5 25 125`);

// 12
console.log(sentence.substring(31, 54));





//Exercise Level 3

// 1
const sentence1='Love is the best thing in this world. Some found their love and some are still looking for their love.'
const sentence2=sentence1.match(/love/gi)
console.log(sentence2.length)



// 2
const sentence3='You cannot end a sentence with because because because is a conjunction'
const sentenceMatch= sentence3.match(/because/g)
console.log(sentenceMatch.length)


//3
let text =
  "%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching";
let cleaned = text.replace(/[^a-zA-Z0-9\s]/g, '') ;
console.log(cleaned)


// 4
let txt =
  "He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.";
let regEx = /\d+/;

console.log(txt.match(regEx));
console.log(txt.match(/\d+/g));
