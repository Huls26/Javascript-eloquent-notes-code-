"Use strict"

// coinflip
function coinFlip(value, coin) {
    let random = Math.floor(Math.random() * 2);
    let coins = ["H", "T"];
    let count = 0
    let empty = "";

    if (!coins.includes(coin) || value < 0){
        console.log("ERROR");
        return;
    }

    while (count < value) {
        let result = coins[random];

        if (coin === result) {
            count++
        } else {
            count = 0;
        }

        random = Math.floor(Math.random() * 2);
        empty = empty + result + " ";
    }

    console.log(empty);
    console.log(`You got ${coin} ${value} times in a row!`)
}

// coinFlip(3, "H");
// T T T H T H H H
// You got H 3 times in a row!

// coinFlip(2, "x")
// coinFlip(-1, "x")
// coinFlip(0, "T");

// remove duplicates
function removeDuplicates(string) {
    let split = string.split("");
    let singleW = [];

    for (let i = 0; i < split.length; i++) {
        let current = split[i];
        let previous = singleW[singleW.length -1]
    
        // if (current === previous) {

        // } else {
        //     singleW.push(split[i])
        // }

        if (current !== previous) {
            singleW.push(current)
        }

        console.log(current)
    }

    console.log(singleW.join(""))
}

// removeDuplicates("bookkeeper")
// "bokeper"

// removeDuplicates("b")
// removeDuplicates("banana")
// removeDuplicates("AAAAaaaa  BBBBBbbbb CCCCccc")
// removeDuplicates("")

// count unique value
function countUnique(array) {
    let unique = [];

    array.forEach(element => {
        if (!unique.includes(element)) {
            unique.push(element)
        }
    });

    console.log(unique.length)
}

// countUnique([4, 7, 4, 9, 2, 7, 8, 7, 4, 7, 2])
// countUnique([45])
// countUnique([5, 5, 5, 5])

// draw bars
let canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let c = canvas.getContext("2d");

function drawLine(beginPath, endPath) {
    c.beginPath();
    c.moveTo(beginPath.x, beginPath.y);
    c.lineTo(endPath.x, endPath.y);
    c.stroke();
}

function bars(width, height, n, columnX = 5, columnY = 5, rowY = 5, rowX = 5) {
    let k = width - ((width / n ) * (n - 1))
    let space = (width + k) / n;

    // column
    for (let i = 0; i < n * 4; i++) {
        if (i % n === 0) {
            columnX = rowX;
        }

        // stroke point
        let beginPath = {
            x: columnX,
            y: columnY,
           
        }
        
        // console.log(beginPath.x, beginPath.y)
        let endPath = {
            x: columnX,
            y: height,
        }
        c.strokeStyle = "black";
        drawLine(beginPath, endPath)
        columnX += space;
    }

    columnX -= space; 
    
    // row
    for (let i = 0; i < 2; i++) {
        let beginPath = {
            x: rowX,
            y: rowY,
        }
        
        let endPath = {
            x: columnX,
            y: rowY,
        }

        c.strokeStyle = "blue"
        drawLine(beginPath, endPath)
        rowY = height;
    }

    return {columnX}
}


function drawBars(width, height, n) {
    let {columnX} = bars(width, height, n)
    bars(width, height * 2, n, columnX, height, height, columnX)
}

// drawBars(200, 200, 8)

// draw eye

// oval
function oval(x, y, width, height) {
    // border
    c.strokeStyle = "blue";
    c.strokeRect(x, y, width, height);

    // oval
    width = width / 2;
    height = height / 2;
    c.fillStyle = "yellow";
    c.beginPath();
    c.ellipse(width + x, height + y, width, height, 0, 0, Math.PI*2, false);
    c.fill();
}

oval(5, 5, 300, 200)


// function drawEye(left, top, width, height, n) {

// }


// exercises
// https://web.stanford.edu/class/cs106a-8/sum-assn/homework-5-quilt.html
// https://web.stanford.edu/class/archive/cs/cs106a/cs106a.1178/resources/midterm/PracticeMidterm.pdf
// https://web.stanford.edu/class/archive/cs/cs106a/cs106a.1226/handouts/12-assignment5.html#part-2-word-guessing

// http://web.stanford.edu/class/archive/cs/cs106a/cs106a.1178/resources/midterm/MidtermQuestionBooklet.pdf