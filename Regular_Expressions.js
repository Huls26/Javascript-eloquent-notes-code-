// Creating a regular expression
let re1 = new RegExp("abc"), re2 = /abc/;

// console.log(re1)

// let eighteenPlus = /eighteen\+/;

// testing for matches
// console.log(/abc/.test("abcde"));
// → true
// console.log(/abc/.test("abxde"));
// → false

// Sets of character
console.log(/[0-9]/.test("in 1992"));
console.log(/\d/.test("in 1992"));
console.log(/i/.test("in 1992"));
console.log(/les/.test("jules"));

// Repeating parts of a pattern
console.log(/'\d+'/.test("'123'"));
// → true
console.log(/'\d+'/.test("''"));
// → false
console.log(/'\d*'/.test("'123'"));
// → true
console.log(/'\d*'/.test("''"));
// → true

console.log(/[0-9]{3}/.test(326))
console.log(/[a-z]{3}/.test("aba326"))
console.log(/[a-z]{3,5}/.test("asdasaas"))

// The Date class
console.log(new Date())

// boundaries
console.log(/\bt\b/.exec("tweet the ocean"))
/// Review Regular expressions
// https://www.youtube.com/watch?v=Se6Oxyl03xE