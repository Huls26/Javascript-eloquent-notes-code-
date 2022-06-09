"use strict"

let container = document.querySelector(".container");
// container.style.flexDirection = "column";
// container.style.alignItems = "center"

function assemblyBoard(rows, columns) {
    column(rows, columns);
    console.log(colors)
}


let colors = 0
function row(rows, element) {
    while (rows > 0) {
        let div = document.createElement("div");
        div.className = "black";
        if (colors % 2 === 0) {
            div.className = "white";
        }
        element.appendChild(div);
        colors++
        rows--;
    }
}

function column(rows, columns) {
    while(columns > 0) {
        let columnElement = document.createElement("div");
        columnElement.className = "column";
        row(rows, columnElement);
        // columnElement.style.display = "flex";
        // columnElement.style.flexDirection = "row";
        container.appendChild(columnElement);
        columns--;
        colors++
    }
}

assemblyBoard(8, 8);