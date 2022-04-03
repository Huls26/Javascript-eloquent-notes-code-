var roads = [
    "Alice's House-Bob's House",   "Alice's House-Cabin",
    "Alice's House-Post Office",   "Bob's House-Town Hall",
    "Daria's House-Ernie's House", "Daria's House-Town Hall",
    "Ernie's House-Grete's House", "Grete's House-Farm",
    "Grete's House-Shop",          "Marketplace-Farm",
    "Marketplace-Post Office",     "Marketplace-Shop",
    "Marketplace-Town Hall",       "Shop-Town Hall"
];

// my approach of graph roads
function buildGraph(roads) {
    let graph = {};

    roads.forEach(element => {
        let [from, to] = element.split("-")
        // console.log(split[0])

        if (graph[from]) {
            graph[from].push(to)
        } else {
            graph[from] = [to]
        }

    });

    return graph
}

console.log(buildGraph(roads))

// Alice's House: ["Bob's House", 'Cabin', 'Post Office']

let information = {
    printInfo() {
        console.log(this.name, this.age)
    }
}

let person1 = Object.create(information);
person1.name = "Jules";
person1.age = 26;

person1.printInfo()
console.log(Object.getPrototypeOf(person1))


// last topic
// https://www.youtube.com/watch?v=CDFN1VatiJA


// Object.create review
// destructuring review


  