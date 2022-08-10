"use strict"

const KEY_WOMEN = "W"
const KEY_MEN = "M"

function convertRatingToIndex(rating) {
    if (rating < 2.5) {
        return 0
    } else if (rating > 3.5) {
        return 2
    } else {
        return 1
    }
}

function addDataForWord(word_data, word, gender, rating) {
    let defaultDict = {
                        "W": [0, 0, 0],
                        "M": [0, 0, 0]
                    };

    let index = convertRatingToIndex(rating);

    if (word_data[word]) {
        word_data[word][gender][index]++
    } else {
        word_data[word] = defaultDict;
        word_data[word][gender][index]++;
    }
}

async function load(filename) {
    let data = await (await fetch(filename)).text();
    let next = data.split("\r\n").slice(1);

    let word_data = readFile(next)
}

function readFile(file) {
    let word_data = {};

    for (let i = 0; i < file.length; i++) {
            let [r, g, c] = file[i].split(",");
            let split = c.split(" ");
            for (let k = 0; k < split.length; k++) {
                let word = split[k];
                let gender = g;
                let rating = r;
                addDataForWord(word_data, word, gender, rating)
            }
    }

    console.log(word_data)
}

load('data/small-one.txt').then(resolve => {
    console.log(resolve)
})
//  {'okay': {'W': [0, 0, 0], 'M': [0, 1, 0]}, 'best': {'W': [0, 0, 1], 'M': [0, 0, 0]}}


function testData() {
    let word_data = {};
    addDataForWord(word_data, "good", "M", 5.0);
    console.log(word_data)
    // "{'good': {'W': [0, 0, 0], 'M': [0, 0, 1]}}"
    
    addDataForWord(word_data, "good", "W", 4.5);
    console.log(word_data)
    // {'good': {'W': [0, 0, 1], 'M': [0, 0, 1]}}

    // addDataForWord(word_data, "good", "M", 5.0);
    // console.log(word_data)
    // {'good': {'W': [0, 0, 1], 'M': [0, 0, 2]}}

    addDataForWord(word_data, "good", "W", 3.0);
    console.log(word_data)
    // {'good': {'W': [0, 1, 1], 'M': [0, 0, 1]}}

    // addDataForWord(word_data, "good", "W", 3.5);
    // console.log(word_data)
    // // {'good': {'W': [0, 1, 1], 'M': [0, 0, 1]}}

    // addDataForWord(word_data, "good", "M", 2.5);
    // console.log(word_data)
    // // {'good': {'W': [0, 1, 1], 'M': [0, 0, 1]}}

    addDataForWord(word_data, "bad", "M", 1.5);
    console.log(word_data)  
    //{'good': {'W': [0, 1, 1], 'M': [0, 0, 1]}, 'bad': {'W': [0, 0, 0], 'M': [1, 0, 0]}}
}

// testData()

function testRating() {
    if ((convertRatingToIndex(1.0)) === 0) {
        console.log("Passed")
    } else {
        console.log("failed", convertRatingToIndex(1.0))
    }

    if ((convertRatingToIndex(1.5)) === 0) {
        console.log("Passed")
    } else {
        console.log("failed", convertRatingToIndex(1.0))
    }

    if ((convertRatingToIndex(3.0)) === 1) {
        console.log("Passed")
    } else {
        console.log("failed", convertRatingToIndex(3.0))
    }

    if ((convertRatingToIndex(3.5)) === 1) {
        console.log("Passed")
    } else {
        console.log("failed", convertRatingToIndex(3.5))
    }

    if ((convertRatingToIndex(4.0)) === 2) {
        console.log("Passed")
    } else {
        console.log("failed", convertRatingToIndex(4.0))
    }

    if ((convertRatingToIndex(5.5)) === 2) {
        console.log("Passed")
    } else {
        console.log("failed", convertRatingToIndex(5.5))
    }
}

// testRating()

// https://web.stanford.edu/class/archive/cs/cs106a/cs106a.1226/handouts/biasbars-handout.html