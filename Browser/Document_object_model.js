"use strict"

// ======== Moving through the tree ==========
// recursion code
// to review
function talksAbout(node, string) {
  // console.log(node)
    if (node.nodeType == Node.ELEMENT_NODE) {
      for (let child of node.childNodes) {
        if (talksAbout(child, string)) {
          return true;
        }
      }
      return false;
    } else if (node.nodeType == Node.TEXT_NODE) {
      return node.nodeValue.indexOf(string) > -1;
    }
  
}
  
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
console.log(document.body.childNodes)
let links = document.body.getElementsByTagName("img");
console.log(links)

let ostrich = document.getElementById("gertrude");
console.log(ostrich.src);

let getHref = document.body.getElementsByTagName("a");
console.log(getHref[0].href)

// ========= Changing the document =========
// let paragraphs = document.body.getElementsByTagName("p");
// console.log(paragraphs)

let child = document.getElementById("paragraphs");
let paragraphs = child.getElementsByTagName("p");
child.insertBefore(paragraphs[2], paragraphs[0]);

console.log(paragraphs)

// console.log(Object.getOwnPropertyNames(Object.getPrototypeOf(paragraphs)))


// let paragraphs = document.body.getElementsByTagName("p");
// document.body.insertBefore(paragraphs[2], paragraphs[0]);
// console.log(paragraphs)