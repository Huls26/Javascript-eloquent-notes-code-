"use strict"
// Callbacks
// setTimeout(() => {console.log("hello")}, 1000)

function one(callback) {
    console.log("This is a step one", callback());
}

function two() {
    return "This is a step two"
}

// one(two)

let stocks = {
    Fruits: ["strawberry", "grapes", "banana", "apple"],
    liquid: ["water", "ice"],
    holder: ["cone", "cup", "stick"],
    toppings: ["chocolate", "peanuts"],
}

function order(fruitName, callback) {
    setTimeout(() => {
        console.log(`${stocks.Fruits[fruitName]
    } was selected`)
        callback()
    }, 2000)
   
}

function production() {
    setTimeout(()=> {
        console.log("Production has started")
        setTimeout(() => {
            console.log("The fruit has been chopped")
        }, 2000)
    }, 1000)
}

// order(0, production)


// Promises

// let createSomething = new Promise((resolve, reject) => {
//     console.log("start here")
//     resolve()
// })

// function success() {
//     console.log("success")
//     // throw new Error("something went wrong")
// }

// function fail() {
//     console.log("fail")
// }

// let promise = createSomething.then(success, fail).catch(() => {console.log("error")})
// .then(() => console.log("run this code"))
// .finally(() => {console.log("run this no matter what")})

// promise

// let promise1 = prom => {

//     return new Promise((resolve) => {
//         console.log(resolve)
//         console.log(prom)
// })
// }

// promise1("this resolve")

// let promise1 = new Promise((resolve, reject) => {
//     return resolve
// })

// promise1

// function failureCallback() {
//     console.log("something went wrong")
// }
// const wait = ms => new Promise(resolve => setTimeout(resolve, ms));

// wait(10*1000).then(() => saySomething("10 seconds")).catch(failureCallback);

// =========== My own Promises =================
// class MyPromise {
//     constructor(callback) {
//         this.fullfilled = null;
//         this.reject = null;
//         callback((message) => {
//             this.fullfilled = message
//         }, (message) => {this.reject = message} )

//     }

//     then(callback) {
//      return new MyPromise((resolve, reject) => {
//          if (callback(this.fullfilled)) {
//             resolve(this.fullfilled)
//          } else {
//             reject("something went wrong")
//          }
//      })
        
//     }

//     catch(callback) {
//         callback(this.reject)
//     }
// }

// let p1 = new MyPromise((resolve, reject) => {
//     let a = 1 + 1;

//     if (a === 2) {
//         resolve("success")
//     } else {
//         reject("fail")
//     }

// })

// let p2 = new MyPromise((resolve, reject) => {
//     let a = 1 + 12;

//     if (a === 2) {
//         resolve("success")
//     } else {
//         reject("fail")
//     }
// })

// if (p1.fullfilled === "success") {
//     console.log("passed for resolve")
// }

// p1.then(message => {
//     if (message === "success") {
//         console.log("Passed 1")
//     }
// })


// p2.catch(error => {
//     if (error === "fail") {
//         console.log("passed 2")
//     }
// })

// function failureCallback() {
//    console.log("something went wrong")
// }

// const wait = ms => new Promise(resolve => setTimeout(resolve, ms));

// wait(10*1000).then(() => saySomething("10 seconds")).catch(failureCallback);

// class NewPromise {
//     constructor(callback) {
//         this.fullfilled = null
//         callback((message) => {this.fullfilled = message})
//     }

//     then(callback) {
//         callback(this.fullfilled)
//     }
// }


// let testString = "foo";

// let promise12 = new NewPromise((resolve) => {
//     // setTimeout(() => resolve(testString), 1000)
//     resolve(testString)
// })

// console.log(promise12)

// promise12.then(string => {
//     if (string === "foo") {
//         console.log("Passed")
//     }
// })
class MyPromise {
    constructor(callback) {
        this.fullfilled = null;
    }

    static resolve(value) {
        let create = new MyPromise(value);
        create.add(value);
        return create
    }

    then(callback) {
        callback(this.fullfilled)
    }

