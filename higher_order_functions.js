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

function greaterThan(n) {
    return m => m > n;
}

// console.log(greaterThan(10)(9))

// Higher-Order Functions

function greaterThan(n) {
    return m => m > n;
}

let greaterThan10 = greaterThan(10);
console.log(greaterThan10)
// console.log(greaterThan10(11));
// → true
// recode this ^ code
    
// study about callback it will help you man
// callback https://www.youtube.com/watch?v=cNjIUSDnb9k
// study again properties and methods

// session 3