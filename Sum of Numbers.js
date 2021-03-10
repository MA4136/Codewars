//      Sum of Numbers

/*  Instructions
description: https://www.codewars.com/kata/55f2b110f61eb01779000053
Given two integers a and b, which can be positive or negative, find the sum of all the integers between including them too and return it.
If the two numbers are equal return a or b. Note: a and b are not ordered!

    Examples
getSum(-1, 0) ==> -1
getSum(-1, 2) ==> 2
getSum(1, 2)  ==> 3
*/

function getSum(a, b) {
    return (Math.abs(a - b) + 1) * (a + b) / 2
}

console.log(getSum(-1, 0))
console.log(getSum(-1, 2))
console.log(getSum(1, 2))

// node "Sum of Numbers"