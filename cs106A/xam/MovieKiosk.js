"use strict"

// Problem 3: Movie Kiosk [25 points]
// prompt
function prompt(index, prompts, array = []) {
    let length = prompts.length;
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
    label.setAttribute("id", "label")
    label.innerText = prompts[index];

    // append child
    p.appendChild(label);
    p.appendChild(inp);
    document.body.appendChild(p);
    
    // get all input with value
    let allInput = document.getElementsByTagName("input")

    // console.log(Array.from(allInput))
    // Array.from(allInput).forEach(element => {
    //     console.log(element.value)
    // });

    // modify
    inp.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
            let value = inp.value;
            // get all input
            if (label.innerText === prompts[0] && inp.value === "Enter") {
                console.log("To enter")
                return movieKiosk(array)
                
            }
            groupArray(array, value)
            console.log(array)
            index++
            return prompt(index, prompts, array)
        } 
    })

    // return new Promise((resolve, reject) => {
    //    inp.addEventListener("keydown", (event) => {
    //         if (event.key === "Enter") {
    //             resolve(inp.value)
    //         } 
    //     })
    // })
}

// modify
// grouping the movies detail
function groupArray(array, info) {
    let length = array.length;
    let current = array[length - 1];

    if (!length) {
        array.push([info])
    } else if (current.length >= 3) {
        array.push([info])
    } else {
        current.push(info);
    }

    return array
}

let array = prompt(0, ["Movie name: ", "# tickets: ", "Ticket price: "])

// movie kiosk
function movieKiosk(array) {
    let [movie, total] = getPrice(array);
    promptMovies(movie, total)
}

// prompt total price and movies
function promptMovies(name, total) {
    
}

// get total price
function getPrice(array) {
    let container = [];
    let total = 0;

    let movie = array.reduce((prev, current) => {
        let [name, quantity, price] = current;
        let totalPrice = parseFloat(quantity) * parseFloat(price);

        if (prev[name]) {
            prev[name] += totalPrice;
        } else {
            prev[name] = totalPrice
        }

        return prev
    }, {})

    for (let [name, price] of Object.entries(movie)) {
        container.push(name);
        total += price;
    }

    console.log(container, total)
    return [container, total]
}
// Cars
// 2
// 4.50
// WALL-E
// 4
// 14.00
// Up
// 3
// 10.50

// // prompt await
// async function wait(text, array) { 
//     let input1 = await prompt(text)
//     // await array.push(input1)
//     console.log(input1)
//     return array
// }

// // movie Kiosk
// // prompt the movie name, tickets and ticker price
// async function movieKiosk(index, prompts, array = []) {
//     let length = prompts.length;
//     let name = prompts[index]
//     let details = {}

//     if (index >= length) {
//         index = 0
//         name = prompts[index]
//     }

//     let waitValue = wait(name);
//     recursion(waitValue)

//     // recursion
//     function recursion(async) {
//         async.then(resolve => {
//             if (index === 0 && resolve === "Enter") {
//                 console.log(array)
//                 return total(array)
//             }
//             details.name = name;
//             details.detail = resolve;
//             array.push(details)
//             index++
//             return movieKiosk(index, prompts, array);
//         })
//     }
// }
 
// // nget total 
// function total(array) {
//     let container = [];
//     let total = array.reduce((prev, current, index) => {
//         let movie = current.detail;
        
//         if ((index % 3 === 0 || index === 0) && !container.includes(movie)) {
//             container.push(movie)
//         }

//         if (index % 2 === 0 && index != 0) {
//             let quantity = array[index -1]["detail"];
//             prev += parseInt(current.detail) * parseInt(quantity);
//         }

//         return prev
//     }, 0) 

//     console.log([container, total])


// }   


// let array = [
//     {name: 'Movie name: ', detail: 'car'}, {name: '# tickets: ', detail: '2'}, 
//     {name: 'Ticket price: ', detail: '3'},
// ]

// total(array)



// movieKiosk(0, ["Movie name: ", "# tickets: ", "Ticket price: "])

// http://web.stanford.edu/class/archive/cs/cs106a/cs106a.1178/resources/midterm/MidtermQuestionBooklet.pdf