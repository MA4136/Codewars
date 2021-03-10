//      Persistent Bugger

/*      Instructions
description: https://www.codewars.com/kata/55bf01e5a717a0d57e0000ec
Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times
you must multiply the digits in num until you reach a single digit.

        Examples
persistence(4) ==> 0
persistence(39) ==> 3
persistence(999) ==> 4
*/

function persistence(num) {
    return String(num).length > 1 ? persistence([...String(num)].reduce((a, b) => a * b, 1)) + 1 : 0
}

console.log(persistence(4))
console.log(persistence(39))
console.log(persistence(999))

// node "Persistent Bugger"