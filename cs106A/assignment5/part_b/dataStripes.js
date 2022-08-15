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
    canvas.style.marginTop = "4em"
  
    let ctx = canvas.getContext("2d");

    const numberOfFracs = fracs.length;
    const widthOfRect = (width / numberOfFracs).toFixed(2);
    let x = 0;
    let y = 0;

    for (let i = 0; i < numberOfFracs; i++) {
        let red = BASE + parseFloat(DELTA * fracs[i])
        ctx.fillStyle = `rgb(${red}, ${BASE}, ${BASE})`
        ctx.fillRect(x, y, Math.ceil(widthOfRect), height)
        x += parseFloat(widthOfRect);
    }
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
    const width = 800
    const height = 400

    let dataFile = readFracs("../dataFile/data-test.txt");
    dataFile.then(resolve => {
        let fracs = resolve;
        const title = fracs.shift();

        drawStripes(width, height, fracs, title);
    })
}   

main()

// https://web.stanford.edu/class/cs106a-8/sum-assn/homework-5-data-stripes.html