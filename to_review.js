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

// >> =====
console.log(2**3)
console.log(3 << 3)
// 3 * (2 ** 3)
// 24

// XOR
// console.log(true ^ true)
// 0

// ============= front end career path ============== 
// https://roadmap.sh/frontend