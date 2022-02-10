function greetings(param1, param2) {
    console.log(`${param1} ${param2("world")}`)
}

greetings("hello", (word) => {
    return word
})

// let label = [];
// let sumTotals = 0;

// function repeat(n, action) {
//     for (let i = 0; i < n; i++) {
//         action(i)
//     }
// }

// repeat(5, console.log)

// repeat(5, i => {
//     label.push(`Unit ${i + 1}`)
// })

// repeat(5, (i) => {
//     sumTotals += i
// })
// console.log(label)
// console.log(sumTotals)
// // study callback

// function greaterThan(n) {
//     return m => m > n;
// }

// // console.log(greaterThan(10)(9))


// // Higher-Order Functions

// // remember this you may use this 
// function greaterThan(n) {
//     return m => m > n;
// }

// let greaterThan10 = greaterThan(10);
// console.log(greaterThan10)
// // console.log(greaterThan10(11));
// // → true
// // recode this ^ code
    
// function sampledata(greet) {
//     return name => console.log(greet, name)
// }

// let sampledataGreet = sampledata("hello")
// sampledataGreet("Jules")

// function noisy(f) {
//     return (...args) => {
//         console.log(`calling with`, args)
//         let result = f(...args)
//         console.log(`called with`, args, `, returned`, result)
//     }
// }

// noisy(Math.min)(3, 2, 1);
// // → calling with [3, 2, 1]
// // → called with [3, 2, 1] , returned 1

// function unless(test, then) {
//     if (test) then();
// }

// repeat(3, i => {
//   unless(i % 2 === 0, () => console.log(`${i} is even`))
// })

// // → 0 is even
// // → 2 is even

let label = [];

function repeat(n, action) {
    for (let i = 0; i < n; i++) {
        action(i)
    }
}

repeat(5, i => {
    label.push(`unit ${i}`)
})

console.log(label)

function greaterThan(n) {
    return m => m > n    
}

console.log(greaterThan(10)(11))

function noisy(f) {
    return (...args) => {
        console.log(`calling with`, args)
        let result = f(...args)
        console.log(`called with`, args, `returned`, result)
        return result
    }
}

noisy(Math.min)(3, 2, 1)

function unless(test, go) {
    if (test) go()
}

repeat(3, i => {
    return unless(i % 2 === 0, () => console.log(i, `is even`))
})

let c = x => x + 5;
console.log(c)

let noisyC = noisy(c)
console.log(noisyC(5))

console.log((x => x + 5) (5)) 
// output 10

// let add = x => x + 5
// add(5)
// output 10

// we can have functions that create new functions.
function nestedFunction(array) {
    return (...args) => {
        array.push(...args)
        return array
    }
}

console.log(nestedFunction(["jules", "marvin", "moreno"])("tinapay", "mamon"))

function loop(array, index = 0) {
   if (array.length === index ) {
       return
   }
   console.log(array[index])
   
   return loop(array, index + 1)
}

// console.log(loop([1, 2, 3]))


// we can have functions that change other functions
let arrayEmpty = [];

function add2Item(action) {
    return (...args) => {
        return action(...args)
    }
}

console.log(add2Item((...arg) => arrayEmpty.push(...arg))(1, 2))
console.log(arrayEmpty)

console.log(add2Item(x => {
    arrayEmpty.push(x+2)
})(2))

console.log(arrayEmpty)

// We can even write functions that provide new types of control flow

function unless(test, then) {
    if (test) then();
}

let double = []

repeat(5, k => {
    let doubleIt = k * 2
    double.push(doubleIt)
    return unless(doubleIt % 2 === 0, () => console.log(doubleIt, `is even`))
})

console.log(double)

function f() {
   return `hello world`
}

function getLetter(nth, func) {
    console.log(func()[nth])
}

getLetter(2, x => 'hello world')

function foo(param, param2) {
    console.log(param(), param2)
}

// foo(f)
// console.log(f())

// setTimeout(() => foo(() => "hello", "world"), 3000)

function transform(array, func) {
    array.forEach((element, index) => {
        array[index] = func(element)
    });
}

const bets = [1, 5, 20]
transform(bets, x => x * 2)
console.log(bets) // [2, 10, 40]

function nameSomething() {
    console.log("print something")
}

let call = nameSomething()

console.log(call)

// do the filtering arrays


// https://www.youtube.com/watch?v=T0eroJltRsM
// https://www.youtube.com/watch?v=rkPUX5xXsC0&t=4011s
 
// study about callback it will help you man
// callback https://www.youtube.com/watch?v=cNjIUSDnb9k
// study again properties and methods
// https://www.youtube.com/watch?v=rkPUX5xXsC0

// session 3
// push to github
// javascrip eloquent page 103