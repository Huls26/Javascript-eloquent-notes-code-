"use script"

// container
let container = document.createElement("div");
container.id = "container";
container.style.width = `${window.innerWidth}px`;
container.style.height = `${window.innerHeight}px`;
container.style.border = "solid 3px black";
container.style.position = "absolute";
document.body.appendChild(container);

// img
function img(x, y) {
    let createImg = document.createElement("img");
    createImg.src = "../../../../../img/cat.jpeg"
    createImg.style.top = `${y}px`;
    createImg.style.left = `${x}px`
    container.appendChild(createImg);
}

// total cat
let totalCat = 0
let totalScore = 0;

// create 100 cat
function cats() {
    setInterval(() => {
        let x = Math.floor(Math.random() * (container.clientWidth - 125)) + 10;
        let y = Math.floor(Math.random() * (container.clientHeight - 125)) + 10;
        if (totalCat <= 100) {
            img(x, y)
            totalCat++
        }
    }, 1000)
}

cats();

let score = document.querySelector("span");
score.innerText = totalScore;

window.addEventListener("click", event => {
    if (event.target.src) {
        container.removeChild(event.target)
        totalScore++
        score.innerText = totalScore;
        totalCat--
        if (totalScore === 50) {
            alert("great you pet 10 cats") 
        }
    } 
})

