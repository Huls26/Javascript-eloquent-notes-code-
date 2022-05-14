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
// class MyPromise {
//     constructor(callback) {
//         this.fullfilled = null;
//     }

//     static resolve(value) {
//         let create = new MyPromise(value);
//         create.add(value);
//         return create
//     }

//     then(callback) {
//         callback(this.fullfilled)
//     }

//     add(value) {
//         this.fullfilled = value;
//     }
// }

// let fifteen = MyPromise.resolve([15, 12]);

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

import {bigOak, defineRequestType} from "./crow-tech.js"

// bigOak.readStorage("food caches", caches => {
//   let firstCache = caches[0];
//   bigOak.readStorage(firstCache, info => {
//     console.log(info);
//   });
// });

// bigOak.send("Cow Pasture", "note", "Let's caw loudly at 7PM", () => console.log("Note delivered."));

// the place is within its own neighbors
// function findNeighbors() {
//     for (let key of Object.keys(network.nodes)) {
//         for (let value of Object.values(network.nodes)) {
//             // console.log(value, key)
//             if (value.neighbors.includes(key)) {
//                 console.log({key: key, value: value.neighbors})
//             }
//         }
//     }
// }

// findNeighbors()

console.log(network)
// function requestType(name, handler, network) {
//     network.types[name] = handler;
// }

// function sendMessage(to, message, nodes, callback) {
//     if (!Object.keys(network.nodes).includes(to)) {
//        return console.log("Error no network found")
//     }

//     console.log(nodes)
//     if (!nodes.neighbors.includes(to)) {
//         console.log("Not neighbors")
//     }

//     let handler = nodes.network.types.note;
//     if (!handler) {
//         console.log("no type")
//     } else {
//         setTimeout(() => {
//         setTimeout(() => handler(to, message, nodes.name), 10)
//         callback(message)
//         }, 20)
//     }
// }

// requestType("note", (name, message, source) => {console.log(`${name} received note: ${message}`)}, network)

// sendMessage("Cow Pasture", "Let's caw loudly at 7PM", network.nodes["Big Oak"], () => console.log("message sent"))

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

// function storage(nest, name) {
//     return new Promise((resolve, reject) => {
//       nest.readStorage(name, result =>{
//        if (result) {
//            resolve(result)
//        } else {
//         reject(`something went wrong to the value`)
//        }  
//       });
//     });
// }
  
// storage(bigOak, "enemie")
//     .then(value => console.log("Got", value))
//     .catch(error => console.log(error))


// Try to build using promises
// send to "Cow Pasture"
// message "Let's caw loudly at 7PM"
// This name should be "Big Oak"
// The output should be like this:
// Cow Pasture received note: Let's caw loudly at 7PM
// Note delivered.

// function sendMessage(to, type, message) {
//     return new Promise((resovle, reject) => {
//         // name type
//         network.defineRequestType(type, (nest, content, source, done) => {
//             console.log(`${nest.name} received note: ${content}`);
//             done();
//         })
        
//         // send a message
//         bigOak.send(to, type, message,
//         () => resovle("Note delivered."))
//     })
// }

// sendMessage("Cow Pasture", "note", "Let's caw loudly at 7PM").then(message => console.log(message))

// Failure
// new Promise((_, reject) => reject(new Error("Fail")))
//   .then(value => console.log("Handler 1"))
//   .catch(reason => {
//     console.log("Caught failure " + reason);
//     return "nothing";
//   })
//   .then(value => console.log("Handler 2", value));
// → Caught failure Error: Fail
// → Handler 2 nothing

// Networks are hard

// Collections of promises

// ========= callbacks asynchronous =========
let posts = [
    {title: "Post one", body: "This is post one"},
    {title: "Post two", body: "This is post two"},
]

// synchronous method
// function displayAllPosts(posts) {
//     posts.forEach(element => {
//         console.log(element.title)
//     })
// }

// function createPost(post) {
//     posts.push(post);
// }
// createPost({title: "Post three", body: "This is post three"})
// displayAllPosts(posts);

