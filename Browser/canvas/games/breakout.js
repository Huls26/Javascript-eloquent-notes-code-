"use strict"
document.body.style.display = "flex";
document.body.style.justifyContent = "center";

let canvas = document.querySelector("canvas");

canvas.style.marginTop = "20px";
canvas.width = 320;
canvas.height = 500;

let c = canvas.getContext("2d");

// mouse
let mouse = {
    x: canvas.width / 2 - 45,
    y: canvas.height / 2,
}


// board
class Board {
    constructor(x) {
        this.x = x;
        this.y = 460;
        this.width = 90; 
        this.height = 15;
    }

    draw() {
        c.beginPath();
        c.fillRect(mouse.x, 460, 90, 15)
        c.fillStyle = "Black";
        c.closePath()
    }

    update(x) {
        let board = new Board(x);
        board.draw()
    }
}

// right side
let rs = canvas.width - 90;

// ball
class Ball {
    constructor(x, y, radius) {
        this.x = x;
        this.y = y;
        this.dx = 4;
        this.dy = 4
        this.radius = radius;
    }

    draw() {
        c.beginPath()
        c.arc(this.x, this.y, this.radius, 0, Math.PI *2, false)
        c.fillStyle = "blue";
        c.fill()
        c.closePath()
    }

    update(x) {
        let ball = new Ball (this.x, this.y, this.radius)
        ball.draw()
    }

    stick() {

    }
}

// object
// board
let board = new Board(mouse.x);
board.draw()

//ball
let ball = new Ball(mouse.x + 45, 460 - 9, 9);
ball.draw()

// mouse event
canvas.addEventListener("mousemove", event => {
    mouse.x = event.pageX - (canvas.width-45);
})

canvas.addEventListener("click", event => {
})
// remove this event after click or use

// removeEventListener

// animate
function animate() {
    c.clearRect(0, 0, canvas.width, canvas.height)
    if (mouse.x <= 0) {
        mouse.x = 0;
    } else if (mouse.x >= rs) {
        mouse.x = rs;
    }

    ball.update()
    c.fillStyle = "blue";
    c.fillStyle = "Black";
    board.update(mouse.x)
    requestAnimationFrame(animate);
}

animate()