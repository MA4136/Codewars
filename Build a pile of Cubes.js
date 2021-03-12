//      Build a pile of Cubes

/*      Instructions
description: https://www.codewars.com/kata/5592e3bd57b64d00f3000047
Your task is to construct a building which will be a pile of n cubes.

        Examples
findNb(1071225) ==> 45
findNb(91716553919377) ==> -1
*/

function findNb(m) {
    let number = 0
    let counter = 0

    while (number < m) {
        counter++
        number += Math.pow(counter, 3)
    }
    return number === m ? counter : -1
}

console.log(findNb(24723578342962), -1)
console.log(findNb(4183059834009), 2022)
console.log(findNb(40539911473216), 3568)
console.log(findNb(135440716410000), 4824)

// node "Build a pile of Cubes"