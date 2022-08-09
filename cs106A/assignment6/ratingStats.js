"use strict"

function calculateRatingStats(filename) {
    if (filename) {
        async function load(filename) {
            let file = await (await fetch(filename)).text();
            let next = file.split("\r\n").slice(1);

            let data = next.reduce((prev, current) => {
                let [r, g, ct] = current.split(",");

                if (prev[g]) {
                    prev[g]++
                } else {
                    prev[g] = 1
                }

                if (r > 3.5) {
                    if (prev[g+"High"]) {
                        prev[g+"High"]++
                    } else {
                        prev[g+"High"] = 1;
                    }
                } 
                
                return prev
            }, {})

            console.log(data)
            let wH = Math.floor((data.WHigh / data.W) * 100);
            let mH = Math.floor((data.MHigh / data.M) * 100);

            console.log(`${wH}% of reviews for women in the dataset are high.`)
            console.log(`${mH}% of reviews for men in the dataset are high.`)
        }
        
        load(filename);
    }
}


function main() {
    let filename = prompt("Which data file would you like to load? ");

    calculateRatingStats(filename);
}

main()
// https://web.stanford.edu/class/archive/cs/cs106a/cs106a.1226/handouts/biasbars-handout.html