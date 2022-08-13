"use strict"
import {drawFixedContent} from "./biasBars.js"

function makeGui(top, width, height, word_data, plot_word, search_words) {
    // plot
    let wordPlot = document.getElementById("plot");

    // canvas 
    let canvas = document.querySelector("canvas");
    canvas.width = width;
    canvas.height = height;
    // canvas.style.border = "solid 2px red";

    let ctx = canvas.getContext("2d");

    // search
    let search = document.querySelector(".search");
    let searchInput = search.children[1];
    let para1 = document.createElement("p");
    
    // event
    wordPlot.addEventListener("keydown", event => {
        if (event.key === "Enter") {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            drawFixedContent(canvas, ctx);
            handlePlot(wordPlot.value, canvas, word_data, 0, plot_word, ctx);
        }
    })

    searchInput.addEventListener("keydown", event => {
        if (event.key === "Enter") {
            let searchEntry = searchInput.value;
            if (searchEntry) {
                let text = handleSearch(searchEntry, word_data, search_words);
                para1.innerText = text;
                search.appendChild(para1)
            }
        }
    })

    return {ctx, canvas}
}

function handlePlot(entry, canvas, word_data, error_out, plot, ctx) {
    let wordPlot = document.querySelector(".word-plot");
    let p = document.createElement("p");
    let key = Object.keys(word_data);
    let lastP = Array.from(wordPlot.children)[wordPlot.children.length - 1]

    if (lastP.tagName === "P")  {
        wordPlot.removeChild(lastP)
    }

    if (!entry) {
        p.innerText = "Please enter a non-empty word."
    } else if (entry.split("").includes(" ")) {
        p.innerText = "The program cannot search for multiple words at a time. Please enter a single word with no spaces."
    } else if (!key.includes(entry)) {
        p.innerText = `${entry} is not contained in the word database.`
    } else {
        return plot(canvas, word_data, entry, ctx)
    }

    wordPlot.appendChild(p)
}

function handleSearch(search_entry, word_data, search) {
    let searchOut = search(word_data, search_entry);
    return searchOut.join(" ")
}

export {makeGui}