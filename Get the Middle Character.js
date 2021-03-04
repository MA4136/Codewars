//      Get the Middle Character

/*      Instructions
description: https://www.codewars.com/kata/56747fd5cb988479af000028
You are going to be given a word. Your job is to return the middle character of the word.
If the word's length is odd, return the middle character.
If the word's length is even, return the middle 2 characters.

        Examples
getMiddle('test') ==> 'es'
getMiddle('testing') ==> 't'
getMiddle('middle') ==> 'dd'
getMiddle('A') ==> 'A'
*/

function getMiddle(string) {
    return string.slice((string.length - 1) / 2, string.length / 2 + 1)
}

console.log(getMiddle('test'))
console.log(getMiddle('testing'))
console.log(getMiddle('middle'))
console.log(getMiddle('A'))

// node "Get the Middle Character"