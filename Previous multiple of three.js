//      Previous multiple of three

/*      Instructions
description: https://www.codewars.com/kata/61123a6f2446320021db987d
Given a positive integer n: 0 < n < 1e6, remove the last digit until you're left with a number that is a multiple of three.
Return n if the input is already a multiple of three, and return null/nil/None/-1 if no such number exists.

        Examples
prevMultOfThree(1) ==> null
prevMultOfThree(25) ==> null
prevMultOfThree(36) ==> 36
prevMultOfThree(1244) ==> 12
prevMultOfThree(952406) ==> 9
*/

function prevMultOfThree(number) {
    return !number ? null : (number % 3 === 0) ? number : prevMultOfThree(Number(String(number).slice(0, -1)))
}

console.log(prevMultOfThree(1), null)
console.log(prevMultOfThree(25), null)
console.log(prevMultOfThree(36), 36)
console.log(prevMultOfThree(1244), 12)
console.log(prevMultOfThree(952406), 9)

// node "Previous multiple of three"