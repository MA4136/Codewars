//      Integer Difference

/*      Instructions
description: https://www.codewars.com/kata/57741d8f10a0a66915000001
Write a function that accepts two arguments: an array/list of integers and another integer (n).
Determine the number of times where two integers in the array have a difference of n.

        Examples
intDiff([1, 1, 3, 3], 2) ==> 4
intDiff([1, 1, 5, 6, 9, 16, 27], 4) ==> 3
*/

// #1
function intDiff(array, number) {
    return array.map((A, idx) => {
        return array.slice(idx + 1)
                    .map(B => Math.abs(A - B))
                    .filter(el => el === number)
    }).reduce((acc, curr) => acc.concat(curr), []).length
}

// #2
function intDiff(array, number) {
    return array.map((A, idx) => {
        return array.slice(idx++)
                    .map(B => Math.abs(A - B))
                    .filter(el => el === number)
    }).flat().length
}

console.log(intDiff([1, 1, 3, 3], 2), 4)
console.log(intDiff([1, 1, 5, 6, 9, 16, 27], 4), 3)

// node "Integer Difference"