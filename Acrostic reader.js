//      Acrostic reader

/*      Instructions
description: https://www.codewars.com/kata/59b843b58bcb7766660000f6
Write a program that reads an acrostic to identify the "hidden" word.
Specifically, your program will receive a list of words (reprensenting an acrostic) and will need to return a string
corresponding to the word that is spelled out by taking the first letter of each word in the acrostic.

        Examples
readOut(['Jolly', 'Amazing', 'Courteous', 'Keen']), 'JACK')
readOut(['Marvelous', 'Excellent', 'Gifted']), 'MEG')
*/

// #1
function readOut(array) {
    return array.map(el => el.slice(0, 1)).join('')
}

// #2
function readOut(array) {
    return array.map(el => el[0]).join('')
}

console.log(readOut(['Jolly', 'Amazing', 'Courteous', 'Keen']), 'JACK')
console.log(readOut(['Marvelous', 'Excellent', 'Gifted']), 'MEG')

// node "Acrostic reader"