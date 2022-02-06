function greetings(param1, param2) {
    console.log(`${param1} ${param2("world")}`)
}

greetings("hello", (word) => {
    return word
})

let label = [];
let sumTotals = 0;

function repeat(n, action) {
    for (let i = 0; i < n; i++) {
        action(i)
    }
}

repeat(5, console.log)

repeat(5, i => {
    label.push(`Unit ${i + 1}`)
})

repeat(5, (i) => {
    sumTotals += i
})
console.log(label)
console.log(sumTotals)
// study callback

function greaterThan(n) {
    return m => m > n;
}

// console.log(greaterThan(10)(9))


// Higher-Order Functions

// remember this you may use this 
function greaterThan(n) {
    return m => m > n;
}

let greaterThan10 = greaterThan(10);
console.log(greaterThan10)
// console.log(greaterThan10(11));
// → true
// recode this ^ code
    
function sampledata(greet) {
    return name => console.log(greet, name)
}

let sampledataGreet = sampledata("hello")
sampledataGreet("Jules")

function noisy(f) {
    return (...args) => {
        console.log(`calling with`, args)
        let result = f(...args)
        console.log(`called with`, args, `, returned`, result)
    }
}

noisy(Math.min)(3, 2, 1);
// → calling with [3, 2, 1]
// → called with [3, 2, 1] , returned 1

function unless(test, then) {
    if (test) then();
}

repeat(3, i => {
  unless(i % 2 === 0, () => console.log(`${i} is even`))
})

// → 0 is even
// → 2 is even

// study about callback it will help you man
// callback https://www.youtube.com/watch?v=cNjIUSDnb9k
// study again properties and methods

// session 3