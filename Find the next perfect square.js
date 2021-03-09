//      Find the next perfect square!

/*      Instructions
description: https://www.codewars.com/kata/56269eb78ad2e4ced1000013
Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter.

        Examples
findNextSquare(121) ==> returns 144
findNextSquare(625) ==> returns 676
findNextSquare(114) ==> returns -1 since 114 is not a perfect
*/

function findNextSquare(number) {
    return Math.sqrt(number) % 1 === 0 ? Math.pow(Math.sqrt(number) + 1, 2) : -1
}

console.log(findNextSquare(121))
console.log(findNextSquare(625))
console.log(findNextSquare(114))

// node "Find the next perfect square"