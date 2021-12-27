//      Pair of gloves

/*      Instructions
description: https://www.codewars.com/kata/58235a167a8cb37e1a0000db
A pair of gloves is constituted of two gloves of the same color. You are given an array containing the color of each glove.
You must return the number of pair you can constitute. You must not change the input array.

        Examples
numberOfPairs(['red','red']) ==> 1
numberOfPairs(['red','green','blue']) ==> 0
numberOfPairs(['red','green','red','blue','blue']) ==> 2
numberOfPairs(['red','red','red','red','red','red']) ==> 3
numberOfPairs(['gray','black','purple','purple','gray','black']) ==> 3
*/

function numberOfPairs(gloves) {
    let pairs = {}
    for (let el of gloves) {
        pairs[el] = pairs[el] ? ++pairs[el] : 1
    }
    return Object.values(pairs).map(el => Math.floor(el / 2)).reduce((n, m) => n + m)
}

console.log(numberOfPairs(['red', 'red']), 1)
console.log(numberOfPairs(['red', 'green', 'blue']), 0)
console.log(numberOfPairs(['red', 'green', 'red', 'blue', 'blue']), 2)
console.log(numberOfPairs(['red', 'red', 'red', 'red', 'red', 'red']), 3)
console.log(numberOfPairs(['gray', 'black', 'purple', 'purple', 'gray', 'black']), 3)
console.log(numberOfPairs(
    [
        'Teal', 'Olive', 'Maroon', 'Silver', 'Lime',
        'Black', 'Silver', 'Blue', 'Red', 'Olive',
        'Silver', 'Aqua', 'Gray', 'Aqua', 'Teal',
        'Gray', 'Aqua', 'Blue', 'Gray', 'White', 'Green'
    ]), 6)

// node "Pair of gloves"