// data 

var JOURNAL = [
    {"events":["carrot","exercise","weekend"],"squirrel":false},
    {"events":["bread","pudding","brushed teeth","weekend","touched tree"],"squirrel":false},
    {"events":["carrot","nachos","brushed teeth","cycling","weekend"],"squirrel":false},
    {"events":["brussel sprouts","ice cream","brushed teeth","computer","weekend"],"squirrel":false},
    {"events":["potatoes","candy","brushed teeth","exercise","weekend","dentist"],"squirrel":false},
    {"events":["brussel sprouts","pudding","brushed teeth","running","weekend"],"squirrel":false},
    {"events":["pizza","brushed teeth","computer","work","touched tree"],"squirrel":false},
    {"events":["bread","beer","brushed teeth","cycling","work"],"squirrel":false},
    {"events":["cauliflower","brushed teeth","work"],"squirrel":false},
    {"events":["pizza","brushed teeth","cycling","work"],"squirrel":false},
    {"events":["lasagna","nachos","brushed teeth","work"],"squirrel":false},
    {"events":["brushed teeth","weekend","touched tree"],"squirrel":false},
    {"events":["lettuce","brushed teeth","television","weekend"],"squirrel":false},
    {"events":["spaghetti","brushed teeth","work"],"squirrel":false},
    {"events":["brushed teeth","computer","work"],"squirrel":false},
    {"events":["lettuce","nachos","brushed teeth","work"],"squirrel":false},
    {"events":["carrot","brushed teeth","running","work"],"squirrel":false},
    {"events":["brushed teeth","work"],"squirrel":false},
    {"events":["cauliflower","reading","weekend"],"squirrel":false},
    {"events":["bread","brushed teeth","weekend"],"squirrel":false},
    {"events":["lasagna","brushed teeth","exercise","work"],"squirrel":false},
    {"events":["spaghetti","brushed teeth","reading","work"],"squirrel":false},
    {"events":["carrot","ice cream","brushed teeth","television","work"],"squirrel":false},
    {"events":["spaghetti","nachos","work"],"squirrel":false},
    {"events":["cauliflower","ice cream","brushed teeth","cycling","work"],"squirrel":false},
    {"events":["spaghetti","peanuts","computer","weekend"],"squirrel":true},
    {"events":["potatoes","ice cream","brushed teeth","computer","weekend"],"squirrel":false},
    {"events":["potatoes","ice cream","brushed teeth","work"],"squirrel":false},
    {"events":["peanuts","brushed teeth","running","work"],"squirrel":false},
    {"events":["potatoes","exercise","work"],"squirrel":false},
    {"events":["pizza","ice cream","computer","work"],"squirrel":false},
    {"events":["lasagna","ice cream","work"],"squirrel":false},
    {"events":["cauliflower","candy","reading","weekend"],"squirrel":false},
    {"events":["lasagna","nachos","brushed teeth","running","weekend"],"squirrel":false},
    {"events":["potatoes","brushed teeth","work"],"squirrel":false},
    {"events":["carrot","work"],"squirrel":false},
    {"events":["pizza","beer","work","dentist"],"squirrel":false},
    {"events":["lasagna","pudding","cycling","work"],"squirrel":false},
    {"events":["spaghetti","brushed teeth","reading","work"],"squirrel":false},
    {"events":["spaghetti","pudding","television","weekend"],"squirrel":false},
    {"events":["bread","brushed teeth","exercise","weekend"],"squirrel":false},
    {"events":["lasagna","peanuts","work"],"squirrel":true},
    {"events":["pizza","work"],"squirrel":false},
    {"events":["potatoes","exercise","work"],"squirrel":false},
    {"events":["brushed teeth","exercise","work"],"squirrel":false},
    {"events":["spaghetti","brushed teeth","television","work"],"squirrel":false},
    {"events":["pizza","cycling","weekend"],"squirrel":false},
    {"events":["carrot","brushed teeth","weekend"],"squirrel":false},
    {"events":["carrot","beer","brushed teeth","work"],"squirrel":false},
    {"events":["pizza","peanuts","candy","work"],"squirrel":true},
    {"events":["carrot","peanuts","brushed teeth","reading","work"],"squirrel":false},
    {"events":["potatoes","peanuts","brushed teeth","work"],"squirrel":false},
    {"events":["carrot","nachos","brushed teeth","exercise","work"],"squirrel":false},
    {"events":["pizza","peanuts","brushed teeth","television","weekend"],"squirrel":false},
    {"events":["lasagna","brushed teeth","cycling","weekend"],"squirrel":false},
    {"events":["cauliflower","peanuts","brushed teeth","computer","work","touched tree"],"squirrel":false},
    {"events":["lettuce","brushed teeth","television","work"],"squirrel":false},
    {"events":["potatoes","brushed teeth","computer","work"],"squirrel":false},
    {"events":["bread","candy","work"],"squirrel":false},
    {"events":["potatoes","nachos","work"],"squirrel":false},
    {"events":["carrot","pudding","brushed teeth","weekend"],"squirrel":false},
    {"events":["carrot","brushed teeth","exercise","weekend","touched tree"],"squirrel":false},
    {"events":["brussel sprouts","running","work"],"squirrel":false},
    {"events":["brushed teeth","work"],"squirrel":false},
    {"events":["lettuce","brushed teeth","running","work"],"squirrel":false},
    {"events":["candy","brushed teeth","work"],"squirrel":false},
    {"events":["brussel sprouts","brushed teeth","computer","work"],"squirrel":false},
    {"events":["bread","brushed teeth","weekend"],"squirrel":false},
    {"events":["cauliflower","brushed teeth","weekend"],"squirrel":false},
    {"events":["spaghetti","candy","television","work","touched tree"],"squirrel":false},
    {"events":["carrot","pudding","brushed teeth","work"],"squirrel":false},
    {"events":["lettuce","brushed teeth","work"],"squirrel":false},
    {"events":["carrot","ice cream","brushed teeth","cycling","work"],"squirrel":false},
    {"events":["pizza","brushed teeth","work"],"squirrel":false},
    {"events":["spaghetti","peanuts","exercise","weekend"],"squirrel":true},
    {"events":["bread","beer","computer","weekend","touched tree"],"squirrel":false},
    {"events":["brushed teeth","running","work"],"squirrel":false},
    {"events":["lettuce","peanuts","brushed teeth","work","touched tree"],"squirrel":false},
    {"events":["lasagna","brushed teeth","television","work"],"squirrel":false},
    {"events":["cauliflower","brushed teeth","running","work"],"squirrel":false},
    {"events":["carrot","brushed teeth","running","work"],"squirrel":false},
    {"events":["carrot","reading","weekend"],"squirrel":false},
    {"events":["carrot","peanuts","reading","weekend"],"squirrel":true},
    {"events":["potatoes","brushed teeth","running","work"],"squirrel":false},
    {"events":["lasagna","ice cream","work","touched tree"],"squirrel":false},
    {"events":["cauliflower","peanuts","brushed teeth","cycling","work"],"squirrel":false},
    {"events":["pizza","brushed teeth","running","work"],"squirrel":false},
    {"events":["lettuce","brushed teeth","work"],"squirrel":false},
    {"events":["bread","brushed teeth","television","weekend"],"squirrel":false},
    {"events":["cauliflower","peanuts","brushed teeth","weekend"],"squirrel":false}
  ];
  
