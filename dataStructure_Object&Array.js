// Chapter 4

// arguments 
// phi
// maps (monads -> function that implements a map)
// functor (function that implements a flatmap)

// Data Structures: Objects and Arrays

// The weresquirrel

// Properties
// Methods

// Objects

// There’s an Object.assign function that copies all properties from one object
// into another.
// 64
// let objectA = {a: 1, b: 2};
// Object.assign(objectA, {b: 3, c: 4});

// console.log(objectA);
// // → {a: 1, b: 3, c: 4}

let journal = [
    {events: ["work", "touched tree", "pizza",
    "running", "television"],
    squirrel: false},
    {events: ["work", "ice cream", "cauliflower",
    "lasagna", "touched tree", "brushed teeth"],
    squirrel: false},
    {events: ["weekend", "cycling", "break", "peanuts",
    "beer"],
    squirrel: true},
    /* and so on... */
    ];


// sand box check (https://eloquentjavascript.net/code#4),


// study again bubble sort, binary search in javascript

let arrayOfarray = ["hello", "world"];

// console.log(arrayOfarray.join(", ").split(", "))

let object1 = {first: 4, second: 5, three: "three",}

let object2 = object1

object2["fourth"] = "four";

let object3 = {...object1};

object1.three = "update"
let {first, three} = object1
// console.log(three)

let emptyArray = [];
let emptyObject = {
    name: "Jules",
    Job: "Software Engineer/Software Developer",
    hobby: ["playing drums & guitar", "coding", "watching", "play games"],
    address: "somewhere in tagaytay or manila",

};

function addArray(array1, array2) {
    emptyArray.push({array1, array2})
}

addArray(["hello", "world"], "hi")

console.log(emptyArray)

let {name, ...rest} = emptyObject;

for (let values of Object.values(emptyObject)) {
    console.log(values)
}

console.log(Object.values(rest))

let sampleArray = [1, 2, 3, 4, 5];


console.log(sampleArray.indexOf(4, 2))

console.log(sampleArray.slice(-2))
// Array.prototype.lastIndexOf()


function print(...items) {
    items.forEach(function (element) {
        console.log(element)
    })
}

print(1, 2, 3, 4)

// --->> Computing correlation

// Further arrayology 
// array methods

// todo task : using push and pop, shift and unshift 

// let todoList = [];
// function remember(task) {
// todoList.push(task);
// }
// function getTask() {
// return todoList.shift();
// }
// function rememberUrgently(task) {
// todoList.unshift(task);
// }

// indexof and lastIndexOf
let setOfArray = [1, 2, 3, 4, 5];

console.log(setOfArray.indexOf(2, 3))
console.log(setOfArray.lastIndexOf(4, 2))

// slice
console.log([0, 1, 2, 3, 4].slice(2, 4));
// → [2, 3]
console.log([0, 1, 2, 3, 4].slice(2));
// → [2, 3, 4]

// concat and slice

function remove(array, index) {
    return array.slice(0, index)
    .concat(array.slice(index + 1));
}

console.log(remove(["a", "b", "c", "d", "e"], 2));
// → ["a", "b", "d", "e"]

// Strings and their properties

// slice and indexOf
console.log("coconuts".slice(4, 7));
// → nut
console.log("coconut".indexOf("u"));
// → 5

// Trim 
// The trim method removes whitespace (spaces, newlines, tabs, and similar characters) from the start and end of a string.

// console.log(" okay \n ".trim());
// → okay
    
// Padstart
// The zeroPad function from the previous chapter also exists as a method.
// It is called padStart and takes the desired length and padding character as
// arguments.

// console.log(String(6).padStart(3, "0"));
// → 006

// split
// You can split a string on every occurrence of another string with split and
// join it again with join.
// let sentence = "Secretarybirds specialize in stomping";
// let words = sentence.split(" ");
// console.log(words);
// → ["Secretarybirds", "specialize", "in", "stomping"]
// console.log(words.join(". "));
// → Secretarybirds. specialize. in. stomping

// repeat 
// console.log("LA".repeat(3));
// → LALALA

// length
let string = "abc";
console.log(string.length);
// → 3
console.log(string[1]);
// → b

// Rest parameters
function max(...number) {
    let result = -Infinity;

    number.forEach(element => {
        // if (element > result) {
        //     result = element
        // }

        element > result ? result = element : result = result
    })
    
    return result
}

console.log(max(1, 2, 3));
let numbers = [3, 2, 6];
console.log(max(...numbers));

// let words = ["never", "fully"];
// console.log(["will", ...words, "understand"]);
// → ["will", "never", "fully", "understand"]

// The Math object

// Destructuring

function phi(table) {
    return (table[3] * table[0] - table[2] * table[1]) /
    Math.sqrt((table[2] + table[3]) *
    (table[0] + table[1]) *
    (table[1] + table[3]) *
    (table[0] + table[2]));
}

function phi([n00, n01, n10, n11]) {
    return (n11 * n00 - n10 * n01) /
        Math.sqrt((n10 + n11) * (n00 + n01) *
        (n01 + n11) * (n00 + n10));
}

// let {name} = {name: "Faraji", age: 23};
// console.log(name);
// // → Faraji

// let [name1, null] = ["Karen", null]
// console.log(job)

// JSON

let json = {
    squirrel: false,
    events: ["work", "touched tree", "pizza", "running"]
}

// let string = JSON.stringify({squirrel: false,
//     events: ["weekend"]});
// console.log(string);
// // → {"squirrel":false,"events":["weekend"]}
// console.log(JSON.parse(string).events);
// // → ["weekend"]

