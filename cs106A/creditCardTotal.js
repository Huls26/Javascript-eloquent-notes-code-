"use strict"

// Part 1: Sandcastle – Totaling credit card bill by store
let upload = document.getElementById("file-input");
let outputBx = document.getElementById("file-content");
  
upload.addEventListener('change', () => {
    let fr = new FileReader();

    fr.readAsText(upload.files[0])

    fr.onload = function() {
        let file = fr.result;
        outputBx.innerHTML = total(file);
    }
});

// get the total price and place of the sandcastle
function total(file) {
    let split = file.split("\r\n");
    
    let total = split.reduce((prev, current) => {
        // set date, place, and price
        let [place, price] =  convert(current);

        // add and update the container
        // add place and sum total price
        if (!prev[place]) {
            prev[place] = price;
        } else {
            prev[place] += price;
        }

        return prev
    }, {});

    return placePrice(total);
}

// get the place and price
function convert(info) {
    let split = info.split("");

    let index = split.reduce((prev, current, index) => {
        if (current === "[" || current === "]" || current === "$") {
            prev.push(index)
        }

        return prev
    }, [])
    
    let [first, last, p] = index;

    let place = split.slice(first + 1, last).join(""); 
    let price = parseInt(split.slice(p + 1).join(""));
   
    return [place, price];
}

// traverse through total
function placePrice(items) {
    let empty = "";

    for (let [place, price] of Object.entries(items)) {
        empty += `${place}: $${price}\n`
    }

   return empty
}

// https://web.stanford.edu/class/archive/cs/cs106a/cs106a.1226/handouts/12-assignment5.html#part-2-word-guessing