"use strict"

import {load, searchWords} from "./biasBarsData.js"
import {makeGui} from "./biasBarsGui.js"

const WINDOW_WIDTH = 1000
const WINDOW_HEIGHT = 600

const FILENAME = "data/full-data.txt"

const VERTICAL_MARGIN = 30
const LEFT_MARGIN = 60
const RIGHT_MARGIN = 30
const LABELS = ["Low Reviews", "Medium Reviews", "High Reviews"]
const LABEL_OFFSET = 10
const BAR_WIDTH = 75
const LINE_WIDTH = 2
const TEXT_DX = 2
const NUM_VERTICAL_DIVISIONS = 7
const TICK_WIDTH = 15

function getCenteredXCoordinate(width, idx, ctx) {
    let l = width / 3;
    // let centerL = parseFloat((l / 2).toFixed(1));
    let x = (l / 2) + LEFT_MARGIN
    // let y = VERTICAL_MARGIN;
    // let height = 600 - VERTICAL_MARGIN;
    let container = [];

    for (let i = 0; i < 3; i++) {
        container.push(parseFloat(x.toFixed(1)));
        // ctx.beginPath();
        // ctx.moveTo(x, y);
        // ctx.lineTo(x, height);
        // ctx.stroke();
        x += parseFloat(l)
    }

    return container[idx]
}

export function drawFixedContent(canvas, ctx) {
    let width = canvas.width - LEFT_MARGIN - RIGHT_MARGIN;
    let height = canvas.height - (VERTICAL_MARGIN * 2);

    for (let i = 0; i < 3; i++) {
        ctx.strokeRect(LEFT_MARGIN, VERTICAL_MARGIN, width, height);
        let x = getCenteredXCoordinate(width, i, ctx);
        ctx.font = ".8em Verdana"
        ctx.textAlign = "center"
        ctx.fillText(LABELS[i], x, height + VERTICAL_MARGIN + LABEL_OFFSET + 9)
    } 
}

function createLine(width, canvas, ctx, max) {
    let x = LEFT_MARGIN;
    let y = VERTICAL_MARGIN;
    let lineCenter = width / 2;
    let spaces = (WINDOW_HEIGHT - (VERTICAL_MARGIN * 2)) / (NUM_VERTICAL_DIVISIONS);
    let vD = (max / NUM_VERTICAL_DIVISIONS).toFixed(2);

    console.log(vD)
    for (let i = 0; i < NUM_VERTICAL_DIVISIONS + 1; i++) {
        ctx.beginPath();
        ctx.moveTo(x - lineCenter, y);
        ctx.lineTo(x + lineCenter, y);
        ctx.stroke();
        max = createText(x, y, spaces, max, ctx, vD)
        y += spaces;
    }
}

function createText(x, y, spaces, max, ctx, vD) {
    ctx.font = ".8em Verdana"
    ctx.textAlign = "end"
    ctx.fillText(String(Math.round(max)), x - 13, y + 3)
    max = max - vD

    return max
}

function plotWord(canvas, word_data, word, ctx) {
    console.log(word)
    const genderData = word_data[word];
    const max = Math.max(genderData["M"][2], genderData["W"][2]);

    console.log(genderData)
    for (let i = 0; i < 3; i++) {
        createLine(TICK_WIDTH, canvas, ctx, max);
    }
    
    return [word, genderData, max]
}

async function main() {
    let word_data = await load("data/full-data.txt");
    console.log(word_data)

    let {ctx, canvas} = await makeGui(0, WINDOW_WIDTH, WINDOW_HEIGHT, word_data, plotWord, searchWords)

    drawFixedContent(canvas, ctx)
}
main()

// https://web.stanford.edu/class/archive/cs/cs106a/cs106a.1226/handouts/biasbars-handout.html