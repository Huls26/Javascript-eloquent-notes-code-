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
console.log(/[0-9]/.test("in 1992"))
console.log(/\d/.test("in 1992"));