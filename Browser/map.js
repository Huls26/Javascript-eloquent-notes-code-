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
let container = document.querySelector(".container");

function box(rows, columns) {
    for (let i = 0; i < columns; i++) {
        let column = document.createElement("div");
        column.style.display = "flex";
        for (let j = 0; j < rows; j++) {
            let row = document.createElement("div");
            row.className = "outline";
            if (!(i === 0 || i === (columns - 1)) && (j !== 0) && (j !== rows -1)) {
                row.className = "space";
            }

            column.appendChild(row);
        }
        container.appendChild(column);
    }
}

box(10, 4)
