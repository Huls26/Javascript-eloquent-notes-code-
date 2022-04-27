// Improvised Modules
let weekDay = function() {
    const name = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thurday", "Friday", "Saturday"];

    return {
        name(number) { return name[number] },
        number(name) { return name.indexOf(name) },
    };
}()

console.log(weekDay.name(weekDay.number("Sunday")));
// → Sunday

// Evaluating data as code
const x = 1;
function evalAndReturnX(code) {
  eval(code);
  return x;
}

console.log(evalAndReturnX("var x = 2"));
// → 2

console.log(x);
// → 1
let plusOne = Function("n", "return n + 1;");
console.log(plusOne(4));
// → 5

// CommonJS
//ECMAScript modules

import User, {printAge} from "./user.js"

// import {printName, printAge} from "./user.js"

// let user1 = User;

User({name: "J"})
printAge({age: 13})
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

console.log(roadGraph)

let graph = {};
for (let node of Object.keys(roadGraph)) {
    let edges = graph[node] = {};
    // let edgestgraph[node] = {}
  for (let dest of roadGraph[node]) {
    console.log(edges[dest])
    edges[dest] = 1;
    // graph[node][dest] = 1
  }
}
console.log(graph)

// fundamental
let sampleGrap = {}
let edges = sampleGrap["value"] = {};

edges["name"] = "Bob"
console.log(sampleGrap)

// topic
// https://www.youtube.com/watch?v=cRHQNNcYf6s
// https://www.youtube.com/watch?v=xRgWMhbVlpQ
// https://www.youtube.com/watch?v=GQ96b_u7rGc

// https://www.youtube.com/watch?v=mK54Cn4ceac
