// Part 1: Lists

// 1. "Sandcastle" (warm-up) problem 
function greaterThan(num, array) {
    let output = array.filter(element => element > num)

    console.log(output)
}

greaterThan(6, [20, 6, 12, -3, 14]);

greaterThan(0, []);

// 2. Reading values into a list and removing duplicates

function prompt() {
    let para1 = document.createElement("p");

    let label = document.createElement("label");
    label.innerText = "Enter value (0 to stop):"
    label.setAttribute("for", "input");

    let input = document.createElement("input");
    input.setAttribute("type", "text");
    input.style.border = "none";
    input.style.outline = "none";
    input.style.marginLeft = ".5em";
    
    para1.appendChild(label);
    para1.appendChild(input);
    document.body.appendChild(para1);
}

// prompt()
// prompt()
function readList() {
    let array = [];
    prompt()
    window.addEventListener("keydown", event => {
        if (event.key === "Enter") {
            let input = document.getElementsByTagName("input");
            input = Array.from(input);

            let lastInput = input[input.length-1];
            lastInput.setAttribute("value", input.value); 
            
            if (parseInt(lastInput.value) === 0) {
                return console.log(removeDuplicate(array));
            }

            array.push(parseInt(lastInput.value));
            prompt();
        }
    })
}

readList();

function removeDuplicate(array) {
    return array.reduce((container, element) => {
        if (!container.includes(element)) {
            container.push(element);
        }
        return container
    }, [])
}