let trans = JSON.stringify(json);
console.log(trans)

// console.log(JSON.parse(trans))

// fetch
// fetch('information.json').then(responce => responce.json()).then(json => { console.log(json)})

// Exercises

/* ===== =====

// ======== The sum of a range 
// function range(start, end, order = 1, array = []) {
//     if (order < 0) { 
//         if (start >= end) {
//             array.push(start)
//         } 

//         if (start <= end) {
//             return array
//         }
//     } else {
//         if (start <= end) {
//             array.push(start)
//         }    

//         if (start >= end) {
//             return array
//         }
//     }
  
//     return range(start + order, end, order, array )
// }

function range(start, end, step = start < end ? 1 : -1) {
    let array = [];

    if (step > 0) {
        for (let i = start; i <= end; i+=step) array.push(i)
    } else {
        for (let i = start; i >= end; i+=step) array.push(i)
    }

    return array
}
console.log(range(5, 3, -2))

// function sumTotal(array, index = 0) {
//     if (array.length === index) {
//         return 0
//     }

//     return array[index] + sumTotal(array, index+1)
// }

function sumTotal(array) {
    let total = 0;

    for (let i of array) {
        total += i;
    }

    return total
}

console.log(sumTotal(range(1, 10)))

// ======== Reversing an array

// reverseArray
// function reverseArray1(array) {
//    let empty = [];

//    for (let index = 0; index < array.length; index++) {
//       empty.unshift(array[index])
//    }

//    return empty
// }

function reverseArray1(array) {
    let empty = [];

    for (let i of array) {
        empty.unshift(i)    
    }

    return empty
}

// function reverseArray(array) {
//     let output = [];
//     for (let i = array.length - 1; i >= 0; i--) {
//       output.push(array[i]);
//     }
//     return output;
// }

console.log(reverseArray1([1, 2, 3, 4, 5]))
// [5, 4, 3, 2, 1]

// reverseArrayInPlace

// function reverseArrayInPlace(array, index = 0) {
//     if (index > array.length) {
//         return array
//     }

//     array.unshift(array[index + 1])
//     array.splice(array[index + 2], 1)

//     return reverseArrayInPlace(array, index + 1)
// }

// function reverseArrayInPlace(array) {
//     for (let i = 0; i < Math.floor(array.length / 2); i++) {
//       let old = array[i];
//       array[i] = array[array.length - 1 - i];
//       array[array.length - 1 - i] = old;
//     }
//     return array;
// }

function reverseArrayInPlace(array, index = 0) {
    let half = Math.floor(array.length / 2)

    if (index === half) {
        return array
    }

    let old = array[index];
    array[index] = array[array.length - 1 - index];
    array[array.length -1 - index] = old;

    return reverseArrayInPlace(array, index + 1)
}

console.log(reverseArrayInPlace([1, 2, 3, 4, 5, 6, 7]))

// ========== A list

// arraytolist
// create an empty object
// add a key and value: 
    // value: array element;
    // rest : new empty object;
// rest will be nested it should look like this:
    // let list = {
//     value: 1,
//     rest: {
//         value: 2,
//         rest: {
//             value: 3,
//             rest: null
//         }
//     }
// };
// then repeat until the last element in array the rest value should be null

function arrayToList(array) {
    let list = null;
    
    for (let i = array.length - 1; i >= 0; i--) {
        list = {value: array[i], rest: list};
    }

    return list;
}

let arSample = [1, 2, 3];

console.log(arrayToList(arSample))


// list to array
// function listToArray(list, array = []) {
//     for (let key in list) {
//         if (list[key] instanceof Object) {
//             listToArray(list[key], array)
//         } else if (typeof list[key] !== "object") {
//             array.push(list[key])
//         }
      
//     }
    
//     return array
// }

function listToArray(list) {
    let array = [];
    for (let node = list; node; node = node.rest) {
      array.push(node.value);
    }
    return array;
}

let list = {
        value: 1,
        rest: {
            value: 2,
            rest: {
                value: 3,
                rest: {
                    value: 4,
                    rest: null,
                }
            }
        }
};

console.log(listToArray(list))

// prefend
function prepend(value, list) {
    return {value, rest: list};
}

// console.log(prepend(1, prepend(20, null)))

// nth 
function nth(list, n) {
    if (!list) return undefined;
    if (n == 0) return list.value;
    else return nth(list.rest, n - 1);
}

console.log(nth(arrayToList([1, 2, 3, 4]), 3));

// Deep Comparison

// function deepEqual(item1, item2) {
//     if (item1 === item2) {
//         return true
//     } else if (typeof item2 && typeof item2 === "object") {
//         let string1 = JSON.stringify(item1);
//         let string2 = JSON.stringify(item2)
        
//         if (string2 === string1) {
//             return true
//         }
//     }

//     return false
// }

function deepEqual(a, b) {
    if (a === b) return true;
    
    if (a == null || typeof a != "object" ||
        b == null || typeof b != "object") return false;
  
    let keysA = Object.keys(a), keysB = Object.keys(b);
    
    if (keysA.length != keysB.length) return false;
  
    for (let key of keysA) {
      if (!keysB.includes(key) || !deepEqual(a[key], b[key])) return false;
    }
  
    return true;
}
  
 ===== ===== */
let samp1 = {
    "name": "jules",
    job: "software engineer",
    rest: {
        sample: "my ass"
    }
}

let samp2 = {
    name: "jules",
    job: "software engineer",
    rest: {
        sample: "my ass"
    }
}

// console.log(deepEqual(samp1, samp2))


// session 3
