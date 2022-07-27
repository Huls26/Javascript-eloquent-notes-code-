"use strict"
function replaceMention(string) {
    let split = string.split("");
    let uL = [];
    let newArray = [];
    
    if (split[0] !== "@") {   
        return string
    }

    if (!split[1] || split[1] !== split[1].toUpperCase()) {
        return "not valid mentions"
    }

    for (let i = 0; i < split.length; i++) {
        if (split[i] !== "@") {
            if (split[i] === split[i].toUpperCase() && split[i -1] !== "@") {
                uL.push(i);
                newArray.push(" ", split[i]);
            } else {
                newArray.push(split[i]);
            } 
        } 
    }

    if (uL.length) {
        let slice = (uL[uL.length - 1] + 2)
        newArray = newArray.slice(0, slice) 
        newArray.push(".")
    }
    
    return newArray.join("")
}

// replaceMention("@NickTroccoli")
async function readFiles(filename) {
    let files = await (await fetch(filename)).text();
    // console.log(files)
       // test 5
    let test2 = ReplaceMentions(files, filename);

    if (test2 === "Head TA Rishi Paul B. - friends with Nick - rocks socks!") {
           console.log("Passed");
    } else {
           console.log(test2);
           console.log("failed");
    }
}

readFiles("myinput.txt")

function ReplaceMentions(files, filename) {
    let split = files.split(" ");
    let newArray = [];

    split.forEach(element => {
        let replace = replaceMention(element);
        newArray.push(replace)
    });

    let output = newArray.join(" ")

    let div = document.createElement("div");
    let p = document.createElement("p");
    let span = document.createElement("span");
    let p2 = document.createElement("p");

    span.innerText = filename;
    span.style.textDecoration = "underline";
    span.style.fontWeight = "600"

    p.innerText = `Filename:`

    p2.innerText = output;
    p2.style.marginTop = ".5em"

    div.style.letterSpacing = ".1em"

    p.appendChild(span);
    div.appendChild(p);
    div.append(p2)
    document.body.appendChild(div);

    return output
}

function test() {
    // test 1
    if (replaceMention("hello!") === "hello!") {
        console.log("Passed")
    } else {
        console.log(replaceMention("hello!"))
        console.log("failed")
    }

    //test 2
    if (replaceMention("@Nolan") === "Nolan") {
        console.log("Passed")
    } else {
        console.log(replaceMention("@Nolan"))
        console.log("failed")
    }

    // test 3
    if (replaceMention("@nolan") === "not valid mentions") {
        console.log("Passed")
    } else {
        console.log(replaceMention("@nolan"))
        console.log("failed")
    }

    // test 4
    if (replaceMention("@") === "not valid mentions") {
        console.log("Passed")
    } else {
        console.log(replaceMention("@"))
        console.log("failed")
    }

    // test 5
    let test = replaceMention("@AleksanderPaulDash")
    if (test === "Aleksander Paul D.") {
        console.log("Passed");
    } else {
        console.log(test);
        console.log("failed");
    }
}

test()

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

let person1 = new Person("Jules", 26);
console.log(person1.name)

// http://web.stanford.edu/class/archive/cs/cs106a/cs106a.1178/resources/midterm/MidtermQuestionBooklet.pdf