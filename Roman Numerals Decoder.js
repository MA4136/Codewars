//      Roman Numerals Decoder

/*      Instructions
description: https://www.codewars.com/kata/51b6249c4612257ac0000005
Create a function that takes a Roman numeral as its argument and returns its value as a numeric decimal integer.

        Examples
solution('I') ==> 1
solution('IV') ==> 4
solution('XXI') ==> 21
solution('CDXLIV') ==> 444
solution('MDCLXVI') ==> 1666
*/

// #1
function solution(roman) {
    const numerals = {I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000}
    let result = 0
    return [...roman].reduce((_, curr, idx, array) => {
        return (numerals[curr] < numerals[array[idx + 1]]) ? (result -= numerals[curr]) : (result += numerals[curr])
    }, 0)
}

// #2
function solution(roman) {
    const numerals = {
        M: 1000, CM: 900, D: 500, CD: 400, C: 100, XC: 90, L: 50, XL: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1
    }
    return roman.match(/CM|CD|XC|XL|IX|IV|\w/g).reduce((accum, roman) => accum + numerals[roman], 0)
}

console.log(solution('I'))
console.log(solution('IV'))
console.log(solution('XXI'))
console.log(solution('CDXLIV'))
console.log(solution('MDCLXVI'))

// node "Roman Numerals Decoder"