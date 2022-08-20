"use strict"

function common(list1, list2) {
    return list1.reduce((container, element) => {
        if (list2.includes(element)) {
            if (!container.includes(element)) {
                container.push(element)
            }
        }

        return container
    }, [])
}

console.log(common(['a'], ['a']))
// ['a']
console.log(common(['a', 'b', 'c'], ['x', 'a', 'z', 'c']))
// ['a', 'c']
console.log(common(['a', 'b', 'c'], ['x', 'y', 'z']))
// ([])
console.log(common(['a', 'a', 'b'], ['a', 'a', 'x']))
// ['a']

// => https://web.stanford.edu/class/archive/cs/cs106a/cs106a.1226/handouts/bajillion.html