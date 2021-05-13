//      Twisted Sum

/*      Instructions
description: https://www.codewars.com/kata/527e4141bb2ea5ea4f00072f
Find the sum of the digits of all the numbers from 1 to N (both ends included).

        Examples
twistedSum(3) ==> 1 + 2 + 3 ==> 6
twistedSum(10) ==> 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + (1 + 0) ==> 46
twistedSum(11) ==> 48
twistedSum(12) ==> 51
*/

// #1
function twistedSum(n) {
    return Array.from({length: n}, (_, idx) => idx + 1)
        .map(el => String(el).length > 1 && [...String(el)].reduce((n, m) => Number(n) + Number(m), 0) || el)
        .reduce((n, m) => Number(n) + Number(m), 0)
}

// #2
function twistedSum(n) {
    return [...Array(++n)].reduce((acc, curr, idx) => acc + ((idx + '')
        .split('')
        .reduce((n, m) => Number(n) + Number(m), 0)), 0)
}

console.log(twistedSum(3), 6)
console.log(twistedSum(10), 46)
console.log(twistedSum(11), 48)
console.log(twistedSum(12), 51)

// node "Twisted Sum"