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

generation(0, "f")

generation(2, "f") 
// ➞ "granddaughter"
generation(-3, "m") 
// ➞ "great grandfather"
generation(1, "f") 
// ➞ "daughter"