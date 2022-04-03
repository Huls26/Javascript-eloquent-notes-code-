// Minimum

// The previous chapter introduced the standard function Math.min that returns
// its smallest argument. We can build something like that now. Write a function
// min that takes two arguments and returns their minimum.

// function min(x, y) {
//     let minimum = Math.min(x, y);

//     return minimum
// }

// console.log(min(3, 2))

/* ===== Recursion =====

We’ve seen that % (the remainder operator) can be used to test whether a
number is even or odd by using % 2 to see whether it’s divisible by two. Here’s
another way to define whether a positive whole number is even or odd:
• Zero is even.
• One is odd.
• For any other number N, its evenness is the same as N - 2.
Define a recursive function isEven corresponding to this description. The
function should accept a single parameter (a positive, whole number) and return
a Boolean.
Test it on 50 and 75. See how it behaves on -1. Why? Can you think of a
way to fix this? ====== */

// function isEven(integer) {
//     if (!integer ) {
//         return true
//     } else if (integer === 1) {
//         return false
//     } else if (integer < 0) {
//         return isEven(integer + 2)
//     }

//     return isEven(integer - 2) 
// }

// console.log(isEven(50))
// console.log(isEven(75))
// console.log(isEven(-1))

// Bean counting

// You can get the Nth character, or letter, from a string by writing "string"[N].
// The returned value will be a string containing only one character (for example,
// "b"). The first character has position 0, which causes the last one to be found at
// position string.length - 1. In other words, a two-character string has length
// 2, and its characters have positions 0 and 1.
// 57
// Write a function countBs that takes a string as its only argument and returns
// a number that indicates how many uppercase “B” characters there are in the
// string.
// Next, write a function called countChar that behaves like countBs, except
// it takes a second argument that indicates the character that is to be counted
// (rather than counting only uppercase “B” characters). Rewrite countBs to
// make use of this new function.

// function countBs(string, Bs = 0, index = 0) {
//     if (string.length === index ) {
//         return Bs
//     }

//     if (string[index] === "B") {
//         Bs += 1
//     }

//     return countBs(string, Bs, index + 1)
// }

// function countBs(string) {
//     let totalBs = 0;

//     for (let index = 0; index < string.length; index++) {
//         if (string[index] === "B") {
//             totalBs += 1
//         }
//     }

//     return totalBs
// }

// console.log(countBs("Beach"))

// function countChar(string, char) {
//     let totalBs = 0;

//     for (let index = 0; index < string.length; index++) {
//         if (string[index] === char) {
//             totalBs += 1
//         }
//     }

//     return `${totalBs}, ${char}`
// }

// console.log(countChar("Jules", "J"))

// ============ chapter 4 data structure: arrays and object literals ================

// Exercises

// The sum of a range
// function range(start, end, step = start < end ? 1 : -1) {
//     let empty = [];

//     if (step > 0) {
//         for (let i = start; i <= end; i += step) empty.push(i)
//     } else {
//         for (let i = start; i >= end; i+= step) {
//             empty.push(i)
//         }
//     }

//     return empty
// }

// console.log(range(10, 1, -2))

// function sumTotal(array) {
//     let total = 0;

    // for (let index = 0; index < array.length; index++) {
    //     total = total + array[index];
    // }

//     array.forEach(element => {
//         total += element
//     })

//     return total
// }

// console.log(sumTotal(range(10, 1, -2)))

// Reversing an array

// function reverseArrays(array) {
//     let empty = [];

//     for (let index = array.length -1 ; index >= 0; index--) {
//         empty.push(array[index])
//     }

//     return empty
// }

// console.log(reverseArrays(range(1, 6)))

// function reverseArrayInPlace(array) {
//     let half = Math.floor(array.length / 2);

//     for (let index = 0; index < half; index++) {
//         let old = array[index];
//         array[index] = array[array.length - 1 - index];
//         array[array.length - 1 - index] = old;   
//     }

//     return array
// }

// console.log(reverseArrayInPlace(range(1, 7)))

// A list

// array to list
// function arrayToList(array) {
//     let list = null;

//     for (let index = array.length -1 ; index >= 0; index-- ) {
//         list = {value: array[index], rest: list}
//     }

//     return list
// }

// console.log(arrayToList(range(1, 3)))

// list to array

// function listToArray(list) {
//     let empty = [];

//     for (let rest = list; rest; rest = rest.rest) {
//         empty.push(rest.value)
//     }

