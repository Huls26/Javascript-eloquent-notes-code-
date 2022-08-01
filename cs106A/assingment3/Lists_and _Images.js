// Part 1: Lists

// 1. "Sandcastle" (warm-up) problem 
function greaterThan(num, array) {
    let output = array.filter(element => element > num)

    console.log(output)
}

// greaterThan(6, [20, 6, 12, -3, 14]);

// greaterThan(0, []);

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

// const image = new Image();
// // image.src = "rodeo_chediski_satellite.jpg";
// image.src = "08-image1.png"

// image.addEventListener('load', () => {
//     ctx.drawImage(image, 0, 0, 233, 190);
  
//     const imageData = ctx.getImageData(0, 0, 233, 190);

//     let second = imageData.data;
//     // let intensityThreshold = 1.14;
//     let intensityThreshold = 1.05;

//     for (let i = 0; i < second.length; i += 4) {
//         let total = second[i] + second[i + 1] + second[i + 2];
//         let aveThreshold = (total / 3) * intensityThreshold

//         if (second[i] >= aveThreshold ) {
//             second[i] = 255;
//             second[i + 1] = 0;
//             second[i + 2] = 0;
//         } else {
//             second[i] = aveThreshold;
//             second[i + 1] = aveThreshold;
//             second[i + 2] = aveThreshold;
//         }
//     }

//     ctx.putImageData(imageData, 240, 0)
// });

// 2. Warhol Images
// a. Task: Create a filter for a single image
function createFilteredImage(redScale, greenScale, blueScale, x, y) {
    let width
    let height

    const image = new Image();
    image.src = "08-image3.png"

    width = image.width;
    height = image.height; 

    image.addEventListener("load", () => {
        ctx.drawImage(image, x, y, width, height)

        const imageData = ctx.getImageData(x, y, width, height);

        const data = imageData.data;

        for (let i = 0; i < data.length; i += 4) { 
            let [red, green, blue] = [data[i], data[i + 1], data[i + 2]];

            data[i] = red * redScale;
            data[i + 1] =  green * greenScale;
            data[i + 2] = blue * blueScale;
        }

        ctx.putImageData(imageData, x, y);
    })

    return [width, height]
}

// b. Task: Create a Warhol-style image
function makeWarhol() {
    let row = 2;
    let column = 3;
    let x = 0;
    let y = 0;
    let [r, g, b] = [0, 0, 0];

    for (let i = 0; i < row; i++) {
        for (let k = 0; k < column; k++) {
            let [width, height] = createFilteredImage(1.5 + r, 0.7 + g, 1.5 + b, x, y);
        
            x = x + width;
            r -= .26;
            g -= .0001;
            if (k === column -1) {
                b += .326;
                x = 0;
                y = y + height
            }
        }
    }
}

// makeWarhol()

// 3. Ghost
// Ghost algorithm

// a) Compute the average RGB values
let div = document.createElement("div");
let image1 = new Image();
let image2 = new Image();
let image3 = new Image();

image1.src = "ghostImage/image6.jpg"
image2.src = "ghostImage/image7.jpg"
image3.src = "ghostImage/image8.jpg"
div.appendChild(image1);
div.appendChild(image2);
div.appendChild(image3);

let images = div.querySelectorAll("img");

// to get image data 
// data position for x, y
function locations(image, x, y) {
    let width = image.width;
    let height = image.height;
    ctx.drawImage(image, 0, 0, image2.width, image2.height);

    let imageData = ctx.getImageData(0, 0, image.width, image.height).data

    let pos = (x * width * 4) + (4 * y);

    return [imageData[pos], imageData[pos + 1], imageData[pos + 2]]
}

// b) Select the best pixel
// compute the average rgb values
function aveImage(array, x, y) {
    let length = array.length;
    let imgRGB = [];

    // compute the average rgb values
    let collectRGB = array.reduce((con, element, index) => {
        let [r, g, b] = locations(element, x, y);
        imgRGB.push([r, g, b]);

        con[0] += r;
        con[1] += g;
        con[2] += b; 
    
        if (index === length -1) {
            con[0] = Math.floor(con[0] / length);
            con[1] = Math.floor(con[1] / length);
            con[2] = Math.floor(con[2] / length);
        }

        return con
    }, [0, 0, 0])

   
    let distance = colorDistance(imgRGB, collectRGB);
    let outlier = Math.min(...distance);
    let index = distance.indexOf(outlier)
    console.log(outlier, index)
    
  return collectRGB
}

function colorDistance(array, ave) {
    let [aR, aG, aB] = ave;

    let distance = array.reduce((prev, current) => {
        let [r, g, b] = current;
        // let colorDistance = Math.sqrt(Math.pow((r - aR), 2) + Math.pow((g - aG), 2) + Math.pow((b - aB), 2));
        let distance = Math.pow((r - aR), 2) + Math.pow((g - aG), 2) + Math.pow((b - aB), 2);
    
        prev.push(distance)

        return prev
    }, [])

    return distance
}

window.addEventListener("load", () => {
    let ave = aveImage(Array.from(images), 0, 5);
})

// Assignment #3: Lists and Images
// => https://web.stanford.edu/class/archive/cs/cs106a/cs106a.1226/handouts/08-assignment3.html