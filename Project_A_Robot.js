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
// My Approach
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

// ============= The Task ==============
class VillageState {
    constructor(place, parcels) {
        this.place = place;
        this.parcels = parcels;
    }

    move(destination) {
        if (roadGraph[this.place].includes(destination)) {
            let move = this.parcels.map(element => {
               if (element.place !== this.place) return element;
                return {place: destination, address: element.address} 
            }).filter(element => {
                return element.place !== element.address
            })

            return new VillageState(destination, move)
        }
        return this
    }
}

let first = new VillageState(
    "Post Office",
    [{place: "Post Office", address: "Alice's House"}]
);

let next = first.move("Alice's House");

console.log(next.place);
// → Alice's House
console.log(next.parcels);
// → []
console.log(first.place)

console.log(next.move("Post Office"))

// ================= Persistent Data ==============
// Object.freeze
// let object = Object.freeze({value: 5});
// object.value = 10;
// console.log(object.value);
// → 5

// =========== Simulate =============
// function runRobot(state, robot, memory) {
//     for (let turn = 0;; turn++) {
//         if (state.parcels.length == 0) {
//             console.log(`Done in ${turn} turns`);
//             break;
//         }

//         let action = robot(state, memory);
//         state = state.move(action.direction);
//         memory = action.memory;
//         console.log(`Moved to ${action.direction}`);
//     }
// }

// function randomPick(array) {
//     let choice = Math.floor(Math.random() * array.length);

//     return array[choice];
// }

// function randomRobot(state) {
//     return {direction: randomPick(roadGraph[state.place])};
// }

// VillageState.random = function(parcelCount = 5) {
//     let parcels = [];
//     for (let i = 0; i < parcelCount; i++) {
//         let address = randomPick(Object.keys(roadGraph));
//         let place;
//         do {
//         place = randomPick(Object.keys(roadGraph));
//         } while (place == address);
//         parcels.push({place, address});
//     }

//     return new VillageState("Post Office", parcels);
// };

// runRobot(VillageState.random(), randomRobot);
// → Moved to Marketplace
// → Moved to Town Hall
// →…
// → Done in 63 turns

// ========= fundamentals ===========
// for (let i = 0;; i++) {
//     if (i >= 6) {
//         console.log("last")
//         break
//     }
//     console.log(i)
// }

// function th(name, age) {
//     let cr = Object.create(null)
//     cr.name = name;
//     cr.age = age
//     return cr
// }

// console.log(new th("Jules", 26))





// review 
// > Side effect
// > State
// > imperative and declarative

// last topic 
// https://www.youtube.com/watch?v=PK2rB9VGWSA&t=1s
// 

// run this on node.js
// =========== build a route finder ==============
// find the route for parcels delivery
// Route finder
// I can say that anything is possible
// It may have a bug but it works
// review this code 
// prototype
// function routeFinder({place, destination, route}) {
//     let path = [];
//     let allRoute = [];
//     let newPlace = place;
//     let count = {}; 
//     let c = 0;

//     function traverse(place) {
//         if (count[place] === 0) {
//             count[place]++
//         } else {
//             count[place] = 0
//         }

//         path.push(place);
//         newPlace = route[place][count[place]];
//     }

//     // route[newPlace]
//     // !place === path[0]
//     while(route[newPlace]) {
//         let find = route[newPlace].filter(road => {
//             return road === destination
//         })
//         traverse(newPlace)
        
//         if (find[0]) {
//             path.push(destination);
//             allRoute.push(path);
//             count[path[0]]++;
//             let first = path[0];
//             path = [first];
//             newPlace = route[first][count[first]];
//             let lastScore = count[first];
//             count = {};
//             count[first] = lastScore; 
//         }

//         // if (allRoute.indexOf(allRoute[allRoute.length- 1])) {
//         //     return allRoute
//         // }
//         c++
//     }

//     return allRoute
// }

// console.log(routeFinder({place: "Shop", destination: "Cabin", route: roadGraph}))

// ======== run this in node.js =======
// console.log(routeFinder({place: "Post Office", destination: "Alice's House", route: roadGraph}))

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

// page 125 // persisten data

  