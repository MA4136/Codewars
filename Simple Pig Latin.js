//      Simple Pig Latin

/*      Instructions
description: https://www.codewars.com/kata/520b9d2ad5c005041100000f
Move the first letter of each word to the end of it, then add 'ay' to the end of the word. Leave punctuation marks untouched.

        Examples
pigIt('Hello world !') ==> 'elloHay orldway !'
pigIt('Pig latin is cool') ==> 'igPay atinlay siay oolcay'
pigIt('This is my string') ==> 'hisTay siay ymay tringsay'
*/

// #1
function pigIt(str) {
    return str.split(' ')
        .map(el => el.match(/[a-z]+/ig) ? el.slice(1).concat(el[0], 'ay') : el)
        .join(' ')
}

// #2
function pigIt(str) {
    return str.replace(/([a-z])([a-z]*)/gi, `$2$1ay`) // /(\w)(\w*)/g
}

// #3
function pigIt(str) {
    return str.replace(/\w+/g, match => match.slice(1) + match.charAt(0) + 'ay')
}

console.log(pigIt('Hello world !'))
console.log(pigIt('Pig latin is cool'))
console.log(pigIt('This is my string'))

// node "Simple Pig Latin"