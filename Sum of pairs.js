//      Sum of pairs

/*      Instructions
description: https://www.codewars.com/kata/54d81488b981293527000c8f
Given a list of integers and a single sum value, return the first two values in order of appearance that add up to form the sum.

        Examples
sumPairs([0, 2, 0], 0)              ==> [0, 0]
sumPairs([20, -13, 40], -7)         ==> undefined
sumPairs([5, 9, 13, -3], 10)        ==> [13, -3]
sumPairs([4, -2, 3, 3, 4], 8)       ==> [4, 4]
sumPairs([1, 2, 3, 4, 1, 0], 2)     ==> [1, 1]
sumPairs([1, 4, 8, 7, 3, 15], 8)    ==> [1, 7]
sumPairs([10, 5, 2, 3, 7, 5], 10)   ==> [3, 7]
sumPairs([1, -2, 3, 0, -6, 1], -6)  ==> [0, -6]
*/

// #1
// STDERR: Execution Timed Out (12000 ms)
function sumPairs(array, sum) {
    return array
        .map((A, idxA) => array.slice(idxA).map((B, idxB) => (A + B) === sum && idxB !== idxA && [A, B]).filter(Boolean))
        .filter(el => el.length === 1)
        .flat()[0]
}

// #2
function sumPairs(array, sum) {
    let curr = 0

    for (let i = 0; i < array.length; i++) {
        if (curr && curr === array[i]) continue
        curr = array[i]

        const sliced = array.slice(0, i)
        const sumIndex = sliced.indexOf(sum - array[i])
        if (sumIndex !== -1) return [sliced[sumIndex], array[i]]
    }
}

console.log(sumPairs([0, 2, 0], 0))
console.log(sumPairs([20, -13, 40], -7))
console.log(sumPairs([5, 9, 13, -3], 10))
console.log(sumPairs([4, -2, 3, 3, 4], 8))
console.log(sumPairs([1, 2, 3, 4, 1, 0], 2))
console.log(sumPairs([1, 4, 8, 7, 3, 15], 8))
console.log(sumPairs([10, 5, 2, 3, 7, 5], 10))
console.log(sumPairs([1, -2, 3, 0, -6, 1], -6))

// node "Sum of pairs"