// asynchronous method
// callback
function createPost(post, callback) {
    callback(posts);
    posts.push(post);
    console.log(post.title)
}

createPost({title: "Post three", body: "This is post three"}, (posts) => {
    posts.forEach(element => {
        console.log(element.title)
    })
});

function method(handler) {
    return posts[posts.length] = handler;
}

method((title, body, message) => {
    message()
    posts.splice(posts.length - 1, 0, {title: title, body: body})
})

function definePost(title, body, callback) {
    let handler = posts[posts.length -1];

    handler(title, body, () => console.log("created new post"))
}


definePost("Post four", "This is a post four")
console.log(posts)

// promises
function addAPost(title, body) {
    return new Promise((resolve, reject) => {
        posts.splice(posts.length - 1, 0, {title: title, body: body})

        if (posts[posts.length -2]) { return resolve(posts) } 
        else {
            reject("error in post")
        }
    })
}

// addAPost("Last", "this is the last post").then(posts => {console.log(posts)})

// ================ Networks are hard
// class Timeout extends Error {}

// function request(nest, target, type, content) {
//   return new Promise((resolve, reject) => {
//     let done = false;
//     function attempt(n) {
//       nest.send(target, type, content, (failed, value) => {
//         done = true;
//         if (failed) reject(failed);
//         else resolve(value);
//       });
//       setTimeout(() => {
//         if (done) return;
//         else if (n < 3) attempt(n + 1);
//         else reject(new Timeout("Timed out"));
//       }, 250);
//     }
//     attempt(1);
//   });
// }

// function requestType(name, handler) {
//     defineRequestType(name, (nest, content, source,
//                              callback) => {
//       try {
//         Promise.resolve(handler(nest, content, source))
//           .then(response => callback(null, response),
//                 failure => callback(failure));
//       } catch (exception) {
//         callback(exception);
//       }
//     });
// }

// Collections of promises
// requestType("ping", () => "pong");

// function availableNeighbors(nest) {
//   let requests = nest.neighbors.map(neighbor => {
//     return request(nest, neighbor, "ping")
//       .then(() => true, () => false);
//     });

//     return Promise.all(requests).then(result => {
//         return nest.neighbors.filter((_, i) => result[i]);
//       });
// }

// console.log(availableNeighbors(bigOak))

// async/await
async function outputP() {
    return "p"
}

console.log(outputP())

function outputK() {
    return Promise.resolve("p")
}

console.log(outputK())
console.log(outputK() === outputP())




function runThis() {
    return new Promise(resolve => {

        Promise.resolve().then(() => {
            for (let i = 0; i <= 1000000000; i++) {
                if (i >= 1000000000) {
                    resolve("done running")
                }
            }
        })
    })
}

function runThis2() {
    return new Promise(resolve => {
        Promise.resolve().then(() => {
            for (let i = 0; i <= 1000000000; i++) {
                if (i >= 1000000000) {
                    resolve("done running")
                }
            }
        })
    })
}

// async/await
async function asyncFunction() {
    let output = await runThis();
    console.log(output);
    console.log("step 1");
    let output2 = await runThis2();
    console.log(output2);
    console.log("step 1.5") 
}

// promise.all
async function asyncRunAtTheSameThime() {
    let [step1, step2] = await Promise.all([runThis(), runThis2()])
    console.log(step1, step2)
}

// callbacks
function callbackFunc(message, callback) {
    console.log("step 2")
    console.log("step 3")
    callback(message)
}
callbackFunc("done running", (message) => console.log(message))

// asyncFunction()
// asyncRunAtTheSameThime()
console.log("step 2")
console.log("step 3")

// console.log(Object.getOwnPropertyNames(Promise))

function storageCall(){
    return new Promise(resolve => {
        resolve("something")
    }) 
} 

async function callStorage() {
    await storageCall()
}

callStorage()

// The event loop

console.log(Date.now() - Date.now() + 50)

// try {
//     setTimeout(() => {
//       throw new Error("Woosh");
//     }, 20);
//     // throw new Error("Woosh");
// } catch (_) {
//     // This will not run
//     console.log("Caught!");
// }

// exercises
// Chapter 11. Asynchronous Programming

