//      Every possible sum of two digits

/*      Instructions
description: https://www.codewars.com/kata/5b4e474305f04bea11000148
Given a long number, return all the possible sum of two digits of it.

        Examples
digits(156) ==> [ 6, 7, 11 ]
digits(3852) ==> [ 11, 8, 5, 13, 10, 7 ]
digits(81596) ==> [ 9, 13, 17, 14, 6, 10, 7, 14, 11, 15 ]
*/

function digits(num) {
    const array = Array.from(String(num), (Number))
    return array.reduce((acc, curr, idx, result) => [...acc, ...result.slice(idx + 1).map(el => curr + el)], [])
}

console.log(digits(156))
console.log(digits(3852))
console.log(digits(81596))

// node "Every possible sum of two digits"