    add(value) {
        this.fullfilled = value;
    }
}

let fifteen = MyPromise.resolve([15, 12]);

// if (fifteen.fullfilled === 15) {
//     console.log("Passed")
// } else {
//     console.log("store to fullfilled")
// }

// fifteen.then(value => {
//     if (value === 15) {
//         console.log("Passed")
//     } else {
//         console.log("the value does not restore to fullfilled")
//     }
// })
// fifteen.then(value => {
//     let array = [].concat(value)
//     console.log("Got",array)
// } )

// crow tech

import {bigOak, defineRequestType, network} from "./crow-tech.js"

// bigOak.readStorage("food caches", caches => {
//   let firstCache = caches[0];
//   bigOak.readStorage(firstCache, info => {
//     console.log(info);
//   });
// });

// bigOak.send("Cow Pasture", "note", "Let's caw loudly at 7PM", () => console.log("Note delivered."));

// the place is within its own neighbors
function findNeighbors() {
    for (let key of Object.keys(network.nodes)) {
        for (let value of Object.values(network.nodes)) {
            // console.log(value, key)
            if (value.neighbors.includes(key)) {
                console.log({key: key, value: value.neighbors})
            }
        }
    }
}

// findNeighbors()

console.log(network)
function requestType(name, handler, network) {
    network.types[name] = handler;
}

function sendMessage(to, message, nodes, callback) {
    if (!Object.keys(network.nodes).includes(to)) {
       return console.log("Error no network found")
    }

    console.log(nodes)
    if (!nodes.neighbors.includes(to)) {
        console.log("Not neighbors")
    }

    let handler = nodes.network.types.note;
    if (!handler) {
        console.log("no type")
    } else {
        setTimeout(() => {
        setTimeout(() => handler(to, message, nodes.name), 10)
        callback(message)
        }, 20)
    }
}

requestType("note", (name, message, source) => {console.log(`${name} received note: ${message}`)}, network)

sendMessage("Cow Pasture", "Let's caw loudly at 7PM", network.nodes["Big Oak"], () => console.log("message sent"))

// Try to build
// send to "Cow Pasture"
// message "Let's caw loudly at 7PM"
// This name should be "Big Oak"
// The output should be like this:
// Cow Pasture received note: Let's caw loudly at 7PM
// Note delivered.

// A hollow above the third big branch from the bottom. Several pieces of bread and a pile of acorns.

// sync(function(result) {
//     console.log(result)
// })
// deferred

// class Node {
//     constructor(storage) {
//         this.storage = storage;
//     }

//    readStorage(name, callback) {
//        let value = this.storage[name];
//        return callback(value && JSON.parse(value))
//    }
// }

// let storage = Object.create(null);
// storage["food caches"] = JSON.stringify(["cache in the oak", "cache in the meadow", "cache under the hedge"])

// let bigOak = new Node(storage);

// bigOak.readStorage("food caches", caches => {
//   let firstCache = caches[0];
//   console.log(firstCache)
// })

//  ================ Promise ============
let sixteen = Promise.resolve(16);

// sixteen.then(message => console.log(message))

function storage(nest, name) {
    return new Promise(resolve => {
      nest.readStorage(name, result => resolve(result));
    });
}
  
storage(bigOak, "enemies")
    .then(value => console.log("Got", value));




// last topic 
// https://www.youtube.com/watch?v=C3kUMPtt4hY
// https://www.youtube.com/watch?v=DHvZLI7Db8E
// https://www.youtube.com/watch?v=ZYb_ZU8LNxs
// https://www.youtube.com/watch?v=QO4NXhWo_NM&list=PLRqwX-V7Uu6YgpA3Oht-7B4NBQwFVe3pr&index=11


// read this 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise

// Asynchronous programming mdn documentary
// https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Introducing

// to review 
// bind()

// const module = {
//     x: 42,
//     getX: function() {
//       return this.x;
//     }
// };
  
// const unboundGetX = module.getX;
// console.log(unboundGetX());
// undefined

// const boundGetX = unboundGetX.bind(module)
// console.log(boundGetX())
// 42