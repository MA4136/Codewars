//      The highest profit wins!

/*      Instructions
description: https://www.codewars.com/kata/559590633066759614000063
Write a function that returns both the minimum and maximum number of the given list/array.

        Examples
minMax([1, 2, 3, 4, 5]) ==> [1, 5]
minMax([2334454, 5]) ==> [5, 2334454]
minMax([1]) ==> [1, 1]
*/

function minMax(array) {
    return Array(Math.min(...array), Math.max(...array))
}

console.log(minMax([1, 2, 3, 4, 5]))
console.log(minMax([2334454, 5]))
console.log(minMax([1]))

// node "The highest profit wins"
// Glory to Yuri Gagarin!