//      Detect Pangram
//      www.codewars.com

/*      Instructions
description: https://www.codewars.com/kata/545cedaa9943f7fe7b000048
A pangram is a sentence that contains every single letter of the alphabet at least once. For example,
the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).
Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

        Examples
isPangram('The quick brown fox jumps over the lazy dog.') ==> true
isPangram('This is not a pangram.') ==> false
*/

function isPangram(string = '') {
    const alphabet = Array(26).fill(0).map((_, idx) => String.fromCharCode(97 + idx))
    const word = string.toLowerCase().match(/[a-z]/g)
    return alphabet.every(char => word.includes(char))
}

console.log(isPangram('The quick brown fox jumps over the lazy dog.'))
console.log(isPangram('This is not a pangram.'))

// node "Detect Pangram"