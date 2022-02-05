// Question 1: Sum all numbers
// Write a function called sumRange. It will take a number and return the sum of all numbers from 1 up to the number passed in.

// Sample: sumRange(3) returns 6, since 1 + 2 + 3 = 6.

function sumRange(element) {
    // base case when the element become 0 it should return 0
    if (element === 0) {
        return 0
    }

    // recursive call 
    return element + sumRange(element - 1)
}

// console.log(sumRange(5))

// Question 2: Power function
// Write a function called power which takes in a base and an exponent. If the exponent is 0, return 1.

// Sample:

// console.log(power(2, 4)); // 16
// console.log(power(2, 3)); // 8
// console.log(power(2, 2)); // 4 
// console.log(power(2, 1)); // 2
// console.log(power(2, 0)); // 1

function power(base, exponent) {
    if (exponent === 0) {
        return 1
    }

    return base * power(base, exponent - 1)
}

// console.log(power(2, 4)); // 16
// console.log(power(2, 3)); // 8
// console.log(power(2, 2)); // 4 
// console.log(power(2, 1)); // 2
// console.log(power(2, 0)); // 1

// Question 3: Calculate factorial
// Write a function that returns the factorial of a number. As a quick refresher, a factorial of a number is the result of that number multiplied by the number before it, and the number before that number, and so on, until you reach 1. The factorial of 1 is just 1.

// Sample:

// factorial(5); // 5 * 4 * 3 * 2 * 1 === 120

function factorial(element) {
    if (element === 1 || element === 0) {
        return 1
    }

    return element * factorial(element-1)
}

// console.log(factorial(5))


// callback 

// function greeting(name) {
//     alert('Hello ' + name);
//   }
  
//   function processUserInput(callback) {
//     var names = prompt('Please enter your name.');
//     callback(names);
//   }
  
//   processUserInput(greeting);

// Question 4: Check all values in an array
// Write a function called all which accepts an array and a callback and returns true if every value in the array returns true when passed as parameter to the callback function

// Sample:

// var allAreLessThanSeven = all([1,2,9], function(num){
// 	return num < 7;
// });

// console.log(allAreLessThanSeven); // false

function all(array, callback, idx= 0) {
    let num = array[idx]
    
    if (!callback(num)) {
        return false
    }  

    if (idx === array.length - 1) {
        return true
    }

    return all(array, callback, idx + 1)
}


var allAreLessThanSeven = all([1,7,3], function(num){
	return num < 7;
});

// console.log(allAreLessThanSeven); // false 

function allArray(array, callback) {
    let num = array.pop();

    if (!callback(num)) {
        return false
    }

    if (!array.length) {
       return true 
    }

    return allArray(array, callback)
}

// console.log(allArray([1, 2, 3], function (num) { return num < 7 }))

var sampleAr = [2, 4, 10, [200, 4, [100, 99], 4], [3, 2, 99], 0];

function maximumNum(array, max = 0) {
    let newArray = array;
    let last = newArray.pop();

    if (!array.length) {
        return max
    } else if (Array.isArray(last)) {
        newArray.push(...last);
    } 
    
    if (last > max) {
        max = last;
    }

    return maximumNum(newArray, max)
}

console.log(maximumNum(sampleAr))

function findSolution(target) {
    function find(current, history) {
        if (current === target) {
            return history
        } else if (current > target) {
            return null
        }

        return find(current + 5, `${history} + 5`) || 
        find(current * 3, `${history} * 3`)
    }

    return find(1, "1")
}

// console.log(findSolution(13))

// Question 5: Product of an array
// Write a function called productOfArray which takes in an array of numbers and returns the product of them all

// Sample:

// var six = productOfArray([1,2,3]) // 6
// var sixty = productOfArray([1,2,3,10]) // 60

function productOfArray(array, index = 0) {
    if (index === array.length) {
        return 1
    }

    return array[index] * productOfArray(array, index + 1)
}

var six = productOfArray([1,2,3]) // 6
var sixty = productOfArray([1,2,3,10]) // 60

console.log(six)
console.log(sixty)

// Question 6: Search JS object
// Write a function called contains that searches for a value in a nested object. It returns true if the object contains that value.

// Sample:

// var nestedObject = {
//     data: {
//         info: {
//             stuff: {
//                 thing: {
//                     moreStuff: {
//                         magicNumber: 44,
//                         something: 'foo2'
//                     }
//                 }
//             }
//         }
//     }
// }

// let hasIt = contains(nestedObject, 44); // true
// let doesntHaveIt = contains(nestedObject, "foo"); // false

