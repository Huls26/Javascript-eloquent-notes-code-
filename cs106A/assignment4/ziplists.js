"use strict"

// Part 1: Sandcastles
// Sandcastle 1: Lists of lists
function zip2lists(list1, list2) {
    let container = [];

    for (let i = 0; i < list1.length; i++) {
        let item1 = list1[i];
        let item2 = list2[i];
        let group = [item1, item2];

        container.push(group)
    }

    return container
}

let zip = zip2lists(['a', 'b', 'c'], ['d', 'e', 'f']);

// console.log(zip)
// console.log(zip2lists([], []))

// Sandcastle 2: Strings
function expandEncodedString(string) {
    let container = [];
    let split = string.split("");

    for (let i = 0; i < split.length; i++) {
        if (i % 2 === 1) {
            for (let k = 0; k < split[i]; k++) {
                container.push(split[i - 1]);
            }
        }
    }

    console.log(container.join(""))
    return container.join("")
}

expandEncodedString('B4');
expandEncodedString('m1e2t1');
expandEncodedString('B1o2k2e2p1e1r1!3');