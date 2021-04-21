//      English beggars

/*      Instructions
description: https://www.codewars.com/kata/59590976838112bfea0000fa

        Examples
beggars([1, 2, 3, 4, 5], 0) ==> []
beggars([1, 2, 3, 4, 5], 1) ==> [15]
beggars([1, 2, 3, 4, 5], 2) ==> [9, 6]
beggars([1, 2, 3, 4, 5], 3) ==> [5, 7, 3]
beggars([1, 2, 3, 4, 5], 6) ==> [1, 2, 3, 4, 5, 0]
*/

function beggars(values, n) {
        return values.reduce((acc, curr, idx) => {
        acc[idx % n] += curr
        return acc
    }, Array(n).fill(0))
}

console.log(beggars([1, 2, 3, 4, 5], 0), [])
console.log(beggars([1, 2, 3, 4, 5], 1), [15])
console.log(beggars([1, 2, 3, 4, 5], 2), [9, 6])
console.log(beggars([1, 2, 3, 4, 5], 3), [5, 7, 3])
console.log(beggars([1, 2, 3, 4, 5], 6), [1, 2, 3, 4, 5, 0])

// node "English beggars"