let canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let c = canvas.getContext("2d");

let cats = [];
function make_base(x, y) {
    const ship = new Image();
    ship.src = "../../../../../img/cat.jpeg"
    ship.onload = function() {
        c.drawImage(ship, x, y, 100, 100);
    }
    cats.push(ship)
}

let totalCat = 0
while (totalCat < 100) {
    let x = Math.floor(Math.random() * (window.innerWidth - 150)) + 5;
    let y = Math.floor(Math.random() * (window.innerHeight - 150)) + 5;
    cats.push(make_base(x, y))
    totalCat++
}


canvas.addEventListener("click", event => {
    // c.clearRect(0, 0, event.pageX, event.pageY);
    console.log(event.target)
})