//     return empty
// }

// let list = {
//     value: 1,
//     rest: {
//         value: 2,
//         rest: {
//             value: 3,
//             rest: null,
//         }
//     }
// };

// console.log(listToArray(list))
// console.log(listToArray(arrayToList(range(1, 6))))

// function prepend(element, list) {
//     return {value: element, rest: list}
// }

// console.log(prepend(30, prepend(20, null)))

// function nth(list, number) {
//     if (!list) return undefined
//     if (number === 0) {
//         return list.value
//     }

//     return nth(list.rest, number - 1)
// }

// console.log(nth(arrayToList(range(1, 3)), 2))

// Deep comparison
// function deepEqual(a, b) {
//     if (a === b) return true
    
//     if (typeof a !== "object" || !(a && b) || a.length !== b.length) {
//         return false
//     }

//     let key1 = Object.keys(a), key2= Object.keys(b);
    
//     for (let key of key1) {
//         if (!key2.includes(key) || !deepEqual(a[key], b[key])) {
//             return false
//         }
//     }

//     return true
// }

// let b = {
//     value: 1,
//     rest: {
//         value: 2,
//         rest: {
//             value: 3,
//             rest: [1, 2, 3],
//         }
//     }
// };

// console.log(deepEqual([], [1]))

// let obj = {here: {is: "an"}, object: 2};
// console.log(deepEqual(obj, obj));
// // → true
// console.log(deepEqual(obj, {here: 1, object: 2}));
// // → false
// console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true

// console.log(Boolean(non))

// session 0



// ================= array and object literals exercise ================

// function array_Clone(array) {
//     return [...array]
// }

// console.log(array_Clone([1, 2, 4, 0]));
// console.log(array_Clone([1, 2, [4, 0]]));

// function firstItem(array, n = 1) {
//     let empty = [];

//     if (n < 0) {
//         return empty
//     }

//     for (let index = 0; index < n; index++) {
//         if (array[index] === undefined) {
//             return empty
//         } else {
//             empty.push(array[index])
//         }
        
//     }

//     return empty
// }

// console.log(firstItem([7, 9, 0, -2]));
// console.log(firstItem([],3));
// console.log(firstItem([7, 9, 0, -2],3));
// console.log(firstItem([7, 9, 0, -2],6));
// console.log(firstItem([7, 9, 0, -2],-3));

// function last(array, n) {
//     let empty = [];

//     if (n === null) {
//         array.push(array[array.length -1])
//         return empty
//     }

//     n = n * -1
//     empty.push(...array.slice(n))

//     return empty
// }

// console.log(last([7, 9, 0, -2]));
// console.log(last([7, 9, 0, -2],3));
// console.log(last([7, 9, 0, -2],6));

// myColor = ["Red", "Green", "White", "Black"];

// console.log(myColor.join("+"))

// insert dashes when even number
// function insertDashes() {
//     let num = prompt().split("");
//     let empty = [];
//     let condition = false;

//     num.forEach((element, index )=> {
//         console.log(condition)
//         if (parseInt(element) % 2 === 0) {
//             if (parseInt(num[index - 1]) % 2 !== 0 && parseInt(num[index + 1]) % 2 !== 0) {
//                 empty.push("-", element, "-")
//             } else if (parseInt(num[index + 1]) % 2 === 1 && condition) {
//                 empty.push(element, "-")
//                 condition = false;
//             } else if (parseInt(num[index - 1]) % 2 ===1 || num[index-1] === undefined) {
//                 empty.push("-", element)
//                 condition = true 
//             } else {
//                 empty.push(element)
//             }
//         } else {
//             empty.push(element)
//         }
       
//     })

//     return empty.join("")
// }

// console.log(insertDashes())

// ================= chapter 5: Higher-Order Function =============

// ============ 5.1 Flattening ================

// let arrays = [[1, 2, 4], [4, 5], [6]]

// function flattening(array) {
//     let flat = array.reduce((array, element) => {
//         return array.concat(element)
//     }, [])

//     let flatAgain = array.reduce((array, element) => {
//         array.push(...element)
//         return array
//     })

//     return [flatAgain, flat]
// }

// console.log(flattening(arrays))

// ================== 5.2 Your own loop ===============

// function loop(n, test, update, body) {
//     if (!test(n)) return  ;

//     body(n);
//     return loop(update(n), test, update, body)
// }

