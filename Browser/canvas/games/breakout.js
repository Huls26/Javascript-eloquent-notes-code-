"use strict"
document.body.style.display = "flex";
document.body.style.justifyContent = "center";

let canvas = document.querySelector("canvas");
canvas.style.marginTop = "20px";
canvas.width = 350;
canvas.height = 500;

let c = canvas.getContext("2d");

// ===== size ====
// board
let boardS = 67;
let boardH = 12;
let boardY = 460;
let middleOfTheBoard = boardS/2
// ball
let speed = -3;
let radius = 8;
// rectangle
let recW = 53.666;

// mouse
let mouse = {
    x: canvas.width / 2 - middleOfTheBoard,
    y: canvas.height / 2,
}

// board
class Board {
    constructor(x) {
        this.x = x;
        this.y = boardY;
        this.width = boardS; 
        this.height = boardH;
    }

    draw() {
        c.beginPath();
        c.fillRect(mouse.x, 460, this.width, this.height)
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
let rs = canvas.width - boardS;

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
        c.fillStyle = "red";
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
            x = mouse.x + middleOfTheBoard;
            y =  460 - radius
            
            if (mouse.x <= 0) {
                x = middleOfTheBoard;
            } else if (mouse.x >= rs) {
                x = rs + middleOfTheBoard;
            }
        } else {
            x = this.x;
            y = this.y;
        }

        // for bounce the wall
        if (this.x >= canvas.width - radius || this.x <= radius) {
            this.dx = -this.dx;
        } else if (this.y >= canvas.height - radius || this.y <= radius) {
            this.dy = -this.dy;
        }
        
        // bounce to board
        if (RectCircleColliding(this, mouse) && RectSideColliding(this, mouse)) {
            this.dx = -this.dx;
            this.dy = -this.dy;
        } else if (RectCircleColliding(this, mouse)) {
            this.dy = -this.dy;
        } else if (RectSideColliding(this, mouse)) {
            this.dx = -this.dx; 
        }

        // colliding
        function RectCircleColliding(circle, rect) { 
            let distX = Math.abs(circle.x - rect.x- boardS/2);
            let distY = Math.abs(circle.y - rect.y - boardH/2);

            // console.log(distY)
            if (distX > (boardS/2 + radius)) { return false; }
            if (distY > (boardH/2 + radius)) { return false; }

            if (distX <= (boardS/2)) { return true; } 
            if (distY <= (boardH/2)) { return true; }
        }
        
        // side board colliding
        function RectSideColliding(circle, rect) {
            let distX = Math.abs(circle.x - rect.x- boardS/2);
            let distY = Math.abs(circle.y - rect.y - boardH/2);

            let dx = distX - boardS/2;
            let dy = distY - boardH/2;

            return (dx * dx + dy * dy <= (radius*radius));
        }

        // update ball
        let ball = new Ball(x, y, this.radius, this.dx, this.dy)
        ball.draw()
    }
}

// rectangle
class Rectangle {
    constructor(x, y, color) {
        this.x = x;
        this.y = y;
        this.width = recW; 
        this.height = boardH;
        this.color = color
    }

    draw() {
        c.beginPath();
        c.fillStyle = this.color;
        c.fillRect(this.x, this.y, this.width, this.height)
        c.closePath()
    }

    update() {
        let rect= new Rectangle(this.x, this.y, this.color);
        rect.draw()
    }
}

// Object
// rectangle
let rectangle = [];
let color = ["blue", "red", "orange", "yellow", "green", "cyan"];
// let rect = new Rectangle(4, 70);
let hGap = 0
let space = 4;
let heightRec = 70;
let index = 0;

for (let i = 0; i < 10; i++) {
    let gap = 0

    if (i % 2 === 0) {
        index++
    }

    for (let k = 0; k < 7; k++) {
        let width = recW;
    
        gap += space;
        rectangle.push(new Rectangle(gap, heightRec + hGap, color[index]))
        gap += width;
    }
    hGap += boardH + space;
}

console.log(rectangle)
// board
let board = new Board(mouse.x);
board.draw()

// ball
let ball = new Ball(mouse.x + middleOfTheBoard, 460 - radius, radius, 0, 0);

// event
// mouse event
canvas.addEventListener("mousemove", event => {
    mouse.x = event.pageX - (canvas.width - (boardS + middleOfTheBoard));
    mouse.y = boardY;
})

// start stick ball
canvas.addEventListener("click", event => {
    if (event.button === 0) {
        ball.dx = speed;
        ball.dy = speed;

        ball.x = mouse.x + middleOfTheBoard;

        if (event.pageX - (canvas.width-middleOfTheBoard) <= 0) {
            ball.x = middleOfTheBoard;
        } else if (mouse.x >= canvas.width - boardS) {
            console.log("edge")
            ball.x = canvas.width - middleOfTheBoard;
        }
    }
})

// animate
function animate() {
    c.clearRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < rectangle.length -1; i++) {
        rectangle[i].update()
    }
    c.fillStyle = "red";
    ball.update()
    c.fillStyle = "Black";
    board.update(mouse.x);
    c.fillStyle = "red";
    requestAnimationFrame(animate);
}

animate()