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

// last topic
// https://www.youtube.com/watch?v=hy-C4NY7A_8&list=PL4cUxeGkcC9i5yvDkJgt60vNVWffpblB7&index=6


// 'this' review => https://www.youtube.com/watch?v=gvicrj31JOM
// study abstraction in oop

// session 2
// page 112