// loop(3, n => n > 0, n => n - 1, console.log)

// function loop2(n, test, update, body) {
//     let i = n;

//     while (test(i)) {
//         body(i);
//         i = update(i);
//     }
// }

// loop2(3, n => n > 0, n => n - 1, console.log)

// ================== 5.3 Everything ================
// function every(array, test) {
//     for (let element of array) {
//         if (!test(element)) return false
//     }

//     return true
// }

// console.log(every([1, 3, 5], n => n < 10));
// // → true
// console.log(every([2, 4, 16], n => n < 10));
// // → false
// console.log(every([], n => n < 10));
// → true

// function everySome(array, test) {
//     // for (let element of array) {
//     //     if (![element].some(test)) return false
//     // }

//     // return true
//     let com = array.some(element => {
//         return test(element) === false
//     })

//     if (!com) {
//         return true
//     } else {
//         return false
//     }
// }

// console.log(everySome([1, 3, 5], n => n < 10));
// // // → true
// console.log(everySome([2, 4, 16], n => n < 10));
// // → false
// console.log(everySome([], n => n < 10));
// // → true

// console.log(range(1, 5))

// ============= Chapter 6 The Secret life of the Object

// ======== A Vector Type =========
// class Vec {
//     constructor(x, y) {
//         this.x = x;
//         this.y = y
//     }

//     plus(vector) {
//         vector.x = this.x + vector.x;
//         vector.y = this.y + vector.y;

//         return vector
//     }

//     minus(vector) {
//         vector.x = this.x - vector.x;
//         vector.y = this.y - vector.y;

//         return vector
//     }

//     get length() {
//        return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2))
//     }
// }

// let vec1 = new Vec(2, 3);

// // console.log(vec1)
// console.log(new Vec(1, 2).plus(new Vec(2, 3)));
// // → Vec{x: 3, y: 5}
// console.log(new Vec(1, 2).minus(new Vec(2, 3)));
// // → Vec{x: -1, y: -1}
// console.log(new Vec(3, 4).length);

// ========= answer =============
// class Vec {
//     constructor(x, y) {
//       this.x = x;
//       this.y = y;
//     }
  
//     plus(other) {
//       return new Vec(this.x + other.x, this.y + other.y);
//     }
  
//     minus(other) {
//       return new Vec(this.x - other.x, this.y - other.y);
//     }
  
//     get length() {
//       return Math.sqrt(this.x * this.x + this.y * this.y);
//     }
//  }
  
//   console.log(new Vec(1, 2).plus(new Vec(2, 3)));
//   // → Vec{x: 3, y: 5}
//   console.log(new Vec(1, 2).minus(new Vec(2, 3)));
//   // → Vec{x: -1, y: -1}
//   console.log(new Vec(3, 4).length);
//   // → 5

// =========== Groups ============
// class Group {
//     constructor() {
//         this.container = null;
//     }

//     add(value) {
//         if (!this.container.includes(value)) {
//             this.container.push(value)
//         }
//     }

//     delete(value) {
//         let index = this.container.indexOf(value)
//         this.container.splice(index, 1)
//     }   

//     has(value) {
//         return this.container.includes(value)
//     }

//     static from(iterable) {
//         let group = new Group();
//         group.container = iterable;

//         return group
//     }
// }

// let group = Group.from([10, 20]);
// console.log(group.has(10));
// // → true
// console.log(group.has(30));
// // → false
// group.add(10);
// group.delete(10);
// console.log(group.has(10));
// // → false

// ============= answer =============
// class Group {
//     constructor() {
//       this.members = [];
//     }
  
//     add(value) {
//       if (!this.has(value)) {
//         this.members.push(value);
//       }
//     }
  
//     delete(value) {
//       this.members = this.members.filter(v => v !== value);
//     }
  
//     has(value) {
//       return this.members.includes(value);
//     }
  
//     static from(collection) {
//       let group = new Group;
//       for (let value of collection) {
//         group.add(value);
//       }
//       return group;
//     }
// }
  
// let group = Group.from([10, 20]);
// console.log(group.has(10));
// // → true
// console.log(group.has(30));
// // → false
// group.add(10);
// group.delete(10);
// console.log(group.has(10));

// ============ Iterable Groups ============
// Group.prototype[Symbol.iterator] = function() {
//     let index = 0;
//     return {
//         next() {
//             // console.log(this.x.container.length)
//            return {value: this.x.container[index], done: (index++ >= this.x.container.length)}
//         },
//         x: this
//     }
// }

