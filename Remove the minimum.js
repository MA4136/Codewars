//      Remove the minimum

/*      Instructions
description: https://www.codewars.com/kata/563cf89eb4747c5fb100001b
Given an array of integers, remove the smallest value. Do not mutate the original array/list.

        Examples
removeSmallest([1,2,3,4,5]) ==> [2,3,4,5]
removeSmallest([5,3,2,1,4]) ==> [5,3,2,4]
removeSmallest([2,2,1,2,1]) ==> [2,2,2,1]
*/

function removeSmallest(numbers) {
    let index = numbers.indexOf(Math.min(...numbers))
    return [...numbers.slice(0, index), ...numbers.slice(index + 1)]
}

console.log(removeSmallest([1, 2, 3, 4, 5]))
console.log(removeSmallest([5, 3, 2, 1, 4]))
console.log(removeSmallest([2, 2, 1, 2, 1]))

// node "Remove the minimum"