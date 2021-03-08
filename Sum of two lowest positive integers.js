//      Sum of two lowest positive integers

/*      Instructions
description: https://www.codewars.com/kata/558fc85d8fd1938afb000014
Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers.
No floats or non-positive integers will be passed.

        Examples
sumTwoSmallestNumbers([5, 8, 12, 19, 22]) ==> 13
sumTwoSmallestNumbers([15, 28, 4, 2, 43]) ==> 6
sumTwoSmallestNumbers([3, 87, 45, 12, 7]) ==> 10
*/

function sumTwoSmallestNumbers(numbers) {
    return numbers.sort((a, b) => a - b).slice(0, 2).reduce((a, b) => a + b, 0)
}

console.log(sumTwoSmallestNumbers([5, 8, 12, 19, 22]))
console.log(sumTwoSmallestNumbers([15, 28, 4, 2, 43]))
console.log(sumTwoSmallestNumbers([3, 87, 45, 12, 7]))

// node "Sum of two lowest positive integers"