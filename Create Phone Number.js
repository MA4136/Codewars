//      Create Phone Number

/*      Instructions
description: https://www.codewars.com/kata/525f50e3b73515a6db000b83
Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

        Examples
createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) ==> '(123) 456-7890'
createPhoneNumber([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]) ==> '(111) 111-1111'
createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) ==> '(123) 456-7890'
*/

function createPhoneNumber(numbers) {
    return `(${numbers.slice(0, 3)}) ${numbers.slice(3, 6)}-${numbers.slice(6)}`.replace(new RegExp(/,/, 'g'), '')
}

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]))
console.log(createPhoneNumber([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]))
console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]))

// node "Create Phone Number"