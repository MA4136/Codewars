//      Calculate number of inversions in array

/*      Instructions
description: https://www.codewars.com/kata/537529f42993de0e0b00181f
Array inversion indicates how far the array is from being sorted.
Inversions are pairs of elements in array that are out of order.

        Examples
countInversions([]) ==> 0
countInversions([1,2,3]) ==> 0
countInversions([2,1,3]) ==> 1
countInversions([6,5,4,3,2,1]) ==> 15
countInversions([6,5,4,3,3,3,3,2,1]) ==> 30
*/

function countInversions(array) {
    let counter = 0

    for (let n = 0; n < array.length; n++) {
        for (let m = n; m < array.length; m++) {
            if (array[n] > array[m]) {
                counter++
            }
        }
    }

    return counter
}

console.log(countInversions([]))
console.log(countInversions([1, 2, 3]))
console.log(countInversions([2, 1, 3]))
console.log(countInversions([6, 5, 4, 3, 2, 1]))
console.log(countInversions([6, 5, 4, 3, 3, 3, 3, 2, 1]))

// node "Calculate number of inversions in array"