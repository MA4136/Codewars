//      Single digit

/*      Instructions
description: https://www.codewars.com/kata/5a7778790136a132a00000c1
The goal of this Kata is to reduce the passed integer to a single digit (if not already) by converting the number to binary,
taking the sum of the binary digits, and if that sum is not a single digit then repeat the process.

If the passed integer is already a single digit there is no need to reduce
n will be an integer such that 0 < n < 10⁹

        Examples
singleDigit(5) ==> 5
singleDigit(999) ==> 8
singleDigit(443566) ==> 2
singleDigit(567448) ==> 7
singleDigit(4868872) ==> 8
singleDigit(234234235) ==> 2
singleDigit(565656565) ==> 3
singleDigit(1234444123) ==> 1
singleDigit(1000000000) ==> 3
*/

function singleDigit(number) {
    return number >= 10 ? singleDigit([...number.toString(2)].reduce((n, m) => Number(n) + Number(m), 0)) : number
}

console.log(singleDigit(5665), 5)
console.log(singleDigit(5), 5)
console.log(singleDigit(999), 8)
console.log(singleDigit(443566), 2)
console.log(singleDigit(567448), 7)
console.log(singleDigit(4868872), 8)
console.log(singleDigit(234234235), 2)
console.log(singleDigit(565656565), 3)
console.log(singleDigit(1234444123), 1)
console.log(singleDigit(1000000000), 3)

// node "Single digit"