//      Find the unique number

/*      Instructions
description: https://www.codewars.com/kata/585d7d5adb20cf33cb000235
There is an array with some numbers. All numbers are equal except for one. Try to find it!

        Examples
findUniq([ 0, 1, 0 ]) ==> 1
findUniq([ 1, 1, 1, 2, 1, 1 ]) ==> 2
findUniq([ 3, 10, 3, 3, 3 ]) ==> 10
*/

function findUniq(arr) {
    return arr.find(el => arr.indexOf(el) === arr.lastIndexOf(el))
}

console.log(findUniq([0, 1, 0]))
console.log(findUniq([1, 1, 1, 2, 1, 1]))
console.log(findUniq([3, 10, 3, 3, 3]))

// node "Find the unique number"