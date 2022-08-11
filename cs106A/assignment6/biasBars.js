"use strict"

import {load, searchWords} from "./biasBarsData.js"

function main() {
    load("data/small-one.txt").then(resolve => {
        console.log(resolve)
    })
}

main()