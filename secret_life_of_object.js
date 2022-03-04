// Encapsulation

let objectLiteral = {
    1: "hello",
    2: "world",
}

console.log(typeof (Object.keys(objectLiteral)[0]))

let userInfo = {
    name: "Jules",
    email: "julesmoreno@gmail.com",
    login() {
        console.log(this.email)
    },
    
}

console.log(userInfo)
userInfo.login()

console.log(window === this)
console.log(this.location)

function videos(title) {
    this.title = title
   return this
}

let newItem = new videos("rebetika")
console.log(newItem)

// tricks with this
function storage() {
    this.sum = 0
    this.greet = "hello"
}

storage()
console.log(this.greet)

let video = {
    title: "tiny cat",
    tags: ["a", "b", "c"],
    log() {
        this.tags.forEach(element => {
            console.log(this.title ,element)
        })
    },
    info () {
        this.tags.forEach(element => {
            console.log(this, element)
        }, this)
    }
}

video.log()
video.info()

class Users {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
}

let userSample = new Users("jules", "julesmoreno@gmail.com")

console.log(userSample)

class Person {
    constructor(name, age, height) {
        this.name = name;
        this.age = age;
        this.height = height;
    }
}

let person1 = new Person("J7", 18, `5'4 or 6'3 or 171cm`)

console.log(person1)

class Rectangle {
    constructor(height, width, color) {
        this.height = height;
        this.width = width; 
        this.colors = color;
       let message = function() {
            console.log("rectangle has been created")
        }
        message()
    }

    area() {
        return `The area is ${this.height * this.width}`
    }
}

let rectangle1 = new Rectangle(3, 5, "yellow")

console.log(rectangle1)
console.log(rectangle1.area())


// last topic
// https://www.youtube.com/watch?v=hy-C4NY7A_8&list=PL4cUxeGkcC9i5yvDkJgt60vNVWffpblB7&index=6
// https://www.youtube.com/watch?v=2ZphE5HcQPQ

// 'this' review => https://www.youtube.com/watch?v=gvicrj31JOM
// study abstraction in oop
// classes => https://www.youtube.com/watch?v=2ZphE5HcQPQ

// session 2
// page 112