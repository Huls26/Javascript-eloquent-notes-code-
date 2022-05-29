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

// let para = document.querySelector("p");
// let button = document.querySelector("button");

// para.addEventListener("mousedown", () => console.log("Handler for paragraph"));

// button.addEventListener("mousedown", (event) => {
//     console.log("Handler for button");
//     if (event.button == 2) event.stopPropagation();
// })

// target
// document.body.addEventListener("click", event => {
//     if (event.target.nodeName === "BUTTON") {
//         console.log(event.target.nodeName)
//         console.log("Clicked", event.target.innerText)
//     }
// })

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
// window.addEventListener("keydown", event => {
//     if (event.key === "v") {
//         document.body.style.backgroundColor = "violet"
//     }
// })

// keyup
// window.addEventListener("keyup", event => {
//     if (event.key === "v") {
//         document.body.style.backgroundColor = ""
//     }
// })

// ctrlKey + space
// window.addEventListener("keydown", event => {
//     // event.shiftKey
//     if (event.key == " " && event.ctrlKey) {
//         console.log("Continuing!")
//     }
// })

// Mouse clicks
// window.addEventListener("click", event => {
//     let dot = document.createElement("div");
//     dot.className = "dot";
//     console.log(event.clientX)
//     dot.style.left = (event.clientX - 4) + "px";
//     dot.style.top = (event.clientY - 4) + "px";
//     document.body.appendChild(dot);
// });

// make a client and screen display
// let cbtn = document.createElement("p");
// document.body.appendChild(cbtn)

// background color change and display the clientX and clientY  
// window.addEventListener("mousemove", event => {
//     cbtn.innerText = `clientX: ${event.clientX}\n clientY: ${event.clientY}`
//     document.body.style.backgroundColor = `rgb(${event.pageX}, ${event.pageY}, 220`
    
// })

// Mouse motion
// let lastX; // Tracks the last observed mouse X position
//   let bar = document.querySelector("div");
//   bar.addEventListener("mousedown", event => {
//     if (event.button == 0) {
//       lastX = event.clientX;
//       window.addEventListener("mousemove", moved);
//       event.preventDefault(); // Prevent selection
//     }
//   });

//   function moved(event) {
//     if (event.buttons == 0) {
//       window.removeEventListener("mousemove", moved);
//     } else {
//       let dist = event.clientX - lastX;
//       // with borders i use clientWidth
//       let newWidth = Math.max(10, bar.offsetWidth + dist);
//       bar.style.width = newWidth + "px";
//       lastX = event.clientX;
//     }
// }

// prevent for selection
// document.querySelector("p").addEventListener("mousedown", (event) => {
//     event.preventDefault()
// })

// display mouse client
// let buttonAdd = document.querySelector("#add");
// let buttonStop = document.querySelector("#stop");
// let displayInfo = document.createElement("p");
// document.body.appendChild(displayInfo);

// event listener
// buttonAdd.addEventListener("click", () => {
//   displayInfo.innerText = "clientx:\nclientY:";
//   window.addEventListener("mousemove", display)
// });

// remove mouseMove
// buttonStop.addEventListener("click", () => {
//   window.removeEventListener("mousemove", display)
// });

// display
// function display(event) {
//   if (event.buttons === 1) {
//     window.removeEventListener("mousemove", display)
//   }
//   displayInfo.innerText = `clientx: ${event.clientX}\nclientY: ${event.clientY}`
// }

// Touch events
// my approuch in touch 
// function circle(event) {
//     let touch = event.touches[0];
//     let dot;

//     console.log(event)
//     if (dot = document.querySelector("dot")) {
//         dot.remove();
//     }
    
//     if (touch) {
//         let circle = document.createElement("dot");
//         circle.style.top = `${touch.clientY - 50}px`;
//         circle.style.left = `${touch.clientX - 50}px`
//         document.body.appendChild(circle)  
//     }
// }

// window.addEventListener("touchstart", circle);
// window.addEventListener("touchmove", circle)
// window.addEventListener("touchend", circle);

// Scroll events

 // Create some content
  // document.body.appendChild(document.createTextNode(
  //   "supercalifragilisticexpialidocious ".repeat(1000)));

  // let bar = document.querySelector("#progress");
  // window.addEventListener("scroll", () => {
  //     console.log(pageYOffset)
  //     console.log(document.body.scrollHeight, innerHeight)
  //   let max = document.body.scrollHeight - innerHeight;
  //   bar.style.width = `${(pageYOffset / max) * 100}%`;
  // });

// make bar the volume bar
// my approach in volume bar
let volume = document.querySelector(".volume");

function switchKnob(event) {
  let cC = event.clientX;
  function moved(events) {
    if (!events.buttons) {
      window.removeEventListener("mousemove", moved)
    }
   
    if (events.clientX > cC) {
      volume.style.width = `${events.clientX +1}px`
    } 
    else if (events.clientX < cC) {
      volume.style.width = `${events.clientX -1}px`
    }
  }
  window.addEventListener("mousemove", moved)
}

volume.addEventListener("mousedown", switchKnob);




// console.log(Boolean(document.querySelector("im")))
// To watch
// eventListener -> https://www.youtube.com/watch?v=XF1_MlZ5l6M
// https://www.youtube.com/watch?v=TaPdgj8mucI


