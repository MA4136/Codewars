//      Does my number look big in this?

/*      Instructions
description: https://www.codewars.com/kata/5287e858c6b5a9678200083c
Your code must return true or false depending upon whether the given number is a Narcissistic number in base 10.

        Examples
narcissistic( 7 ) ==> true
narcissistic( 371 ) ==> true
*/

function narcissistic(value) {
    return [...String(value)].map(el => Math.pow(el, String(value).length))
        .reduce((n, m) => n + m, 0) === value
}

function narcissistic(value) {
    return Array.from(String(value), (el => Math.pow(Number(el), String(value).length)))
        .reduce((n, m) => n + m, 0) === value
}

console.log(narcissistic(7))
console.log(narcissistic(371))

// node "Does my number look big in this"