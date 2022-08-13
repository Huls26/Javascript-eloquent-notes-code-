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

export async function load(filename) {
    let data = await (await fetch(filename)).text();
    let next = data.split("\r\n").slice(1);
    let word_data = readFile(next)

    return word_data
}

function readFile(file) {
    let word_data = {};

    for (let i = 0; i < file.length; i++) {
            let [r, g, c] = file[i].split(",");
            if (c) {
                let split = c.split(" ");
                for (let k = 0; k < split.length; k++) {
                    let word = split[k];
                    let gender = g;
                    let rating = r;
                    addDataForWord(word_data, word, gender, rating)
                }
            }
    }

    return word_data
}

export function searchWords(word_data, target) {
    let t = target.toLowerCase();
    let length = t.length;
    let searcW = [];

    for (let key of Object.keys(word_data)) {
        let k = key.toLowerCase();
        for (let i = 0; i <= k.length; i++) {
            let letter = k.slice(i, i + length);
            if (letter === target) {
                searcW.push(k);
                break;
            }
        }
    }

    return searcW
}

function printWord(word_data) {
    for (let [key, value] of Object.entries(word_data)) {
        let container = "";
        for (let [gender, rating] of Object.entries(value)) {
            container += `${gender} [${rating}] `
        }
        console.log(key, container)
    }
}

function main() {
    load('data/full-data.txt').then(resolve => {
        // console.log(resolve);
        // printWord(resolve)
        // console.log(resolve["teacher"])
        // console.log(resolve["learn"])
        // console.log(resolve["great"])
        let searchResult = searchWords(resolve, "learn");

        // getFrequency(searchResult, resolve)
    })
}

// function getFrequency(result, word_data) {
//     console.log(result)
//     let total = 0;

//     for (let i = 0; i < result.length; i++) {
//         let count = word_data[result[i]];

//         total += count["W"][2];
//     }
   
//     console.log(total)
// }

main()

// https://web.stanford.edu/class/archive/cs/cs106a/cs106a.1226/handouts/biasbars-handout.html