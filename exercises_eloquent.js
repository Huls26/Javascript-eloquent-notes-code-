"use strict"
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


// ============= Chapter 7 Project: A Robot ===========
// var roads = [
//     "Alice's House-Bob's House",   "Alice's House-Cabin",
//     "Alice's House-Post Office",   "Bob's House-Town Hall",
//     "Daria's House-Ernie's House", "Daria's House-Town Hall",
//     "Ernie's House-Grete's House", "Grete's House-Farm",
//     "Grete's House-Shop",          "Marketplace-Farm",
//     "Marketplace-Post Office",     "Marketplace-Shop",
//     "Marketplace-Town Hall",       "Shop-Town Hall"
// ];

// function buildGraph(roads) {
//     let graph = Object.create(null);
//     function group(from, to) {
//         if (graph[from]) {
//             graph[from].push(to);
//         } else {
//             graph[from] = [to];
//         }
//     }

//     for (let element of roads) {
//         let [from, to] = element.split("-");
//         group(from, to)
//         group(to, from)
//     }

//     return graph
// }

// let roadGraph = buildGraph(roads);

// class VillageState {
//     constructor(place, parcels) {
//       this.place = place;
//       this.parcels = parcels;
//     }
  
//     move(destination) {
//       if (!roadGraph[this.place].includes(destination)) {
//         return this;
//       } else {
//         let parcels = this.parcels.map(p => {
//           if (p.place != this.place) return p;
//           return {place: destination, address: p.address};
//         }).filter(p => p.place != p.address);
//         return new VillageState(destination, parcels);
//       }
//     }
//   }

// function runRobot(state, robot, memory) {
//     for (let i = 0;; i++) {
//         if (state.parcels.length === 0) {
//           console.log(`Done in turns ${i}`)
//           break;
//         }
//         let action = robot(state, memory)
//         state = state.move(action.direction);
//         memory = action.memory;
//         // console.log(`Move to ${action.direction}`)
//     }
// }

// VillageState.random = function(parcelCount = 5) {
//     let parcels = [];
//     for (let i = 0; i < parcelCount; i++) {
//       let address = randomPick(Object.keys(roadGraph));
//       let place;
//       do {
//         place = randomPick(Object.keys(roadGraph));
//       } while (place == address);
//       parcels.push({place, address});
//     }
//     return new VillageState("Post Office", parcels);
//   };

// function randomPick(array) {
//     let index = Math.floor(Math.random() * array.length);
//     return array[index]
// }

// const mailRoute = [
//     "Alice's House", "Cabin", "Alice's House", "Bob's House",
//     "Town Hall", "Daria's House", "Ernie's House",
//     "Grete's House", "Shop", "Grete's House", "Farm",
//     "Marketplace", "Post Office"
// ];

// function routeRobot(state, memory) {
//     if (memory.length === 0) {
//         memory = mailRoute;
//     }

//     return {direction: memory[0], memory: memory.slice(1)}
// }

// function findRoute(graph, from, to) {
//     let work = [{at: from, route: []}];
//     for (let i = 0; i < work.length; i++) {
//       let {at, route} = work[i];
//       for (let place of graph[at]) {
//         if (place == to) return route.concat(place);
//         // remember and review this code
//         // backtracking
//         if (!work.some(w => w.at == place)) {
//           work.push({at: place, route: route.concat(place)});
//         }
//       }
//     }
// }

// function goalOrientedRobot({place, parcels}, route) {
//     if (route.length == 0) {
//       let parcel = parcels[0];
//       if (parcel.place != place) {
//         route = findRoute(roadGraph, place, parcel.place);
//       } else {
//         route = findRoute(roadGraph, place, parcel.address);
//       }
//     }
//     return {direction: route[0], memory: route.slice(1)};
// }

// ========= Measuring a robot ========= 
// function compareRobots(robot1, memory1, robot2, memory2) {
//     function runRobot(state, robot, memory) {
//         for (let i = 0;; i++) {
//             if (state.parcels.length === 0) {
//                 return i
//             }
//             let action = robot(state, memory)
//             state = state.move(action.direction);
//             memory = action.memory;
//         }
//     }

//     let total1 = 0, total2 =  0;

//     for (let i = 1; i <= 100; i++) {
//       let generate = VillageState.random(1)
//       total1 += runRobot(generate, robot1, memory1)
//       total2 += runRobot(generate, robot2, memory2)
//     }

//   console.log(`Robot 1 needed ${total1 / 100} steps per task`)
//   console.log(`Robot 2 needed ${total2 / 100}`)
// }

// compareRobots(routeRobot, [], goalOrientedRobot, []);

// =========== Robot Efficiency ===========
// function lazyRobot({place, parcels}, route) {
//   if (route.length == 0) {
//     // Describe a route for every parcel
//     let routes = parcels.map(parcel => {
//       if (parcel.place != place) {
//         return {route: findRoute(roadGraph, place, parcel.place),
//                 pickUp: true};
//       } else {
//         return {route: findRoute(roadGraph, place, parcel.address),
//                 pickUp: false};
//       }
//     });

