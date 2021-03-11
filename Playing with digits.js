//      Playing with digits

/*      Instructions
description: https://www.codewars.com/kata/5552101f47fc5178b1000050
In other words: "Is there an integer k such as : (a ^ p + b ^ (p+1) + c ^(p+2) + d ^ (p+3) + ...) = n * k"
If it is the case we will return k, if not return -1. Note: n and p will always be given as strictly positive integers.

        Examples
digPow(89, 1) ==> 1
digPow(92, 1) ==> -1
digPow(46288, 3) ==> 51
*/

function digPow(n, p) {
    const sum = [...String(n)].reduce((a, b, idx) => a + b ** (p + idx), String(n)[0] ** p) - String(n)[0] ** p
    return Number.isInteger(sum / n) ? sum / n : -1
}

console.log(digPow(89, 1))
console.log(digPow(92, 1))
console.log(digPow(46288, 3))

// node "Playing with digits"