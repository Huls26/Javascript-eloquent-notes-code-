// "use strict"

// remember this method
// get the words convert it to array
async function lexiconFile(fileName) {
    let files = await (await fetch(fileName)).text();
    let split = files.split("\n");
    let array = split;

   return array
}

export let files = lexiconFile("words.txt");

// // methods
// import {files} from "./listFile.js"

// // get the file and call the main
// files.then(files => {
//     listFile = files
//     main()
// })