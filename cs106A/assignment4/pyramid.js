"use strict"

// Part 2: Graphics – drawing a Pyramid
let canvas = document.querySelector("canvas");
let ctx = canvas.getContext("2d");

let CANVAS_WIDTH = 600    
let CANVAS_HEIGHT = 300    
canvas.width = CANVAS_WIDTH;
canvas.height = CANVAS_HEIGHT;
document.body.style.display = "flex";
document.body.style.justifyContent = "center";
document.body.style.marginTop = "1em";
canvas.style.border = ".2em solid"

const BRICK_WIDTH = 30      
const BRICK_HEIGHT = 12   
const BRICKS_IN_BASE = 14     

function drawPyramid(ctx) {
    let y = 0;
    let bricks = 1;

    for (let i = 0; i < BRICKS_IN_BASE; i++) {
        let midPoint = (CANVAS_WIDTH / 2) - ((BRICK_WIDTH * bricks)/ 2);

        for (let k = 0; k < bricks; k++) {
            ctx.strokeRect(midPoint + (k * BRICK_WIDTH), 120 + y, BRICK_WIDTH, BRICK_HEIGHT)
        }
        console.log(midPoint)
        bricks++
        y += BRICK_HEIGHT;
    }

    ctx.beginPath();
    ctx.moveTo(300, 0);
    ctx.lineTo(300, 300);
    ctx.stroke()
}

drawPyramid(ctx)

// https://web.stanford.edu/class/archive/cs/cs106a/cs106a.1226/handouts/11-assignment4.html