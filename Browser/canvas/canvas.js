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

let x = Math.random() * innerWidth;
let y = Math.random() * innerHeight;
let dx = 4;
let dy = 4;
let radius = 30
c.arc(x, y, 50, 0, 2 * Math.PI);
function animate() {
    if (x + radius >= window.innerWidth || x - 30 <= 0) {
        dx = -dx;
    }

    if (y + radius >= window.innerHeight || y - 30 <= 0) {
        dy = -dy;
    }
    c.clearRect(0, 0, window.innerWidth, window.innerHeight);
    c.beginPath();
    c.arc(x, y, radius, 0, 2 * Math.PI);
    c.stroke();
    x = x + dx;
    y = y + dy;
    requestAnimationFrame(animate)
}

animate()



