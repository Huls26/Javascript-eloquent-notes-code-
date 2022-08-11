"use strict"

function makeGui(top, width, height, word_data, plot_word, search_words) {
    // search
    let search = document.querySelector(".search");
    let searchInput = search.children[1];
    let para1 = document.createElement("p");
    
    searchInput.addEventListener("keydown", event => {
        if (event.key === "Enter") {
            let searchEntry = searchInput.value;
            let text = handleSearch(searchEntry, 0, word_data, search_words);
            para1.innerText = text;
            search.appendChild(para1)
        }
    })
}

function handleSearch(search_entry, search_out, word_data, search) {
    let out = search(word_data, search_entry);
    return out.join(" ")
}
export {makeGui}