//      Ones and Zeros

/*      Instructions
description: https://www.codewars.com/kata/578553c3a1b8d5c40300037c
Given an array of ones and zeroes, convert the equivalent binary value to an integer.

        Examples
binaryArrayToNumber([0, 0, 0, 1]) ==> 1
binaryArrayToNumber([1, 0, 0, 1]) ==> 9
binaryArrayToNumber([1, 1, 1, 1]) ==> 15
*/

function binaryArrayToNumber(array) {
    return parseInt(array.join(''), 2)
}

console.log(binaryArrayToNumber([0, 0, 0, 1]))
console.log(binaryArrayToNumber([1, 0, 0, 1]))
console.log(binaryArrayToNumber([1, 1, 1, 1]))

// node "Ones and Zeros"