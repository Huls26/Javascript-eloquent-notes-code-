// yow men you gotta put this on github also study this
// study and put a comment on this

// function chunkArray(arr, len) {
//     let chunk = [];

//     // for (let k = 0; k < arr.length; k++) {
//     //     let value = 0;
//     //     for (let i = 0; i < Math.ceil(arr.length / len); i++) {
//     //         let inside = [];
//     //         for (let j = 0; j < len; j++) {
//     //             if (arr[value] === arr[arr.length -1]) {
//     //                 inside[j] = arr[value]
//     //                 break;
//     //             } else {
//     //                 inside[j] = arr[value]
//     //                 value++
//     //             }
                
//     //         }
//     //         chunk[i] = inside
//     //     }
//     // }
    
//     // return chunk

//       // make a array inside chunk 
//     // the length of an array should be equal to len
//     // the value or item of each array in the sequence of element of arr

//     arr.forEach(element => {
//         let last = chunk[chunk.length -1]
//         console.log(chunk[chunk.length -1])

//         if (!last || last.length === len ) {
//             chunk.push([element]);
//         } else {
//             last.push(element)
//         }
       
//     })

// }  

// console.log(chunkArray([1, 2, 3, 4, 5, 6, 7,10], 2))

// let why = [1, 2, 3, 4, 5, 6, 9, 9];
// let chunk = 2;
// let newArray =[];
// let value = Math.ceil(why.length/chunk)

// for (let i = 0; i < value ; i++) {
//     let splice = why.splice(0, chunk);
//     newArray.push(splice);
//     console.log(splice);
// }
    
// console.log(newArray)
// flatenArray 
// example: [[1, 2], [3, 4], [5, 6], [9, 9]] === [1, 2, 3, 4, 5, 6, 9, 9]

// function flatenArray(arr) {
//     let flaten = [];

//     // this code will run the length of arr
//     // for (let i = 0; i < arr.length; i++) {
//     //     // this will run the arr child length
//     //     let type = (typeof arr[i])
//     //     // identify if arr has a single number or array 
//     //     if (type === 'object') {
//     //         for (let j = 0 ; j <arr[i].length; j++) {
//     //             // call each value inside the multidimensional array and push to flaten
//     //             flaten.push(arr[i][j]);
//     //         }
//     //     } else {
//     //         flaten.push(arr[i])
//     //     }
       
//     // }

//     // ============== // ================

//     // arr.forEach(element =>{
//     //     element.forEach(child => {
//     //         flaten.push(child)
//     //     })
//     // })

//     // ============== // ================

//     // for (let i = arr.length; i > 0 ; i--) {
//     //     let last = arr[arr.length - i];
//     //     last.forEach(element => flaten.push(element))
//     // }

//     // flaten array using spread operator

//     // ============== // ================
//     let empty = [];    
//     // this will run through the arr and identify if each item is within array 
//      for (let flaten in arr) {
//          // identity if the item is array or number
//          if (Array.isArray(arr[flaten])) {
//             // if the item is array this will spread and push the item to the empty string
//            empty.push(...arr[flaten]);
//          } else {
//              // all non array it push explicitly to empty
//              empty.push(arr[flaten]);
//          }
//      }

//     // ============== // ================

//     arr.reduce((current, previous) => {
//         return 
//     })

//     return flaten
// }

// console.log(flatenArray([1, [2, 3], [4, 5], [6, 7], 9]))

// ========== // =========== // 

// let sample = [1, 20, 2, 9, 2, 5, 6, 2, 3];

// const totalValue = sample.reduce((total, item) => {
//     if (total > item) {
//         return total = total;
//     } else {
//         return total = item
//     }
    
// })

// this will count the reapeting number inside the array 
// example: {1: 1, 4: 2, 5: 3, 8: 6}
// let total = sample.reduce((totals, item) => {
//      if (totals[item]) {
//          totals[item] += 1
//      } else {
//          totals[item] = 1
//      }

//      return totals
// }, {})


// console.log(total)

