//      Smallest Product

/*      Instructions
description: https://www.codewars.com/kata/5b6b128783d648c4c4000129
Given a non-empty array of non-empty integer arrays, multiply the contents of each nested array and return the smallest total.

        Examples
smallestProduct([[3, 2], [1, 2, 1], [7, 8]]) ==> 2
smallestProduct([[10], [3, 0], [-1, -6, 2]]) ==> 0
*/

function smallestProduct(array) {
    return Math.min(...array.map(el => el.reduce((n, m) => n * m, 1)))
}

console.log(smallestProduct([[3, 2], [1, 2, 1], [7, 8]]), 2)
console.log(smallestProduct([[10], [3, 0], [-1, -6, 2]]), 0)

// node "Smallest Product"