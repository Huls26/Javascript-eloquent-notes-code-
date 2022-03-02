// javascript challenges
// link => https://edabit.com/challenges/javascript

// let's fuel up!
function calculateFuel(num) {
    let computation = num*10
    return computation < 100 ? 100 : computation
  }
  
console.log(calculateFuel(15))
// ➞ 150
console.log(calculateFuel(23.5))
// ➞ 235
console.log(calculateFuel(3))
// ➞ 100

// How Much is True?
function countTrue(array) {
let count = array.reduce((total, current) => {
    if (current) total++
    return total
}, 0)

return count
}

console.log(countTrue([true, false, false, true, false]))
// ➞ 2
console.log(countTrue([false, false, false, false])) 
// ➞ 0
console.log(countTrue([])) 
// ➞ 0

// Find the nth Tetrahedral Number
// function tetra(n, total = 0) {
//   if (n === 1) return 1

//   let sides = n * 3
// }

// Function Factory 

function makePlusFunction(n) {
return (m) => {
    return n + m
} 
}

const plusFive = makePlusFunction(5);

console.log(plusFive(2));
console.log(plusFive(-8));

const plusTen = makePlusFunction(10)

console.log(plusTen(0)) 
// ➞ 10
console.log(plusTen(188)) 
// ➞ 198
console.log(plusFive(plusTen(0))) 
// ➞ 15

// RegEx Exercise: An empty string
const RegExp = {
    test: function (str) {
        return console.log(str.length === 0)
    }
}

RegExp.test("hello")

// Perimeters with a Catch 
function perimeter(l, num) {
    let square = 4 * num;
    let circle = 6.28 * num;

    if (l === "s") {
        return console.log(square)
    } else if (l === "c") {
        return console.log(circle)
    }

    return "Please enter again"
}

perimeter("s", 7) 
// ➞ 28
perimeter("c", 4) 
// ➞ 25.12
perimeter("c", 9) 
// ➞ 56.52

// Which Generation Are You?
const generations = [
    "me!",
   {m: "great grandfather", f: "great grandmother"},
   {m: "grandfather", f: "grandmother"},
   {m: "father", m: "mother"},
   {m: "son", f: "daugther"}, 
   {m: "grandson", f: "grand daughter"},
   {m: "great grandson", f: "great grand daughter"}
]

function generation(num, char) {
    let r = [0, -3, -2, -1, 1, 2, 3];

    for (let element in r) {
      if (num === r[element]) {
          if (r[element] === 0) {
            return console.log(generations[0])
          } else {
            return console.log(generations[element][char])
          }
         
      }
    }
}

generation(0, "f");
generation(2, "f");
// ➞ "granddaughter"
generation(-3, "m"); 
// ➞ "great grandfather"
generation(1, "f");
// ➞ "daughter"

// link => https://edabit.com/challenges/javascript
console.log("➞".codePointAt(0))

// All About Anonymous Functions: Adding Suffixes
// https://edabit.com/challenge/Ra85gzkCTtXrNyCag

function add_suffix(suffix) {
    return function(word) {
        return console.log(word+suffix)
    }
}

add_ly = add_suffix("ly")

add_ly("hopeless") 
// ➞ "hopelessly"
add_ly("total") 
// ➞ "totally"

add_less = add_suffix("less")

add_less("fear") 
// ➞ "fearless"
add_less("ruth") 
// ➞ "ruthless"

// Convenience Store
// https://edabit.com/challenge/erFxBbqzZPSegMwnc

function changeEnough(array, amount) {
    let values = [.25, .10, .05, .01]
    
    let totalAmount = array.reduce((total, current, index) => {
        let convert = current * values[index];

        return total + convert
    }, 0)

    return console.log(totalAmount >= amount)
}

// changeEnough([2, 100, 0, 0], 14.11) 
// //➞ false
// changeEnough([0, 0, 20, 5], 0.75) 
// // ➞ true
// changeEnough([30, 40, 20, 5], 12.55) 
// //➞ true
// changeEnough([10, 0, 0, 50], 3.85)
// //➞ false
// changeEnough([1, 0, 5, 219], 19.99) 
// //➞ false

// Seven Boom!
// https://edabit.com/challenge/6R6gReGTGwzpwuffD

function sevenBoom(array) {
    let find7 = array.some(element => {
        let str = String(element)
        let condition = false

       if (str .length > 1) {
           for (let item of str.split("")) {
               if (item === "7") {
                   condition = true
               }
           }
       } else {
           if (str === "7") {
               condition = true
           }
       }

       return condition
    })

    return console.log(find7)
}

sevenBoom([1, 2, 3, 4, 5, 6, 7]) 
// ➞ "Boom!"
// 7 contains the number seven.

sevenBoom([8, 6, 33, 100])
// // ➞ "there is no 7 in the array"
// // None of the items contain 7 within them.

sevenBoom([2, 55, 60, 97, 86]) 
// ➞ "Boom!"
// 97 contains the number seven.