// let object = [
//     { id: "1", name: "Leigh", age: 35 },
//     { id: "2", name: "Jenny", age: 30 },
//     { id: "3", name: "Heather", age: 28 },
// ]

// let result;

// result = object.reduce((acc, person) => { 
    
//     return [...acc, acc.push(person.name)]
// }

// , []);

// console.log(result)


// for (let add in object) {
    
//     if (object[add]) {
//         console.log(Boolean(object[object.length + 1]))
//     } 
// }

// review reduce() and spread operator

// var arr = [1, 2, 3, 4, 5];

// arr.forEach(function(element, index) {
//     let newValue = element * element;
//     arr[index] = newValue
   
// })
// console.log(arr)



// This function find the id then return its information and if the id does not exist then it return not found
// function searchId(idNumber) {
//     // list of the object or the data
//     let objects = [
//         { id: "1", name: "Leigh", age: 35 },
//         { id: "2", name: "Jenny", age: 30 },
//         { id: "3", name: "Heather", age: 28 },
//     ]

//     // reduce is use to find and return the data 
//     let personObjects = objects.reduce((accumulator, person) => {
//         // this will identify the idNumber if it is inside the data. Object is created as accumulator this will use to store the data that created
//         if (idNumber === person.id) {
//             // this will create a new object that stored in accumulator which then return
//             accumulator.id = person.id;
//             accumulator.name = person.name;
//             accumulator.age = person.age;
//         } 

//         // every() is use to identify whether idNumber will not match any of the objects.id
//         if (objects.every(element => element.id !== idNumber )) {
//             accumulator.NOT_Found = "Not found or the account does not exist"
//         }

//         return accumulator
//     }, {})

//     return personObjects
// }

// console.log(searchId("4"))

// ======== // ======= //

// function findTallest(...person) {
//     let chunk = [];
//     person.forEach(element => {
//       let last = chunk[chunk.length -1];

//       if (!last || last.length === 2) {
//           chunk.push([element])
//       } else {
//           last.push(element)
//       }
//     })
    
//     let tallest = chunk.reduce((acc, person) => {
//         if (acc > person[1]) {
//             acc = acc;
           
//         } else {
//             acc = person[1];
//         }
//         return acc
//     }, 0)

//     for (let array in chunk) {
//         if (tallest === chunk[array][1]) {
//             console.log(chunk[array][0]);
//         }
//     }
//  }
    
// // make the function work with the following invocations
// findTallest("Bob", 1.7, "Ernesto", 1.1);
// findTallest("John", 1.2, "Alfred", 1.3, "Simone", 1.5, "Alice", 1.2, "Mary", 1.6);
// findTallest("Luke", 1.7, "Han", 1.8, "Chewy", 2.2, "Leia", 1.5, "Boba", 1.75, "Mace", 1.85);

// Javascript Arrays Made Simple: Filter and Slice (Part 3)
// review flattern in javascript cardio

// for (let i = 1; i < 5; i++) {
//     setTimeout(function () {
//         console.log(i)
//     }, i* 1000)
//     console.log("ready")
// }

// function recursionAdd(num) {
//     if (num > 10 ) {
//         return num;
//     } else {
//         console.log(num)
//         num++;
//         recursionAdd(num);
//     }
// }

// recursionAdd(1)

// fibonacci sequence [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89]

// function arraySum(array) {

//     if (array.length < 1) {
//         return 0;
//     }
//     return array.pop() + arraySum(array) 
// }

// let total = [1, 2, 3, 4, 5, 6, 4]
// console.log(arraySum(total))

// function sumArray(arrays) {
//     if (arrays.length < 1) {
//         return 0
//     }
//     let [first, ...items] = arrays;
//     return  first + sumArray(items)
// }

// // console.log(sumArray(total))

// let [head, ...itemsArray] = total;
// console.log(itemsArray)

// Sort an array of numbers using bubble sort algorithm

function sorting(arrays) {
    let copy = [...arrays];
    let condition = true;

    while (condition) {
        condition = false;

        copy.forEach((element, index) => {
            if (element > copy[index+1]) {
                let temp = element;
                copy[index] = copy[index+1]; 
                copy[index + 1] = temp;
                condition = true;
            }
        })
    }
    return copy
}

