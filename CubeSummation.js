//      CubeSummation

/*      Instructions
description: https://www.codewars.com/kata/550e9fd127c656709400024d
Write a function cubeSum(n, m) that will calculate a sum of cubes of numbers in a given range, starting from the smaller to the larger.

        Examples
cubeSum(3,2) ==> 27 // (3^3)
cubeSum(17, 14) ==> 12384 // (15^3+16^3+17^3)
cubeSum(9, 9) ==> 0
*/

function cubeSum(n, m) {
    let result = 0
    for (let k = Math.min(n, m) + 1; k < Math.max(n, m) + 1; k++) {
        result += k ** 3
    }
    return result
}

console.log(cubeSum(3,2))
console.log(cubeSum(17, 14))
console.log(cubeSum(9, 9))

// node "CubeSummation"