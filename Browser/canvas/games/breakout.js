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
        if (mouse.x <= 0) {
            mouse.x = 0;
        } else if (mouse.x >= rs) {
            mouse.x = rs;
        }

        let board = new Board(x);
        board.draw()
    }
}

// right side
let rs = canvas.width - 90;

// ball
class Ball {
    constructor(x, y, radius, dx, dy) {
        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = dy;
        this.radius = radius;
    }

    // draw the ball
    draw() {
        c.beginPath()
        c.arc(this.x, this.y, this.radius, 0, Math.PI *2, false)
        c.fillStyle = "blue";
        c.fill()
        c.closePath()
    }

    update() {
        // stick the ball at start
        let x
        let y
        this.x += this.dx;
        this.y += this.dy;
        if (!this.dx) {
            x = mouse.x + 45;
            y =  460 - 9
            
            if (mouse.x <= 0) {
                x = 45 ;
            } else if (mouse.x >= rs) {
                x = rs + 45;
            }
        } else {
            x = this.x;
            y = this.y
        }

        // for bounce the wall
        if (this.x >= canvas.width - 7 || this.x <= 7) {
            this.dx = -this.dx;
        } else if (this.y >= canvas.height - 7 || this.y <= 7) {
            this.dy = -this.dy;
        }

        // bounce to board
        if ((this.x >= mouse.x && this.x <= mouse.x + 90) && this.y >= 460 - 6) {
            this.dy = -this.dy;
        } 
        // else if (this.x === mouse.x && (this.y >= 460 - 6 && this.y <= 460 + 15)) {
        //     this.dy = -this.dy;
        // }

        // update ball
        let ball = new Ball(x, y, this.radius, this.dx, this.dy)
        ball.draw()
    }
}

// rect
class Rect {
    constructor(x) {
        this.x = x;
        this.y = 460;
        this.width = 90; 
        this.height = 15;
    }

    draw() {
        c.beginPath();
        c.fillRect(mouse.x, 460, 90, 15)
        c.fillStyle = "red";
        c.closePath()
    }

    update(x) {
        let board = new Board(x);
        board.draw()
    }
}

// object
// board
let board = new Board(mouse.x);
board.draw()

// ball
let speed = -1;
let radius = 9;
let ball = new Ball(mouse.x + 45, 460 - 9, radius, 0, 0);
// ball.draw()
// ball.update()

// event
// mouse event
canvas.addEventListener("mousemove", event => {
    mouse.x = event.pageX - (canvas.width-45);
})

// start stick ball
canvas.addEventListener("click", event => {
    if (event.button === 0) {
        ball.dx = speed;
        ball.dy = speed;

        ball.x = (event.pageX - (canvas.width -45)) + 45; 
        if (event.pageX - (canvas.width-45) <= 0) {
            ball.x = 45;
        } else if (event.pageX - (canvas.width-45) >= rs) {
            ball.x = canvas.width - 45;
        }
    }
})

// animate
function animate() {
    c.clearRect(0, 0, canvas.width, canvas.height)
    c.fillStyle = "blue";
    ball.update()
    c.fillStyle = "Black";
    board.update(mouse.x)
    requestAnimationFrame(animate);
}

animate()