function sortingRecursion(arrays, condition = true) {
    if (!condition) {
        return arrays
    }

    condition = false;

    arrays.forEach((element, index) => {
        if(element > arrays[index + 1]) {
            [arrays[index], arrays[index + 1]] = [arrays[index+1], arrays[index]] 
            condition = true
        }
    })
   
    return sortingRecursion(arrays, condition)
}

let randomNumber = [12, 53, 1, 43, 5, 6, 1, 2, 1];
// console.log(randomNumber)
// console.log(sorting(randomNumber))
// console.log(sortingRecursion(randomNumber))



// binary search in javascript 

function search(array, find) {
    const found = array.filter(element => element === find);

    if (found.length === 0 ) {
        return "The item is not found or not in the array"
    } else if (found.length > 1) {
        return `Find "${found.length}" items: ${found.join(", ")}.`
    } else {
        return found[0]
    }
}

console.log(search(randomNumber, 1))

//        0   1   2   3   4   5   6   7   8   9   10 
var ar = [10, 20, 20, 30, 40, 50, 60, 70, 80, 90, 100];

var position = findNumber(0, ar);
console.log(position);

// Find number n in sorted array ar using iterative approach
// Returns array index if found or -1 if not found

function findNumber(num, ar) {
    let acc = [];
    let message = "element found";

    ar.forEach((element, index) => {
        if (element === num) {
             acc.push(element)
        }
        // if (index === element.length) {
        //     return "element not found"
        // }
    })
       
    if (acc.length === 0) {
        return "not found"
    } else {
        return message
    }
}

function binarySearch(num, array = ar) {
    let start = 0, end = array.length-1;
    
    while(start <= end) {
        let mid = Math.floor((start + end)/2);

        if (num === array[mid]) {
            return true
        } else if (num > array[mid]) {
            start = mid + 1;
        } else {
            end = mid - 1; 
        }

        console.log(start, end, mid)
    }

     return false
}

// console.log(binarySearch(70))

// call and assign a value for start and end
function recursiveSearch(num, array = ar, start = 0, end = array.length - 1) {
    // find the mid point in each iteration
    let mid = Math.floor((start + end)/2);

    // base case when num is equal to the value of mid item find then return the index
    // if the the starting value is greater than the end in this case the item is not found.
    if (num === array[mid]) {
        return mid
    } else if (start > end) {
        return -1
    }

    // recursive call identify if the num is within the left side or the right side of the mid point
    if (array[mid] < num) {
        return recursiveSearch(num, array, mid + 1, end)
    } 
    
    return recursiveSearch(num, array, start, mid -1)
}

console.log(recursiveSearch(200))

let listName = ["Shayla Cox", "Laura Hanson", "Bethany Mullins", "Ashlee Ferrell", "Laura Hanson", "Graham Case", "Dalia Mullen", "Ada Mckinney", "Keith Dawson", "Stacy Valentine", "Conor Jenkins", "Casey Carroll"]

let newCopy = [...listName]
function bubbleSort(array) {
 
    condition = false;
    array.forEach((element, index) => {
        if (element > array[index +1]) {
            [array[index], array[index+1]] = [array[index +1], array[index]]
            condition = true
        }
    })

    if (!condition) {
        return array
    } else {
        return bubbleSort(array)
    }
}

console.log(listName)
console.log(bubbleSort(newCopy))

function listnameSearch(target, array = bubbleSort(listName)) {
    let start = 0, end = array.length -1;
  
    while (start <= end) {
        let mid = Math.floor((start+end)/2)
        
        if (target === array[mid]) {
            return mid
        } else if (target > array[mid]) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }
    
    return -1
}

// nameSample = "Casey Carroll"
// console.log(listnameSearch(nameSample) )

// Find the maximum number in an array containing numbers or other arrays of numbers

var ar = [2, 4, 10, [12, 4, [100, 99, [1, 2]], 4], [3, 2, 99], 0];

