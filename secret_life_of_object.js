// Encapsulation

// let objectLiteral = {
//     1: "hello",
//     2: "world",
// }

// console.log(typeof (Object.keys(objectLiteral)[0]))

// let userInfo = {
//     name: "Jules",
//     email: "julesmoreno@gmail.com",
//     login() {
//         console.log(this.email)
//     },
    
// }

// console.log(userInfo)
// userInfo.login()

// console.log(window === this)
// console.log(this.location)

// function videos(title) {
//     this.title = title
//    return this
// }

// let newItem = new videos("rebetika")
// console.log(newItem)

// // tricks with this
// function storage() {
//     this.sum = 0
//     this.greet = "hello"
// }

// storage()
// console.log(this.greet)

// let video = {
//     title: "tiny cat",
//     tags: ["a", "b", "c"],
//     log() {
//         this.tags.forEach(element => {
//             console.log(this.title ,element)
//         })
//     },
//     info () {
//         this.tags.forEach(element => {
//             console.log(this, element)
//         }, this)
//     }
// }

// video.log()
// video.info()

// class Users {
//     constructor(name, email) {
//         this.name = name;
//         this.email = email;
//     }
// }

// let userSample = new Users("jules", "julesmoreno@gmail.com")

// console.log(userSample)

// class Person {
//     constructor(name, age, height) {
//         this.name = name;
//         this.age = age;
//         this.height = height;
//     }
// }

// let person1 = new Person("J7", 18, `5'4 or 6'3 or 171cm`)

// console.log(person1)

// class Rectangle {
//     constructor(height, width, color) {
//         this.height = height;
//         this.width = width; 
//         this.colors = color;
//        let message = function() {
//             console.log("rectangle has been created")
//         };
//         message();
//     }

//     area() {
//         return `The area is ${this.height * this.width}`
//     }

//     printDescription() {
//         return `The color is ${this.colors} and the height and the width is ${this.height}, ${this.width}`
//     }
// }

// let rectangle1 = new Rectangle(3, 5, "yellow")

// console.log(rectangle1.colors)
// console.log(rectangle1.area())
// console.log(rectangle1.printDescription())

// class square {
//     constructor(width) {
//         this.length = width;
//         this.width = width;
//         this.count = 0;
//     }

//     get area() {
//         this.count++
//         return this.width * this.length;
//     }

//     set area(random) {
//         this.length = Math.sqrt(random);
//         this.width = this.length;
//     }

//     get parameter() {
//         return this.width +this.length
//     }
// }

// let square1 = new square(3);

// console.log(square1.area)

 
// square1.area = 25

// console.log(square1)
// console.log(square1.length)
// console.log(square1.width)
// console.log(square1.area)

// console.log(square1.parameter)

// console.log(square1)

// class Square {
//     constructor(length) {
//         this.length = length;
//         this.width = length
//     }


// }

// let square1 = new Square(8);
// console.log(square1) 

// class List {
//     constructor(id) {
//         this.id = id
//     }
    
//     changeId(id) {
//         this.id = id
//     }

//     age(n) {
//         return 2022 - n
//     }

//     static name = "Jules";
//     static autoAge(year) {
//         return 2022 - year
//     }
// }

// console.log(List.name)
// console.log(List.autoAge(1996))

// let listInformation = new List(1);
// console.log(listInformation.age(1996))

// listInformation.changeId(2)
// console.log(listInformation)

// ================== getter and setter =================
// class Box {
//     constructor(length, width) {
//         this.length = length;
//         this.width = width;
//         this.color = [];
//     }

//     get parameter() {
//         return this.length + this.width
//     }

//     set size(size) {
//         this.length = size;
//         this.width = this.length;
//     }
    
//    set colors(pick) {
//         this.color.push(...pick);
//     }

//     get hit() {
//         let random = Math.floor(Math.random(0,1) * this.color.length);

//         return this.color[random]
//     }
// }

// let box1 = new Box(5, 5);

// console.log(box1.parameter)
// // box1.size = 3;
// console.log(box1)

// box1.colors = ["red"];
// box1.colors = ["blue", "yellow"];
// console.log(box1)

// console.log(box1.hit)

// class Triple {
//     static customName = "Tripler";
//     static descripttion = "I triple something";
//     static calculate(n = 1) {
//         return n * 3
//     }

//     // for instance
//     calc(n=1) {
//         return n * 3
//     }
// }

// class SquaredTriple extends Triple {
//     static longDescription;
//     static descripttion = "I square the triple number you provide";
//     static calculate(n) {
//         return super.calculate(n) * super.calculate(n);
//     }
// }

