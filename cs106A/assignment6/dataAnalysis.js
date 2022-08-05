"use strict"

// data disease1
fetch("./data/disease1.txt").then(responce => {
    return responce.text()
}).then(resp => {
    console.log(resp)
})

// Sandcastle Part A: Reading the file
function loadData(filename) {
    
}