//      Halving Sum

/*      Instructions
description: https://www.codewars.com/kata/5a58d46cfd56cb4e8600009d
Given a positive integer n, calculate the following sum: n + n/2 + n/4 + n/8 + ...

        Examples
halvingSum(25) ==> 47
halvingSum(127) ==> 247
*/

// #1
function halvingSum(number) {
    let result = number
    while (number > 0) {
        number = Math.trunc(number / 2)
        result += number
    }
    return result
}

// #2
function halvingSum(number) {
    if (number === 1) return number
    return number + halvingSum(Math.floor(number / 2))
}

console.log(halvingSum(25), 47)
console.log(halvingSum(127), 247)

// node "Halving Sum"