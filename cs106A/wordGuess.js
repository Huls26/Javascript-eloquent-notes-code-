"use strict";
let listFile = ["HAPPY", "JAVASCRIPT"];

let guesses = "";
let prompt = "Type a single letter here, then press enter:"

// user interface

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

    guessWord();
};

// guess enter
function guessWord() {
    // create a p tag
    let para = document.createElement("p");
    para.innerText = prompt;

    // get the last child of body
    // let last = document.body.getElementsByTagName("script");

    // insert before the last child
    // document.body.insertBefore(para, last[0]);

    document.body.appendChild(para);


}

// function guess(guesses) {

// }

// for key event
window.addEventListener("keydown", event => {
    if (event.key === "Enter") {
       
        console.log(guesses)
        guesses = "";
        guessWord();
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

// get last inde of paragraph
function findLastP(array) {
    let list = Array.from(array)
    let p = document.querySelectorAll("p");

    return list.lastIndexOf(p[p.length - 1])
}

main();

// https://web.stanford.edu/class/archive/cs/cs106a/cs106a.1226/handouts/12-assignment5.html#part-2-word-guessing
