"use strict"

// widget
let widget = document.querySelector(".widget");
widget.style.width = "500px";
widget.style.height = "300px";
widget.style.border = "solid 3px black";
document.body.style.display = "flex";
document.body.style.justifyContent = "center";


//head
let header = document.querySelector("header");
header.style.display = "flex";
header.style.justifyContent = "space-evenly";
header.style.padding = "6px 0";

// input & radio
let mealValue = document.querySelector("#sub-total");
let radio = document.querySelector(".radio-btn").children;
let allI = document.querySelectorAll("input");

// p
let p = document.querySelector("p");
p.style.fontSize = "3em";
p.style.textAlign = "center";

// btn
let btn = document.getElementsByClassName("btn")[0];

btn.addEventListener("click", event => {
    let r = Array.from(radio).filter(element => element.tagName === "INPUT")
    let percentTip

    for (const radioBtn of allI) {
        if (radioBtn.checked) {
            percentTip = radioBtn.value;
        }
    }
    
    if (percentTip && mealValue) {
        const toTip = parseFloat(mealValue.value) * percentTip;
        p.innerText = `$ ${(toTip).toFixed(2)}`;
    }
})
