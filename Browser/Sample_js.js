"Use strict"

// cs106A
// assigments and exams

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
// set canvas
// let canvas = document.querySelector("canvas");
// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;

// let c = canvas.getContext("2d");

function drawLine(x, y, height) {
    c.beginPath();
    c.moveTo(x, y);
    c.lineTo(x, height + y);
    c.stroke();
}

function drawBars(left, top, width, height, n) {
    let base = left;
    let j = (width  * (n/ 2)) / n;
    let i =  (width + j) / n;
    let k = (width + i) / n
    let space = (width + k)/ n;

    console.log(k)
    // console.log(space)
    // border
    c.strokeStyle = "blue"
    c.strokeRect(left, top, width, height);

    // column
    for (let i = 0; i < n * 4; i++) {
        if (i % n === 0) {
            left = base;
        }

        // stroke point
        c.strokeStyle = "black";
        drawLine(left, top, height)
        left += space;
    }
}

// function drawBars(left, top, width, height, n) {
//     bars(left, top, width, height, n)
//     bars(left + width, top + height, width, height, n)
// }

// drawBars(10, 5, 200, 200, 8)

// drawBars(200, 200, 8)

// draw eye

// oval
function oval(x, y, width, height, midX, midY) {
    // border
    c.strokeStyle = "blue";
    c.strokeRect(x, y, width, height);

    // oval
    c.fillStyle = "yellow";
    c.beginPath();
    c.ellipse(midX+ x, midY + y, midX, midY, 0, 0, Math.PI*2, false);
    c.fill();
}

// lines from center
function blackLines(midX, midY, x, width, height, n) {
    let j = (width  * (n/ 2)) / n;
    let i =  (width + j) / n;
    let k = (width + i) / n
    let space = (width + k) / n;
  
    function line(x) {
        c.strokeStyle = "black";
        c.beginPath();
        c.moveTo(midX, midY);
        c.lineTo(x, height);
        c.stroke()
    }
    
    for (let i = 0; i < n; i++) {
        line(x);
        x += space
    }
}

// combine the lines and the eye
function drawEye(left, top, width, height, n) {
    let midX = width / 2;
    let midY = height / 2;

    oval(left, top, width, height, midX, midY);
    blackLines(midX + left, midY + top, left, width, height + top, n);
}

// alternate eye
function alternateEye(left, top, width, height, n) {
    drawEye(left, top, width, height, n);
    drawEye(width + left, height + top, width, height, 10)
}

// alternateEye(5, 5, 300, 200, 10)

// draw bowtie

// lines
function lines(mX, mY, lX, lY, color, gapX, gapY) {

    // lines
    c.strokeStyle = color;
    c.beginPath();
    c.moveTo(mX, mY);
    c.lineTo(lX + gapX, lY + gapY);
    c.stroke();
}

// draw bowtie
function drawBowtie(left, top, width, height, n) {
    // gaps
    let gapX = left;
    let gapY = top;

    // border
    c.strokeStyle = "blue";
    c.strokeRect(left, top, width, height);

    // space between the lines
    let j = (height  * (n/ 2)) / n;
    let i =  (height + j) / n;
    let k = (height + i) / n
    // let i = height / n;
    // let k = (height + i) / n;
    let space = (height + k) / n;

    // multiple lines
    // bowtie
    for (let i = 0; i < n; i++) {
        lines(left, top, width, height, "red", gapX, gapY);
        top += space;
        height -= space;
    }
}

// left upper and right lower quadrant
function quadrant(left, top, width, height, n) {
    bowtie(left, top, width, height, n);
    bowtie(left + width, top + height, width, height, n)
}

// quadrant(5, 5, 300, 200, 17);

// d. Quilting Bee
// function drawQuilt(width, height, N) {
//     // start position;
//     let x = 0;
//     let y = 0;
//     // poition
//     let positionX = x;
//     let positionY = y;
    
//     // size of the quilt
//     let newW = Math.floor((width) / N); 
//     let newH = Math.floor(height / N);

//     // border
//     // c.strokeRect(positionX, positionY, width, height);
    
//     // row & column;
//     let row = 0;
//     let column = 0;

//     // row
//     for (let k = 0; k < N; k++) {
//         // column
//         for (let i = 0; i < N; i++) {
//             drawEye(positionX , positionY, newW, newH, N)
//             positionY += newH;
//             column++;
//         }
//         ;
//         column = 0;
//         row++;
//         positionY = x;
//         positionX += newW;
//     }
// }

// drawQuilt(500, 300, 5)

// patch rotation
function drawQuilt(width, height, N) {
    // start position;
    let x = 0;
    let y = 0;

    // poition
    let positionX = x;
    let positionY = y;
    
    // size of the quilt
    let newW = Math.floor((width) / N); 
    let newH = Math.floor(height / N);

    // border
    // c.strokeRect(positionX, positionY, width, height);
    
    // row & column;
    let row = 0;
    let column = 0;

    // row
    for (let k = 0; k < N; k++) {
        // column
        for (let i = 0; i < N; i++) {
            // choice 
            let choice = (row + column) % 3;

            if (choice === 0) {
                drawEye(positionX , positionY, newW, newH, N)
            } else if (choice === 1) {
                drawBars(positionX , positionY, newW, newH, N)
            } else {
                drawBowtie(positionX , positionY, newW, newH, N)
            }
        
            positionY += newH;
            column++;
        }
        ;
        column = 0;
        row++;
        positionY = x;
        positionX += newW;
    }
}

// drawQuilt(600, 400, 6)
// drawQuilt(400, 400, 3)
drawQuilt(1200, 800, 10)

// exercises
// https://web.stanford.edu/class/cs106a-8/sum-assn/homework-5-quilt.html
// https://web.stanford.edu/class/archive/cs/cs106a/cs106a.1178/resources/midterm/PracticeMidterm.pdf

// https://web.stanford.edu/class/archive/cs/cs106a/cs106a.1226/handouts/12-assignment5.html#part-2-word-guessing

// http://web.stanford.edu/class/archive/cs/cs106a/cs106a.1178/resources/midterm/MidtermQuestionBooklet.pdf