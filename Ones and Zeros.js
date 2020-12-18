//      Ones and Zeros
//      www.codewars.com

/*  Instructions
Given an array of ones and zeroes, convert the equivalent binary value to an integer.
Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.

    Examples
Testing: [0, 0, 0, 1] ==> 1
Testing: [1, 0, 0, 1] ==> 9
Testing: [1, 1, 1, 1] ==> 15
*/

function binaryArrayToNumber(array) {
    return parseInt(array.join(''), 2)
}

// console.log(binaryArrayToNumber([1, 0, 0, 1]))
// console.log(binaryArrayToNumber([1, 1, 1, 1]))

// node "Ones and Zeros"

// Correct!
// You have passed all of the tests! :)