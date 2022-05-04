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
fifteen.then(value => {
    let array = [].concat(value)
    console.log("Got",array)
} )


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

import {bigOak} from "./crow-tech.js"

bigOak.readStorage("food caches", caches => {
  let firstCache = caches[0];
  bigOak.readStorage(firstCache, info => {
    console.log(info);
  });
});


// last topic 
// https://www.youtube.com/watch?v=C3kUMPtt4hY
// https://www.youtube.com/watch?v=DHvZLI7Db8E
// https://www.youtube.com/watch?v=ZYb_ZU8LNxs
// https://www.youtube.com/watch?v=QO4NXhWo_NM&list=PLRqwX-V7Uu6YgpA3Oht-7B4NBQwFVe3pr&index=11

// read this 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise