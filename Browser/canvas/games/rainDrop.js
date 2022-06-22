let canvas = document.querySelector("canvas");
canvas.height = window.innerHeight - 10;
canvas.width = window.innerWidth - 10;

let c = canvas.getContext("2d");

class RainDrop {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.dy = 4;
    }

    rain() {
        c.beginPath();
        c.arc(this.x, this.y, 7, 0, Math.PI * 2);
        c.stroke();
    }

    drop() {
        if (this.y >= window.innerHeight -10) {
            this.y = 7;
        }
        this.y += this.dy;
        let rainDrop = new RainDrop(this.x, this.y);
        rainDrop.rain(this.y);
    }
}

let rainDrop = []
for (let i = 0; i < 20; i++) {  
    let x = Math.random() * window.innerWidth;
    let y = Math.random() * window.innerHeight;
    rainDrop.push(new RainDrop(x, y));

}

function animate() {
    c.clearRect(0, 0, window.innerWidth, window.innerHeight)
    for(let i = 0; i < rainDrop.length; i++) {
        rainDrop[i].drop()
    }

    requestAnimationFrame(animate)
}

animate()