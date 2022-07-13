"use strict";
let listFile = ["HAPPY", "JAVASCRIPT"];

// main 
function main() {
    let secretWord = getWord(listFile);

    playGame(secretWord);
};

// get a secret word
function getWord(words) {
    let random = Math.floor(Math.random() * words.length)

    return words[random]
};

// play game
function playGame(secretWord) {
    let initialGuesses = 8;
    let SW = secretWord;

};

// enter guesses
function enterGuess() {
    let prompt = "Type a single letter here, then press enter:"

    // create a p tag
    let p = document.createElement("p");
    p.innerText = prompt;
    let addP = document.body.appendChild(p);

    // create a span tag
    let span = document.createElement("span");
    let guesses = "";
    span.style.marginLeft = "7px"

    // for key event
    window.addEventListener("keydown", event => {
        if (event.key === "Backspace") {
              // remove text
            guesses = guesses.slice(0, -1);
        } else {
            // store the keys
            guesses += event.key;
        }
        
        // promt the guesses
        span.innerText = guesses;
        p.innerText = prompt;
        p.appendChild(span);
    })
}
enterGuess();

main();

