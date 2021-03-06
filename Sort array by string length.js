//      Sort array by string length

/*      Instructions
description: https://www.codewars.com/kata/57ea5b0b75ae11d1e800006c
Write a function that takes an array of strings as an argument and returns a sorted array containing the same strings,
ordered from shortest to longest.

        Example
sortByLength(['Beg', 'Life', 'I', 'To']) ==> ['I', 'To', 'Beg', 'Life']
sortByLength(['Longer', 'Longest', 'Short']) ==> ['Short', 'Longer', 'Longest']
sortByLength(['Telescopes', 'Glasses', 'Eyes', 'Monocles']) ==> ['Eyes', 'Glasses', 'Monocles', 'Telescopes']
*/

function sortByLength (array) {
    return array.sort((a, b) => a.length - b.length)
}

console.log(sortByLength(['Beg', 'Life', 'I', 'To']))
console.log(sortByLength(['Longer', 'Longest', 'Short']))
console.log(sortByLength(['Telescopes', 'Glasses', 'Eyes', 'Monocles']))

// node "Sort array by string length"