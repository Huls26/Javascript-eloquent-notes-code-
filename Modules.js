// Improvised Modules
let weekDay = function() {
    const name = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thurday", "Friday", "Saturday"];

    return {
        name(number) { return name[number] },
        number(name) { return name.indexOf(name) },
    };
}()

// console.log(weekDay.name(weekDay.number("Sunday")));
// → Sunday

// Evaluating data as code
const x = 1;
function evalAndReturnX(code) {
  eval(code);
  return x;
}

// console.log(evalAndReturnX("var x = 2"));
// → 2

// console.log(x);
// → 1
let plusOne = Function("n", "return n + 1;");
// console.log(plusOne(4));
// → 5

// CommonJS
//ECMAScript modules

import User, {printAge} from "./user.js"

// import {printName, printAge} from "./user.js"

// let user1 = User;

// User({name: "J"})
// printAge({age: 13})
// printAge(user1)

// Building and bundling
// Module design

const roads = [
  "Alice's House-Bob's House",   "Alice's House-Cabin",
  "Alice's House-Post Office",   "Bob's House-Town Hall",
  "Daria's House-Ernie's House", "Daria's House-Town Hall",
  "Ernie's House-Grete's House", "Grete's House-Farm",
  "Grete's House-Shop",          "Marketplace-Farm",
  "Marketplace-Post Office",     "Marketplace-Shop",
  "Marketplace-Town Hall",       "Shop-Town Hall"
];

function buildGraph(edges) {
  let graph = Object.create(null);
  function addEdge(from, to) {
    if (graph[from] == null) {
      graph[from] = [to];
    } else {
      graph[from].push(to);
    }
  }
  for (let [from, to] of edges.map(r => r.split("-"))) {
    addEdge(from, to);
    addEdge(to, from);
  }
  return graph;
}

const roadGraph = buildGraph(roads);

let graph = {};
for (let node of Object.keys(roadGraph)) {
    let edges = graph[node] = {};
    // let edgestgraph[node] = {}
  for (let dest of roadGraph[node]) {
    edges[dest] = 1;
    // graph[node][dest] = 1
  }
}
// console.log(graph)

// fundamental
let sampleGrap = {}
let edges = sampleGrap["value"] = {};

edges["name"] = "Bob"
// console.log(sampleGrap)

// challenges
// > https://www.codewars.com/collections/lesson-5-practice-challenges-number-fullstackroadmap
// done:
// Multiply
// Even or Odd
// Sum of Positive
// Remove First and Last Characted
// Return Negative
// String Repeat
// Remove String Spaces
// Grasshopper - Summation
// Find the smallest integer in the array
// Reversed Strings 
// Counting sheep...
// Is n divisible by x and y?
// Century From Year
// Basic Mathematical Operations
// Beginner - Lost Without a Map
// Total amount of points
// Jenny's secret message
// Get the mean of an array
// Array plus array
// Rock Paper Scissors!
// Is he gonna survive?
// Convert a string to an array
// Get Planet Name By ID
// Cat years, Dog years
// Vowel Count

// ============ String repeat ============
// function repeatStr (n, s, rep = "") {
//   rep = rep + s;

//   if (n <= 1) {
//     return rep
//   }
 
//   return repeatStr(n-1, s, rep)
// }

// =========== Remove String Spaces ============
// function noSpace(x){
//   let split = x.split("");
   
//    let nS = split.reduce((prev, cur) => {
//      if (cur === " ") {
       
//      } else {
//        prev.push(cur)
//      }
//      return prev
//    }, [])
   
//    return nS.join("")
//  }


// =========== Grasshopper - Summation ===========
// var summation = function (num) {
//   if (num < 1) {
//     return 0
//   }
  
//   return num + summation(num - 1)
// }

// ========= Find the smallest integer in the array
// class SmallestIntegerFinder {
//   findSmallestInt(args) {
//     return args.reduce((low, cur) => {
//       if (cur < low) {
//         low = cur;
//       } 
      
//       return low
//     })
//   }
// }

// Counting sheep...
// function countSheeps(arrayOfSheep) {
//   // TODO May the force be with you
//   return arrayOfSheep.reduce((total, sheep) => {
//     if (sheep) {
//       total++
//     }
    
//     return total
//   }, 0)
// }

// Century
// function century(year) {
//   return Math.ceil(year / 100) 
// }

// Get the mean of an array
// function getAverage(marks){
//   //TODO : calculate the downward rounded average of the marks array
//   return Math.floor(marks.reduce((total, mark) => {
//     return total + mark 
//   }) / marks.length)
// }


// Rock Paper Scissors!
// const rps = (p1, p2) => {
//   let result = {
//     scissors: "paper",
//     paper: "rock",
//     rock: "scissors",
//   }
  
//   console.log(result[p1])
//   if (p1 === p2) {
//     return "Draw!"
//   } else if (result[p1] === p2) {
//     return "Player 1 won!"
//   }
  
//   return "Player 2 won!"
// };

// topic
// https://www.youtube.com/watch?v=cRHQNNcYf6s
// https://www.youtube.com/watch?v=xRgWMhbVlpQ
// https://www.youtube.com/watch?v=GQ96b_u7rGc

// https://www.youtube.com/watch?v=mK54Cn4ceac

// CodeWars.js ep.001 - Coding Challenges with JavaScript
// https://www.youtube.com/watch?v=ZR2hs726h74