// console.log(Triple.descripttion)
// console.log(Triple.calculate())
// console.log(Triple.calculate(3))

// console.log(SquaredTriple.customName)
// console.log(SquaredTriple.descripttion)
// console.log(SquaredTriple.calculate())

// let tp = new Triple()
// // console.log(tp.calculate())
// console.log(tp.calc(5))

// function videos(title) {
//     this.title = title
//     return this
// }

// console.log(videos("red dot"))
// console.log(this.title)
// this.title = "new Moves"
// console.log(this.title)

// class Person {
//     constructor(name, age, id) {
//         this.name = name;
//         this.age = age;
//         this.id = id;
//     }

//     ageA(birth) {
//         this.age = 2022 - birth
//     }

//     static autoAge(birth) {
//         return this.age = 2022 - birth;
//     }

//     static autoage = this.autoAge(1997)
// }

// let person1 = new Person("Jules", null, 3120119);

// console.log(person1)
// console.log(person1.age)

// person1.ageA(1996);
// console.log(person1.age)

// console.log(Person.autoAge(1996))

// console.log(Person.autoage)

// class Person {
//     constructor(name, age, add) {
//         this.name = name;
//         this.age = age;
//         this.add = add;
//     }

//     static eyeColor = "black";
// }

// class Worker extends Person {
//     constructor(name, age, add, occupation) {
//         super(name, age);
//         this.occupation = occupation;
//         this.add = add
//     }

//     static eye() {
//         return super.eyeColor
//     }

//     get colorOfEye() {
//         return Worker.eye()
//     }

//     static eyeColor() {
//         return super.eyeColor
//     }
// }


// let worker1 = new Worker("Jules", 26, "manila", "none")

// console.log(worker1)

// console.log(worker1.colorOfEye)
// console.log(Worker.eyeColor())

// class CallSomething {
//     constructor() {
//         console.log(this.constructor.callSomething)
//         console.log(this.constructor.staticMethod())
//         console.log(CallSomething.callSomething)
//         console.log(CallSomething.staticMethod())
//         console.log(this.constructor)

//         this.greet = "hello"
//     }

//     static callSomething = "something is stored";
//     static staticMethod() {
//         return "static Method has been called"
//     } 
// }

// let something = new CallSomething()
// console.log(something.greet)

// class Student {
//     constructor() {
//         let name, marks;
//     }

//     // setName(name) {
//     //     this.name = name;
//     // }

//     // getName() {
//     //     return this.name
//     // }

//     // setMarks(mark) {
//     //     this.marks = mark;
//     // }

//     // getMarks() {
//     //     return this.marks
//     // }

//     set setName(name) {
//         this.name = name;
//     }

//     get getName() {
//         return this.name
//     }
// }

// let student1 = new Student()

// student1.setName = "Ino"
// console.log(student1.getName)

// student1.setMarks("99")
// console.log(student1.getMarks())
// console.log(student1)

// ========== static ===========

// class Rectangle {
//     constructor(length, width) {
//         this.length = length;
//         this.width = width;
//     }

//     // get the area of the rectangle
//     get getArea() {
//         return this.length * this.width
//     }

//     // check if the two rectangle are equal area
//     static equalArea(a, b) {
//         return a.getArea === b.getArea;
//     }

//     // check if the rectangle is a square
//     static equal(rec) {
//         return rec.length === rec.width
//     }
// }

// let rectangle1 = new Rectangle(3, 4);
// console.log(rectangle1.getArea)

// let rectangle2 = new Rectangle(4, 4);
// console.log(rectangle2.getArea)

// console.log(Rectangle.equalArea(rectangle1, rectangle2))

// console.log(Rectangle.equal(rectangle1))
// console.log(Rectangle.equal(rectangle2))

// ============ extends and super ===============
// class Person {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age
//         this.programmer = false;
//     }

//     describe() {
//         return `my name is ${this.name} and I am ${this.age}`
//     }
// }

// class Programmer extends Person {
//     constructor(names, ages, job) {
//         super(names, ages);
//         this.job = job;
//         this.programmer = true;
//     }

//     description() {
//         return super.describe() + " and i am a programmer"
//     }
// }

// let programmer1 = new Programmer("jules", 25, "none");

// console.log(programmer1)
// console.log(programmer1.describe())
// console.log(programmer1.description())

// let listOfPerson = [
//     new Person("jules", 24),
//     new Programmer("Jules", 26, "Software Developer"),
// ]

// function listPerson(array) {
//     for (let element of array) {
//         if (element.programmer) {
//             console.log(element.description())
//         } else {
//             console.log(element.describe())
//         }
//     }
// }

