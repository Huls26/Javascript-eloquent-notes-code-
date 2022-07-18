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
                console.log(inp.value)
                resolve(inp.value)
            } 
        })
    })

}

async function wait(text) {
    let output = await prompt(text);
    console.log(output)
    return output
}

wait("what is your name?")

function movieKiosk() {
    let prompts = ["Movie name: ", "# tickets: ", "Ticket price: "];
    let index = 0;
    let value;

    // while (!value || index <= 100000000) {
    //     value = prompt(prompts[0])
    //     console.log(value)
    //     index++
    // }  
}

movieKiosk()



// http://web.stanford.edu/class/archive/cs/cs106a/cs106a.1178/resources/midterm/MidtermQuestionBooklet.pdf