"use strict"

// Problem 3: Movie Kiosk [25 points]
// prompt
function prompt(text) {
    let p = document.createElement("p");

    // for input
    let inp = document.createElement("input");
    inp.setAttribute("type", "text");
    inp.setAttribute("id", "input");
    inp.setAttribute("name", "input");
    // inp.setAttribute("value", input)

    // for label
    let label = document.createElement("label");
    label.setAttribute("for", "input")
    label.setAttribute("id", "label")
    label.innerText = text;

    // append child
    p.appendChild(label);
    p.appendChild(inp);
    document.body.appendChild(p);

    return new Promise((resolve, reject) => {
       inp.addEventListener("keydown", (event) => {
            if (event.key === "Enter") {
                // console.log(inp.value)
                resolve(inp.value)
            } 
        })
    })

}

// prompt await
async function wait(text) { 
    let input1 = await prompt(text)
    return input1
}

// movie Kiosk
function movieKiosk() {
    let prompts = ["Movie name: ", "# tickets: ", "Ticket price: "];
    let value;

    call(0, prompts).then(resolve => {
        console.log(resolve)
    })
  
}

// prompt the movie name, tickets and ticker price
function call(index, prompts, array = []) {
    let length = prompts.length;
    let name = prompts[index]
    let details = {}

    if (index >= length) {
        index = 0
        name = prompts[index]
    }

    let what = wait(name);
    what.then(resolve => {
        if (index === 0 && resolve === "Enter") {
            console.log("FINISH Return something")
            return array
        }
        details.name = name;
        details.detail = resolve;
        array.push(details)
        index++
        return call(index, prompts, array);
        // return resolve
    })

    // console.log(what.Promise)
    if (what.Promise) {
        return what
    }

    // return something
}

movieKiosk()

// http://web.stanford.edu/class/archive/cs/cs106a/cs106a.1178/resources/midterm/MidtermQuestionBooklet.pdf