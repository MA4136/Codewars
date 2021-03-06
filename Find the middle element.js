//      Find the middle element

/*      Instructions
description: https://www.codewars.com/kata/545a4c5a61aa4c6916000755
As a part of this Kata, you need to create a function that when provided with a triplet, returns the index of the numerical element that lies between the other two elements.

        Examples
gimme([2, 3, 1]) ==> 0
gimme([5, 10, 14]) ==> 1
gimme([2.1, 3.2, 1.4]) ==> 0
*/

function gimme(array) {
    return array.indexOf([...array].sort((a, b) => a - b)[1])
}

console.log(gimme([2, 3, 1]))
console.log(gimme([5, 10, 14]))
console.log(gimme([2.1, 3.2, 1.4]))

// node "Find the middle element"