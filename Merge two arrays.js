//      Merge two arrays

/*      Instructions
description: https://www.codewars.com/kata/583af10620dda4da270000c5
Write a function that combines two arrays by alternatingly taking elements from each array in turn.

        Examples
mergeArrays(['a', 'b', 'c', 'd', 'e'], [1, 2, 3, 4, 5]) ==> ['a', 1, 'b', 2, 'c', 3, 'd', 4, 'e', 5]
mergeArrays([1, 2, 3, 4, 5, 6, 7, 8], ['a', 'b', 'c', 'd', 'e']) ==> [1, 'a', 2, 'b', 3, 'c', 4, 'd', 5, 'e', 6, 7, 8]
mergeArrays([2, 5, 8, 23, 67, 6], ['b', 'r', 'a', 'u', 'r', 's']) ==> [2, 'b', 5, 'r', 8, 'a', 23, 'u', 67, 'r', 6, 's']
*/

function mergeArrays(a, b) {
    return a.reduce((acc, curr) => b.length ? [...acc, curr, b.shift()] : [...acc, curr], []).concat(b)
}

console.log(mergeArrays(['a', 'b', 'c', 'd', 'e'], [1, 2, 3, 4, 5]))
console.log(mergeArrays([1, 2, 3, 4, 5, 6, 7, 8], ['a', 'b', 'c', 'd', 'e']))
console.log(mergeArrays([2, 5, 8, 23, 67, 6], ['b', 'r', 'a', 'u', 'r', 's']))

// node "Merge two arrays"