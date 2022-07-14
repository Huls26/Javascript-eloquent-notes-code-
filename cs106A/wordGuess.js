"use strict";
let listFile = ["HAPPY", "JAVASCRIPT"];

// for guess
let guesses = "";
// prompt
let prompt = "Type a single letter here, then press enter:"
// set the playgame start
let pG;

// main 
function main() {
    let secretWord = getWord(listFile);
    let initialGuesses = 8;

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
    let SW = secretWord;
    let prompt = "The word now looks like this: "
    let guesses = ""; 

    return (letter) => {
        // for paragraph
        let para = document.createElement("p");
        para.innerText = prompt;

        // check guess
        guesses = correctLetter(SW, letter, guesses);

        // create span
        let span = document.createElement("span");
        span.innerText = guesses;

        // add to body
        document.body.appendChild(para);
        para.appendChild(span);
    }
};

// guess enter
// checking
function correctLetter(sW, letter, guesses) {
    let split = sW.split("");
    let checking = split.reduce((prev, current, index) => {
        // console.log(guesses[index])
        if (current === letter) {
            prev += current;
        } else if (guesses[index] != "-" && guesses[index]) {
            prev += current
        } else {
            prev += "-"
        }

        return prev
    }, "")

    console.log(split)
    console.log(checking)
    return checking
}

// letter
function enterGuess(guess) {
    let prompt = "Guess should only be a single character."
    let para = document.createElement("p");
    para.innerText = prompt;
    let letter;

    // To uppercase
    if (guess.length > 0) {
       letter = guess.toUpperCase();
    }

    // check if it guess two letters
    if (guess.length > 1) {
        document.body.appendChild(para);
        return
    }

    return letter
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

// for key event
window.addEventListener("keydown", event => {
    if (event.key === "Enter") {

        let guess = enterGuess(guesses, "HAPPY");
        // playGame();
        pG(guess)
        guessWord();
        guesses = "";
        return
    }

    if (event.key === "Backspace") {
        // remove text
        guesses = guesses.slice(0, -1);
    } else {
        // store the keys
        guesses += event.key;
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

main();

// https://web.stanford.edu/class/archive/cs/cs106a/cs106a.1226/handouts/12-assignment5.html#part-2-word-guessing
