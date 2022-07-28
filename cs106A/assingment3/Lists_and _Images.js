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

// readList();

function removeDuplicate(array) {
    return array.reduce((container, element) => {
        if (!container.includes(element)) {
            container.push(element);
        }
        return container
    }, [])
}

// Part 2: Images
// 1. "Sandcastle" (warm-up) problem: Finding forest fires.
let canvas = document.querySelector("canvas");
let ctx = canvas.getContext("2d");

canvas.width = 700;
canvas.height = 400;

const image = new Image();
image.src = "rodeo_chediski_satellite.jpg";

image.addEventListener('load', () => {
    ctx.drawImage(image, 0, 0, 233, 190);
  
    const imageData = ctx.getImageData(0, 0, 233, 190);

    let second = imageData.data;
    let intensityThreshold = 1.14;

    for (let i = 0; i < second.length; i += 4) {
        let total = second[i] + second[i + 1] + second[i + 2];
        let aveThreshold = (total / 3) * intensityThreshold

        if (second[i] >= aveThreshold ) {
            second[i] = 255;
            second[i + 1] = 0;
            second[i + 2] = 0;
        } else {
            second[i] = aveThreshold;
            second[i + 1] = aveThreshold;
            second[i + 2] = aveThreshold;
        }
    }

    ctx.putImageData(imageData, 240, 0)
});


// Assignment #3: Lists and Images
// => https://web.stanford.edu/class/archive/cs/cs106a/cs106a.1226/handouts/08-assignment3.html