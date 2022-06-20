"use strict"
let canvas = document.getElementById("canvas");
canvas.width = document.body.clientWidth;
canvas.height = window.innerHeight;

let c = canvas.getContext("2d");

// square
// c.fillRect(100, 100, 100, 100);

// line
// c.beginPath();
// c.moveTo(50, 300);
// c.lineTo(500, 150);
// c.lineTo(500, 300);
// c.stroke();

// circle
// for (let i = 0; i < 100; i++) {
//     let x = Math.random() * innerWidth;
//     let y = Math.random() * innerHeight;
//     let z = Math.random() * 255;
//     c.beginPath();
//     c.arc(x, y, 50, 0, 2 * Math.PI);
//     // c.strokeStyle = `rgb(${x- 50}, ${y- 50}, ${z})`;
//     c.strokeStyle = `#${x}${y}`;
//     c.stroke(); 
// }

// let x = Math.random() * innerWidth;
// let y = Math.random() * innerHeight;
// let dx = 4;
// let dy = 4;
// let radius = 30
// c.arc(x, y, 50, 0, 2 * Math.PI);
// function animate() {
//     if (x + radius >= window.innerWidth || x - 30 <= 0) {
//         dx = -dx;
//     }

//     if (y + radius >= window.innerHeight || y - 30 <= 0) {
//         dy = -dy;
//     }
//     c.clearRect(0, 0, window.innerWidth, window.innerHeight);
//     c.beginPath();
//     c.arc(x, y, radius, 0, 2 * Math.PI);
//     c.stroke();
//     x = x + dx;
//     y = y + dy;
//     requestAnimationFrame(animate)
// }

// animate()

// OOP drawing circle
class Circle {
    constructor(x, y, dx, dy, color) {
        this.x = x;
        this.y = y;
        this.radius = 30;
        this.dx = dx;
        this.dy = dy;
        this.circle = null;
        this.color = color;
    }

    draw() {
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        c.strokeStyle = "blue";
        c.stroke();
        // c.fillStyle = this.color
        c.fill();
    }

    update() {
        if (this.x + this.radius >= window.innerWidth || this.x - 30 <= 0) {
            this.dx = -this.dx;
        }
            
        if (this.y + this.radius >= window.innerHeight || this.y - 30 <= 0) {
            this.dy = -this.dy;
        }   
                  
        this.x += this.dx;
        this.y += this.dy;

        this.circle = new Circle(this.x, this.y, this.dx, this.dy, this.color)
        this.circle.draw()
    }    

    rgbColor() {
    }
}

let circles = [];
for (let i = 0; i < 30; i++) {
    let radius = 30
    let x = Math.random() * (innerWidth - radius * 2) + 30;
    let y = Math.random() * (innerHeight- radius * 2) + 30;
    let dx = 1;
    let dy = 1;
    let colors = ["red", "green", "blue", "black"]

    let index = Math.floor(Math.random() * colors.length);
    let cir = new Circle(x, y, dx, dy, colors[index]);
    circles.push(cir);
}

function animate() {
    c.clearRect(0, 0, window.innerWidth, window.innerHeight);
    for (let i = 0; i < circles.length -1; i++) {
        circles[i].update();
    }
    requestAnimationFrame(animate)
}

animate()

circles[0].rgbColor()
