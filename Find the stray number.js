//      Find the stray number

/*      Instructions
description: https://www.codewars.com/kata/57f609022f4d534f05000024
You are given an odd-length array of integers, in which all of them are the same, except for one single number.
Complete the method which accepts such an array, and returns that single different number.

        Examples
stray([1, 1, 2]) ==> 2
stray([17, 17, 3, 17, 17, 17, 17]) ==> 3
*/

function stray(numbers) {
    return Number(numbers.filter((el, _, array) => el !== array[1]))
}

console.log(stray([1, 1, 2]))
console.log(stray([17, 17, 3, 17, 17, 17, 17]))

// node "Find the stray number"