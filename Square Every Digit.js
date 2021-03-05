//      Square Every Digit

/*      Instructions
description: https://www.codewars.com/kata/546e2562b03326a88e000020
In this kata, you are asked to square every digit of a number and concatenate them. The function accepts an integer and returns an integer.

        Examples
squareDigits(9119) ==> 811181
squareDigits(3212) ==> 9414
squareDigits(2112) ==> 4114
*/

function squareDigits(number) {
    return +[...String(number)].map(el => el ** 2).join('')
}

console.log(squareDigits(9119))
console.log(squareDigits(3212))
console.log(squareDigits(2112))

// node "Square Every Digit"