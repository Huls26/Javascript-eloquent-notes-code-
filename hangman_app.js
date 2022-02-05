let phrase = ["A BARGAIN AT HALF THE PRICE", "A CAST OF THOUSANDS", "A CITY FULL OF POSSIBILITIES", "A TOAST TO THE BRIDE AND GROOM", "BECOME A FASHION ICON", "BEING IN THE RIGHT PLACE AT THE RIGHT TIME", "BIRTHPLACE OF DEMOCRACY", "CARNIAN AGE BEFORE BEAUTY", "CATERING TO YOUR EVERY NEED", "CLOCK IN AND CLOCK OUT", "DO WHAT WORKS FOR YOU", "DONT BURN YOUR BRIDGES", "DONT BITE YOUR FINGERNAILS"]

// get a random words
let randonNum = Math.floor(Math.random() * phrase.length);
// shows how many wrong you got
let wrong = "";
// for guess letter
let guesses = null;
// for letter that has been guess
let correctGuess = "";
// all the letters that has been guess
let letterGuesses = "";

// this will run until the wrong is less than 4 
while (wrong.length < 4) {
    // this will get a word from the phrase
    let words = phrase[randonNum];
    // this store the guess letter that will later add to correctGuess that shows all your correct guesses
    let empty = ""; 
    // total length of phrase. This determine if you got all the correct letters of the phrase 
    let correct = words.length;

    // check console to know the word
    // delete or comment this out dont cheat man!!! 
    console.log(words)

    // this check if the your guess is correct which then add to correct guesses
    // review this and you will understand each uses
    for (let i = 0; i < words.length; i++) {
        // this will add a space 
        if (words[i] === " ") {
            empty += " ";
        // first iteration is set to null because in first iteration this is no letter than has been guess the guess letter start after the first iteration or the second iteration.
        // correct also decrement by one 
        } else if (guesses === null) {
            empty += "#";
            correct = correct - 1;
        // this shows the correct letter that you guess 
        } else if (words[i] === guesses) {
            empty += words[i]
        // shows correct words review to undestand this
        } else if (correctGuess[i] === words[i]) {
            empty += words[i]
        // all the letter the need to guess is shown as this # symbol
        } else {
            empty += "#";
            correct = correct - 1;
        }
    }

    // correct letters
    // console.log(correct)

    // check if you got all the letters guessed correctly
    if (correct === words.length) {
        alert(`You guess the words: ${words}
        
    refresh to play again!!!`)

        break
    }

    // store all guessed letter and remove the second element in letterGuesses
    let guessedLetter = letterGuesses.split("").slice(2)

    // this is a prompt where you can see how many letters you need to guess and shows wrong guesses
    let guess = prompt(`guess the word: 

    ${empty}
    
    wrong: ${wrong}
    all guessed letter: ${guessedLetter.join("")}
    `);
   
    console.log(guess)

    // this break the loop when cancel
    if (guess === null) {
        alert("Thank for playing refresh to play again!!! XD")

        break
    }

    // your guessed letter will then store to guesses and converted to uppercase
    // this will check for the second iteration if you guess the letter write or wrong
    guesses = guess.toUpperCase();

    // shows all your guessed letter
    if (guesses.length === 2) {
        alert("Oops you enter 2 letter please enter one letter only")
    } else if (!guessedLetter.includes(guesses)) {
        letterGuesses = `${letterGuesses}, ${guesses}`;
    } 

    // check if the guessed letter is in the word if not it will add X to wrong 
    if (!words.split("").includes(guesses) || guessedLetter.includes(guesses)) {
        wrong += "X"
    }
    
    // when you run out of chance to guess the phrase message will pop up
    if (wrong.length === 4) {
        alert(`You lose the word is ${words} refresh to try again`)
    }

    // store the letter guesses
    correctGuess = empty;
}

// huu this app first app project 
// hangman put this on github