// for (let value of Group.from(["a", "b", "c"])) {
//     console.log(value);
// }
// → a
// → b
// → c

// ============== answer ==================
// class Group {
//     constructor() {
//       this.members = [];
//     }
  
//     add(value) {
//       if (!this.has(value)) {
//         this.members.push(value);
//       }
//     }
  
//     delete(value) {
//       this.members = this.members.filter(v => v !== value);
//     }
  
//     has(value) {
//       return this.members.includes(value);
//     }
  
//     static from(collection) {
//       let group = new Group;
//       for (let value of collection) {
//         group.add(value);
//       }
//       return group;
//     }
  
//     [Symbol.iterator]() {
//       return new GroupIterator(this);
//     }
// }
  
// class GroupIterator {
//     constructor(group) {
//       this.group = group;
//       this.position = 0;
//     }
  
//     next() {
//       if (this.position >= this.group.members.length) {
//         return {done: true};
//       } else {
//         let result = {value: this.group.members[this.position],
//                       done: false};
//         this.position++;
//         return result;
//       }
//     }
// }
 
// let n = Group.from(["a", "b", "c"])[Symbol.iterator]()
// console.log(n)
// console.log(n.next())
// console.log(n.next())
// console.log(n.next())
// console.log(n.next())
// for (let value of Group.from(["a", "b", "c"])) {
// console.log(value);
// }
// → a
// → b
// → c
// =============== Borrowing a method ================
// let maps = {one: true, two: true, hasOwnProperty: true}

// Fix this call
// console.log(maps.hasOwnProperty("one"));
// → true

// ================ answer ==================
// console.log(Object.prototype.hasOwnProperty.call(maps, "one "))
// console.log(maps.hasOwnProperty)

// // alternative to call method
// function calls(thisArg, ...rest) {
//     let index = 0
//     let condition = false
//     for (let element in thisArg) {
//         if (element === rest[index]) {
//             condition = true;
//         }
//         index++
//     }

//     return condition
// }

// console.log(calls(maps, "one"))
// console.log(maps.hasOwnProperty)

// ===== a vector type =====
// class Vec {
//     constructor(x, y) {
//         this.x = x;
//         this.y = y
//     }

//     plus(vector) {
//         return new Vec(this.x + vector.x, this.y + vector.y)
//     }

//     minus(vector) {
//         return new Vec(this.x - vector.x, this.y - vector.y)
//     }

//     get length() {
//         return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2))
//     }
// }

// console.log(new Vec(1, 2).plus(new Vec(2, 3)))
// console.log(new Vec(1, 2).minus(new Vec(2, 3)));
// console.log(new Vec(3, 4).length);

// class Group {
//     constructor() {
//         this.container = null;
//     }

//     add(value) {
//         if (!this.has(value)) {
//             this.container.push(value)
//         }
//     }

//     delete(value) {
//         let index = this.container.indexOf(value)
//         this.container.splice(index, 1)
//     }

//     has(value) {
//         return this.container.includes(value)
//     }

//     static from(array) {
//         if (Array.isArray(array)) {
//             let news = new Group();
//             news.container = array

//             return news
//         }
//     }
// }

// let group = Group.from([10, 20]);
// console.log(group.has(10));
// console.log(group.has(30));
// → false
// group.add(30);
// group.delete(10);
// console.log(group.has(10));
// → false
// console.log(group)

// ==== iterable groups ====
// class IteratorGroup {
//     constructor(group) {
//         this.group = group
//         this.index = 0;
//     }

//     next() {
//         if (this.index > this.group.container.length -1) {
//             return {done: true}
//         }

//         let value = this.group.container[this.index]
//         this.index++
//         return {value, done: false}
//     }
// }

// Group.prototype[Symbol.iterator] = function() {
//     return new IteratorGroup(this) 
// }


// for (let value of Group.from(["a", "b", "c"])) {
//     console.log(value);
// }

// === borrowing method ===
// let map = {one: true, two: true, hasOwnProperty: true};

// console.log(Object.prototype.hasOwnProperty.call(map, "one"))


// last topic


// To try 
// https://www.youtube.com/watch?v=TznpOmv2BQM
// https://www.w3resource.com/javascript-exercises/javascript-array-exercises.php#EDITOR

// callback
// session 1
