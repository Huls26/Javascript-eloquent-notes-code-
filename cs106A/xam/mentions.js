function replaceMention(string) {
    let split = string.split("");
    let uL = [];
    let newArray = ""
    
    if (split[0] !== "@") {   
        return string
    }

    for (let i = 0; i < split.length; i++) {
        if (split[i] === "@") {

        } else if (split[i] === split[i].toUpperCase() && split[i -1] !== "@") {
            uL.push(i);
            newArray += " " + split[i];
        } else {
            newArray += split[i];
        } 
    }
    
    console.log(uL)
    console.log(newArray)
    
    return newArray 
}

replaceMention("@NickTroccoli")

function test() {
    // test 1
    if (replaceMention("hello!") === "hello!") {
        console.log("Passed")
    } else {
        console.log(replaceMention("hello!"))
        console.log("failed")
    }

    //test 2
    if (replaceMention("@Nolan") === "Nolan") {
        console.log("Passed")
    } else {
        console.log(replaceMention("@Nolan"))
        console.log("failed")
    }

    // test 3
    if (replaceMention("@nolan") === "not valid mentions") {
        console.log("Passed")
    } else {
        console.log(replaceMention("@nolan"))
        console.log("failed")
    }

    // test 4
    if (replaceMention("@") === "not valid mentions") {
        console.log("Passed")
    } else {
        console.log(replaceMention("@"))
        console.log("failed")
    }

      // test 5
      let test = replaceMention("@AleksanderPaulDash")
      if (test === "Aleksander Paul D.”") {
        console.log("Passed");
    } else {
        console.log(test);
        console.log("failed");
    }
}

// test()