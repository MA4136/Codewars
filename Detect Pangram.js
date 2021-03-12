//      Detect Pangram

/*      Instructions
description: https://www.codewars.com/kata/545cedaa9943f7fe7b000048
A pangram is a sentence that contains every single letter of the alphabet at least once. Given a string, detect whether or not it is a pangram.

        Examples
isPangram('The quick brown fox jumps over the lazy dog.') ==> true
isPangram('This is not a pangram.') ==> false
*/

function isPangram(string) {
    const alphabet = Array.from({length: 26}, (_, idx) => String.fromCharCode(97 + idx))
    const word = string.toLowerCase().match(/[a-z]/g)
    return alphabet.every(char => word.includes(char))
}

function isPangram(string) {
    return new Set(string.match(/[a-z]/gi)).size > 25
}

console.log(isPangram('The quick brown fox jumps over the lazy dog.'))
console.log(isPangram('This is not a pangram.'))

// node "Detect Pangram"