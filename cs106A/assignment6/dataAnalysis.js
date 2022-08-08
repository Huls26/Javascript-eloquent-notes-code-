"use strict"

// data disease1
fetch("./data/disease1.txt").then(responce => {
    return responce.text()
}).then(resp => {
    let data = loadData(resp);
    console.log(data)
})

// Assignment #6: Dictionaries and Analyzing Data Bias

// Sandcastle Part A: Reading the file
function loadData(filename) {
    let split = filename.split("\r\n").join(", ").split(",");
    let container = {};

    return split.reduce((container, element) => {   
        element = element.trim()
        if (element.length) {
            let num = parseInt(element);
            if (num) {
                let length = Object.keys(container).length

                container[Object.keys(container)[length - 1]].push(num)
            } else {
                container[element] = []
            }
        }
       
        return container

    }, {})
}

// https://web.stanford.edu/class/archive/cs/cs106a/cs106a.1226/handouts/biasbars-handout.html