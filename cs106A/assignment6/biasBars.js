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

async function main() {
    let word_data = await load("data/small-one.txt");
    console.log(word_data)

    let c = makeGui(0, WINDOW_WIDTH, WINDOW_HEIGHT, word_data, 0, searchWords)
}
main()

// https://web.stanford.edu/class/archive/cs/cs106a/cs106a.1226/handouts/biasbars-handout.html