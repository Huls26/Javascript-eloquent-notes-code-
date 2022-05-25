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
let link = document.querySelector("a");
link.addEventListener("click", event => {
  console.log("Nope.");
  event.preventDefault();
});
