//      Build Tower
//      www.codewars.com

/*      Instructions
description: https://www.codewars.com/kata/576757b1df89ecf5bd00073b
Build Tower by the following given argument: number of floors (integer and always greater than 0).
Tower block is represented as *

        Examples
towerBuilder(1), ["*"]);
towerBuilder(2), [" * ","***"]);
towerBuilder(3), ["  *  "," *** ","*****"]);
*/

function towerBuilder(nFloors) {
    return Array(nFloors).fill('')
        .map((el, idx) =>
            ' '.repeat(nFloors - idx - 1) +
            '*'.repeat(idx * 2 + 1) +
            ' '.repeat(nFloors - idx - 1))
}

console.log(Array(3))
console.log(Array.from({length:3}))

console.log(towerBuilder(1))
console.log(towerBuilder(2))
console.log(towerBuilder(3))

// node "Build Tower"