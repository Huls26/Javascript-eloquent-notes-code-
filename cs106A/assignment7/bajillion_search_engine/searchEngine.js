"use strict"

async function createIndex(filenames, index, file_titles) {
    for (let i = 0; i < filenames.length; i++) {
        let dataName = filenames[i];
        let dataFile = await (await fetch(dataName)).text();
        let split = dataFile.split("\r\n").join(" ");
        let data = split.split(" ");
        
        for (let i = 0; i < data.length; i++) {
            let text = data[i];
            if (text.length) {
                putIndex(index, text, dataName)
            }
        }
    
    }

    console.log(index)
}

function putIndex(index, text, dataName) {
    // console.log(index)
    if (index[text]) {
        index[text].push(dataName)
    } else {
        index[text] = [dataName]
    }
}

let index = {}
let file_titles = {}
// createIndex(['test1.txt'], index, file_titles);
createIndex(['test1.txt', 'test2.txt'], index, file_titles)



// => https://web.stanford.edu/class/archive/cs/cs106a/cs106a.1226/handouts/bajillion.html