//     // This determines the precedence a route gets when choosing.
//     // Route length counts negatively, routes that pick up a package
//     // get a small bonus.
//     function score({route, pickUp}) {
//       return (pickUp ? 0.5 : 0) - route.length;
//     }
//     route = routes.reduce((a, b) => {
//       return score(a) > score(b) ? a : b}).route;
//   }

//   return {direction: route[0], memory: route.slice(1)};
// }

// runRobot(VillageState.random(1), lazyRobot, [])


// ========== Persistent Group ========== 
// class PGroup {
//   constructor(member) {
//     this.member = member;
//   }

//   add(value) {
//     if (this.has(value)) return this;
//     return new PGroup(this.member.concat(value))
//   }

//   delete(value) {
//     if (!this.has(value)) return this;
//     return new PGroup(this.member.filter(element => element !== value))
//   }

//   has(value) {
//     return this.member.includes(value)
//   }

//   static empty = new PGroup([])
// }


// let a = PGroup.empty.add("a");
// let ab = a.add("b");
// let b = ab.delete("a");

// console.log(b.has("b"));
// // → true
// console.log(a.has("b"));
// // → false
// console.log(b.has("a"));
// // → false
// console.log(a)


// =============== chapter 8: Bugs and Errors ===============

// ========= 8.1 Retry ===========
// class MultiplicatorUnitFailure extends Error {}

// function primitiveMultiply(a, b) {
//   if (Math.random() < 0.2) {
//     return a * b;
//   } else {
//     throw new MultiplicatorUnitFailure("Klunk");
//   }
// }

// function reliableMultiply(a, b) {
//   // Your code here.
//     let condition = true;
//     while (condition) {
//         condition = false;
//         try {
//             return primitiveMultiply(a, b)
//         } catch(error) {
//             condition = true
//             if (!(error instanceof MultiplicatorUnitFailure)) throw error;

//         }
//     } 
  
// }

// console.log(reliableMultiply(8, 8));

// // → 64

// // =============== The locked box ===============
// const box = {
//   locked: true,
//   unlock() { this.locked = false; },
//   lock() { this.locked = true;  },
//   _content: [],
//   get content() {
//     if (this.locked) throw new Error("Locked!");
//     return this._content;
//   }
// };

// //my answer
// // function withBoxUnlocked(body) {
// //   try {
// //     box.unlock()
// //     body()
// //   } finally {
// //     box.lock()
// //   }
// // }

// // flaws i see is that when the locked is false the lock is still false after is it call the body
// function withBoxUnlocked(body) {
//   let locked = box.locked;
//   if (!locked) {
//     return body();
//   }

//   box.unlock();
//   try {
//     return body();
//   } finally {
//     box.lock();
//   }
// }

// withBoxUnlocked(function() {
//   box.content.push("gold piece");
// });

// try {
//   withBoxUnlocked(function() {
//     throw new Error("Pirates on the horizon! Abort!");
//   });
// } catch (e) {
//   console.log("Error raised: " + e);
// }

// console.log(box.locked);
// → true

// =============== chapter 14: The Document Object Model ===============

// ============ 14.1 Build a table ============
// const MOUNTAINS = [
//     {name: "Kilimanjaro", height: 5895, place: "Tanzania"},
//     {name: "Everest", height: 8848, place: "Nepal"},
//     {name: "Mount Fuji", height: 3776, place: "Japan"},
//     {name: "Vaalserberg", height: 323, place: "Netherlands"},
//     {name: "Denali", height: 6168, place: "United States"},
//     {name: "Popocatepetl", height: 5465, place: "Mexico"},
//     {name: "Mont Blanc", height: 4808, place: "Italy/France"}
// ];

// table cells
// let container = document.querySelector("#mountains");
// let ta = document.createElement("table");
// container.appendChild(ta);
// ta.className = "table";
// ta.id = "table";
// let table = document.getElementById("table");


// // heading cells
// function header() {
//     let tagRows = document.createElement("tr");

//     for (let header of Object.keys(MOUNTAINS[0])) {
//         let th = document.createElement("th");
//         let text = document.createTextNode(header);
//         th.appendChild(text);
//         tagRows.appendChild(th);
//     }

//     table.appendChild(tagRows);
// }

// regular cells 
// function regularCells() {
//     for (let cell of MOUNTAINS) {
//         let tagRows = document.createElement("tr");
//         for (let description of Object.values(cell)) {
//             let td = document.createElement("td");
//             td.innerHTML = description;
//             tagRows.appendChild(td);   
//         }
//         table.appendChild(tagRows)
//     }
// }
// header();
// regularCells();
// let th = document.querySelector("th");
// let td = document.querySelector("td");
// th.style.textAlign = "right"
// td.style.textAlign = "right"

