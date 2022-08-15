"use strict"

async function readFracs(filename) {
    let data = await (await fetch(filename)).text()
    let lines = data.split("\n");

    let fracs = [];

    for (let line of lines) {
        let num = parseFloat(line);
        if (!isNaN(num)) {
            if (num === 1) {
                fracs.push(1.0)
            }
            
            fracs.push(num)
        } 
    }
    
    fracs = fracs.slice(1);

    return fracs
}


function main() {
    let dataFile = readFracs("../dataFile/data-test.txt");
    dataFile.then(resolve => {
        console.log(resolve)
    })
}   


main()