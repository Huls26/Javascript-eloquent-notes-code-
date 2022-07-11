"use strict"

// Part 1: Sandcastle – Totaling credit card bill by store
let upload = document.getElementById("file-input");
let outputBx = document.getElementById("file-content");
  
upload.addEventListener('change', () => {
    let fr = new FileReader();

    fr.readAsText(upload.files[0])

    fr.onload = function() {
        let file = fr.result;
        outputBx.innerHTML = file;
        total(file);
    }
});

function total(file) {
    let split = file.split("\r\n");
    let container = {};
    
    // set date, place, and price
    // let [date, place, price] = convert(split[1]).split(" ");

    let [place, price] =  convert(split[1]);

    // add and update the container
    // add place and sum total price

    if (!container[place]) {
        container[place] = price;
    } else {
        container.place += price;
    }

    console.log(container)
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
// https://web.stanford.edu/class/archive/cs/cs106a/cs106a.1226/handouts/12-assignment5.html#part-2-word-guessing