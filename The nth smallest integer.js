//      The nth smallest integer

/*      Instructions
description: https://www.codewars.com/kata/57a03b8872292dd851000069

        Examples
nthSmallest([1, 3, 4, 5], 7) ==> null
nthSmallest([4, 3, 4, 5], 4) ==> null
nthSmallest([45, -10, 4, 5, 4], 4) ==> 45
nthSmallest([14, 12, 46, 0, 334], 1) ==> 0
nthSmallest([14, 12, 46, 34, 334], 3) ==> 34
*/

// #1
// STDERR: Execution Timed Out (12000 ms)
function nthSmallest(arr, value) {
    if (new Set(arr).size <= value - 1) return null
    return Array.from(new Set(arr.sort((n, m) => n - m)))[value - 1]
}

// #2
function nthSmallest(arr, value) {
    const scope = [...new Set(arr)]
    return scope.length > value - 1 ? scope.sort((n, m) => n - m)[value - 1] : null
}

console.log(nthSmallest([1, 3, 4, 5], 7))
console.log(nthSmallest([4, 3, 4, 5], 4))
console.log(nthSmallest([45, -10, 4, 5, 4], 4))
console.log(nthSmallest([14, 12, 46, 0, 334], 1))
console.log(nthSmallest([14, 12, 46, 34, 334], 3))

// node "The nth smallest integer"