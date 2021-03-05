//      You're a square!

/*      Instructions
description: https://www.codewars.com/kata/54c27a33fb7da0db0100040e
Given an integral number, determine if it's a square number

        Examples
isSquare(-1) ==> false
isSquare( 0) ==> true
isSquare(25) ==> true
isSquare(26) ==> false
*/

function isSquare(number) {
    return Math.sqrt(number) % 1 === 0
}

console.log(isSquare(-1))
console.log(isSquare(0))
console.log(isSquare(25))
console.log(isSquare(26))

// node "You're a square"