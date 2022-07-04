"Use strict"

// coinflip
function coinFlip(value, coin) {
    let random = Math.floor(Math.random() * 2);
    let coins = ["H", "T"];
    let count = 0
    let empty = "";

    if (!coins.includes(coin) || value < 0){
        console.log("ERROR");
        return;
    }

    while (count < value) {
        let result = coins[random];

        if (coin === result) {
            count++
        } else {
            count = 0;
        }

        random = Math.floor(Math.random() * 2);
        empty = empty + result + " ";
    }

    console.log(empty);
    console.log(`You got ${coin} ${value} times in a row!`)
}

// coinFlip(3, "H");
// T T T H T H H H
// You got H 3 times in a row!

// coinFlip(2, "x")
// coinFlip(-1, "x")
// coinFlip(0, "T");

// remove duplicates
function removeDuplicates(string) {
    let split = string.split("");
    let singleW = [];

    for (let i = 0; i < split.length; i++) {
        let current = split[i];
        let previous = singleW[singleW.length -1]
    
        // if (current === previous) {

        // } else {
        //     singleW.push(split[i])
        // }

        if (current !== previous) {
            singleW.push(current)
        }

        console.log(current)
    }

    console.log(singleW.join(""))
}

removeDuplicates("bookkeeper")
// "bokeper"

// removeDuplicates("b")
// removeDuplicates("banana")
// removeDuplicates("AAAAaaaa  BBBBBbbbb CCCCccc")
// removeDuplicates("")

// count unique value
function countUnique(array) {
    let unique = [];

    array.forEach(element => {
        if (!unique.includes(element)) {
            unique.push(element)
        }
    });

    console.log(unique.length)
}

countUnique([4, 7, 4, 9, 2, 7, 8, 7, 4, 7, 2])
countUnique([45])
countUnique([5, 5, 5, 5])