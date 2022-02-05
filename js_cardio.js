/////////reverse the word example: "seluJ" === "Jules"///////////

// function reverseWord(word) {
//     return word.split("").reverse().join("")
// }

// function reverseWord(word) {
//     let reverse = "";

//     for (let i = 0; i < word.length; i++) {
//         reverse = word[i] + reverse;
//     }
//     return reverse
// }

// function reverseWord(words) {
//     let reverse = "";

//     for (let word of words) {
//         reverse = word + reverse;
//     }
//     return reverse
// }

// function reverseWord(words) {
//     let reverse = "";

//     for (let word in words) {
//         reverse = words[word] + reverse;
//     }
//     return reverse
// }

/////// word palindrome example: "racercar" === "true"

// function isPalindrome(str) {
//     let empty = "";
//     str.split("").forEach(char => empty = char + empty)

//    if (str === empty) {
//        return true;
//    } else {
//        return false;
//    }
// }

// function isPalindrome(str) {
//     let reverse = "";
//     for (let word of str) {
//         reverse = word + reverse
//     }

//     return reverse === str
// }
// console.log(isPalindrome("able was I ere I saw elba"))

// ===== //
/* This function get the string put it index one by one until the word complete this vice verse back to the first letter
example: "sample"
        s
        sa
        sam
        sample
        sampl
        samp
        sam
        sa
        s

*/

// function writeAString(word) {
//     let strings = word;
//     let newArray = "";

//     for (let string of strings) {
//         newArray = newArray + Array.of(string);
//         Array.of(newArray = newArray + string)
//         newArray = newArray + string;
//         console.log(newArray);
//     }

//     let sample = newArray;
//     let split = sample.split("")

//     for (let i = split.length - 1; i > 0; i--) {
//         split.length = i;
//         console.log(split.join(""));
//     }
// }

// writeAString("hello world")



/// ======= This will capitalize the word or a sentence ======= ///

// function capitalizeLetters(str) {
//     let split = str.split(" ");
//     let wordCapitalize = "";

//     // split.forEach(function(element) {
//     //         let array = element.split("");
//     //         let upperCase = array[0].toUpperCase();
//     //         array.splice(0, 1, upperCase); // This replace the array[0] or the first letter or each array with the capital letter
//     //         let join = array.join("");
//     //         wordCapitalize = wordCapitalize + join + " ";
//     //     } )

//     let map1 = split.map(element => {
//             let upperCase = element[0].toUpperCase();
//             let word = element.replace(element[0], upperCase)
//             wordCapitalize = wordCapitalize + word + " ";
//         }
//     );

//     return wordCapitalize
// }

// console.log(capitalizeLetters("i love you"))

// let arrays = [1,2,3,4]

//     map1 = arrays.map((elements, index) => {
//         return {value : index}
//     })
// console.log(map1)

// function capitalize(word) {
//     let split = word.split(" ");

//     let fU = split[0].toUpperCase()
//     let upperCase = split.reduce((accumulate, currentValue)=> { return accumulate + currentValue }, fU )

//     return upperCase
// }
// console.log(capitalize("i love you"))


/// ===== get the use letter in a word or a string example: "javascript" === "a : 2" ===== ///

// // function maxCharacter(str) {
// //     let object = {};
// //     for (let word of str) {
// //         if (object[word]) {
// //             object[word]++;
// //         } else {
// //             object[word] = 1;
// //         }
// //     }

// //     // const max = Object.values(object).reduce((x, y) =>  (x>y) ? x:y)

// //     let maxNum= 0;
// //     let maxchar = "";

// //     for (let obj in object) {
// //        if (object[obj] > maxNum ) {
// //            maxNum = object[obj];
// //            maxchar = obj;
// //        } else {
// //            maxNum = maxNum
// //        }
// //     };

// //    return `The maximum character is "${maxchar.toUpperCase()}" with a "${maxNum}" output`
// // }

// // function maxCharacter(str) {
// //     let split = str.split("");
// //     let object = {};

// //     split.forEach(element => { (object[element]) ? object[element]++ : object[element] = 1})

// //     let maxChar = Object.entries(object).reduce((x,y) => (x>y) ? x:y)

// //     return maxChar
// // }
// // console.log(maxCharacter("Javacript"))


// let array1 = [1, 62, 32, 6, 9, 1]
// let maximun = 0

// for (let num of array1) {
//     if (num > maximun) {
//         maximun = num
//     } else {
//         maximun = maximun
//     }
// }

// console.log(maximun)

//// write a program that print from 1 to 100. for multiples of 3 print instead of a number print "Fizz". for multiples of 5 print "Buzz". And for numbers that muliples both 3 and 5 it should print "FizzBuzz".