// 11.1 Tracking the scalpel

defineRequestType("note", (nest, content, source, done) => {
    console.log(`${nest.name} received note: ${content}`);
    done();
});
  
function storage(nest, name) {
    return new Promise(resolve => {
      nest.readStorage(name, result => resolve(result));
    });
}
  
var Timeout = class Timeout extends Error {}
  
function request(nest, target, type, content) {
    return new Promise((resolve, reject) => {
      let done = false;
      function attempt(n) {
        nest.send(target, type, content, (failed, value) => {
          done = true;
          if (failed) reject(failed);
          else resolve(value);
        });
        setTimeout(() => {
          if (done) return;
          else if (n < 3) attempt(n + 1);
          else reject(new Timeout("Timed out"));
        }, 250);
      }
      attempt(1);
    });
}
  
function requestType(name, handler) {
    defineRequestType(name, (nest, content, source,
                             callback) => {
      try {
        Promise.resolve(handler(nest, content, source))
          .then(response => callback(null, response),
                failure => callback(failure));
      } catch (exception) {
        callback(exception);
      }
    });
}
  
requestType("ping", () => "pong");
  
function availableNeighbors(nest) {
    let requests = nest.neighbors.map(neighbor => {
      return request(nest, neighbor, "ping")
        .then(() => true, () => false);
    });
    return Promise.all(requests).then(result => {
      return nest.neighbors.filter((_, i) => result[i]);
    });
}
  
// var everywhere = require("./crow-tech").everywhere;
  import {everywhere} from "./crow-tech.js"
everywhere(nest => {
    nest.state.gossip = [];
});
  
function sendGossip(nest, message, exceptFor = null) {
    nest.state.gossip.push(message);
    for (let neighbor of nest.neighbors) {
      if (neighbor == exceptFor) continue;
      request(nest, neighbor, "gossip", message);
    }
}
  
requestType("gossip", (nest, message, source) => {
    if (nest.state.gossip.includes(message)) return;
    console.log(`${nest.name} received gossip '${
                 message}' from ${source}`);
    sendGossip(nest, message, source);
});
  
requestType("connections", (nest, {name, neighbors},
                              source) => {
    let connections = nest.state.connections;
    if (JSON.stringify(connections.get(name)) ==
        JSON.stringify(neighbors)) return;
    connections.set(name, neighbors);
    broadcastConnections(nest, name, source);
});
  
function broadcastConnections(nest, name, exceptFor = null) {
    for (let neighbor of nest.neighbors) {
      if (neighbor == exceptFor) continue;
      request(nest, neighbor, "connections", {
        name,
        neighbors: nest.state.connections.get(name)
      });
    }
}
  
everywhere(nest => {
    nest.state.connections = new Map();
    nest.state.connections.set(nest.name, nest.neighbors);
    broadcastConnections(nest, nest.name);
});
  
function findRoute(from, to, connections) {
    let work = [{at: from, via: null}];
    for (let i = 0; i < work.length; i++) {
      let {at, via} = work[i];
      for (let next of connections.get(at) || []) {
        if (next == to) return via;
        if (!work.some(w => w.at == next)) {
          work.push({at: next, via: via || next});
        }
      }
    }
    return null;
}
  
function routeRequest(nest, target, type, content) {
    if (nest.neighbors.includes(target)) {
      return request(nest, target, type, content);
    } else {
      let via = findRoute(nest.name, target,
                          nest.state.connections);
      if (!via) throw new Error(`No route to ${target}`);
      return request(nest, via, "route",
                     {target, type, content});
    }
}
  
requestType("route", (nest, {target, type, content}) => {
    return routeRequest(nest, target, type, content);
  });
  
requestType("storage", (nest, name) => storage(nest, name));
  
function findInStorage(nest, name) {
    return storage(nest, name).then(found => {
      if (found != null) return found;
      else return findInRemoteStorage(nest, name);
    });
}
  
function network(nest) {
    return Array.from(nest.state.connections.keys());
}
  