var nestedObject = {
    data: {
        info: {
            stuff: {
                thing: {
                    moreStuff: {
                        magicNumber: 43,
                        something: 'foo2'
                    }
                }
            }
        }
    },
    somethings: {
        range: 44, 
    }

}

let hasIt = contains(nestedObject, 44); // true
// let doesntHaveIt = contains(nestedObject, "foo"); // false

function contains(object, search) {
    for(var key in object){
		if(typeof object[key] === 'object'){
			return contains(object[key], search);
		}

		if (object[key] === search){
			return true;
		}
	}
	return false;

}

// console.log(hasIt)
// console.log(nestedObject)

let person = {
    name: "Jules Moreno",
    blogs: ["why mac & cheese rules", "10 things to make with marmite"],
    login: function () {
        console.log("Your are login")
    },

    logBlogs: function () {
        // for (let array in person.blogs) {
        //     console.log(person.blogs[array])
        // }

        console.log(this.blogs)
    }
}

// person.logBlogs()

let objectLiterals = {
    username: "huls",
    name: "Jules Moreno",
    hobby: ["playing drums", "playing guitar", "programming",],
    laptop: {
        brand: "asus",
        ram: "32gb",
        cpu: "Intel",
    },
    submit: function () {
        console.log(`${this.username} is confirm the account is added`)
    }

}

// for (let object in objectLiterals) {
//     if (objectLiterals[object] instanceof Object && (typeof objectLiterals[object] !== "function" && !Array.isArray(objectLiterals[object]))) {
//         console.log(object)
//         for (let detail in objectLiterals[object]) {
//             console.log(detail, objectLiterals[object][detail])
//         }
//     }
// }

 const tree = {
    title: "A",
     children: [
         {
             title: "B",
             children: [
                 {
                    title: "C",
                    children: [],
                },
                {
                    title: "a",
                    children: [],
                      
                }                         
             ]                          
         },                               
         {
             title: "D",
             children: [
                {
                    title: "b",
                    children: [],
                },
                {
                    title: "c",
                    children: [],
                }
            ]                   

         }
     ],
     
 }

function start(node) {
    console.log(node.title)
    if (node.children) {
        node.children.forEach(child => {
            console.log(child)
            return start(child)
        })
    }
}

// start(tree)

function runOne({title, children}) {
    console.log(title)

    children.forEach(child => {
        return runOne(child)
    })
    
}

// runOne(tree)

const root = {
    node: "arabica",
    children: [
      { 
          node: "heirloom", 
          children: [
            { node: "caturra", children: [] },
          ] 
      },
      {
        node: "bourbon",
        children: [
          { node: "caturra", children: [] },
          { node: "mokka", children: [] },
        ],
      },
      {
        node: "typica",
        children: [
          { node: "kona", children: [] },
          { node: "java", children: [] },
        ],
      },
    ],
  };

// function traverse({node, children}) {
//     console.group(node)

//     children.forEach(child => {
//             traverse(child)
//     })
    
//     console.groupEnd(node)
// }

// Question 7: Parse a multi-dimensional array
// Given a multi-dimensional integer array, return the total number of integers stored inside this array

// Sample:

// var seven = totalIntegers([[[5], 3], 0, 2, ['foo'], [], [4, [5, 6]]]); // 7

function totalIntegers(arrays, integer = 0, call = 0) {
    call = call + 1;
    // create a new copy of arrays
    let arrays2 = [...arrays]

    // check if the length of array is 0 if arrays is equal to 0 then return the integer
    // base case
    if (!arrays2.length) {
        console.log(call)
        return integer
    }

    // get the last element in the array
    let last = arrays2.pop();

    // check if the last element is array if array get the item inside the last then push to arrays2 then call the function with new arrays 
    if (Array.isArray(last)) {
        arrays2.push(...last)
        // return totalIntegers(arrays2, integer, call)
        // check if the last is a number then count
    } else if (typeof last === "number") {
        // return totalIntegers(arrays2, integer + 1, call)
        integer = integer + 1
    } 

    // call the function until the array length is 0
    // recursive call
    return totalIntegers(arrays2, integer, call)

}

// var seven = totalIntegers([[[5], 3], 0, 2, ['foo'], [], [4, [5, 6]]]); // 7

// console.log(seven)

// function totalIntegers(array, condition = true, callCount = 0) {
//     callCount = callCount + 1;
//     let newArray = [...array];
//     let empty = [];
//     let integer = 0;

//     console.log(newArray)
//     if (!condition) {
//         newArray.forEach(element => {
//             if (!isNaN(element)) {
//                 integer = integer + 1
//             }
//         })

