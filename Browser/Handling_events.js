"use strict";

// performs event in all elements 
// document.body.addEventListener("click", () => console.log("knocked"))

// window.addEventListener("click", () => console.log("knocked"))

// Events and DOM nodes
// let button = document.querySelector("button");
// button.addEventListener("click", () => console.log("the button clicked"))

// on click method
// function clickMe() {
//     console.log("being clicked")
// }

// let button = document.querySelector("button");
// function once() {
//   console.log("Done.");
//   button.removeEventListener("click", once);
// }
// button.addEventListener("click", once);

// Event objects
// button.addEventListener("mousedown", event => {
//     console.log(event.button)
//     console.log(event.type)
// })

// Propagation
// parent and child
// let withChild = document.querySelector("#with-child-btn");
// withChild.addEventListener("click", () => {console.log("parent and child is being click")})

let para = document.querySelector("p");
let button = document.querySelector("button");

para.addEventListener("mousedown", () => console.log("Handler for paragraph"));

button.addEventListener("mousedown", (event) => {
    console.log("Handler for button");
    if (event.button == 2) event.stopPropagation();
})

// target
document.body.addEventListener("click", event => {
    if (event.target.nodeName === "BUTTON") {
        console.log(event.target.nodeName)
        console.log("Clicked", event.target.innerText)
    }
})

// Default actions
// click
// mousedown
// let link = document.querySelector("a");
// link.addEventListener("click", event => {
//   console.log("Nope.");
//   event.preventDefault();
// });

// Key events

// keydown
window.addEventListener("keydown", event => {
    if (event.key === "v") {
        document.body.style.backgroundColor = "violet"
    }
})

// keyup
window.addEventListener("keyup", event => {
    if (event.key === "v") {
        document.body.style.backgroundColor = ""
    }
})

// ctrlKey + space
window.addEventListener("keydown", event => {
    // event.shiftKey
    if (event.key == " " && event.ctrlKey) {
        console.log("Continuing!")
    }
})

// Mouse clicks
window.addEventListener("click", event => {
    let dot = document.createElement("div");
    dot.className = "dot";
    console.log(event.clientX)
    dot.style.left = (event.clientX - 4) + "px";
    dot.style.top = (event.clientY - 4) + "px";
    document.body.appendChild(dot);
});