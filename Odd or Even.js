//      Odd or Even

/*      Instructions
description: https://www.codewars.com/kata/5949481f86420f59480000e7
Given a list of numbers, determine whether the sum of its elements is odd or even.

        Examples
oddOrEven([0]) ==> 'even'
oddOrEven([0, 1, 4]) ==> 'odd'
oddOrEven([0, -1, -5]) ==> 'even'
*/

function oddOrEven(array) {
    return array.reduce((first, second) => first + second, 0) % 2 === 0 ? 'even' : 'odd'
}

console.log(oddOrEven([0]))
console.log(oddOrEven([0, 1, 4]))
console.log(oddOrEven([0, -1, -5]))

// node "Odd or Even"