// ============ 14.2 Elements by tag name ============
// function byTagName(node, tagName, container = []) {
//     if (node.nodeType === Node.ELEMENT_NODE) {
//         for (let child of node.childNodes) {
//             if (child.nodeName === tagName.toUpperCase()) {
//                 container.push(child)
//             } else {
//                 byTagName(child, tagName, container)
//             }
//         }
//     } 
    
//     return container
// }

// console.log(byTagName(document.body, "h1").length);
// // → 1
// console.log(byTagName(document.body, "span").length);
// // → 3
// let para = document.querySelector("p");
// console.log(byTagName(para, "span").length);
// → 2

// ============ 14.2 Elements by tag name ============

// this is what 7 months of coding looks like
// let cat = document.querySelector("#cat");
// let hat = document.querySelector("#hat");

// let angle = 0;
// let lastTime = null;

// // create a parent div
// let parentDiv = document.createElement("div");
// parentDiv.appendChild(cat);
// parentDiv.appendChild(hat);

// document.body.appendChild(parentDiv)
// parentDiv.style.position = "absolute"

// new cat and hat
// cat.src = "img/cat copy.jpeg"
// hat.src = "img/hat-2.jpg"


// parentDiv set up
// function animate(time) {
//   if (lastTime != null) angle += (time - lastTime) * 0.001;
//   lastTime = time;
//   parentDiv.style.top = (Math.sin(angle) * 40 + 40) + "px";
//   parentDiv.style.left = (Math.cos(angle) * 200 + 230) + "px";

//   hat.style.top = (Math.sin(Math.PI * angle) * 100) + "px";
//   hat.style.left = (Math.cos(Math.PI * angle) * 120) + "px";

//   requestAnimationFrame(animate);
// }
// requestAnimationFrame(animate);

// console.log(typeof "1996")

// =============== chapter 15: Handling Events ===============


// ============ 15.1 Ballon ============
// make this cleaner composability
// before
// let ballon = document.getElementsByTagName("p")[0];
// let size = 16

// window.addEventListener("keydown", event => {
//     console.log(event)
//     if (event.key === "ArrowUp") {
//         increment();
//     } else if (event.key === "ArrowDown") {
//         decrement();
//     }
// })

// function increment() {
//     let percentage = size * .10;
//     size = size + percentage;
//     ballon.style.fontSize = `${size}px`
// }

// function decrement() {
//     let percentage = size * .10;
//     size = size - percentage;
//     ballon.style.fontSize = `${size}px`
// }

// after 
// let ballon = document.getElementsByTagName("p")[0];
// let machine = ballonMachine();

// window.addEventListener("keydown", event => {
//     machine(event.key);
// })

// function ballonMachine() {
//     let size = ballon.style.fontSize;
//     if (!ballon.style.fontSize) {
//         size = 16
//     };
    
//     return key => {
//         let per;
//         if (key === "ArrowUp") {
//             per = .10;
//         } else if (key === "ArrowDown") {
//             per = -.10;
//         }

//         let percentage = size * per;
//         size = size + percentage;
//         ballon.style.fontSize = `${size}px`
//     }
// }

// ============ 15.2 Mouse trail ============


window.addEventListener("mousemove", event => {
    let {X, Y} = {X: event.clientX, Y: event.clientY};

    queue(X, Y, (previous, current) => {  
        // basically increment or decrement the element      
        let trailMarks = []
        function recursion(previous, current, length) {
            let [previousX, previousY] = previous;
            let [currentX, currentY] = current;
        
            trailMarks.push([previousX, previousY])
        
            if (previousX === currentX && previousY === currentY) {
                return trailMarks
            }
            
            if (previousX < currentX) {
                previousX++
            } else if (previousX > currentX) {
                previousX--
            }
        
            if (previousY < currentY) {
                previousY++
            } else if (previousY > currentY) {
                previousY--
            }
        
            return recursion([previousX, previousY], current, length)
        }

        recursion(previous, current)
        return trailMarks
    });

});

let queue = trails();

function trails() {
    let queue = [];
    
    return (clientX, clientY, callback) => {
        let trace = [];
        // push to queue
        queue.push([clientX, clientY]);
        // get the current and prev of queue
        let previous = queue[queue.length - 2];
        let current = queue[queue.length - 1];

        // cheat for not to make error
        if (!previous) {
            previous = current;
        }

        // get the trailmarks
        trace = trace.concat(callback(previous, current));

        for (let element of trace) {
            let [x, y] = element;
            let trail = document.createElement("div");
            trail.className = "trail";
            trail.style.left = (x - 4) + "px";
            trail.style.top = (y - 4) + "px";
            document.body.appendChild(trail);
        }
    }
}


// last topic

// To try 
// https://www.youtube.com/watch?v=TznpOmv2BQM
// https://www.w3resource.com/javascript-exercises/javascript-array-exercises.php#EDITOR

// callback
// session 1