function findInRemoteStorage(nest, name) {
    let sources = network(nest).filter(n => n != nest.name);
    function next() {
      if (sources.length == 0) {
        return Promise.reject(new Error("Not found"));
      } else {
        let source = sources[Math.floor(Math.random() *
                                        sources.length)];
        sources = sources.filter(n => n != source);
        return routeRequest(nest, source, "storage", name)
          .then(value => value != null ? value : next(),
                next);
      }
    }
    return next();
}
  
var Group = class Group {
    constructor() { this.members = []; }
    add(m) { this.members.add(m); }
}
  
function anyStorage(nest, source, name) {
    if (source == nest.name) return storage(nest, name);
    else return routeRequest(nest, source, "storage", name);
}
  
// async function chicks(nest, year) {
//     let list = "";
//     await Promise.all(network(nest).map(async name => {
//       list += `${name}: ${
//         await anyStorage(nest, name, `chicks in ${year}`)
//       }\n`;
//     }));
//     return list;
// }

// async function chicks(nest, year) {
//     let lines = network(nest).map(async name => {
//       return name + ": " +
//         await anyStorage(nest, name, `chicks in ${year}`);
//     });
//     anyStorage(nest, "Big Oak", `chicks in ${year}`).then(item => console.log(item))
//     return (await Promise.all(lines)).join("\n");
// }

// routeRequest(bigOak, "Church Tower", "note",
//              "Incoming jackdaws!");

// chicks(bigOak, 2017).then(console.log);

async function locateScalpel(nest) {
    let current = nest.name;

    do {
        let name = await anyStorage(nest, current, "scalpel")
        if (name === current) {
            return name
         } else {
            current = name
         }
    } while (true)
}

function locateScalpel2(nest) {
    function loop(name) {
        return anyStorage(nest, name, "scalpel").then(value => {
            if (value === name) {
                return value
            } else {
                return loop(value)
            }
        })
    }
    
    return loop(nest.name)
}

function tryThings(name) {
    function info(num = 3) {
        if (num <= 0) {
            console.log(`The name is ${name}`)
            return
        }
      return info(num - 1)
    }

    return info()
}


// locateScalpel(bigOak).then(console.log);
locateScalpel2(bigOak).then(console.log);
// tryThings("jules")

// → Butcher Shop
// 11.2 Building Promise.all
function Promise_all(promises) {
    return new Promise((resolve, reject) => {
        // Your code here.
        let sto = [];
        function getItem(value) {
            sto.push(value)
            return sto
        }

        // iterate over promises
       async function iterate(array) {
           for (let i = 0; i < array.length; i++) {
               // for error checking
               try {
                    let promise = await array[i];
                    if (i >= array.length - 1) {
                        resolve(getItem(promise))
                    } else {
                        getItem(promise)
                    }
                } catch (error) {
                    reject("X")
                }
           } 
        }

        if (promises.length === 0) {
            resolve(promises)
        } else {
            iterate(promises)
        }
       
    });
}

// Test code.
// Promise_all([]).then(array => {
//     console.log("This should be []:", array);
//     });
// function soon(val) {
//     return new Promise(resolve => {
//         setTimeout(() => resolve(val), Math.random() * 500);
// });
// }
// Promise_all([soon(1), soon(2), soon(3)])
//     .then(array=> {
//     console.log("This should be [1, 2, 3]:", array);
// }); 

// Promise_all([soon(1), Promise.reject("X"), soon(3)])
//     .then(array => {
//     console.log("We should not get here");
//     })
//     .catch(error => {
//     if (error != "X") {
//         console.log("Unexpected failure:", error);
//     }
// });








// last topic 

// https://www.youtube.com/watch?v=V_Kr9OSfDeU
// https://www.youtube.com/watch?v=vn3tm0quoqE&t=4s
// https://www.youtube.com/watch?v=Syp_QRmsKkI
// https://www.youtube.com/watch?v=ZYb_ZU8LNxs



// read this 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise

// Asynchronous programming mdn documentary
// https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Introducing

// to review 
// bind()
// fetch()
// event loop
// Array.from()
// > // https://www.youtube.com/watch?v=8aGhZQkoFbQ

// >
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