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
// prompt the movie name, tickets and ticker price
async function movieKiosk(index, prompts, array = []) {
    let length = prompts.length;
    let name = prompts[index]
    let details = {}

    if (index >= length) {
        index = 0
        name = prompts[index]
    }

    let waitValue = wait(name);
    recursion(waitValue)

    // recursion
    function recursion(async) {
        async.then(resolve => {
            if (index === 0 && resolve === "Enter") {
                console.log(array)
                return total(array)
            }
            details.name = name;
            details.detail = resolve;
            array.push(details)
            index++
            return movieKiosk(index, prompts, array);
        })
    }
}
 
// nget total 
function total(array) {
    let container = [];
    let total = array.reduce((prev, current, index) => {
        let movie = current.detail;
        
        if ((index % 3 === 0 || index === 0) && !container.includes(movie)) {
            container.push(movie)
        }

        if (index % 2 === 0 && index != 0) {
            let quantity = array[index -1]["detail"];
            prev += parseInt(current.detail) * parseInt(quantity);
        }

        return prev
    }, 0) 

    console.log([container, total])


}   


let array = [
    {name: 'Movie name: ', detail: 'car'}, {name: '# tickets: ', detail: '2'}, 
    {name: 'Ticket price: ', detail: '3'},
]

total(array)



movieKiosk(0, ["Movie name: ", "# tickets: ", "Ticket price: "])

// http://web.stanford.edu/class/archive/cs/cs106a/cs106a.1178/resources/midterm/MidtermQuestionBooklet.pdf