//         console.log(callCount)
//         return integer
//     }

//     while (condition) {
//         condition = false

//         newArray.forEach(element => {
//             if (element instanceof Array) {
//                 empty.push(...element);
//                 condition = true;
//             } else {
//                 empty.push(element)
//             }
//         })

//         return totalIntegers(empty, condition, callCount)
//     }
// }

// Question 8:
// Write a function that sums squares of numbers in list that may contain more lists

// Sample:

// var l = [1,2,3]; 
// console.log(SumSquares(l)); // 1 + 4 + 9 = 14

// l = [[1,2],3]; 
// console.log(SumSquares(l)); // 1 + 4 + 9 = 14

// l = [[[[[[[[[1]]]]]]]]] 
// console.log(SumSquares(l)); // 1 = 1

// l = [10,[[10],10],[10]] 
// console.log(SumSquares(l)); // 100 + 100 + 100 + 100 = 400

function SumSquares(array, condition = true) {
    let empty = [];

    if (!condition) {
        console.log(array)
        let squares = array.reduce(function (acc, int) {
            let square = int * int
            // acc.push(square)
            // return acc
            return acc + square
        }, 0)
    
        return squares
    }

    while (condition) {
        condition = false;

        array.forEach(element => {
            if (Array.isArray(element)) {
                empty.push(...element);
                condition = true;
            } else {
                empty.push(element)
            }
        })

        return SumSquares(empty, condition)
    }
}

var l = [1,2,3]; 
console.log(SumSquares(l)); // 1 + 4 + 9 = 14

l = [[1,2],3]; 
console.log(SumSquares(l)); // 1 + 4 + 9 = 14

l = [[[[[[[[[1]]]]]]]]] 
console.log(SumSquares(l)); // 1 = 1

l = [10,[[10],10],[10]] 
console.log(SumSquares(l)); // 100 + 100 + 100 + 100 = 400

function sumSquares(array, total = 0) {
    if (!array.length) {
        return total
    }

    let last = array.pop()

    if (Array.isArray(last)) {
        array.push(...last)
    } else if (typeof last === "number") {
        let square = last * last;
        total = total +square
    }

    return sumSquares(array, total)
}

var l = [1,2,3]; 
console.log(sumSquares(l)); // 1 + 4 + 9 = 14

l = [[1,2],3]; 
console.log(sumSquares(l)); // 1 + 4 + 9 = 14

l = [[[[[[[[[1]]]]]]]]] 
console.log(sumSquares(l)); // 1 = 1

l = [10,[[10],10],[10]] 
console.log(sumSquares(l)); // 100 + 100 + 100 + 100 = 400


// Question 9:
// The function should return an array containing repetitions of the number argument. For instance, replicate(3, 5) should return [5,5,5]. If the times argument is negative, return an empty array.

// Sample:

// console.log(replicate(3, 5)) // [5, 5, 5]
// console.log(replicate(1, 69)) // [69]
// console.log(replicate(-2, 6)) // [].

function replicate(rep, num, array = []) {
    if (rep < 1) {
        return array
    }

    array.push(num)
    return replicate(rep - 1, num, array)
}

console.log(replicate(3, 5)) // [5, 5, 5]
console.log(replicate(1, 69)) // [69]
console.log(replicate(-2, 6)) // [].

// ============================================== //
// ============================================== //
// ---------------------------------------------- //

// sum array 
// get the sum of array 
var sumArray = [1, 2, 3, 4, 5, 6, 7];

// this function get the sum of array
let sumArrays = function (array, index = 0, total = 0) {
    // base case check when the index is equal to the length of array then return the total
    if (index > array.length -1 ) {
        return total
    }

    // recursive call
    // add 1 to index to run all the array element, then add to the total each element inside the array
    return sumArrays(array, index + 1, total + array[index])
}

// console.log(sumArrays(sumArray))

// sum nested array

var nestedarrays = [1, [2, 3], [[4]], 5];

function nestedArray(array, total = 0) {
    let newArray = [...array];
    
    // check if the newArray length is zero then return the total
    if (!newArray.length) {
        return total
    }

    let last = newArray.pop();

    if (Array.isArray(last)) {
        newArray.push(...last);
    } else if (typeof(last) === "number") {
        total = total + last;
    }    

    return nestedArray(newArray, total)
}

// console.log(nestedArray(nestedarrays))

// get the sum of the number 
// example sumBelow(10) === 45
function sumBelow(num, sum = 1, total = 0 ) {
    if (num === 1) {
        return total
    }

    return sumBelow(num - 1, sum + 1, total + sum )
}

