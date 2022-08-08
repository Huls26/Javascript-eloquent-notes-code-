"use strict"

// data disease1
fetch("./data/disease1.txt").then(responce => {
    return responce.text()
}).then(resp => {
    let data = loadData(resp);
    let cases = dailyCases(data);

    console.log(cases)
})

// data disease2
fetch("./data/disease2.txt").then(responce => {
    return responce.text()
}).then(resp => {
    // let data = loadData(resp);
    // console.log(data)
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

// Sandcastle Part B: Calculating the number of infections per day
function dailyCases(cumulative) {
    for (let place of Object.keys(cumulative)) {
        let array = cumulative[place].reduce((prev, current, index) => {
            if (prev.length > 0 ) {
                let cases = current - cumulative[place][index - 1];
                prev.push(cases);
                return prev
            } else {
                prev.push(current);
                return prev
            }
        }, [])
        cumulative[place] = array;
    }

    return cumulative
}

// console.log(dailyCases({'Test': [1, 2, 3, 4, 4, 4, 4]}))

// https://web.stanford.edu/class/archive/cs/cs106a/cs106a.1226/handouts/biasbars-handout.html