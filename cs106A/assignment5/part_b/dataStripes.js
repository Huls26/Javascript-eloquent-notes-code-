"use strict"

const DELTA = 127
const BASE = 127

function drawStripes(width, height, fracs, title) {
    let canvas = document.querySelector("canvas");
    canvas.width = width;
    canvas.height = height;

    // canvas style 
    canvas.style.border = "dashed black 2px";
    document.body.style.display = "flex";
    document.body.style.justifyContent = "center"
    canvas.style.marginTop = "1em"
  
    let ctx = canvas.getContext("2d");

    const numberOfFracs = fracs.length;
    const widthOfRect = (width / numberOfFracs).toFixed(2);
    let x = 0;
    let y = 0;

    // draw rectangle
    for (let i = 0; i < numberOfFracs; i++) {
        let red = BASE + parseFloat(DELTA * fracs[i]);
        let blue = BASE - parseFloat(DELTA * fracs[i]);
        ctx.fillStyle = `rgb(${red}, ${BASE}, ${blue})`
        ctx.fillRect(x, y, Math.ceil(widthOfRect), height)
        x += parseFloat(widthOfRect);
    }

    ctx.fillStyle = "white";
    ctx.font = "2em Times New Roman"
    ctx.fillText(title, 10, 30);
}

async function readFracs(filename) {
    let data = await (await fetch(filename)).text()
    let lines = data.split("\n");
    let fracs = [];

    for (let line of lines) {
        let num = parseFloat(line);
        if (fracs.length === 0) {
            fracs.push(line);
        }

        if (!isNaN(num)) {
            fracs.push(num)
        } 
    }

    return fracs
}


function main() {
    let width = 800
    let height = 400

    function callStripe() {
        let dataFile = readFracs("../dataFile/data-climate.txt");
        dataFile.then(resolve => {
            let fracs = resolve;
            const title = fracs.shift();
    
            drawStripes(width, height, fracs, title);
        })
    }
    
    callStripe()
    window.addEventListener("click", event => {
        let w = document.getElementById("width");
        let h = document.getElementById("height");

        const wValue = Number(w.value);
        const hValue = Number(h.value);
        
        width = wValue;
        height = hValue;

        if (width && height) {
            callStripe()
        }  
    })
}   

main()

// https://web.stanford.edu/class/cs106a-8/sum-assn/homework-5-data-stripes.html