// listPerson(listOfPerson)

// Polymorphism
// class PersonName {
//     static firstname = "Marites"
//     static fullName(lastname) {
//         return this.firstname + " "+ lastname
//     }
// }

// class ChangeName extends PersonName {
//     static firstname = "Claire";
//     static fullName(lastname) {
//         console.log("from", super.firstname)
//         return this.firstname + " " + lastname
//     } 
// }

// console.log(ChangeName.fullName("Manubat"))

// class User {
//     constructor(name, email) {
//         this.name = name;
//         this.email = email;
//         this.score = 0;
//     }

//     static count = 0

//     updateScore() {
//         this.score++
//         User.count++
//         return this
//     }
// }

// let user1a = new User("jack", "asdsa");

// user1a.updateScore()
// console.log(user1a)

// let user2a = new User("rose", "lsadj");
// user2a.updateScore()
// console.log(user2a)
// user1a.updateScore()

// console.log(user1a)
// console.log(User.count)

// console.log(user2a.updateScore())

// class Admin extends User {
//     constructor(name, email, id) {
//         super(name, email)
//         this.id = id;
//         this.greet = function() {
//             return "hello"
//         }
//     }

//     deleteUser(user) {
//     //    usersA.splice(index, 1)
//     //    return usersA

//         let updateUser = users.filter(u => {
//             return u.name !== user.name
//         })

//         return updateUser
//     }   
// }

// let users = [user1a, user2a]
// let admin1 = new Admin("Jules", "jules@gmail.com", 3120119);

// console.log(admin1.greet())
// console.log(users)

// console.log(admin1.deleteUser(user1a))

// ============= call =============
// function callSomething(greet) {
//     console.log(this.name + " " + greet)
// }

// callSomething.call({
//     name: "jules",
//     age: 26,
// }, "hello")

// function divide() {
//     return this.arrays.map(element => {
//         return element / this.length
//     })
// }

// console.log(divide.call({arrays: [0, 2, 3], length: 5}))

// function callMe(name) {
//     console.log(`hello ${name}`)
//     console.log(this.number)
//     console.log(this.id)
// }

// callMe.call({number: 12, id: 123}, "jules")

// ============ prototype ==============
// let zoo = {
//     animals: ["crocodile", "swan", "giraffe"]
// }

// function Zoo(animals) {
//     this.animals = animals;
// }

// let zoo1 = new Zoo(zoo.animals)

// Zoo.prototype.count = function() {
//     return this.animals.length
// }

// Zoo.prototype.add = function(animal) {
//     this.animals.push(animal)
// }

// console.log(zoo1.count())
// zoo1.add("lion")

// console.log(zoo1)

// let empty = {}
// console.log(empty.toString)
// console.log(empty.toString())

// console.log(Object.getPrototypeOf({}) ==
// Object.prototype);
// // → true
// console.log(Object.getPrototypeOf(Object.prototype));
// // → null

// ============= getPrototypeof and prototype ============
// console.log(Object.getPrototypeOf(zoo1))
// console.log(Zoo.prototype)

// console.log(Object.getPrototypeOf(Math.max) === Function.prototype)
// // true
// console.log(Object.getPrototypeOf([]) === Array.prototype)
// // true

// class Object1 {
//     constructor() {
//         this.name = "Jules"
//     }

//     greet() {
//         console.log("hello")
//     }
// }

// class Object2 extends Object1 {
//     constructor(){
//         super()
//     }

//     greet() {
//         super.greet()
//     }
    
// }

// let object1a = new Object1();
// let object2a = new Object2();

// console.log(object1a)
// console.log(object2a)

// console.log(Object1.prototype)
// console.log(Object2.prototype)

// let rabitSpeak = {
//     speak(line) {
//         console.log(`${line} my name is ${this.name}`)
//     }
// }

// let createProp = Object.create(rabitSpeak);
// createProp.name = "bunny"; 
// createProp.speak("hello")

// function makeRabbit(type) {
//     let rabbit = Object.create(rabitSpeak);
//     rabbit.type = type;
//     return rabbit;
// }
    
// console.log(new makeRabbit("dwarf"))
// let protoRabbit = {
//     speak(line) {
//         console.log(`The ${this.type} rabbit says '${line}'`);
//     }
// };
// let killerRabbit = Object.create(protoRabbit);
// killerRabbit.type = "killer";
// killerRabbit.speak("SKREEEE!");

// ======== prototype and object create =========
// function Rabbit(name) {
//     this.name = name;
// }

// Rabbit.prototype.speak = function(line) {
//     return `hello my name is ${this.name} and ${line}`
// }

// let rabbit1 = new Rabbit("jeorge")

// console.log(rabbit1.speak("i like to eat"))

// function speak(line) {
//     console.log(`hello my name is ${this.name} and ${line}`)
// }

// let rabbit = {
//     name: "red",
//     greet() {
//         console.log("hello friend")
//     }
// }

// let rabbit1 = Object.create(rabbit);
// rabbit1.speak = speak;
// rabbit1.speak("i like to eat")

// console.log(rabbit.greet())
// console.log(Object.getPrototypeOf(rabbit1))

// function Animal(name, age) {
//     let animal = Object.create(Animal.prototype);
//     animal.name = name;
//     animal.age = age;

//     return animal
// }

// Animal.prototype.sound = function() {
//     console.log("Moooo")
// }
// console.log(Animal(null, null))
// console.log(Animal.prototype)

// class Rabbit {
//     constructor() {
//         this.name = "red"
//     }

//     speak(line) {
//         console.log(`Hello my name is ${this.name} and ${line}`)
//     } 

// }

// let rabbit1 = new Rabbit();
// Rabbit.prototype.sound = function() {
//     console.log("ugik")
// }

// let breed = Object.create(new Rabbit());
// breed.type = "dwarf"
// console.log(breed)

// console.log(Object.getPrototypeOf(rabbit1) === Rabbit.prototype)

// function Animal() {
//     this.name = "add"
// }

// console.log(Object.getPrototypeOf(Animal))
// console.log(Animal.prototype)


// function speak(line) {
//     return `hello ${line}`
// }

// let rabbit = {
//     name: "dave"
// }
// let rabbit1 = Object.create(rabbit)
// rabbit.speak = speak;
// rabbit.name = "john"

// console.log(rabbit1.speak("i want to eat"))
// console.log(rabbit1.name)

// class Rabbit {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age
//     }

//     play() {
//         return `play with the ball`
//     }

//     static rabbit = new Rabbit;

//     loop(instance) {
//         for (let element in instance) {
//             if (instance.hasOwnProperty(element)) {
//                 console.log(instance[element])
//             }
//         }
//     }
// }

// let rabbit1 = new Rabbit("robert", 27);

// Rabbit.prototype.speak = function() {
//     return `hello im fat`
// }

// console.log(rabbit1.speak())
// console.log(Rabbit.prototype)
// console.log(Object.getPrototypeOf(rabbit1))

// rabbit1.loop(rabbit1)

// console.log([1,2] instanceof Array) 

// let className = new class {greet() {return `hello`}}
// console.log(className.greet())

// ============= Maps ============

// let names = ["Julian", "Johnson", "Jonard"]
// let objectName = {
//     "Jules" : 26,
//     "Joj": 23,
//     "J7":23,
// }
// console.log("Marta" in names)
// console.log(26 in objectName)

// console.log(Object.getPrototypeOf(objectName))

// let objectNames = new Map();
// objectNames.set("Jules", 25)
// objectNames.set("Jobert", 25)

// console.log(objectNames.get("Jules"))
// console.log({Jules: 26}.hasOwnProperty("Jules"))
// console.log(objectNames.get("Jobert"))

// ================= Polymorphism ====================
// remember this method
// class Rabbit {
//     constructor(name, type) {
//         this.name = name;
//         this.type = type;
//     }

// }

// Rabbit.prototype.toString = function() {
//     console.log(`a ${this.type} rabbit`)
// }

// let rabbit1 = new Rabbit("George", "black");

// String(rabbit1)

// ============== symbols ================
// let sym = Symbol("name")

// console.log(sym === Symbol("name"))
// Rabbit.prototype[sym] = 55;
// console.log(rabbit1[sym])

// let toStringSymbol = Symbol("toString");
// Array.prototype[toStringSymbol] = function() {
//     return `${this.length} cm of blue yarn`
// }

// console.log([1, 2].toString())
// console.log([1, 2, 3][toStringSymbol]())

// let id1 = Symbol("id");

// let objectSample = {
//     id: 12,
//     name: "Stella",
//     [Symbol("Hello")]: "greet",
// }

// objectSample[id1] = 32619;
// console.log([id1])

// console.log(Object.prototype)

// ========= The iterator interface ==========

// let numberSample = [1, 2, 3, 4];

// let iterate = numberSample[Symbol.iterator]()

// console.log(Object.getPrototypeOf(iterate))

// console.log(iterate.next())

// iterate over 1 - 5 using the same function

// function squared(nth) {
//     let n = 0;

//     return {
//         next() {
//            n = n + 1

//            if (n <= nth) {
//                return {
//                    value: n * n,
//                    done: false,
//                }
//            }

//            return {
//                value: undefined,
//                done: true
//            }
//         }
//     }
// }

// const iterated = squared(5);

// console.log(iterated.next())
// console.log(iterated.next())
// console.log(iterated.next())
// console.log(iterated.next())
// console.log(iterated.next())
// console.log(iterated.next())

// function squared(nth) {
//     return {
//         [Symbol.iterator]() {
//            return [1, 2, 3, 4]
//         }
//     }
// }

// console.log(squared(10))

// let person1 = {
//     name: "jules",
//     age: 23,
// }

// let array1 = [1, 2, 3, 4]

// console.log(typeof person1[Symbol.iterator])
// console.log(typeof array1[Symbol.iterator])

// console.dir(array1["pop"]())
// console.log(Symbol.iterator)

// let sym = Symbol.iterator
// let mySym = Symbol("Symbol.iterator")

// console.log(mySym === mySym)

// let iterateOver = array1[Symbol.iterator]();

// console.log(iterateOver.next())
// console.log(iterateOver.next())

// class BoxSample {
//     constructor(height, width, element = (x, y) => {
//         for (let i = 0; i < x; i++) {
//             for (let k = 0; k < y; k++) {
//                 this.container[i * width + k] = (i *width) + k;
//             }
//         }
//     }) {
//         this.height = height;
//         this.width = width;
//         this.container = [];
//         element(height, width)
        
//     }
// }

// let box1 = new BoxSample(3, 4);
// console.log(box1)
// class Matrix {
//     constructor(width, height, element = (x, y) => undefined) {
//         this.width = width;
//         this.height = height;
//         this.container = [];

//         for (let i = 0; i < height; i++) {
//             for (let k = 0; k < width; k++) {
//                 this.container[i * width + k] = element()
//             }
//         }
//     }

//     set(x, y, value) {
//         this.container[x * this.width + y] = value;
//     }

//     get(x, y) {
//         return this.container[x * this.width + y]
//     }
// }

// let matrix1 = new Matrix(3, 3);

// console.log(matrix1)
// matrix1.set(0, 0, 3)
// matrix1.set(1, 2, 26)

// console.log(matrix1.get(0, 0))

// polymorphism
// Matrix.prototype.toString = function() {
//     return "hello"
// }

// console.log(Matrix.prototype)
// console.log(String(matrix1))

// function loopThrough(max) {
//     let n = 0;

//     return {
//         next() {
//             n++
//             if (n <= max) {
//                 return {value: n * n, done: false}
//             }

//             return {value: undefined, done: true}
//         }
//     }
// }

// let loops = loopThrough(5);
// console.log(loops.next())
// console.log(loops.next())
// console.log(loops.next())
// console.log(loops.next())
// console.log(loops.next())
// console.log(loops.next())

// function squared(max) {
//     return {
//         [Symbol.iterator]() {
//             let n = 0;

//             return {
//                 next() {
//                     n++
//                     if (n <= max) {
//                         return {value: n * n, done: false}
//                     }
        
//                     return {value: undefined, done: true}
//                 }
//             }
//         }
//     }
   
// }

// for (let element of squared(5)) {
//     console.log(element)
// }

// loop through object using for/...of loop
// let samplePerson = {
//     name: "Raffy",
//     age: 45,
//     status: "married",
//     job: "Broadcaster"
// }

// Object.prototype[Symbol.iterator] = function() {
//     let objectKey = Object.keys(samplePerson);
//     let index = 0;
//     return {
//         next() {
//             return {value: objectKey[index], done: index++ >= objectKey.length}
//         }
//     }
// }

// let callThis = samplePerson[Symbol.iterator]()
// console.log(callThis.next())
// console.log(callThis.next())
// console.log(callThis.next())
// console.log(callThis.next())
// console.log(callThis.next())

// for (let element of samplePerson) {
//     console.log(element)
// }

// using iteration protocols
// let something = new String("hi");

// changing the whole prototype of String()
// String.prototype[Symbol.iterator] = function() {
//     let n = 0
//     return {
//         next() {
//             n++
//             // if (this.first) {
//             //     this.first = false;
//             //     return {value: ["bye"], done: false}
//             // }

//             // return {done: true}

//             // use this method instead of the other up there
//             return this.first ? {done: (this.first = false), value: ["bye"]} : {done: true}
//         },
//         first: true,
//     }
// }

// change just something method [Symbol.iterator]
// something[Symbol.iterator] = function() {
//     let n = 0
//     return {
//         next() {
//             n++
//             // if (this.first) {
//             //     this.first = false;
//             //     return {value: ["bye"], done: false}
//             // }

//             // return {done: true}

//             // use this method instead of the other up there
//             return this.first ? {done: (this.first = false), value: ["bye"]} : {done: true}
//         },
//         first: true,
//     }
// }
// let iterates = something[Symbol.iterator]();

// console.log(iterates.next())
// console.log(iterates.next())

// console.log([...something])
// console.log(something + "")

// calling function using key values of object
// let adding = function() {
//     return sampleObject.review1 + sampleObject.review2
// }

// let sampleObject = {
//     review1: 1,
//     review2: 2,
//     total: adding,
// }

// console.log(sampleObject.total())

// testing "this"
// let doubleThis = {
//     this1: "writesomethin",
//     get: {
//         this2: "hello",
//         check() {
//             return this.this1, this.this2
//         }
//     },

//    check() {
//        return this.this1
//    }
    
// }

// console.log(doubleThis.get.check())
// console.log(doubleThis.check())

// using system.iterator method
class AddSomething {
    constructor(value1, value2) {
        this.value1 = value1;
        this.value2 = value2;
        this.total = 0;
    }

    static total = 0;

    [Symbol.iterator]() {
        return {
            next() {
                if (AddSomething.total === 0) {
                    let add = this.add();
                    AddSomething.total = add;

                return {value: add, done: false}
                }

                return {value: undefined, done: true}
                
            }, 
            value1: this.value1,
            value2: this.value2,
            add() {
                return this.value1 + this.value2
            }
            
        }
    }

    // [Symbol.iterator]() {
    //     let n = 0;
    //     return {
    //         next() {
    //             return {value: n, done: n++ >= 3} 
    //         },
    //         value1: this.value1,
    //         value2: this.value2,
    //         add() {
    //             return this.value1 + this.value2
    //         }   
    //     }
    // }
   
} 

// let add1 = new AddSomething(2, 2);

// let toLoop = add1[Symbol.iterator]();
// console.log(toLoop === add1[Symbol.iterator]())
// // to make toLoop equal you should call itself
// console.log(toLoop === toLoop)

// for (let element of add1) {
//     console.log(element)
// }

// console.log(add1[Symbol.iterator]().next())
// console.log(add1[Symbol.iterator]().next())

// // =========== Matrix ==============
// class Matrix {
//     constructor(width, height, element = (x, y) => undefined) {
//         this.width = width;
//         this.height = height;
//         this.container = [];

//         for (let i = 0; i < height; i++) {
//             for (let k = 0; k < width; k++) {
//                 this.container[i * width + k] = element(k, i);
//             }
//         }
//     }

//     get(x, y) {
//         return this.container[x * this.width + y]
//     }

//     set(x, y, value) {
//         this.container[x * this.width + y] = value
//     }

// }

// // ============== Matrix Iterator =================
// class MatrixIterator {
//     constructor(matrix) {
//         this.x = 0;
//         this.y = 0;
//         this.matrix = matrix;
//     }

//     next() {
//         if (this.y === this.matrix.height) {return {done: true}}

//         let value = {
//             x: this.x,
//             y: this.y,
//             value: this.matrix.get(this.x, this.y),
//         }

//         this.x++
//         if (this.x === this.matrix.width) {
//             this.x = 0;
//             this.y++;
//         }
//         return {value, done: false}
//     }
   
// }

// // ============= Symbol.iterator ==============
// Matrix.prototype[Symbol.iterator] = function() {
//     return new MatrixIterator(this)
// }

// let matrix1 = new Matrix(3, 3, (x, y) => `value ${x}, ${y}`);

// console.log(matrix1)

// for (let {x, y, value} of matrix1) {
//      console.log(x, y, value)
// }


// console.log(loopAgain.next())
// console.log(loopAgain.next())
// console.log(loopAgain.next())
// console.log(loopAgain.next())


// matrix1.set(0, 0, 3)
// console.log(matrix1.get(0, 0))
// console.log(matrix1)

// console.log(matrix1[Symbol.iterator]())

// let {width, height, container} = matrix1;

// console.log(container)

/*
class Matrix {
    constructor(width, height, element = (x, y) => undefined) {
        this.width = width;
        this.height = height;
        this.container = [];

        for (let i = 0; i < height; i++) {
            for (let k = 0; k < width; k++) {
                this.container[i * width + k] = element(k, i)
            }
        }
    }

    get(x, y) {
        return this.container[y * this.width + x]
    }

    set(x, y, value) {
        this.container[y * this.width + x] = value
    }
}

class MatrixIterator {
    constructor(matrix) {
        this.x = 0;
        this.y = 0;
        this.matrix = matrix;
    }

    next() {
        if (this.y === this.matrix.height) {
            return {done: true}
        }

        let value = {
            x: this.x,
            y: this.y,
            value: this.matrix.get(this.x, this.y),
        }

        this.x++
        if (this.x === this.matrix.width ) {
            this.x = 0;
            this.y++
        }

        return {value, done: false}
    }
}

Matrix.prototype[Symbol.iterator] = function() {
    return new MatrixIterator(this)
}


let matrix1 = new Matrix(3, 4, (x, y) => `value ${x}, ${y}`);


matrix1.set(2, 3, 26)
console.log(matrix1)

for (let {x, y, value} of matrix1) {
    console.log(x, y, value)
}
*/

// maps 
// let map1 = new Map();
// map1.set("name", "Jnh");
// map1.set("age", 46);
// console.log(map1.size)
// console.log(map1.get("name"))

// // get, set, and static

// // get
// let somethingCool = {
//     richIn: "Rich after 2-5 years",
//     get Happen() {
//         return this.richIn
//     }
// }

// console.log(somethingCool.Happen)

// let randomNumber = {
//     get generate() {
//         return Math.ceil(Math.random() * 100)
//     }
// }

// console.log(randomNumber.generate)

// class Temperature {
//     constructor(celsius) {
//         this.celsius = celsius;
//     }

//     get fahrenheit() {
//         return (this.celsius * (9/5)) + 32
//     }

//     set fahrenheit(values) {
//        this.celsius = (values - 32) * (5/9);
//     }

//     // get celsius() {
//     //     return this.celsius
//     // }
//     static fromFahrenheit(values) {
//         return new Temperature((values - 32) * (5/9))
//     }
// }

// let temp = new Temperature(22)
// console.log(temp.fahrenheit)
// temp.fahrenheit = 86;

// // console.log(temp.celsius)
// // console.log(temp)

// // console.log(Temperature.fromFahrenheit(100))
// let temp2 = {celsius: 43};
// console.log(Temperature.hasOwnProperty("fromFahrenheit"))

// =========== Inheritance ===========
// class Rabbit {
//     constructor(name) {
//         this.name = name
//     }

//     speak() {
//         return `Hi i'm ${this.name}`
//     }
// }

// class BlackRabbit extends Rabbit {
//     constructor(name) {
//         super(name);
//     }

//     hide() {
//         return console.log(`hide`)
//     }

//     speak() {

//         super.speak();
//         this.hide();
//     }
// }

// let blackRabbit = new BlackRabbit("thor");

// console.log(blackRabbit.speak())

// class Matrix {
//     constructor(width, height, element = (x, y) => undefined) {
//         this.width = width;
//         this.height = height;
//         this.container = [];

//         for (let i = 0; i < height; i++) {
//             for (let k = 0; k < width; k++) {
//                 this.container[i * width + k] = element(k, i)
//             }
//         }
//     }

//     get(x, y) {
//         return this.container[y * this.width + x]
//     }

//     set(x, y, value) {
//         this.container[y * this.width + x] = value
//     }
// }

// class MatrixIterator {
//     constructor(matrix) {
//         this.x = 0;
//         this.y = 0;
//         this.matrix = matrix;
//     }

//     next() {
//         if (this.y === this.matrix.height) {
//             return {done: true}
//         }

//         let value = {
//             x: this.x,
//             y: this.y,
//             value: this.matrix.get(this.x, this.y)    
//         }

//        this.x++
//         if (this.x === this.matrix.width) {
//             this.x = 0;
//             this.y++
//         }

//         return {value, done: false}
//     }
// }

// Matrix.prototype[Symbol.iterator] = function() {
//     return new MatrixIterator(this)
// }

// let matrix1 = new Matrix(5, 5, (x, y) => `${x}, ${y}`)

// console.log(matrix1.set(2, 3, "hello"))
// console.log(matrix1.get(2, 3))


// for (let element of matrix1) {
//     console.log(element)
// }
// console.log(matrix1)

// ========= inheritance =========
// class SymmetricMatrix extends Matrix {
//     constructor(size, element = (x, y) => undefined) {
//         super(size, size, (x, y) => {
//          return (x < y) ? element(y, x) : element(x, y)
//         })
//     }

//     set(x, y, value) {
//         super.set(x, y, value);
//         if (x != y) {
//             super.set(y, x, value)
//         }
//     }
// }

// let matrix = new SymmetricMatrix(5, (x, y) => `${x}, ${y}`)

// console.log(matrix.get(2, 3))

// console.log(matrix1.container)
// console.log(matrix.container)

// The instanceof Operator
// console.log(matrix instanceof SymmetricMatrix)
// console.log(SymmetricMatrix instanceof Matrix)
// console.log(SymmetricMatrix instanceof Object)
// console.log(new SymmetricMatrix(4) instanceof Matrix)

// add prototype and properties
// matrix.greet = function() {
//     return "hello"
// }

// SymmetricMatrix.prototype["say"] = function() {
//     return "say something"
// }

// console.log(matrix.greet())
// console.log(Object.getPrototypeOf(matrix))

// function greet(name) {
//     return "hello " + name
// }
// have a method without adding it to the main class
// console.log(greet.call(matrix, "matrix"))

// ========== callback ===========

// function activate(greet = () => console.log("hello")) {
//     greet()
// }

// activate()


// function activate(greet) {
//     greet()
// }

// activate(() => console.log("hello"))

// ============= callback ===============
// function activate(greet) {
//     greet()
// }

// activate(() => console.log("hello"))

// function toGetNum1(max) {
//     return Math.ceil(Math.random() * max)
// }

// function calc(num1, num2, calcFunc) {
//     return calcFunc(num1, num2)
// }

// const add = (x, y) => x + y;
// const multiply = (x, y) => x * y;
// console.log(calc(1, 2, add))
// console.log(calc(toGetNum1(2), 2, multiply))

// console.log(typeof (() => {"sample data"}))
// console.log(Array.isArray({}))

// console.log(Array.prototype)

// using callbacks
// class Matrix {
//     constructor(width, height, element = (x, y) => undefined) {
//         this.width = width;
//         this.height = height;
//         this.container = [];

//         for (let i = 0; i < height; i++) {
//             for (let k = 0; k < width; k++) {
//                 this.container[i * width + k] = element(k, i)
//             }
//         }
//     }
// }

// let matrix = new Matrix(5, 5, function(x, y) {
//     return `value ${x}, ${y}`
// })
// console.log(matrix.container)

// class SymmetricMatrix extends Matrix{
//     constructor(size, element = (x, y) => undefined) {
//         super(size, size, (x, y) => {
//             if (x < y) {
//                 return element(y, x)
//             } else {
//                 return `value ${x}, ${y}`
//             }
//         })
//         // super(size, size, (x, y) => element(x, y))
//     }
// }

// let matrix1 = new SymmetricMatrix(5, function(x, y) {
//     return `${x}, ${y}`
// })

// console.log(matrix1.container)

// callback foreach
// function forEach(array, callback, index = 0) {
//     if (index > array.length -1) {
//         return
//     }

//     callback(array[index])

//     return forEach(array, callback, index + 1)
// }

// forEach(array1, function(element) {
//     console.log(element)
// })

// ============= closure ==============
// let APP = (function () {
//     let a = 3;

//     function print(value) {
//         console.log(value)
//     }

//     function sumIt(value) {
//         print(a + value)
//     }

//     function multiplyIt(value) {
//         print(a * value)
//     }
//     return {
//         sumIt: sumIt,
//         multiplyIt: multiplyIt,
//     }

// })();

// APP.sumIt(2)

// callback
// function repeat(n, callbacks) {
//     for(let i = 0; i < n; i++) {
//         callbacks(i)
//     }
// }

// let label = [];
// repeat(5, i => {
//     label.push(`Unit ${i + 1}`)
// })

// console.log(label)

// function unless(test, callback) {
//     if (test) {
//         callback()
//     }
// }

// repeat(3, n => {
//     unless(n % 2 == 0, () => {
//         console.log(n, "is even");
//     });
// });
  
// last topic
// check inheritance
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols
// https://www.youtube.com/watch?v=2oU-DfdWM0c

// 'this' review => https://www.youtube.com/watch?v=gvicrj31JOM
// classes => https://www.youtube.com/watch?v=2ZphE5HcQPQ
// extends and super => https://www.youtube.com/watch?v=CwAU1wYeHiM 
// class, getpropertyof, hasownproperty => https://www.freecodecamp.org/news/a-beginners-guide-to-javascripts-prototype/

// encapsulation
// call() method
// study abstraction in oop
// study static method
    // => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/static
// getter and setter 
// Object.create()
// Object.getPrototypeof() and Object.prototype
// Map()
    // set, get and has
    // hasOwnProperty()
// Polymorphism remember this method
// The iterator interface

// javascript challenges on friday

// session 1
// page 124

// composability
// abstraction

// higher order function 
// function noisy(func) {
//     return (...array) => { 
//         console.log("calling with", array)
//         let called = func(...array)
//         console.log("called with", array, "returned", called)

//         return called
//     }
// }

// noisy(Math.min)(3, 2, 1);