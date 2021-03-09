//      Count the Digit

/*      Instructions
description: https://www.codewars.com/kata/566fc12495810954b1000030
Take an integer n (n >= 0) and a digit d (0 <= d <= 9) as an integer.
Square all numbers k (0 <= k <= n) between 0 and n. Count the numbers of digits d used in the writing of all the k**2.
Call nb_dig (or nbDig or ...) the function taking n and d as parameters and returning this count.

        Examples
nbDig(10, 1) ==> 4 // (0, 1, 4, 9, 16, 25, 36, 49, 64, 81, 100) => 1 in 1, 16, 81, 100
nbDig(12224, 8) ==> 7733
nbDig(11549, 1) ==> 11905
*/

function nbDig(num, dig) {
    return Array.from({length: num + 1}, (el, idx) => Math.pow(idx, 2))
        .join('')
        .match(new RegExp(dig, 'g')).length
}

console.log(nbDig(10, 1))
console.log(nbDig(12224, 8))
console.log(nbDig(11549, 1))

// node "Count the Digit"