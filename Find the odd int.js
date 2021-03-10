//      Find the odd int

/*      Instructions
description: https://www.codewars.com/kata/54da5a58ea159efa38000836
Given an array of integers, find the one that appears an odd number of times. There will always be only one integer that appears an odd number of times.

        Examples
findOdd([1, 1, 2, -2, 5, 2, 4, 4, -1, -2, 5]) ==> -1
findOdd([20, 1, 1, 2, 2, 3, 3, 5, 5, 4, 20, 4, 5]) ==> 5
findOdd([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5]) ==> 5
*/

function findOdd(array) {
    return array.find((_, idx) => array.filter(el => el === array[idx]).length % 2 !== 0)
}

console.log(findOdd([1, 1, 2, -2, 5, 2, 4, 4, -1, -2, 5]))
console.log(findOdd([20, 1, 1, 2, 2, 3, 3, 5, 5, 4, 20, 4, 5]))
console.log(findOdd([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5]))

// node "Find the odd int"