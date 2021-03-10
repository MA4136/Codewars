//      Multiples of 3 or 5

/*      Instructions
description: https://www.codewars.com/kata/514b92a657cdc65150000006
Task is to write function so that it returns the sum of all the multiples of 3 or 5 below the number passed in.

        Examples
solution(-0) ==> 0
solution(10)  ==> 23
solution(128) ==> 3794
solution(200) ==> 9168
*/

function solution(number) {
    return number <= 0 ? 0 : Array.from(Array(number).keys())
        .filter((_, idx) => idx % 3 === 0 || idx % 5 === 0)
        .reduce((a, b) => a + b)
}

function solution(number) {
    return number <= 0 ? 0 : Array.from({length: number}, (_, idx) => (idx % 3 === 0 || idx % 5 === 0) ? idx : 0)
        .reduce((a, b) => a + b)
}

console.log(solution(-0))
console.log(solution(10))
console.log(solution(128))
console.log(solution(200))

// node "Multiples of 3 or 5"