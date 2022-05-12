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

function storage(nest, name) {
    return new Promise((resolve, reject) => {
      nest.readStorage(name, result =>{
       if (result) {
           resolve(result)
       } else {
        reject(`something went wrong to the value`)
       }  
      });
    });
}
  
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

function sendMessage(to, type, message) {
    return new Promise((resovle, reject) => {
        // name type
        network.defineRequestType(type, (nest, content, source, done) => {
            console.log(`${nest.name} received note: ${content}`);
            done();
        })
        
        // send a message
        bigOak.send(to, type, message,
        () => resovle("Note delivered."))
    })
}

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
class Timeout extends Error {}

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

// Collections of promises
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



// asyncFunction()
asyncRunAtTheSameThime()
console.log("step 2")
console.log("step 3")



// console.log(Object.getOwnPropertyNames(Promise))





// last topic 

// https://www.youtube.com/watch?v=V_Kr9OSfDeU
// https://www.youtube.com/watch?v=vn3tm0quoqE&t=4s
// https://www.youtube.com/watch?v=Syp_QRmsKkI
// https://www.youtube.com/watch?v=DHvZLI7Db8E
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