// Improvised Modules
let weekDay = function() {
    const name = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thurday", "Friday", "Saturday"];

    return {
        name(number) { return name[number] },
        number(name) { return name.indexOf(name) },
    };
}()

console.log(weekDay.name(weekDay.number("Sunday")));
// → Sunday

// Evaluating data as code
const x = 1;
function evalAndReturnX(code) {
  eval(code);
  return x;
}

console.log(evalAndReturnX("var x = 2"));
// → 2

console.log(x);
// → 1
let plusOne = Function("n", "return n + 1;");
console.log(plusOne(4));
// → 5

// CommonJS
//ECMAScript modules

import User from "./user.js"
// import {printName, printAge} from "./user.js"

// let user1 = User;

User({name: "J"})
// printAge(user1)

// topic
// https://www.youtube.com/watch?v=cRHQNNcYf6s