console.log(sumBelow(10))
console.log(sumBelow(7))

// Get the integers within a range(x, y).
// example range(2, 9); // [3, 4, 5, 6, 7, 8]
// (1, 10); [2, 3, 4, 5, 6, 7, 8, 9]

function range(x, y, array = []) {
    let start = x + 1;

    if (start === y) {
        return array
    }

    array.push(start)

    return range(start, y, array)

}

console.log(range(2, 9))
console.log(range(1, 10))

// write a function reverse a string 
function reverse(string, reverseWord = "", index = 0) {
    if (index === string.length) {
        return reverseWord
    }

    reverseWord = string[index] + reverseWord ;

    return reverse(string, reverseWord, index + 1)

}

console.log(reverse("hello world"))
console.log(reverse("Full stack developer / Software Developer"))

// write a function that determine if the string is palindrome

function palindrome(string, reverse = "", index = 0) {
    if (string.length === index) {
        return reverse === string ? true: false
    }

    reverse = string[index] + reverse;

    return palindrome(string, reverse, index + 1)

}

console.log(palindrome("racecar"))
console.log(palindrome("hello"))
console.log(palindrome("qweewq"))

// write a function that multiplies two number
// math methods.

function multiply(x, y) {
    if (y === 1) {
        return x
    }

    return x + multiply(x, y - 1)
}

console.log(multiply(2, 3))
console.log(multiply(4, 3))


// compare two strings
// console.log(compareStr("mouse", "mouses")) === false
// console.log(compareStr("tomato", "tomato")) === true

function compareStr(str1, str2, idx = 0) {
    if (str1[idx] !== str2[idx]) {
        return false
    } else if (idx === str2.length) {
        return true
    }

    return compareStr(str1, str2, idx + 1)
}

console.log(compareStr("mouse", "mouses"));
console.log(compareStr("tomato", "tomato"))

// reverse the order of an array 
// [1, 2, 3, 4, 5] === [5, 4, 3, 2, 1]

function reverseArr(array, revArr = []) {
    let newArray = [...array]
    let last = newArray.pop()

    if (array.length === 0) {
        return revArr
    }

    revArr.push(last);

    return reverseArr(newArray, revArr)
}

console.log(reverseArr([1, 2, 3, 4, 5]))

let arraySample = [1, 2, 3, 4, 5, 1]
let reverseArray = arraySample.reduce((acc, item) => {
    acc.unshift(item)
    return acc
}, [])

console.log(reverseArray)

console.log(replicate(3, 5)) // [5, 5, 5]
// console.log(replicate(1, 69)) // [69]
// console.log(replicate(-2, 6)) // []

function replicate(times, number){
	if(times <= 0) return [];

    let concat = [number].concat(replicate(times - 1, number));
    console.log(concat)
	return concat;
}

// var l = [1,2,3]; 
// console.log(SumSquares(l)); // 14

l = [[1,2],3]; 
console.log(SumSquares(l)); // 14

// l = [[[[[[[[[1]]]]]]]]] 
// console.log(SumSquares(l)); // 1

// l = [10,[[10],10],[10]] 
// console.log(SumSquares(l)); // 400

function SumSquares(array){
	if(array.length === 0) return 0;
	let total = 0;

	for(let i = 0; i < array.length; i++){
        console.log(array[i])
		if(Array.isArray(array[i])){
			total += SumSquares(array[i]);
		} else {
			total += array[i] * array[i];
		}
		
	}

    console.log(`${total} ----`)
	return total;
}

let user = {
    name: "Jules",
    address: {
        personal: {
            city: "Manila",
            area: "Majra"
        },
        office: {
            city: "Hyderabew",
            area: {
                landmark: "Church"
            }
        }
    }
}

let emptyObj = {};

function objTraverse(object, objectname) {
    for (let key in object) {
        if (object[key] instanceof Object) {
            objTraverse(object[key], `${objectname}_${key}`)
        }

        emptyObj[`${objectname}_${key}`] = object[key]
    }
}

let user1 = {
    name: "Jules",
    address: {
        personal: {
            city: "Manila",
            area: "Majra"
        },
        office: {
            city: "Hyderabew",
            area: {
                landmark: "Church"
            }
        }
    }
}

objTraverse(user1, "User")
console.log(emptyObj)

// Job interview recursion study

// ---> https://www.codingame.com/playgrounds/5422/js-interview-prep-recursion

// ---> https://dev.to/codeguppy/practice-recursion-in-javascript-with-these-8-coding-challenges-for-beginners-25bm

// https://www.youtube.com/watch?v=EC5La9VFUBU

// study also Growing Function