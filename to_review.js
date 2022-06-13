// ================= Bugs and errors =================
// review what is "binding"?
// data types // types
// always use "use strict"
// what is pure function and side effect
// throw new Error()
// try
// catch
// Object.hasOwnProperty()
// types of error in javascript
// selective Catching
// Assertion

// ================= Regular expressions =================
// testing for matches
// > console.log(/abc/.test("abcde"));
// → true
// > console.log(/abc/.test("abxde"));
// → false

//  ================= Modules =================
// eval()
// Function()
// import
// from
// as
// export default
// export
// require() > npm

//  ================= Asynchronous Programming =================
// callbacks
// promise
// then()
// catch()
// finally()
// asyn/await
// bind()
// fetch()
// event loop
// > // https://www.youtube.com/watch?v=8aGhZQkoFbQ

//  ================= The Document Object Model =================
// nodeType
// nodeValue
// nodeName
// Node.ELEMENT_NODE
// Node.TEXT_NODE
// document.body
// document.body.childNodes
// document.body.getElementsByTagName()
// document.getElementById();
// document.body.insertBefore();
// document.body.replaceChild();
// document.body.appendChild();
// document.createTextNode();
// document.createElement()
// element.getAttribute()
// element.setAttribute()
// node/child.remove()
// element.clientHeight()
// element.offsettHeight()
// requestAnimationFrame()
// event handlers ===
// element.addEventListener("click", () => {})
// element.removeEventListener()
// propagation
// target
// event.target.nodeName
// "mousedown"
// event.preventDefault()
// event.key
// event.type
// event.button
// keydown
// keyup
// event.ctrlKey
// event.shiftKey
// event.clientX
// event.clientY
// event.pageX
// event.pageY
// mousemove
// window.removeEventListener("mousedown", moved)
// document.body.clientHeight
// document.body.offsetHeight
// innerHeight
// document.body.scrollHeight
// pageYOffset
// event.target
// events and events loop
// worket.postMessage();
// new Worker();
// message Events
// propagate
// debouncing
// throttle


// fundamental
// ================= the output is {}
let sampleGrap = {}
let edges = sampleGrap["value"] = {};

edges["name"] = "Bob"
console.log(sampleGrap)

// ================= variable using $
const $storage = Symbol("storage"), $network = Symbol("network")

class Node {
    constructor(name, neighbors, network, storage) {
      this.name = name
      this.neighbors = neighbors
      this[$network] = network
      this.state = Object.create(null)
      this[$storage] = storage
    }
}

let node1 = new Node("Jules", "landm", "smart", [123])

console.log(node1)
console.log($storage)

// ================= []
let reachable = Object.create(null);
reachable["Laguna"] = [];

console.log(reachable["Laguna"] = [])

console.log(Array(12, 312))

// lexical scope

// >> =====
console.log(2**3)
console.log(3 << 3)
// 3 * (2 ** 3)
// 24

// XOR
// console.log(true ^ true)
// 0

// roadmap
// https://roadmap.sh/

// ============= front end career path ============== 
// https://roadmap.sh/frontend

// Data structure and Algorithms
// https://github.com/trekhleb/javascript-algorithms

// How to Study for Data-Structures and Algorithms Interviews at FAANG by Esco Obong 
// https://medium.com/swlh/how-to-study-for-data-structures-and-algorithms-interviews-at-faang-65043e00b5

// javascript challenges
// https://edabit.com/challenges/javascript