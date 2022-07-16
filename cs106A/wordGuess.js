"use strict";
import {files} from "./listFile.js"

// get the file and call the main
files.then(files => {
    let uppercase = files.map(file => file.toUpperCase())
    listFile = uppercase
    main()
})

let listFile = ["HAPPY", "JAVASCRIPT"];
// let listFile = lexiconFile("words.txt");

// for guess
let guesses = "";
// prompt
let prompt = "Type a single letter here, then press enter:"
// set the playgame start
let pG;
let newFile

// open link
// fetch("words.txt").then(response => response.text()).then(text => text.split(" "))

// main 
function main() {
    let secretWord = getWord(listFile)
    
    pG = playGame(secretWord);
    pG()
    guessWord();
};

// get a secret word
function getWord(words) {
    let random = Math.floor(Math.random() * words.length)

    return words[random]
};

// play game
function playGame(secretWord) {
    let notSecret = secretWord;
    let prompt = "The word now looks like this: "
    let guesses = ""; 
    let initialGuesses = 8;

    return (letter) => {
        // for paragraph
        let para1 = document.createElement("p");
        para1.innerText = prompt;

        // check guesses
        [guesses, initialGuesses] = correctLetter(notSecret, letter, guesses, initialGuesses);

        console.log(initialGuesses)
        console.log(guesses);

        // create span
        // for guesses
        let span = document.createElement("span");
        span.innerText = guesses;

        // create p tag
        // for initial guesses
        let para2 = document.createElement("p");
        para2.innerText = `You have ${initialGuesses} guesses left`

        // congratulate message
        let para3 = document.createElement("p");
        para3.innerText = `Congratulations, the word is: ${notSecret}`

        // game over message
        let para4 = document.createElement("p");
        para4.innerText = `Sorry, you lost. The secret word was: ${notSecret}`

        // add to body
        // for prompt
        if (notSecret === guesses) {
            document.body.appendChild(para3)
            return true
        } else if (initialGuesses <= 0) {
            document.body.append(para4)
            return true
        } else {
        document.body.appendChild(para1);
        para1.appendChild(span);
        document.body.appendChild(para2)
        }

        // return initialGuesses
    }
};

// guess enter
// checking
function correctLetter(sW, letter, guesses, initialGuesses) {
    let split = sW.split("");

    // prompt every correct letter
    let correctPrompt = document.createElement("p");
    correctPrompt.innerText = "That guess is correct."

    // prompt wrong guess
    let wrongPrompt = document.createElement("p");
    wrongPrompt.innerText = `There are no ${letter}'s in the word`

    if (!split.includes(letter) && guesses.length > 0) {
        document.body.appendChild(wrongPrompt)
        initialGuesses--;
        return [guesses, initialGuesses]
    }

    let checking = split.reduce((prev, current, index) => {
        // console.log(guesses[index])
        if (current === letter) {
            prev += current;
            document.body.appendChild(correctPrompt)
        } else if (guesses[index] != "-" && guesses[index]) {
            prev += current
        } else {
            prev += "-"
        }

        return prev
    }, "")

    console.log(split)
    console.log(checking)
    return [checking, initialGuesses]
}

// check guess for length and change to uppercase
function enterGuess(guess) {
    let prompt = "Guess should only be a single character."
    let para = document.createElement("p");
    para.innerText = prompt;

    // To uppercase
    if (guess.length > 0) {
       return guess.toUpperCase()
    }

    // check if it guess two letters
    if (guess.length > 1) {
        document.body.appendChild(para);
        return
    }
}

// letter
function guessWord() {
    // create a p tag
    let para = document.createElement("p");
    para.innerText = prompt;

    // insert before the last child
    // document.body.insertBefore(para, last[0]);
    document.body.appendChild(para);
}

// get last index of paragraph
function findLastP(array) {
    let list = Array.from(array)
    let p = document.querySelectorAll("p");

    return list.lastIndexOf(p[p.length - 1])
}

// check to play 


// for key event
window.addEventListener("keydown", event => {
    if (event.key === "Enter") {
        // check the length
        let guess = enterGuess(guesses);

        let end = pG(guess)
        // check for end game
        if (!end) {
            guessWord();
        }
        guesses = "";
        return
    }

    if (event.key === "Backspace") {
        // remove text
        guesses = guesses.slice(0, -1);
    } else {
        // store the keys
        // select letters only
        if (lettersOnly(event)) {
            guesses += event.key;
        }
    }
    
    // promt the guesses
    let getLength = findLastP(document.body.children);
    let pTag = document.body.children[getLength];

    // create span tag
    let span = document.createElement("span");
    span.innerText = guesses;
    span.style.marginLeft = "6px"

    // add a span to paragraph
    pTag.innerText = prompt;
    pTag.appendChild(span);

})

// check for letters only
function lettersOnly(key) {
   let charCode = key.keyCode;

    if ((charCode > 64 && charCode < 91) || (charCode > 96 && charCode < 123) || charCode == 8)
        return true;
    else
        return false;
}

// https://web.stanford.edu/class/archive/cs/cs106a/cs106a.1226/handouts/12-assignment5.html#part-2-word-guessing
