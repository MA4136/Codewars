//      Maximum subarray sum

/*      Instructions
description: https://www.codewars.com/kata/54521e9ec8e60bc4de000d6c
The maximum sum subarray problem consists in finding the maximum sum of a contiguous subsequence in an array or list of integers:

        Examples
maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])) ==> 6
maxSequence([-200, 119, 53, 80, -38, -95, 14, -88, 42])) ==> 252
maxSequence([941, 1547, 5, -4451, -659, 2995, -181, 4775, -3841])) ==> 7589
*/

function maxSequence(array) {
    let max = 0
    let current = 0

    for (let el of array) {
        current += el
        max = Math.max(max, current)
        if (current < 0) current = 0
    }

    return max
}

console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]))
console.log(maxSequence([-200, 119, 53, 80, -38, -95, 14, -88, 42]))
console.log(maxSequence([941, 1547, 5, -4451, -659, 2995, -181, 4775, -3841]))

// node "Maximum subarray sum"