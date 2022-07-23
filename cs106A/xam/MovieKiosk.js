"use strict"

// Problem 3: Movie Kiosk [25 points]
// prompt
function prompt(index, prompts, array = [], v) {
    let length = prompts.length;
    let deduct

    if (v && index === 2) {
        deduct = v;
    }

    if (index >= length) {
        index = 0
    }

    let p = document.createElement("p");

    // for input
    let inp = document.createElement("input");
    inp.setAttribute("type", "text");
    inp.setAttribute("id", "input");
    inp.setAttribute("name", "input");

    // for label
    let label = document.createElement("label");
    label.setAttribute("for", "input")
    // label.setAttribute("id", "label")
    label.innerText = prompts[index];

    // append child
    p.appendChild(label);
    p.appendChild(inp);
    document.body.appendChild(p);
    
    // style
    // add margin
    let labelMovies = document.getElementsByTagName("p")

    let collection = Array.from(labelMovies);

    collection.forEach((element, index) => {
        let getLabel = element.children[0].innerText;

        if (getLabel === prompts[0] && index !== 0) {
            element.style.marginTop = "1em"
        }
    })
  
    // keys event
    inp.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
            let value = inp.value;
            // get all input
            
            // for 10% chance voucher
            if (label.innerText === prompts[2]) {
              v = voucher();

                if (v) {
                    let p = document.createElement("p");
                    p.innerText = `You have won a $${v} voucher for
                    your next purchase!`

                    document.body.appendChild(p);
                }
            }

            // submit Enter
            if (label.innerText === prompts[0] && inp.value === "Enter") {
                console.log("To enter")
                console.log(array)
                return movieKiosk(array)
            }

            // group array
            groupArray(array, value, deduct);
            index++
            return prompt(index, prompts, array, v)
        } 
    })
}

// modify
// for voucher
function voucher() {
    let chance = Math.ceil(Math.random() * 1);
    let price = [5, 10, 15, 20, 25]
    // let price = [10]
    let ran = Math.floor(Math.random() * price.length);
    let voucher = price[ran];

    if (chance === 1) {
        return voucher
    }
}

// grouping the movies detail
function groupArray(array, info, v) {
    let length = array.length;
    let current = array[length - 1];

    console.log(v)
    if (!length) {
        array.push([info])
    } else if (current.length >= 3) {
        array.push([info])
    } else {
        current.push(info);
    }

    if (v) {
        current.push(v);
        v = 0;
    }

    return array
}

// movie kiosk
function movieKiosk(array) {
    let [movie, total] = getPrice(array);
    promptMovies(movie, total)
}

// prompt total price and movies
function promptMovies(name, total) {
    let names = name.reduce((prev, cur, index) => { 
        if (index === name.length -1) {
            prev += cur;
        } else {
            prev += cur + " and "
        }

        return prev
    }, "")

    total = "$" + total;
    totalPrompt([names, total])
}

// prompt total price and movies
function totalPrompt(array) {
    let prompts = ["Movies: ", "Total: "]
    for (let element in array) {
        let p = document.createElement("p");
        p.innerText = `${prompts[element]}`

        if (p.innerText === prompts[0]) {
            p.style.marginTop = "1em";
        }

        let span = document.createElement("span");
        span.innerText = `${array[element]}`
        p.appendChild(span);

        document.body.appendChild(p);
    }
}

// get total price
function getPrice(array) {
    let container = [];
    let total = 0;

    let movie = array.reduce((prev, current) => {
        if (current.length <= 3) {
            let [name, quantity, price] = current;
            let totalPrice = parseFloat(quantity) * parseFloat(price);
    
            if (prev[name]) {
                prev[name] += totalPrice;
            } else {
                prev[name] = totalPrice
            }
        } else {
            let [name, quantity, price, voucher] = current;
            let totalPrice = parseFloat(quantity) * parseFloat(price);

            if (voucher > totalPrice) {
                prev[name] = 0
            } else {
                let t = totalPrice - voucher;
                if (prev[name]) {
                    prev[name] += t;
                } else {
                    prev[name] = t
                }
            }  
        }
       
        return prev
    }, {})

    for (let [name, price] of Object.entries(movie)) {
        container.push(name);
        total += price;
    }

    return [container, total]
}

prompt(0, ["Movie name: ", "# tickets: ", "Ticket price: "])



// http://web.stanford.edu/class/archive/cs/cs106a/cs106a.1178/resources/midterm/MidtermQuestionBooklet.pdf