function maximumNum(array = ar) {
    // set to empty for flatten array
    // condition true for while use
    let empty;
    let condition = true;

    // this will loop while the condition is true or while there is an array inside 
    while (condition) {
        // set to false to exit the loop
        condition = false;

        // this use for first iteration to set the empty array
        if (!empty) {   
            empty = array
        }
        
        // flatten the arrays 
       let flatten = empty.reduce((acc, item) => {
            return acc.concat(item)
       }, [])

       // set the empty to flatten which is use for the next loop
       empty = flatten;

       // identify if there is an array inside
       flatten.forEach(element => {
           if (Array.isArray(element)) {
               condition = true
           }
       })
    }

    // find the highest number inside the array
    let highNum = empty.reduce((acc, num) => {
        if (num > acc) {
            acc = num
        } 

        return acc
    }, 0)

    return highNum
}

// console.log(ar)
// console.log(maximumNum())

// function findTarget(target)  {
//     function find(current, history) {
//         if (current === target) {
//             return history
//         } else if (current > target) {
//             return null
//         }

//         console.log(history)
//         return find(current + 5, `${history} + 5`)  || find(current * 3, `${history} * 3`)     

//     }

//     return find(1, "1")
// }

// console.log(findTarget(120))

// function maxNum(array, condition = true, max = 0){
//     let flatten = array.reduce((acc, item) => {
//         return acc.concat(item)
//     }, [])

//     condition = false;

//     flatten.forEach(element => {
//         if (Array.isArray(element)) {
//             condition = true;
//         } 
//     })

//     if (!condition) {
//         flatten.forEach(element => {
//             if (element > max) {
//                 max = element
//             }
//         })
//         return max;
//     } else {
//         return maxNum(flatten, condition)
//     }

// }

console.log(ar)

function maxNum(array) {
    let newArray = [...array];

    // newArray.push(array)
    let max = -Infinity
  
    while (newArray.length > 0) {
        let last = newArray.pop()
        
        if (Array.isArray(last)) {
            newArray.push(...last)
        } else if (last > max) {
            max = last
        }
        
    }

    return max
}

function maxNumRecursion(array, max = -Infinity) {
    if (!array.length) {
        return max
    }

    let last = array.pop() 
   
    if (Array.isArray(last)) {
        array.push(...last)
        return maxNumRecursion(array, max)
    } else if (last > max) {
        max = last;
    } 
    console.log(array)
    return maxNumRecursion(array, max)
    
    // return maxNumRecursion(array, max)
    
}

console.log(maxNumRecursion(ar))

// console.log(maxNum(ar))

function findMax(ar, max = -Infinity)
{
    // Cycle through all the elements of the array
    for(var i = 0; i < ar.length; i++)
    {
        var el = ar[i];

        // If an element is of type array then invoke the same function
        // to find out the maximum element of that subarray
        if ( Array.isArray(el) )
        {
            return findMax( el , max );
        }

        if ( el > max )
        {
            max = el;
        
        }
    }

    return max;
}

console.log(findMax(ar))

function findSolution(target) {
    function find(acc, history) {
        console.log(history)
        if (acc === target) {
            return history
        } else if (acc > target) {
            console.log(history, " = false")
            return false
        }

        return find(acc + 5, `${history} + 5`) || find(acc * 3, `${history} * 3`) 
    }

    return find(1, "1")
}

// console.log(findSolution(4))


// sum of array 

function sumTotal(element, current = 0) {
    if (element.length === 0) {
        return current
    }

    let last = element.pop()
    return sumTotal(element, last + current)
    
}

// console.log(sumTotal([1, 5, 7, -2]))

function sumiterative(element) {
    let total = 0;

    element.forEach(element => {
        total = total + element;
    })

    return total;
}

// console.log(sumiterative([]))

function sumTotalRecursion(element) {
    if (element.length === 0) {
        return 0
    }

    return element[0] + sumTotalRecursion(element.slice(1))

}

// console.log(sumTotalRecursion([1, 5, 7, -2]))
