"use strict"

const ALPHABET = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

function computeSlug(key) {
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

// console.log(computeSlug("z"))
// console.log(computeSlug('Bananas!'))
// console.log(computeSlug('Life, Liberty, and'))
// console.log(computeSlug('Zounds!'))

function encryptChar(source, slug, ch) {
    let chL = ch.toLowerCase();
    let index = source.indexOf(chL);
    let char =  slug[index]

    if (index !== -1) {
        if (ch === chL) {
            return char
        } else {
            return char.toUpperCase();
        }
    }
   
    return ch
}

const z_slug = computeSlug("z");
// console.log(encryptChar(ALPHABET, z_slug, 'A'))
// console.log(encryptChar(ALPHABET, z_slug, 'n'))
// console.log(encryptChar(ALPHABET, z_slug, 'd'))
// console.log(encryptChar(ALPHABET, z_slug, '.'))
// console.log(encryptChar(ALPHABET, z_slug, '\\n'))

function encryptStr(source, slug, s) {
    let split = s.split("");

    for (let i = 0; i < split.length; i++) {
        let char = split[i];

        split[i] = encryptChar(source, slug, char);
    }

    return split.join("")
}

// console.log(encryptStr(ALPHABET, z_slug, 'And like a thunderbolt he falls.\\n'))

function decryptStr(source, slug, s) {
    return encryptStr(slug, source, s);
}

// console.log(decryptStr(ALPHABET, z_slug, 'Zmc khjd z sgtmcdqanks gd ezkkr.\\n'))


async function encryptFile(filename, key) {
    let data = await (await fetch(filename)).text();
    const alphabet = ALPHABET; 
    let z_slug = computeSlug(key);

    const encrypted = encryptStr(alphabet, z_slug, data)

    return encrypted
}

// encryptFile("./crypto_data/the-eagle.txt", 'Bananas')

async function decrypt_file(filename, key) {
    let data = await (await fetch(filename)).text();
    const alphabet = ALPHABET; 
    let z_slug = computeSlug(key);

    const decrypted = decryptStr(alphabet, z_slug, data) 

    console.log(decrypted)
    return decrypted
}

// decrypt_file("./crypto_data/independence-crypt.txt", "Bleh");

decrypt_file("./crypto_data/mystery-crypt.txt", "cardinal red");

// https://web.stanford.edu/class/cs106a-8/sum-assn/homework-4-crypto.html