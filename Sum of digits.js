//      Sum of digits

/*      Instructions
description: https://www.codewars.com/kata/59cf805aaeb28438fe00001c
It involves implementing a program that sums the digits of a non-negative integer.

        Examples
sum("8"), "8 = 8");
sum("3433"), "3 + 4 + 3 + 3 = 13");
sum("64323"), "6 + 4 + 3 + 2 + 3 = 18");
*/

function sum(digits) {
    if (digits === undefined) return ''
    const sum = [...digits.toString()].reduce((n, m) => Number(n) + Number(m), 0)
    return [...digits.toString()].map(el => `${el} + `).join('').replace(/[+]\s$/, `= ${sum}`)
}

console.log(sum('8'), '8 = 8')
console.log(sum('3433'), '-3 + 4 + 3 + 3 = 13')
console.log(sum('64323'), '-6 + 4 + 3 + 2 + 3 = 18')
console.log(sum(7932805836713285), '-6 + 4 + 3 + 2 + 3 = 18')
console.log(sum(0), '-6 + 4 + 3 + 2 + 3 = 18')
console.log(sum(undefined), '-6 + 4 + 3 + 2 + 3 = 18')

// node "Sum of digits"