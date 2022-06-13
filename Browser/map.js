"use strict"

// let container = document.querySelector(".container");
// container.style.flexDirection = "column";
// container.style.alignItems = "center"

// function assemblyBoard(rows, columns) {
//     column(rows, columns);
    // console.log(colors)
// }


// let colors = 0
// function row(rows, element) {
//     while (rows > 0) {
//         let div = document.createElement("div");
//         div.className = "black";
//         if (colors % 2 === 0) {
//             div.className = "white";
//         }
//         element.appendChild(div);
//         colors++
//         rows--;
//     }
// }

// function column(rows, columns) {
//     while(columns > 0) {
//         let columnElement = document.createElement("div");
//         columnElement.className = "column";
//         row(rows, columnElement);
//         // columnElement.style.display = "flex";
//         // columnElement.style.flexDirection = "row";
//         container.appendChild(columnElement);
//         columns--;
//         colors++
//     }
// }

// assemblyBoard(8, 8);

// sentinel loops
// let sum = 0;
// let value = true;
// while (value){
//     console.log(Boolean(value))
//     value = parseInt(prompt("Type a number: "))
//     console.log("Type a number: " + value)
//     sum += value;
// }
// console.log(value)
// console.log("sum is " + sum)

// create a box
// let container = document.querySelector(".container");

// function box(rows, columns) {
//     for (let i = 0; i < columns; i++) {
//         let column = document.createElement("div");
//         column.style.display = "flex";
//         for (let j = 0; j < rows; j++) {
//             let row = document.createElement("div");
//             row.className = "outline";
//             if (!(i === 0 || i === (columns - 1)) && (j !== 0) && (j !== rows -1)) {
//                 row.className = "space";
//             }

//             column.appendChild(row);
//         }
//         container.appendChild(column);
//     }
// }

// box(10, 4)

// lexical scope
// function profile() {
//     const fullName = "Tobi Sho";
//     function sayName() {
//       const fullName = "Oluwa Sofe";
//       function writeName() {
//         return fullName;
//       }
//         return writeName();
//     }
//     return sayName();
// }

// console.log(profile())

// boxes
// let container = document.querySelector(".container");

// function box(width, numberOfRec) {
//     let count = 0;
//     let size = Math.floor(width / numberOfRec);

//     while (count < numberOfRec) {
//         let box = document.createElement("div");
//         box.style.width = `${width}px`;
//         box.style.height = "1.5em";
//         box.style.border = "solid 3px black"
//         container.appendChild(box);
//         width -= size
//         count++
//     }
// }

// box(300, 10)

// car
function carS(x, y, size) {
    let car = document.createElement("div");
    car.style.position = "absolute";
    car.style.top = y+"px";
    car.style.left = x +"px";
    car.style.width = `${150 * size}px`
    car.style.height = `${70 * size}px`
    car.style.backgroundColor = "blue";

    function wheel(x, y) {
        let wheel = document.createElement("div");
        wheel.style.position = "absolute";
        wheel.style.top = `${y * size}px`;
        wheel.style.left = `${x * size}px`;
        wheel.style.width = `${30 * size}px`
        wheel.style.height = `${30 * size}px`
        wheel.style.borderRadius = "50%"
        wheel.style.backgroundColor = "black"
        car.appendChild(wheel)
    }
    wheel(15, 50)
    wheel(100, 50)

    function windShield(x, y) {
        let windShield = document.createElement("div");
        windShield.style.position = "absolute";
        windShield.style.top = `${y * size}px`;
        windShield.style.left = `${x * size}px`;
        windShield.style.width = `${50 * size}px`
        windShield.style.height = `${30 * size}px`
        windShield.style.backgroundColor = "cyan"
        car.appendChild(windShield)
    }

    windShield(100, 13)

    document.body.appendChild(car)
}

carS(50, 50, 1)

carS(100, 200, 2)