////for every 3 and 5 it should print "Fizz" "Buzz"
//// I can use for loop to print a number from 1 to 100
//// then use condition statement that in every multiples of 3 print "Fizz" and the same for every multiples of 5 print "Buzz"

///for every multiples of 3 print "Fizz"

// function FizzBuzz() {
//     let number = 1;
//     let counter = 1;
//     let counterF = 1;
    
//         for (number; number <= 100; number++) {
//             if (counter ===3 && counterF === 5) {
//                 console.log("FizzBuzz")
//             } else if (counterF === 5) {
//                 console.log("buzz")
//             } else if (counter === 3) {
//                 console.log("fizz")
//             } else {
//                 console.log(number);
//             }

//             if (counter < 3) {
//                 counter = counter + 1;
//             } else {
//                 counter = 1
//             }

//             if (counterF < 5) {
//                 counterF++
//             } else {
//                 counterF = 1;
//             }
//         }

// }

// FizzBuzz()

/// this make a triangle "#"

// let str = "#";
// let empty = ""

// for (let i = 0; i < 7; i++) {
//     empty = empty + str
//     console.log(empty)
// }

// for (let line = "#"; line.length < 8; line += "#")
//   console.log(line);

/// ==================FizzBuzz========================== 

// for (let i = 1; i <= 100; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//         console.log("FizzBuzz");
//     } else if (i % 3 === 0) {
//         console.log("Fizz");
//     } else if (i % 5 === 0) {
//         console.log("Buzz")
//     }
//     else {
//         console.log(i);
//     }
// }

/// ===========chessboard============== create a chessboard pattern 

// let row = "";

// let size = 8;
// let width = size; 
// let height = size;

// for (let i = 1; i < width*height; i++) {
//    if (i % (width + 1) === 0){
//        row += "\n";
//    } else if (i%2===0) {
//        row += "#";
//    } else {
//       row += " ";
//    }
// }

// console.log(row)

// let size = 8;

// let board = "";

// for (let y = 0; y < size; y++) {
//   for (let x = 0; x < size; x++) {
//     if ((x+y) % 2 === 0) {
//       board += " ";
//     } else {
//       board += "#";
//     }
//   }
//   board += "\n";
// }

// console.log(board);

// const hummus = function(factor) {
//   const ingredient = function(amount, unit, name) {
//   let ingredientAmount = amount * factor;
//   if (ingredientAmount > 1) {
//   unit += "s";
//   }
//   console.log(`${ingredientAmount} ${unit} ${name}`);
//   };
//   ingredient(1, "can", "chickpeas");
//   ingredient(0.25, "cup", "tahini");
//   ingredient(0.25, "cup", "lemon juice");
//   ingredient(1, "clove", "garlic");
//   ingredient(2, "tablespoon", "olive oil");
//   ingredient(0.5, "teaspoon", "cumin");
//   };

// hummus(2)



// function wrapValue(n) {
//   let local = n;
//   return () => local;
//   }

// let wrap1 = wrapValue(1);
// let wrap2 = wrapValue(2);

// console.log(wrap1())
// console.log(wrap2)


// function makeFunc() {
//   var name = 'Mozilla';
//   function displayName() {
//     alert(name);
//   }
//   return displayName;
// }

// let word1 = makeFunc()

// word1()
// console.log(word1)

//////// make an app the change the vowel letter with a "J" example: "hello" === "hjllj"
//// loop through the each word 
// find if there is a vowel then if is a vowel replace the vowel to letter j

function replaceWord(word) {
    let vowels = "aeiouAEIOU";
    let split = word.split("");
    let contain = "";
    
    // This will run a loop through the word
    for (let i = 0; i < word.length; i++) {
        // this will loop through the vowels
        for (let vowel of vowels) {
            // this will identify weather the vowel is equal to the loop through of the "word" and will replace to letter "j" if the letter is vowel.
            if (word[i] === vowel) {
                let letters = "j";
                split.splice(i, 1, letters)
            }
        }
    }
    
    let lowerCase = split.join("").toLowerCase();

    let capitalize = lowerCase.split(" ").map(element => {
        let firstLetter = element[0].toUpperCase();
        let newLetter = element.replace(element[0], firstLetter);
        contain = contain + newLetter + " ";
    }

    )

    return contain
    // return `before replace: ${word} \n after: ${capitalize}`
  
}

let words = [1,2,3,4,5]

console.log(words.join("").replace(words[0], "hew").split(""))
words.splice(2,1,"hello")
console.log(words); 

console.log(replaceWord("I Think this would work"))





