
// function tail(o) { // Return the tail of linked list o
// for(; o.next; o = o.next) /* empty */ ; // Traverse while o.next is truthy
// return o;
// }

// console.log(tail("hail"))


/* let the loop join each other; example: [["j","u","l","e","s"]] === "jules" */

/* this function get the index and convert the whole item to string and join them together. */ 

// const array = ["hello"," world", " ", "make ", "something"]

// function input(array){
//     var elements= [];

//     for (let element of array) {
//         let value = array.indexOf(element);
//         elements[value] = element;
//     }

//     return elements.join('')
// }

// console.log(input(array))

// ========UWU=========

/* let the function add to the empty string to make or complete a sentence or a value */

// function tail(o) { 
//     for(; o.next; o = o.next) ;
//     return o;
// }

// console.log(tail("rain"))

// let data = ["hello","world"], sum = [];
// let element
//     for(element of data) {
//      sum = sum + element;
//      console.log(sum)
   
// }

// const iterable = [10, 20, 30];
// let total = 0;
//     for (let value in iterable) {
//     total = total + value;
   
// }
// console.log(`The total length ${iterable.length}` );
// console.log(total)

// let o = { x: 1, y: 2, z: 3 };
// let keys = "";
//     for(let k of Object.keys(o)) {
//     keys += k;
//     console.log(keys)
// }

// let l = { x: 1, y: 2, z: 3 };
// let variable = []
//     for(let k in l) {
//     variable = variable + l[k];
// }

// console.log(variable)

// // ====count the same letter====

// function countLetter(word) {
//     let object = {};

//     for (let m of word) {
//         if (object[m] >= 1) {
//             object[m] +=1 
//         } else {
//             object[m] = 1
//         }
//     }
//     return object
    
// }
// console.log(countLetter("musics wow "))


// add the letter to the empty object

/* if the letter has another value then add to the existing value */

// let text = "aa aa a j j";
// let wordSet = new Set(text.split(" "));
// let unique = [];

// for(let word of wordSet) {
//     unique.push(word);
//     // unique = unique + word
//     console.log(word)
// }

// console.log(unique)

///======

// let q = {x: 1, y: 2, z: 3, c: undefined, qwe:null}; 

// for (let p in q) {
//     if (q[p]) {
//         console.log(p + ":" + q[p])
//     } else {
//         console.log(p + " is undefined")
//     }
   
// }

// function merge(target, ...sources) {
//     for(let source of sources) {
//         for(let key of Object.keys(source)) {
//             if (!(key in target)) { // This is different than Object.assign()

//                 target[key] = source[key];
//             }
//         }
//     }
//     return target;
// }

// console.log(merge({x: 1}, {x: 2, y: 2}, {y: 3, z: 4}))

// function sheldon() {
//     var x = "hello";
//     return function y() {
//         console.log(x)
//     }
   
// }

// let my = sheldon();
// console.log(my)

// for (var i = 0; i < 4; i++) {
//     function x() {
//         console.log(i)
//     }

//     x();
// }
// function z() {
//     var a = "write something";
//         function x(sample) {
//             function y() {
//                 console.log(number, sample, a);
//             }
//             let number = 10;
//             return y
//         } 
//     return x
// }
// a = "testing"

// let closure = z()("mismo");
// closure()

// function create() {
//     return function initial() {
//         console.log("something create")
//     }
// }

// const name = create();
// name()


let activities = [
    ['Work', 9],
    ['Eat', 1],
    ['Commute', 2],
    ['Play Game', 1],
    ['Sleep', 7]
];

// console.log(activities)
// activities.splice(2, 0, ['code', 1])
// activities.push(["trade", 1])
// console.table(activities)

// compute the percentage of each in 24 hours then make a index 2 to the inner array

// get the index 1 or the hours that It take of the activity
// compute the percentage of each hour within the 24 hours period
// Put the percentage inside the array that should be index 2 inside each array

// run a loop for each inside the array 
let sum = 0;
for (let i = 0; i < activities.length; i++) {
    // this will compute the percentage of each hour
    let percentage = ((activities[i][1]/24)*100).toFixed();
    // this create new index inside of array and put the percentage 
    activities[i][2]= percentage
    //sum the percentage
    sum += parseInt(percentage)
}
console.log(sum)
activities.push(["total"])
activities[5][2]= sum;
console.log(activities,);

for (let i = 0; i < activities.length; i++) {
    let inner = activities[i].length; 
    for (let j = 0; j < inner; j++) {
        console.log(`[${i}, ${j}] = ` + activities[i][j])
    }
}

Array.matrix = function(numrows, numcols, initial) {
    var arr = [];
    for (var i = 0; i < numrows; ++i) {
        var columns = [];
        for (var j = 0; j < numcols; ++j) {
            columns[j] = initial;
        }
        arr[i] = columns;
    }

    arr[0][3] = "jules"
    arr[1].splice(3,0, "moreno")
    return arr;
}

console.table(Array.matrix(4, 3, 0))

var employee = [
    [101, 'Shyam', 'Aligarh'],
    [100, 'Ram', 'Agra'],
    [102, 'Amit', 'Gwalior'] ];

employee.splice(0, 1, [100, 'Ram', 'Agra'])
console.log(employee)

// Read again page 218, 275, 281, 284, 304, 307, 308
// review the "array iteration" foreach(), map(), filter() reduce(), some(), everyfirst
// ====definitive guide in javascript page 348====

// ======study more about closures in javascript=======

// I'm not preparing for interview, I prepare for jobs;

// ========study closures, recursion javascript========
// one of the advantage of closures is data hiding, currying study akshay Saini "Javascript namaste ep.12"

// multi dimensional array in javascript
// difference between splice and replace

// study and remember scope, lexical environment, and scope chain
//scope, functional scope, block scope, lexical scope, scope chain
// review reduce and spread operator

// review again 35 bindings

// namaste javascript 

///eloquent page 61 open this link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures

// recursion fibonnaci, bubble sorting, study

// recursion practice this problem first
// https://dev.to/codeguppy/practice-recursion-in-javascript-with-these-8-coding-challenges-for-beginners-25bm

// Sort an array of numbers using bubble sort algorithm
// ======= Find a number in a sorted array (binary search) : iterative process ========

// ========= check this recursion problems =========
// https://www.codingame.com/playgrounds/5422/js-interview-prep-recursion
// https://www.w3resource.com/javascript-exercises/javascript-recursion-functions-exercises.php

// the millionaire fastlane book page 63

// explaining binary search in javascript

// build a list name app using bubble sort and binary search 

// study recursion binary search
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions

// Find the maximum number in an array containing numbers or other arrays of numbers

// var ar = [2, 4, 10, [12, 4, [100, 99], 4], [3, 2, 99], 0];

// recursion 62 study eloquent javascript
// combination in javascript

// recursion problem to solve:
    // study callback first
// https://www.codingame.com/playgrounds/5422/js-interview-prep-recursion
// https://www.w3resource.com/javascript-exercises/javascript-recursion-functions-exercises.php

// study object with tree using recursion
// remember "this"
// how to traverse in tree object in javascript

// study also Growing Function

// eloquent javascript page 109
// eloquent sandbox (https://eloquentjavascript.net/code)

// “There are two ways of constructing a software design: One way is
// to make it so simple that there are obviously no deficiencies, and the
// other way is to make it so complicated that there are no obvious
// deficiencies.”
// —C.A.R. Hoare, 1980 ACM Turing Award Lecture
