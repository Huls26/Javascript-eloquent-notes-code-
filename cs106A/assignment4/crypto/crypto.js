"use strict"

const ALPHABET = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

function  computeSlug(key) {
    let split = key.toLowerCase().split("");
    let newA = ALPHABET.slice(0);
    let container = [];

    for (let i = 0; i < split.length; i++) {
        if (newA.includes(split[i])) {
            let toRI = newA.indexOf(split[i])
            newA.splice(toRI, 1);
            if (!container.includes(split[i])) {
                container.push(split[i])
            }
        }
    }

    newA.unshift(...container)
    return newA
}

console.log(computeSlug("z"))
console.log(computeSlug('Bananas!'))
console.log(computeSlug('Life, Liberty, and'))
console.log(computeSlug('Zounds!'))