// JOURNAL

function phi(table) {
    return ((table[3]*table[0]) - (table[2]*table[1]))/ Math.sqrt((table[2]+table[3]) * (table[0]+table[1])*(table[1]+table[3])*(table[0]+table[2]))
}

console.log(phi(tableFor("pizza", JOURNAL)))

// To extract a two-by-two table for a specific event from the journal, we must
// loop over all the entries and tally how many times the event occurs in relation
// to squirrel transformations.

// console.log(tableFor("pizza", JOURNAL));
// // → [76, 9, 4, 1]

function tableFor(event, journal) {
    let empty = [];
    let noSquirrel_noPizza = 0;
    let noSquirrel_pizza = 0;
    let squirrel_noPizza = 0;
    let squirrel_pizza = 0; 

    journal.forEach(elements => {
        if (!elements.events.includes(event) && !elements.squirrel) {
            noSquirrel_noPizza++;
        } else if (elements.events.includes(event) && !elements.squirrel) {
            noSquirrel_pizza++
        } else if (elements.squirrel && !elements.events.includes(event)) {
            squirrel_noPizza++
        } else {
            squirrel_pizza++
        }

    })

    empty.push(noSquirrel_noPizza, noSquirrel_pizza, squirrel_noPizza, squirrel_pizza)

    return empty
}

console.log(tableFor("pizza", JOURNAL));

// function tableFor(event, journal) {
//     let table = [0, 0, 0, 0];

//     for (let i = 0; i < journal.length; i++) {
//         let entry = journal[i], index = 0;
//         if (entry.events.includes(event)) index += 1;
//         if (entry.squirrel) index += 2;
//         table[index] += 1;
//     }

//     return table;
// }

// console.log(tableFor("pizza", JOURNAL));
// // → [76, 9, 4, 1]
    

// We need to compute a correlation for every type of event that occurs in the
// data set. To do that, we first need to find every type of event.

// console.log(journalEvents(JOURNAL));
// // → ["carrot", "exercise", "weekend", "bread", …]

function journalEvents(journal) {
    let empty = [];

    journal.forEach(elements => {
        elements.events.forEach(element => {
            if (!empty.includes(element)) {
                empty.push(element)
            }
        })
    })

    return empty
}

console.log(journalEvents(JOURNAL));

// The final analysis

function eventsCorrelation(journal) {
    journalEvents(journal).forEach(element => {
        console.log(`${element}: ${phi(tableFor(element, journal))}`)
    })
}

// eventsCorrelation(JOURNAL)

// → carrot: 0.0140970969
// → exercise: 0.0685994341
// → weekend: 0.1371988681
// → bread: -0.0757554019
// → pudding: -0.0648203724
71
// and so on...

// (3) phi(table)
// (2) tableFor(event, journal)
// (1) journalEvents(journal) 

// filter the correlation greater than 0.1 or less than -0.1

function filterCorrelation(journal) {
    journalEvents(journal).forEach(element => {
        if (phi(tableFor(element, journal)) > 0.1 ||phi(tableFor(element, journal)) < -0.1) {
            console.log(`${element}: ${phi(tableFor(element, journal))}`)
        }
    })
}

filterCorrelation(JOURNAL)

// → weekend: 0.1371988681
// → brushed teeth: -0.3805211953
// → candy: 0.1296407447
// → work: -0.1371988681
// → spaghetti: 0.2425356250
// → reading: 0.1106828054
// → peanuts: 0.5902679812


// check a event if eats peanut and not brushing then add to journal

function eatPeanutNotBrushing(journal) {
    // loop through the journal
    journal.forEach(element => {
        // check if the element.events has a peanut and not brushed teeth
        // if true then add peanut teeth to the events
        if (element.events.includes("peanuts") && !element.events.includes("brushed teeth")) {
            element.events.push("peanut teeth")
        }
    })
}

eatPeanutNotBrushing(JOURNAL)

console.log(phi(tableFor("peanut teeth", JOURNAL)))

// session 2

