"use strict"
// lesson learn always put "use strict" at the very top of the code

// let addition = null + undefined;

// console.log(Boolean(addition), addition)

// delete window.name
// Language
// Strict Mode

// "use strict";
// something = 0;
// forgot to add let in counter
function canYouSpotTheProblem() {
    // "use strict";
    for (counter = 0; counter < 10; counter++) {
        something++
      console.log("Happy happy");
    }
}
  
// canYouSpotTheProblem();
// console.log(something)

// "use strict";
function Person(name) { 
    // "use strict";
    this.name = name; 
}
// let ferdinand = Person("Ferdinand"); // forgot new
// → TypeError: Cannot set property 'name' of undefined

// 'use strict'
var greet = "hello"
// console.log(ferdinand)

// multiple same parameter
// function multipyParam(a, a, b, c, c) {

// }

var f = function() {}
f = function(a, b, c) {} // this is allowed using var

let d = function() {}
d = function(a, b, c) {return a + b + c} // this is allowed with let expect const

// console.log(d(1, 2, 3))

// Testing
// function test(label, boby) {
//     if (!boby()) return console.log(`Failed ${label}`)

//     return console.log("PASSED")
// }

// test("convert Latin text to uppercase", () => {
//     return "hello".toUpperCase() === "HELLO"
// })

// test("convert Greek text to uppercase", () => {
//     return "Χαίρετε".toUpperCase() == "ΧΑΊΡΕΤΕ";
// });

// test("convert Greek text to uppercase", () => {
//     return "Χαίρετε".toUpperCase() == "ΧΑΊΡΕΤΕ";
// });

const someOrder = {
    items: [
        {name: "Dragon food",          price: 8,   quantity: 8},
        {name: "Dragon cage (small)",  price: 800,   quantity: 2},
        {name: "Shipping",             price: 40,   Shipping: true}
    ]
}

// result === 1664

function totalOrder(list) {
    let totalPrice = list.items.reduce((prev, current) => {
        prev.price += current.price;
        prev.quantity += current.quantity || 0;
        prev.totalOrder += current.price * (current.quantity || 1)

        return prev
    }, {price: 0, quantity: 0, totalOrder: 0})

    return totalPrice
}

function test(label, body) {
    if (body()) return console.log(`Failed: ${label}`)

    return console.log("PASSED")
}

// test("total value", () => totalOrder(someOrder).price !== 848)

// test("total quantity", () => totalOrder(someOrder).quantity !== 10)

// test("total order price", () => totalOrder(someOrder).totalOrder !== 1704)

// add a discount if the order is over 1000

// Debugging
function numberToString(n, base = 10) {
    let result = "", sign = "";
    if (n < 0) {
        sign = "-";
        n = -n;
    }
    
    do {
        result = String(n % base) + result;
        // n /= base;
        n = Math.floor(n / base)
        // debugger
    } while (n > 0);
    
    return sign + result;
}

// console.log(numberToString(13, 10));

// console.log(0 % 10)
// console.log(Math.floor(0/10))

// Error Propagation
function promptNumber(question) {
    let result = Number(prompt(question))
    if (isNaN(result)) {
       return "not a number"
    }

    return result
}

// console.log(promptNumber("How many trees did you see?"))

// Exceptions






// last topic
// https://www.youtube.com/watch?v=QQguWy4aX2w&t=886s
// https://www.youtube.com/watch?v=Eu35xM76kKY


// review what is binding