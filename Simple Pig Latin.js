//      Simple Pig Latin

/*      Instructions
description: https://www.codewars.com/kata/520b9d2ad5c005041100000f
Move the first letter of each word to the end of it, then add 'ay' to the end of the word. Leave punctuation marks untouched.

        Examples
pigIt('Hello world !') ==> 'elloHay orldway !'
pigIt('Pig latin is cool') ==> 'igPay atinlay siay oolcay'
pigIt('This is my string') ==> 'hisTay siay ymay tringsay'
*/

function pigIt(str) {
    return str.split(' ')
              .map(el => el.match(/[a-z]+/ig) ? el.slice(1).concat(el[0], 'ay') : el)
              .join(' ')
}

console.log(pigIt('Hello world !'))
console.log(pigIt('Pig latin is cool'))
console.log(pigIt('This is my string'))

// node "Simple Pig Latin"