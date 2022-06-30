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

// ball position
let ballPosition = {
    x: null,
    y: null,
}

// for scores
let score = scores();
let turn = turns()

// scores
function text() {
    c.font = "30px Comic Sans MS";
    c.fillStyle = "red";
    c.fillText("Score: ", 2, 30);
}

function scores() {
    let score = 0;

    return (condition) => {
        if (condition) {
            score++
        }

        c.font = "30px Comic Sans MS";
        c.fillStyle = "red";
        c.fillText(score, 100, 30);
        return score
    }
}

// turns
function text2() {
    c.font = "30px Comic Sans MS";
    c.fillStyle = "red";
    c.fillText("Turns: ", 140, 30);
}

function turns() {
    let turns = 4;

    return (condition) => {
        if (condition) {
            turns--
        }

        c.font = "30px Comic Sans MS";
        c.fillStyle = "red";
        c.fillText(turns, 238, 30);
        
        return turns
    }
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

        // out of bounds
        if (this.y >= canvas.height - radius) {
            this.dx = 0;
            this.dy = 0;
            this.y = 460 - radius; 
            turn(true)
        }

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

        // for bounce to wall
        if (this.x >= canvas.width - radius || this.x <= radius) {
            this.dx = -this.dx;
            if (this.x >= canvas.width - radius || this.x <= radius) {
                this.dx = this.dx;
            }
        } else if (this.y <= radius) {
            this.dy = -this.dy;
            if (this.y <= radius) {
                this.dy = this.dy;
            }
        }
        
        // bounce to board
        if (RectCircleColliding(this, mouse, boardS) && RectSideColliding(this, mouse, boardS)) {
            this.dx = -this.dx;
            this.dy = -this.dy;
        } else if (RectCircleColliding(this, mouse, boardS)) {
            this.dy = -this.dy;
        } else if (RectSideColliding(this, mouse, boardS)) {
            this.dx = -this.dx; 
        }

        // colliding
        // bounce to bricks
        function bricksCollide(circle, dx, dy) {
            let array = bricks;

            for (let i = array.length - 1 ; i >= 0; i--) {
                let element = array[i];
                if (RectCircleColliding(circle, element, recW) && RectSideColliding(circle, element, recW)) {
                    dx = -dx;
                    dy = -dy;
                    array.splice(i, 1)
                    score(true);
                    break;
                } else if (RectCircleColliding(circle, element, recW)) {
                    dy = -dy;
                    array.splice(i, 1)
                    score(true);
                    break;
                } else if (RectSideColliding(circle, element, recW)) {
                    dx = -dx;
                    array.splice(i, 1)
                    score(true);
                    break;
                }

            }

            return {dx: dx, dy: dy}
        }

        // bricks collide
        let {dx, dy} = bricksCollide(this, this.dx, this.dy);

        this.dx = dx;
        this.dy = dy;
        
        // collide with board
        function RectCircleColliding(circle, rect, size) {
            let distX = Math.abs(circle.x - rect.x- size/2);
            let distY = Math.abs(circle.y - rect.y - boardH/2);

            if (distX >= (size/2 + radius)) { return false; }
            if (distY >= (boardH/2 + radius)) { return false; }

            if (distX <= (size/2)) { return true; } 
            if (distY <= (boardH/2)) { return true; }
        }
        
        // side board colliding
        function RectSideColliding(circle, rect, size) {
            let distX = Math.abs(circle.x - rect.x- size/2);
            let distY = Math.abs(circle.y - rect.y - boardH/2);

            let dx = distX - size/2;
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
// bricks
function buildRec() {
    let rectangle = [];
    let color = ["blue", "red", "orange", "yellow", "green", "cyan"];
    let hGap = 0
    let space = 4;
    let heightRec = 70;
    let index = -1;

    for (let i = 0; i < 10; i++) {
        let gap = 0

        if (i % 2 === 0) {
            index++
        }

        for (let k = 0; k < 7; k++) {
            let width = recW;
        
            gap += space;
            rectangle.push(new Rectangle(gap, heightRec + hGap, color[index]));
            gap += width;
        }
        hGap += boardH + space;
    }

    return rectangle
}

let bricks = buildRec();

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

// // start stick ball
canvas.addEventListener("click", event => {
    if (event.button === 0) {
        ball.dx = speed;
        ball.dy = speed;

        ball.x = mouse.x + middleOfTheBoard;

        if (event.pageX - (canvas.width-middleOfTheBoard) <= 0) {
            ball.x = middleOfTheBoard;
        } else if (mouse.x >= canvas.width - boardS) {
            ball.x = canvas.width - middleOfTheBoard;
        }
       
    }
})

// animate
function animate() {
    c.clearRect(0, 0, canvas.width, canvas.height);

    // score
    text();
    score(false);
    // turns
    text2();
    turn(false)

    // bricks
    for (let i = 0; i < buildRec().length -1; i++) {
        if (bricks[i]) {
            bricks[i].update()
        }
    }

    c.fillStyle = "red";
    ball.update()
    c.fillStyle = "Black";
    board.update(mouse.x);
    c.fillStyle = "red";
    let animatation = requestAnimationFrame(animate);
    if (turn(false) <= 0) {
        // alert("You lose refresh to play again")
        let name = prompt(`your score is "${score(false)}" enter name:`)

        window.alert(`Thank you for playing ${name} refresh to play again`)
        cancelAnimationFrame(animatation)
        window.location.reload()
    }
}

animate()