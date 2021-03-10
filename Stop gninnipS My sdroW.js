//      Stop gninnipS My sdroW!

/*      Instructions
description: https://www.codewars.com/kata/5264d2b162488dc400000001
Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed.
Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

        Examples
spinWords('Welcome') ==> 'emocleW'
spinWords('This is a test') ==> 'This is a test'
spinWords('Hey fellow warriors') ==> 'Hey wollef sroirraw'
*/

function spinWords(str) {
    return str.split(' ').map(el => el.length >= 5 ? el.split('').reverse().join('') : el).join(' ')
}

console.log(spinWords('Welcome'))
console.log(spinWords('This is a test'))
console.log(spinWords('Hey fellow warriors'))

// node "Stop gninnipS My sdroW"