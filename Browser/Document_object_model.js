"use strict"

// ======== Moving through the tree ==========
// recursion code
// to review
// function talksAbout(node, string) {
//   // console.log(node)
//     if (node.nodeType == Node.ELEMENT_NODE) {
//       for (let child of node.childNodes) {
//         if (talksAbout(child, string)) {
//           return true;
//         }
//       }
//       return false;
//     } else if (node.nodeType == Node.TEXT_NODE) {
//       return node.nodeValue.indexOf(string) > -1;
//     }
  
// }
  
// console.log(talksAbout(document.body, "book"));
  // → true
// console.log(document.nodeType)
// console.log(Node.ATTRIBUTE_NODE)
// console.log(document.body.childNodes)
// console.log(document.body.childNodes[1].childNodes[0].nodeValue)
// console.log(Node.TEXT_NODE)
// // console.log(Node.ELEMENT_NODE)
// // console.log(Node.TEXT_NODE)
// console.log(document.body.childNodes)
// console.log(document.body.childNodes.length)

// console.log("the book of life".indexOf("book"))

// get all children of node
// function countElementType(node) {
//   let childs = node.childNodes;
//   let count = 0;
//   for (let child of childs) {
//     // console.log(child)
//     if (child.nodeType === Node.ELEMENT_NODE) {
//       count++;
//     }
//   }

//   return count
// }

// console.log(countElementType(document.body))

// let children = document.querySelectorAll("body > *") 
// // console.log(children)

// ======= Finding elements =======
// console.log(document.body.childNodes)
// let links = document.body.getElementsByTagName("img");
// console.log(links)

// let ostrich = document.getElementById("gertrude");
// console.log(ostrich.src);

// let getHref = document.body.getElementsByTagName("a");
// console.log(getHref[0].href)

// ========= Changing the document =========
// let paragraphs = document.body.getElementsByTagName("p");
// console.log(paragraphs)

// let child = document.getElementById("paragraphs");
// let paragraphs = child.getElementsByTagName("p");
// child.insertBefore(paragraphs[2], paragraphs[0]);

// console.log(paragraphs)

// console.log(Object.getOwnPropertyNames(Object.getPrototypeOf(paragraphs)))


// let paragraphs = document.body.getElementsByTagName("p");
// document.body.insertBefore(paragraphs[2], paragraphs[0]);
// console.log(paragraphs)

// ========== Creating nodes ==========
// function replaceImages() {
//   let images = document.body.getElementsByTagName("img");

//   // insert a new paragraph
//   for (let i = images.length - 1; i >= 0; i--) {
//     let image = images[i];
//     let text = document.createTextNode(image.alt);
//     image.parentNode.replaceChild(text, image)
//   }

// }

function replaceImages() {
  let images = document.getElementsByTagName("img");

  for (let i = images.length - 1; i >= 0; i--) {
    let image = images[i];
    if (image.alt) {
      let text = document.createTextNode(image.alt);
      image.parentNode.replaceChild(text, image)
    }
  }

  let textP = document.getElementsByTagName("p");
  let childs = textP[0].childNodes;

  // add text before cat
  for (let child in childs) {
    if (childs[child].nodeValue === "cat") {
      let typeOfCat = document.createTextNode("Black");
      textP[0].insertBefore(typeOfCat, childs[child]);
      ;
      break; 
    }
  }
}

function elt(type, ...spreadOperator) {
  let node = document.createElement(type);
  for (let child of spreadOperator) {
    // console.log(child)
    if (typeof child === "string") {
      node.appendChild(document.createTextNode(child))
    } else {
      node.appendChild(child)
    }
  }
  return node
}

let newItem = document.createElement("p");
newItem.appendChild(document.createTextNode("Hello"))

// document.getElementById("quote").appendChild(
//   elt("footer", "—",
//   elt("strong", "Karl Popper"),
//   ", preface to the second edition of ",
//   elt("em", "The Open Society and Its Enemies"),
//   ", 1950")).appendChild(newItem)



// function spreadOperator(...spread) {
//   console.log(spread)
// }

// spreadOperator("hello", 123)

// Attributes
// let paras = document.body.getElementsByTagName("p");

// // Array.from(paras)
// for (let para of paras) {
//   if (para.getAttribute("data-classified") === "secret") {

//     para.remove()
//   }
// }

// Layout
// let para = document.body.getElementsByTagName("p")[0];
// console.log(para)
// console.log("clientHeight:", para.clientHeight);
// console.log("offsetHeight:", para.offsetHeight);

// function time(name, action) {
//   let start = Date.now(); // Current time in milliseconds
//   action();
//   console.log(name, "took", Date.now() - start, "ms");
// }

// time("naive", () => {
//   let target = document.getElementById("one");
//   while (target.offsetWidth < 2000) {
//     target.appendChild(document.createTextNode("X"));
//   }
//   console.log(target.offsetWidth)
// });

// time("clever", function() {
//   let target = document.getElementById("two");
//   target.appendChild(document.createTextNode("XXXXX"));
//   let total = Math.ceil(2000 / (target.offsetWidth / 5));
//   target.firstChild.nodeValue = "X".repeat(total);
// });

// Styling
// let para = document.getElementById("para"); 
// console.log(para.style.fontFamily)
// para.style.color = "magenta"
// para.style.color = "red"
// para.style.fontFamily = "sans-serif"
// style["font-family"]


// Cascading styles
  // p#main.a.b {
  //   margin-bottom: 20px;
  // }
// Query selectors
// let pTag = document.querySelectorAll("p");
// console.log(Array.from(pTag))
// let animal = document.querySelectorAll(".animal");
// console.log(Array.from(animal))
// let insidePTag = document.querySelectorAll("p .animal");
// console.log(Array.from(insidePTag))
// let childPtag = document.querySelectorAll("p > .animal");
// console.log(Array.from(childPtag)[0].textContent = "cat")
// childPtag[0].innerText = "asd";
// childPtag[0].innerHTML = "rabbit";

// Positioning and animating
let cat = document.querySelector("img");
let angle = Math.PI / 2;
let number = 0;
function animate(time, lastTime) {
  if (lastTime != null) {
    angle += (time - lastTime) * 0.001;
  }  
  cat.style.top = (Math.sin(angle) * 20) + "px";
  cat.style.left = (Math.cos(angle) * 200) + "px";
  debugger
  requestAnimationFrame(newTime => animate(newTime, time));
}

requestAnimationFrame(animate);


// review this chapter
















