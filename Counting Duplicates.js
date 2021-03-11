//      Counting Duplicates

/*      Instructions
description: https://www.codewars.com/kata/54bf1c2cd5b56cc47f0007a1
Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string.
The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

        Examples
duplicateCount('abcde') ==> 0
duplicateCount('aabBcde') ==> 2
duplicateCount('Indivisibility') ==> 1
*/

function duplicateCount(text) {
    return new Set([...text.toLowerCase()].filter(el => text.match(new RegExp(el, 'gi')).length > 1)).size
}

console.log(duplicateCount('abcde'))
console.log(duplicateCount('aabBcde'))
console.log(duplicateCount('Indivisibility'))

// node "Counting Duplicates"