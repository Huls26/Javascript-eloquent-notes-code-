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

function success() {
    console.log("success")
    // throw new Error("something went wrong")
}

function fail() {
    console.log("fail")
}

// let promise = createSomething.then(success, fail).catch(() => {console.log("error")})
// .then(() => console.log("run this code"))
// .finally(() => {console.log("run this no matter what")})

// promise

let promise1 = prom => new Promise((resolve) => {
        return resolve()
})


promise1(console.log("this resolve"))

// function failureCallback() {
//     console.log("something went wrong")
// }
// const wait = ms => new Promise(resolve => setTimeout(resolve, ms));

// wait(10*1000).then(() => saySomething("10 seconds")).catch(failureCallback);
// last topic 
// https://www.youtube.com/watch?v=ZYb_ZU8LNxs
// https://www.youtube.com/watch?v=QO4NXhWo_NM&list=PLRqwX-V7Uu6YgpA3Oht-7B4NBQwFVe3pr&index=11

// read this 
// 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise