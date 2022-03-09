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

class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
        this.score = 0;
    }

    static count = 0

    updateScore() {
        this.score++
        User.count++
        return this
    }
}

let user1a = new User("jack", "asdsa");

user1a.updateScore()
console.log(user1a)

let user2a = new User("rose", "lsadj");
user2a.updateScore()
console.log(user2a)
user1a.updateScore()

console.log(user1a)
console.log(User.count)

console.log(user2a.updateScore())

class Admin extends User {
    constructor(name, email, id) {
        super(name, email)
        this.id = id;
        this.greet = function() {
            return "hello"
        }
    }

    deleteUser(user) {
    //    usersA.splice(index, 1)
    //    return usersA

        let updateUser = users.filter(u => {
            return u.name !== user.name
        })

        return updateUser
    }   
}

let users = [user1a, user2a]
let admin1 = new Admin("Jules", "jules@gmail.com", 3120119);

console.log(admin1.greet())
// console.log(users)

// console.log(admin1.deleteUser(user1a))


// last topic
// https://www.youtube.com/watch?v=8x1fygdWabY&list=PL4cUxeGkcC9i5yvDkJgt60vNVWffpblB7&index=7

// 'this' review => https://www.youtube.com/watch?v=gvicrj31JOM
// classes => https://www.youtube.com/watch?v=2ZphE5HcQPQ
// extends and super => https://www.youtube.com/watch?v=CwAU1wYeHiM 

// encapsulation
// study abstraction in oop
// study static method
    // => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/static
// getter and setter 


// javascript challenges on friday

// session 2
// page 112