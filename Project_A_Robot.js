// ======= object.create() =========
// let information = {
//     printInfo() {
//         console.log(this.name, this.age)
//     }
// }

// let person1 = Object.create(information);
// person1.name = "Jules";
// person1.age = 26;

// person1.printInfo()
// console.log(Object.getPrototypeOf(person1))

// class Information {
//     constructor(name, age, sound) {
//         this.name = name;
//         this.age = age;
//         this.salary = 5000000;
//         this.sound = sound;
//     }

//     printSalary() {
//         return this.salary
//     }
// }

// let persona1 = new Information("J7", 23);

// persona1.sound = "hello"
// console.log(persona1)


// add a new properties using object.create
// let addFeatures = Object.create(persona1);
// addFeatures.printInfo = function() {
//     return `${this.name}, ${this.age}`
// }

// add sound constructor
// addFeatures.sound = "meow";
// console.log(addFeatures)

// console.log(addFeatures.printInfo())
// console.log(addFeatures)

// adding a prototype
// Information.prototype.print = function() {
//     return this.name
// }

// testing prototype in each object
// console.log(persona1.print())
// console.log(addFeatures.print())
// console.log(Information.prototype)

// adding a property
// addFeatures.printSalary = "10000000"

// console.log(addFeatures.printSalary)
// to called the prototype of information
// console.log(Information.prototype.printSalary.call(addFeatures))

// loop over the prototype
// for (let element in Object.getOwnPropertyNames(Object.getPrototypeOf(persona1))) {
//     console.log(Object.getOwnPropertyNames(Object.getPrototypeOf(persona1))[element])
// }

// console.log({hello: "world"}.includes("hello"))

// constructor
// let constructor = {
//     init: function(name) {
//         this.name = name;
//     }
// }

// constructor.init("huls")
// console.log(constructor.name)

// Object.create check this ==========
// class Simp {
//     constructor() {
//         this.home = "web"
//     }
// }

// let simp1 = new(Simp);

// let simp2 = {
//     home: "web2"
// }
// let graph = Object.create(simp1);

// console.log(graph)

// ======= MeadowField =======
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
// function buildGraph(roads) {
//     // let graph = {};
//     let graph = Object.create(null);

//     function addEdge(from, to) {
//         if (graph[from]) {
//             graph[from].push(to)
//         } else {
//             graph[from] = [to]
//         }
//     }

//     roads.forEach(element => {
//         let [from, to] = element.split("-")
//         // console.log(split[0])

//         addEdge(from, to);
//         addEdge(to, from)
//     });

//     return graph
// }

// console.log(buildGraph(roads))
// Alice's House: ["Bob's House", 'Cabin', 'Post Office']

// object.create
// let sample112 = Object.create(null)
// console.log(sample112["hello"] == null)
// console.log(undefined === null)

// ======== buildgraph ===========
// function buildGraph(roads) {
//     let graph = Object.create(null);

//     function addEdge(from, to) {
//         if (!graph[from]) {
//             graph[from] = [to];
//         } else {
//             graph[from].push(to)
//         }
//     }

//     for (let [from, to] of roads.map(element => element.split("-"))) {
//         addEdge(from, to)
//         addEdge(to, from)
//     }

//     return graph
// }

// const roadGraph = buildGraph(roads);

// console.log(roadGraph)

// class VillageState {
//     constructor(place, parcels) {
//         this.place = place;
//         this.parcels = parcels;
//     }

//     move(destination) {
//         if (!roadGraph[this.place].includes(destination)) {
//             return this;
//         } else {
//             let parcels = this.parcels.map(p => {
//                 if (p.place != this.place) return p;
//                 return {place: destination, address: p.address};
//             }).filter(p => p.place != p.address);

//             return new VillageState(destination, parcels);
//         }
//     }
// }

// let first = new VillageState(
//     "Alice's House",
//     [{place: "Post Office", address: "Alice's House"}]
// );
// let next = first.move("Post Office");
// console.log(next.parcels);
// let final = next.move("Alice's House")
// console.log(final.place)
// console.log(final.parcels)

// → Alice's House
// console.log(next.parcels);
// // → []
// console.log(first.place);
// // → Post Office

// let parcels = [{place: "Post Office", address: "Alice's House"}]

// function moveParcels(parcels) {

// }

// let data1 = ["her", "not"]

// console.log(data1.filter(element => {
//     return element === "name"
// }))

// ======= BuildGraph =======
function buildGraph(roads) {
    let graph = Object.create(null) 

    function addEdge(from, to) {
        if (graph[from]) {
            graph[from].push(to)
        } else {
            graph[from] = [to]
        }
    }

    roads.forEach(element => {
        let [from, to] = element.split("-")

        addEdge(from, to)
        addEdge(to, from)
    })

    return graph
}

let roadGraph = buildGraph(roads);

console.log(roadGraph)

// build a route finder
// find the route for parcels delivery
let allRoute = [];
function routeFinder({place, destination, route}, path = [], index = 0) {
    let current = place;
    let paths = path
    let next = route[place][index];

    if (path.includes(current)) {
        let last = paths.pop()

        console.log(last)
   
        return routeFinder({place: last, destination: destination, route, route}, paths, index + 1)
    }

    paths.push(place)

    if (current === destination) {
        allRoute.push(path)
        path = [];
        console.log("check")
        return allRoute
    }

    return routeFinder({place: next, destination: destination, route: route}, paths, 0)

}




// console.log(routeFinder({place: "Cabin", destination: "Cabin", route: roadGraph}))

console.log(routeFinder({place: "Shop", destination: "Cabin", route: roadGraph}))
// from shop to cabin
// ["Town Hall", "Bob's House", "Alice's House", "Cabin"]

// let routeFind = new Array("Alice's House");

// console.log(routeFind)

// routeFind.push("Town Hall")

// console.log(routeFind)

// last topic
// https://www.youtube.com/watch?v=PK2rB9VGWSA

// Object.create review
// destructuring review
// remember maps


  