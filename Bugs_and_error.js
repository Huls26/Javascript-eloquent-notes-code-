let addition = null + undefined;

// console.log(Boolean(addition), addition)

delete window.name
// Language
// Strict Mode

// "use strict";
something = 0;
// forgot to add let in counter
function canYouSpotTheProblem() {
    // "use strict";
    for (counter = 0; counter < 10; counter++) {
        something++
      console.log("Happy happy");
    }
}
  
// canYouSpotTheProblem();
// console.log(something)



// "use strict";
function Person(name) { 
    "use strict";
    this.name = name; 
}
let ferdinand = Person("Ferdinand"); // forgot new
// → TypeError: Cannot set property 'name' of undefined


// console.log(ferdinand)
// review what is binding